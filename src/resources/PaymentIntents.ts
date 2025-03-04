// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const PaymentIntents = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_intents/{intent}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_intents',
    methodType: 'list',
  }),

  applyCustomerBalance: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/apply_customer_balance',
  }),

  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/cancel',
  }),

  capture: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/capture',
  }),

  confirm: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/confirm',
  }),

  incrementAuthorization: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/increment_authorization',
  }),

  search: stripeMethod({
    method: 'GET',
    fullPath: '/v1/payment_intents/search',
    methodType: 'search',
  }),

  verifyMicrodeposits: stripeMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/verify_microdeposits',
  }),
});
