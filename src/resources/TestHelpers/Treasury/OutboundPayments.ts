// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../../StripeResource';
const stripeMethod = StripeResource.method;

export const OutboundPayments = StripeResource.extend({
  fail: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/fail',
  }),

  post: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/post',
  }),

  returnOutboundPayment: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/return',
  }),
});
