"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RolnameSchema = exports.RolidSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RolidSchema = _joi.default.object({
  id: _joi.default.number().min(1).required()
});

exports.RolidSchema = RolidSchema;

const RolnameSchema = _joi.default.object({
  name: _joi.default.string().required().min(4),
  description: _joi.default.string().required().min(4)
});

exports.RolnameSchema = RolnameSchema;