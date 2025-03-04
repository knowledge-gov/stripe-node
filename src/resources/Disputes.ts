// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const Disputes = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/disputes/{dispute}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/disputes/{dispute}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/disputes',
    methodType: 'list',
  }),

  close: stripeMethod({
    method: 'POST',
    fullPath: '/v1/disputes/{dispute}/close',
  }),
});
