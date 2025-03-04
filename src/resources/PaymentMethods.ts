// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const PaymentMethods = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_methods',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_methods/{payment_method}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_methods/{payment_method}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_methods',
    methodType: 'list',
  }),

  attach: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_methods/{payment_method}/attach',
  }),

  detach: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_methods/{payment_method}/detach',
  }),
});
