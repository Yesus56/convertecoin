"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InsertmoneyApi = InsertmoneyApi;

var _lodash = require("lodash");

var _axios = _interopRequireDefault(require("axios"));

var _coins = require("../models/coins.models");

var _prices = require("../models/prices.models");

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/************************************
esta funcion se ejecuta cada 5 minutos para poder tomar los 
datos de la api y guardar eso en base de datos para poder tener
mejor respuesta los clientes                               
************************************/
async function InsertmoneyApi(time) {
  let data = await (0, _coins.getAllCoins)();

  _axios.default.get("https://api.coingecko.com/api/v3/simple/price", {
    params: {
      ids: "bitcoin,Ethereum,Dash",
      vs_currencies: "usd"
    }
  }).then(function (response) {
    Object.keys(response.data).map(key => {
      data.map(data => {
        if (data.name == key) {
          (0, _prices.addPrices)({
            id_coin: data.id,
            price: response.data[data.name].usd
          });
        }
      });
    });
  }).catch(error => {
    console.log(error);
  });

  _axios.default.post("https://petroapp-price.petro.gob.ve/price/", {
    coins: ["PTR"],
    fiats: ["USD"]
  }).then(response => {
    data.map(data => {
      if (data.acronym == "PTR") {
        (0, _prices.addPrices)({
          id_coin: data.id,
          price: response.data.data.PTR.USD
        });
      }
    });
  }).catch(error => {
    console.log(error);
  });

  setTimeout(InsertmoneyApi, time || 300000);
}