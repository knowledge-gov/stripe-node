// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const OutboundTransfers = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/treasury/outbound_transfers',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/outbound_transfers/{outbound_transfer}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/outbound_transfers',
    methodType: 'list',
  }),

  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/treasury/outbound_transfers/{outbound_transfer}/cancel',
  }),
});
