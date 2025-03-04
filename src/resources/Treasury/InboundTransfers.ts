// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const InboundTransfers = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/treasury/inbound_transfers',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/inbound_transfers/{id}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/inbound_transfers',
    methodType: 'list',
  }),

  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/treasury/inbound_transfers/{inbound_transfer}/cancel',
  }),
});
