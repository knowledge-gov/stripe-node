import {HttpClient, HttpClientResponse} from './HttpClient';

/**
 * HTTP client which uses a `fetch` function to issue requests.
 *
 * By default relies on the global `fetch` function, but an optional function
 * can be passed in. If passing in a function, it is expected to match the Web
 * Fetch API. As an example, this could be the function provided by the
 * node-fetch package (https://github.com/node-fetch/node-fetch).
 */
export class FetchHttpClient extends HttpClient implements HttpClientInterface {
  _fetchFn?: typeof fetch;

  constructor(fetchFn?: typeof fetch) {
    super();
    this._fetchFn = fetchFn;
  }

  /** @override. */
  getClientName(): string {
    return 'fetch';
  }

  makeRequest(
    host: string,
    port: string,
    path: string,
    method: string,
    headers: RequestHeaders,
    requestData: RequestData,
    protocol: string,
    timeout: number
  ): Promise<HttpClientResponseInterface> {
    const isInsecureConnection = protocol === 'http';

    const url = new URL(
      path,
      `${isInsecureConnection ? 'http' : 'https'}://${host}`
    );
    url.port = port;

    // For methods which expect payloads, we should always pass a body value
    // even when it is empty. Without this, some JS runtimes (eg. Deno) will
    // inject a second Content-Length header. See https://github.com/stripe/stripe-node/issues/1519
    // for more details.
    const methodHasPayload =
      method == 'POST' || method == 'PUT' || method == 'PATCH';
    const body = requestData || (methodHasPayload ? '' : undefined);

    const fetchFn = this._fetchFn || fetch;
    const fetchPromise = fetchFn(url.toString(), {
      method,
      // @ts-ignore
      headers,
      // @ts-ignore
      body,
    });

    // The Fetch API does not support passing in a timeout natively, so a
    // timeout promise is constructed to race against the fetch and preempt the
    // request, simulating a timeout.
    //
    // This timeout behavior differs from Node:
    // - Fetch uses a single timeout for the entire length of the request.
    // - Node is more fine-grained and resets the timeout after each stage of
    //   the request.
    //
    // As an example, if the timeout is set to 30s and the connection takes 20s
    // to be established followed by 20s for the body, Fetch would timeout but
    // Node would not. The more fine-grained timeout cannot be implemented with
    // fetch.
    let pendingTimeoutId: NodeJS.Timeout | null;
    const timeoutPromise = new Promise((_, reject) => {
      pendingTimeoutId = setTimeout(() => {
        pendingTimeoutId = null;
        reject(HttpClient.makeTimeoutError());
      }, timeout);
    });

    return Promise.race([fetchPromise, timeoutPromise])
      .then((res) => {
        return new FetchHttpClientResponse(res as Response);
      })
      .finally(() => {
        if (pendingTimeoutId) {
          clearTimeout(pendingTimeoutId);
        }
      });
  }
}

export class FetchHttpClientResponse extends HttpClientResponse
  implements HttpClientResponseInterface {
  _res: Response;

  constructor(res: Response) {
    super(
      res.status,
      FetchHttpClientResponse._transformHeadersToObject(res.headers)
    );
    this._res = res;
  }

  getRawResponse(): Response {
    return this._res;
  }

  toStream(
    streamCompleteCallback: () => void
  ): ReadableStream<Uint8Array> | null {
    // Unfortunately `fetch` does not have event handlers for when the stream is
    // completely read. We therefore invoke the streamCompleteCallback right
    // away. This callback emits a response event with metadata and completes
    // metrics, so it's ok to do this without waiting for the stream to be
    // completely read.
    streamCompleteCallback();

    // Fetch's `body` property is expected to be a readable stream of the body.
    return this._res.body;
  }

  toJSON(): Promise<any> {
    return this._res.json();
  }

  static _transformHeadersToObject(headers: Headers): ResponseHeaders {
    // Fetch uses a Headers instance so this must be converted to a barebones
    // JS object to meet the HttpClient interface.
    const headersObj: ResponseHeaders = {};
    for (const entry of headers) {
      if (!Array.isArray(entry) || entry.length != 2) {
        throw new Error(
          'Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object.'
        );
      }

      headersObj[entry[0]] = entry[1];
    }

    return headersObj;
  }
}
