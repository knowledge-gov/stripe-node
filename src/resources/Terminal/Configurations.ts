// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Configurations = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/configurations',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/terminal/configurations/{configuration}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/configurations/{configuration}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/terminal/configurations',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/terminal/configurations/{configuration}',
  }),
});
