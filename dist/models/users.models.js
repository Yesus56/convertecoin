"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.getUser = getUser;
exports.getUserRol = getUserRol;

var _db = require("../db");

async function addUser(data) {
  console.log(data);

  try {
    return _db.USER.create({ ...data
    });
  } catch (error) {
    console.log(erros);
    throw new Error("Error al guardar el usuario");
  }
}

async function updateUser(data, where) {
  console.log(data);
  console.log(where);

  try {
    return _db.USER.update({ ...data
    }, {
      where: { ...where
      }
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error al actualziar al usuario");
  }
}

async function getUser(where) {
  try {
    return _db.USER.findAll({
      where: { ...where
      },
      raw: true
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error al realizar la consulta");
  }
}

async function getUserRol(where) {
  try {
    return _db.USER.findAll({
      include: {
        model: _db.ROLES,
        include: {
          model: _db.ROLPERMISSION,
          include: [{
            model: _db.VIEW
          }, {
            model: _db.PERMISSION
          }]
        }
      },
      where: { ...where
      }
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error al realizar la consulta");
  }
}