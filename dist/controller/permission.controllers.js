"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPermission = createPermission;
exports.updPermission = updPermission;
exports.getPermissionOne = getPermissionOne;
exports.GetAllPermission = GetAllPermission;

var _permission = require("../models/permission.models");

var _errors = require("../utils/errors");

var _permission2 = require("../schemas/permission.schema");

//trabaja los modelos de la tabla permission
async function createPermission(req, res) {
  let body = req.body;

  try {
    let obj = await _permission2.SchemaPermission.validate({
      nombre: body.nombre
    });
    (0, _errors.comparateError)(obj);
    let permissionCreate = await (0, _permission.addPermission)({
      nombre: obj.value.nombre
    });
    res.json("permiso creado");
  } catch (error) {
    console.error(error);
    return res.json({
      error: "" + error
    });
  }
}

async function updPermission(req, res) {
  let body = req.body;

  try {
    let obj = await _permission2.SchemaPermission.validate({
      nombre: body.nombre
    });
    let where = await _permission2.SchemaPermissionId.validate({
      id: body.id
    });
    (0, _errors.comparateError)(obj), (0, _errors.comparateError)(where);
    let result = await (0, _permission.updatePermission)({
      nombre: obj.value.nombre
    }, { ...where.value
    });
    return res.json({
      message: "actualizado"
    });
  } catch (error) {
    console.error(error);
    return res.json({
      error: "" + error
    });
  }
}

async function getPermissionOne(req, res) {
  let body = req.query;

  try {
    console.log(body.id);
    let obj = await _permission2.SchemaPermissionId.validate({
      id: body.id
    });
    (0, _errors.comparateError)(obj);
    let result = await (0, _permission.getPermission)(obj.value);
    return res.json({
      message: result
    });
  } catch (error) {
    console.error(error);
    return res.json({
      error: "" + error
    });
  }
}

async function GetAllPermission(req, res) {
  let body = req.body;

  try {
    let result = await (0, _permission.getPermission)();
    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.json({
      error: "" + error
    });
  }
}