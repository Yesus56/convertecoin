import { isNull, isUndefined } from "lodash";
import Axios from "axios";
import { getAllCoins } from "../models/coins.models";
import { addPrices } from "../models/prices.models";
import { response } from "express";
/************************************
esta funcion se ejecuta cada 5 minutos para poder tomar los 
datos de la api y guardar eso en base de datos para poder tener
mejor respuesta los clientes                               
************************************/
export async function InsertmoneyApi(time) {
  let data = await getAllCoins();
  Axios.get("https://api.coingecko.com/api/v3/simple/price", {
    params: {
      ids: "bitcoin,Ethereum,Dash",
      vs_currencies: "usd",
    },
  })
    .then(function (response) {
      Object.keys(response.data).map((key) => {
        data.map((data) => {
          if (data.name == key) {
            addPrices({
              id_coin: data.id,
              price: response.data[data.name].usd,
            });
          }
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });

  Axios.post("https://petroapp-price.petro.gob.ve/price/", {
    coins: ["PTR"],
    fiats: ["USD"],
  })
    .then((response) => {
      data.map((data) => {
        if (data.acronym == "PTR") {
          addPrices({
            id_coin: data.id,
            price: response.data.data.PTR.USD,
          });
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });

  Axios.get("https://api.ratesapi.io/api/latest", {
    base: "EUR",
  })
    .then((response) => {
      data.map((data) => {
        if (data.acronym == "EUR") {
          addPrices({
            id_coin: data.id,
            price: response.data.rates.USD,
          });
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });

  setTimeout(InsertmoneyApi, time || 300000);
}
