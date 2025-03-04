// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const Topups = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/topups',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/topups/{topup}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/topups/{topup}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/topups',
    methodType: 'list',
  }),

  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/topups/{topup}/cancel',
  }),
});
