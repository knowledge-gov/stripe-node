// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const Payouts = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payouts',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payouts/{payout}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payouts/{payout}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payouts',
    methodType: 'list',
  }),

  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payouts/{payout}/cancel',
  }),

  reverse: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payouts/{payout}/reverse',
  }),
});
