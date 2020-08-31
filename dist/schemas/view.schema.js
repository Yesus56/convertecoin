"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchemaviewsId = exports.SchemaViews = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let SchemaViews = _joi.default.object({
  nombre: _joi.default.string().required()
});

exports.SchemaViews = SchemaViews;

let SchemaviewsId = _joi.default.object({
  id: _joi.default.number().required()
});

exports.SchemaviewsId = SchemaviewsId;