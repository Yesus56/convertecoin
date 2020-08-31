"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRol = createRol;
exports.updRol = updRol;
exports.getaLLRol = getaLLRol;
exports.getOne = getOne;

var _roles = require("../models/roles.models");

var _errors = require("../utils/errors");

var _rol = require("../schemas/rol.schema");

//crear el rol
async function createRol(req, res) {
  let body = req.body;

  try {
    let {
      rol
    } = body;
    let obj = await _rol.RolnameSchema.validate({ ...rol
    });
    (0, _errors.comparateError)(obj);
    console.log(obj);
    let rolc = await (0, _roles.addrol)({ ...obj.value
    });
    return res.json({
      message: "Rol creado"
    });
  } catch (error) {
    console.log(error);
    return res.json({
      error: "" + error
    });
  }
} //actualizando el nombre del rol


async function updRol(req, res) {
  let body = req.body;

  try {
    let {
      updrol
    } = body;
    let obj = await _rol.RolnameSchema.validate({ ...updrol
    });
    let where = await _rol.RolidSchema.validate({
      id: body.id_rol
    });
    (0, _errors.comparateError)(obj);
    (0, _errors.comparateError)(where);
    let result = await (0, _roles.updaterol)({ ...obj.value
    }, { ...where.value
    });
    return res.json({
      message: result
    });
  } catch (error) {
    console.log(error);
    return res.json({
      error: "" + error
    });
  }
} //traer todos los roles existentes y puede filtrar si pasa un dato extra para el where


async function getaLLRol(req, res) {
  let body = req.body;

  try {
    let result = await (0, _roles.getrol)();
    return res.json({
      message: result
    });
  } catch (error) {
    console.log(error);
    return res.json({
      error: "" + error
    });
  }
}

async function getOne(req, res) {
  let body = req.query;

  try {
    let where = await _rol.RolidSchema.validate({
      id: body.id_rol
    });
    (0, _errors.comparateError)(where);
    let result = await (0, _roles.getrol)({ ...where.value
    });
    return res.json({
      message: result
    });
  } catch (error) {
    console.log(error);
    return res.json({
      error: "" + error
    });
  }
}