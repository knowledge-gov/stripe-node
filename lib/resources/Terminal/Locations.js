// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locations = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Locations = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/locations',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/terminal/locations/{location}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/locations/{location}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/terminal/locations',
        methodType: 'list',
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/terminal/locations/{location}',
    }),
});
