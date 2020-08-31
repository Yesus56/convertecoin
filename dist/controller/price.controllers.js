"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.converter = converter;
exports.addPrice = addPrice;

var _prices = require("../models/prices.models");

var _converter_money = _interopRequireDefault(require("../utils/converter_money"));

var _lodash = require("lodash");

var _price = require("../schemas/price.Schema");

var _errors = require("../utils/errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function converter(req, res) {
  let body = req.body;

  try {
    let {
      monedaEntrante,
      monedaSaliente,
      cantidad
    } = body;
    let coin = await (0, _prices.getMonedaEandS)(monedaEntrante, monedaSaliente);
    let monedaEntra, monedaSale;

    if (!(0, _lodash.isUndefined)(coin[1])) {
      if (coin[1].tipo == "entrante") {
        monedaEntra = {
          tipoMoneda: coin[1].acronym,
          price: coin[1].price
        };
        monedaSale = {
          tipoMoneda: coin[0].acronym,
          price: coin[0].price
        };
      } else {
        monedaEntra = {
          tipoMoneda: coin[0].acronym,
          price: coin[0].price
        };
        monedaSale = {
          tipoMoneda: coin[1].acronym,
          price: coin[1].price
        };
      }
    } else {
      if (coin[0].tipo == "entrante") {
        monedaEntra = {
          tipoMoneda: coin[0].acronym,
          price: coin[0].price
        };
        monedaSale = {
          tipoMoneda: "USD",
          price: ""
        };
      } else {
        monedaEntra = {
          tipoMoneda: "USD",
          price: ""
        };
        monedaSale = {
          tipoMoneda: coin[0].acronym,
          price: coin[0].price
        };
      }
    }

    let conve = new _converter_money.default(monedaEntra.tipoMoneda, monedaEntra.price, cantidad, monedaSale.tipoMoneda, monedaSale.price);
    let data = conve.calcular();
    return res.json({
      message: data
    });
  } catch (error) {
    console.log(error);
    return res.json({
      error: "" + error
    });
  }
}

async function addPrice(req, res) {
  let body = req.body;

  try {
    let {
      price
    } = req.body;

    let obj = _price.addPriceSchema.validate(price);

    (0, _errors.comparateError)(obj);
    let inprice = await (0, _prices.addPrices)({ ...obj.value
    });
    res.json("agregado");
  } catch (error) {
    console.log(error);
    return res.json({
      error: "" + error
    });
  }
}