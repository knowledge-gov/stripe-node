// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../../StripeResource';
const stripeMethod = StripeResource.method;

export const Cards = StripeResource.extend({
  deliverCard: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/deliver',
  }),

  failCard: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/fail',
  }),

  returnCard: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/return',
  }),

  shipCard: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/ship',
  }),
});
