"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schemaRolPermisionid = exports.schemaRolPermission = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let schemaRolPermission = _joi.default.object({
  id_rol: _joi.default.number().required(),
  id_view: _joi.default.number().required(),
  id_permission: _joi.default.number().required()
});

exports.schemaRolPermission = schemaRolPermission;

let schemaRolPermisionid = _joi.default.object({
  id: _joi.default.number().required()
});

exports.schemaRolPermisionid = schemaRolPermisionid;