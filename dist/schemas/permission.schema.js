"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchemaPermissionId = exports.SchemaPermission = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let SchemaPermission = _joi.default.object({
  nombre: _joi.default.string().required()
});

exports.SchemaPermission = SchemaPermission;

let SchemaPermissionId = _joi.default.object({
  id: _joi.default.number().required()
});

exports.SchemaPermissionId = SchemaPermissionId;