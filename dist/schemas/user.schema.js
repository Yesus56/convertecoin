"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchemaLoginuser = exports.SchemaUserUpdate = exports.SchemaUserPassword = exports.SchemaUserCreate = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SchemaUserCreate = _joi.default.object({
  password: _joi.default.string().max(30).required(),
  password_repeat: _joi.default.ref("password"),
  primer_nombre: _joi.default.string().max(30).required(),
  segundo_nombre: _joi.default.string().max(30),
  primer_apellido: _joi.default.string().max(30).required(),
  segundo_apellido: _joi.default.string().max(30),
  email: _joi.default.string().email().required(),
  id_rol: _joi.default.number()
});

exports.SchemaUserCreate = SchemaUserCreate;

const SchemaUserPassword = _joi.default.object({
  password: _joi.default.string().max(30).required,
  password_repeat: _joi.default.ref("password")
});

exports.SchemaUserPassword = SchemaUserPassword;

const SchemaUserUpdate = _joi.default.object({
  primer_nombre: _joi.default.string().max(30).required(),
  segundo_nombre: _joi.default.string().max(30),
  primer_apellido: _joi.default.string().max(30).required(),
  segundo_apellido: _joi.default.string().max(30),
  email: _joi.default.string().email().required(),
  id_rol: _joi.default.number()
});

exports.SchemaUserUpdate = SchemaUserUpdate;

const SchemaLoginuser = _joi.default.object({
  password: _joi.default.string().required(),
  email: _joi.default.string().required()
});

exports.SchemaLoginuser = SchemaLoginuser;