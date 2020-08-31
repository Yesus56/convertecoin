import {
  addPrices,
  getAllPrices,
  updatePrices,
  getMonedaEandS,
} from "../models/prices.models";
import Converter_money from "../utils/converter_money";
import { isNull, isUndefined } from "lodash";
import { addPriceSchema } from "../schemas/price.Schema";
import { comparateError } from "../utils/errors";

export async function converter(req, res) {
  let body = req.body;
  try {
    let { monedaEntrante, monedaSaliente, cantidad } = body;
    let coin = await getMonedaEandS(monedaEntrante, monedaSaliente);
    let monedaEntra, monedaSale;

    if (!isUndefined(coin[1])) {
      if (coin[1].tipo == "entrante") {
        monedaEntra = {
          tipoMoneda: coin[1].acronym,
          price: coin[1].price,
        };

        monedaSale = {
          tipoMoneda: coin[0].acronym,
          price: coin[0].price,
        };
      } else {
        monedaEntra = {
          tipoMoneda: coin[0].acronym,
          price: coin[0].price,
        };

        monedaSale = {
          tipoMoneda: coin[1].acronym,
          price: coin[1].price,
        };
      }
    } else {
      if (coin[0].tipo == "entrante") {
        monedaEntra = {
          tipoMoneda: coin[0].acronym,
          price: coin[0].price,
        };

        monedaSale = {
          tipoMoneda: "USD",
          price: "",
        };
      } else {
        monedaEntra = {
          tipoMoneda: "USD",
          price: "",
        };

        monedaSale = {
          tipoMoneda: coin[0].acronym,
          price: coin[0].price,
        };
      }
    }

    let conve = new Converter_money(
      monedaEntra.tipoMoneda,
      monedaEntra.price,
      cantidad,
      monedaSale.tipoMoneda,
      monedaSale.price
    );
    let data = conve.calcular();

    return res.json({ message: data });
  } catch (error) {
    console.log(error);
    return res.json({ error: "" + error });
  }
}

export async function addPrice(req, res) {
  let body = req.body;
  try {
    let { price } = req.body;
    let obj = addPriceSchema.validate(price);
    comparateError(obj);
    let inprice = await addPrices({ ...obj.value });
    res.json("agregado");
  } catch (error) {
    console.log(error);
    return res.json({ error: "" + error });
  }
}
