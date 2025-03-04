// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const ReportRuns = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/reporting/report_runs',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/reporting/report_runs/{report_run}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/reporting/report_runs',
    methodType: 'list',
  }),
});
