"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comparateError = comparateError;

var _lodash = require("lodash");

function comparateError(data) {
  if (!(0, _lodash.isUndefined)(data.error)) {
    throw new Error(data.error.details[0].message);
  }
}