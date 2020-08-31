"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCoins = addCoins;
exports.updateCoins = updateCoins;
exports.getAllCoins = getAllCoins;

var _db = require("../db");

/******************************************************
 * aqui se realizan funciones basicas como agregar actualiza
 * y traer la informaciond e bsse de datos se recomieda que si
 * vas a hacer una consulta personalizada pienses is la vas a usar
 * en otro lado y la agregues aqui para mejorar el trabajo y no repetir funciones
 *****************************************************/
async function addCoins(data) {
  try {
    await _db.COINS.create(data);
  } catch (error) {
    console.log(error);
    throw new Error("Error al guardar");
  }
}

function updateCoins(data, where) {
  try {
    return _db.COINS.update({ ...data
    }, {
      where
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error al actualizar");
  }
} //el where es alternativo puedes ponerlo como no hacerlo


async function getAllCoins(where) {
  try {
    return await _db.COINS.findAll();
  } catch (error) {
    console.log(err);
    throw new Error("Error al traer los datos");
  }
}