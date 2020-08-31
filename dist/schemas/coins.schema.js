"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdCoinSchema = exports.CreateCoinSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CreateCoinSchema = _joi.default.object({
  name: _joi.default.string().required(),
  acronym: _joi.default.string().required()
});

exports.CreateCoinSchema = CreateCoinSchema;

const UpdCoinSchema = _joi.default.object({
  id: _joi.default.number().required(),
  name: _joi.default.string().required(),
  acronym: _joi.default.string().required()
});

exports.UpdCoinSchema = UpdCoinSchema;