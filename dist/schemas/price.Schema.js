"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPriceSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let addPriceSchema = _joi.default.object({
  id_coin: _joi.default.number().required(),
  price: _joi.default.number().required()
});

exports.addPriceSchema = addPriceSchema;