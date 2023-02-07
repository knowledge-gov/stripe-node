import StripeEmitter = require('../StripeEmitter');
import PlatformFunctions = require('./PlatformFunctions');
import http = require('http');
import _HttpClient = require('../net/HttpClient');
const HttpClient = _HttpClient.HttpClient;

/**
 * Specializes WebPlatformFunctions using APIs available in Web workers.
 */
class WebPlatformFunctions extends PlatformFunctions {
  /** @override */
  getUname(): Promise<string | null> {
    return Promise.resolve(null);
  }

  /** @override */
  createEmitter(): StripeEmitter {
    return new StripeEmitter();
  }

  /** @override */
  tryBufferData(
    data: MultipartRequestData
  ): Promise<RequestData | BufferedFile> {
    if (data.file.data instanceof ReadableStream) {
      throw new Error(
        'Uploading a file as a stream is not supported in non-Node environments. Please open or upvote an issue at github.com/stripe/stripe-node if you use this, detailing your use-case.'
      );
    }
    return Promise.resolve(data);
  }

  /** @override */
  createNodeHttpClient(): typeof HttpClient {
    throw new Error(
      'Stripe: `createNodeHttpClient()` is not available in non-Node environments. Please use `createFetchHttpClient()` instead.'
    );
  }

  /** @override */
  createHttpClient(): typeof HttpClient {
    return super.createFetchHttpClient();
  }

  /** @override */
  createNodeCryptoProvider(): StripeCryptoProvider {
    throw new Error(
      'Stripe: `createNodeCryptoProvider()` is not available in non-Node environments. Please use `createSubtleCryptoProvider()` instead.'
    );
  }

  /** @override */
  createCryptoProvider(): StripeCryptoProvider {
    return this.createSubtleCryptoProvider();
  }
}

export = WebPlatformFunctions;
