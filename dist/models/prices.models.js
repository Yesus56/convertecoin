"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPrices = addPrices;
exports.updatePrices = updatePrices;
exports.getAllPrices = getAllPrices;
exports.getMonedaEandS = getMonedaEandS;

var _db = require("../db");

async function addPrices(data) {
  console.log(data);

  try {
    return await _db.PRICES.create({ ...data
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error al guardar");
  }
}

function updatePrices(data, where) {
  _db.PRICES.update(data, where).then(result => result).catch(err => {
    console.log(err);
    throw new Error("Error al actualizar");
  });
}

function getAllPrices(where = {}, extra = "") {
  try {
    return _db.PRICES.findAll({
      /* include: {
        model: COINS,
        attributes: ["acronym"],
      },*/
      where: { ...where
      },
      ...extra
    });
  } catch (error) {
    console.log(err);
    throw new Error("Error al traer la data");
  }
}

async function getMonedaEandS(entrante, saliente) {
  try {
    let data = await _db.db.coin_converte.query(`
    
SELECT c1.acronym, id_coin, price, 'entrante'::text as tipo from coin.prices p1
LEFT JOIN coin.coins as c1 on p1.id_coin = c1."id" 
where id_coin = ${entrante} and p1."createdAt" = (SELECT MAX("createdAt") from coin.prices where id_coin = ${entrante})
union
SELECT c2.acronym,id_coin, price,  'saleinte'::text as tipo from coin.prices as p2
LEFT JOIN coin.coins as c2 on p2.id_coin = c2."id" 
where id_coin = ${saliente} and p2."createdAt" = (select MAX("createdAt") FROM coin.prices where id_coin = ${saliente})



    `);
    return data[0];
  } catch (error) {
    console.log(error);
    throw new Error("Error al traer los datos");
  }
}