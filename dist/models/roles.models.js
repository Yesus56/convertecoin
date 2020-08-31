"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addrol = addrol;
exports.updaterol = updaterol;
exports.getrol = getrol;

var _db = require("../db");

async function addrol(data) {
  try {
    return _db.ROLES.create({ ...data
    });
  } catch (error) {
    console.log(erros);
    throw new Error("Error al guardar el usuario");
  }
}

async function updaterol(data, where) {
  try {
    return _db.ROLES.update({ ...data
    }, {
      where: { ...where
      }
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error al actualziar al usuario");
  }
}

async function getrol(where) {
  try {
    return _db.ROLES.findAll({
      where: { ...where
      }
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error al realizar la consulta");
  }
}