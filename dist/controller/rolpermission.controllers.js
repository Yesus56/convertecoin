"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.craeteRolper = craeteRolper;
exports.updRolper = updRolper;
exports.getoneRolper = getoneRolper;
exports.getAllRolper = getAllRolper;

var _rolpermission = require("../models/rolpermission.models");

var _errors = require("../utils/errors");

var _rolpermission2 = require("../schemas/rolpermission.schema");

async function craeteRolper(req, res) {
  let body = req.body;

  try {
    let {
      rolper
    } = body;
    let obj = await _rolpermission2.schemaRolPermission.validate({ ...rolper
    });
    (0, _errors.comparateError)(obj);
    let rolperCreat = await (0, _rolpermission.addRolPermission)(obj.value);
    res.json("creado");
  } catch (error) {
    console.error(error);
    return res.json({
      error: "" + error
    });
  }
}

async function updRolper(req, res) {
  let body = req.body;

  try {
    let {
      upd
    } = body;
    let obj = await _rolpermission2.schemaRolPermission.validate({ ...upd
    });
    let where = await _rolpermission2.schemaRolPermisionid.validate({
      id: body.id
    });
    (0, _errors.comparateError)(obj);
    (0, _errors.comparateError)(where);
    let result = await (0, _rolpermission.updateRolPermission)({ ...obj.value
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

async function getoneRolper(req, res) {
  let body = req.query;

  try {
    let obj = await _rolpermission2.schemaRolPermisionid.validate({
      id: body.id
    });
    (0, _errors.comparateError)(obj);
    let result = await (0, _rolpermission.getRolPermission)({ ...obj.value
    });
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

async function getAllRolper(req, res) {
  let body = req.body;

  try {
    let result = await (0, _rolpermission.getRolPermission)();
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