"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addRolPermission = addRolPermission;
exports.updateRolPermission = updateRolPermission;
exports.getRolPermission = getRolPermission;

var _db = require("../db");

async function addRolPermission(data) {
  try {
    return _db.ROLPERMISSION.create({ ...data
    });
  } catch (error) {
    console.log(erros);
    throw new Error("Error al guardar");
  }
}

async function updateRolPermission(data, where) {
  try {
    return _db.ROLPERMISSION.update({ ...data
    }, {
      where: { ...where
      }
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error al actualziar");
  }
}

async function getRolPermission(where) {
  try {
    return _db.ROLPERMISSION.findAll({
      where: { ...where
      }
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error al realizar la consulta");
  }
}