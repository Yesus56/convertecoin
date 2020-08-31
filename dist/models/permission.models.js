"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPermission = addPermission;
exports.updatePermission = updatePermission;
exports.getPermission = getPermission;

var _db = require("../db");

async function addPermission(data) {
  try {
    return _db.PERMISSION.create({ ...data
    });
  } catch (error) {
    console.log(erros);
    throw new Error("Error al guardar");
  }
}

async function updatePermission(data, where) {
  try {
    return _db.PERMISSION.update({ ...data
    }, {
      where: { ...where
      }
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error al actualziar");
  }
}

async function getPermission(where) {
  try {
    return _db.PERMISSION.findAll({
      where: { ...where
      }
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error al realizar la consulta");
  }
}