"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addView = addView;
exports.updateView = updateView;
exports.getView = getView;

var _db = require("../db");

async function addView(data) {
  try {
    return _db.VIEW.create({ ...data
    });
  } catch (error) {
    console.log(erros);
    throw new Error("Error al guardar la vista");
  }
}

async function updateView(data, where) {
  try {
    return _db.VIEW.update({ ...data
    }, {
      where: { ...where
      }
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error al actualziar la vista");
  }
}

async function getView(where) {
  try {
    return _db.VIEW.findAll({
      where: { ...where
      }
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error al realizar la vista");
  }
}