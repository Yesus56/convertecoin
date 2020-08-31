"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCoin = createCoin;
exports.updCoin = updCoin;
exports.getCoin = getCoin;

var _coins = require("../models/coins.models");

var _coins2 = require("../schemas/coins.schema");

var _errors = require("../utils/errors");

async function createCoin(req, res) {
  let body = req.body;

  try {
    let {
      coin
    } = body;
    let obj = await _coins2.CreateCoinSchema.validate(coin);
    (0, _errors.comparateError)(obj);
    let create = await (0, _coins.addCoins)({ ...obj.value,
      id_user: 2
    });
    res.json({
      message: "creado"
    });
  } catch (error) {
    console.error(error);
    return res.json({
      error: "" + error
    });
  }
}

async function updCoin(req, res) {
  let body = req.body;

  try {
    console.log(body.coin);
    let {
      coin
    } = body;
    let obj = await _coins2.UpdCoinSchema.validate(coin);
    (0, _errors.comparateError)(obj);
    let {
      id,
      ...rest
    } = obj.value;
    let upd = await (0, _coins.updateCoins)({ ...rest
    }, {
      id
    });
    return res.json({
      message: "Actualizado"
    });
  } catch (error) {
    console.error(error);
    return res.json({
      error: "" + error
    });
  }
}

async function getCoin(req, res) {
  try {
    let coins = await (0, _coins.getAllCoins)();
    res.json({
      message: coins
    });
  } catch (error) {
    console.error(error);
    return res.json({
      error: "" + error
    });
  }
}