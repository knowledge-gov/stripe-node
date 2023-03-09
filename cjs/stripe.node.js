"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodePlatformFunctions_js_1 = require("./platform/NodePlatformFunctions.js");
const createStripe_js_1 = require("./createStripe.js");
const Stripe = (0, createStripe_js_1.createStripe)(new NodePlatformFunctions_js_1.NodePlatformFunctions());
module.exports = Stripe;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = Stripe;
// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = Stripe;
