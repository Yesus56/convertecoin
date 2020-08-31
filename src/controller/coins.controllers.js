import { addCoins, getAllCoins, updateCoins } from "../models/coins.models";
import { CreateCoinSchema, UpdCoinSchema } from "../schemas/coins.schema";
import { comparateError } from "../utils/errors";
export async function createCoin(req, res) {
  let body = req.body;

  try {
    let { coin } = body;
    let obj = await CreateCoinSchema.validate(coin);
    comparateError(obj);
    let create = await addCoins({ ...obj.value, id_user: 2 });

    res.json({ message: "creado" });
  } catch (error) {
    console.error(error);
    return res.json({ error: "" + error });
  }
}

export async function updCoin(req, res) {
  let body = req.body;
  try {
    console.log(body.coin);
    let { coin } = body;
    let obj = await UpdCoinSchema.validate(coin);
    comparateError(obj);
    let { id, ...rest } = obj.value;

    let upd = await updateCoins({ ...rest }, { id });

    return res.json({ message: "Actualizado" });
  } catch (error) {
    console.error(error);
    return res.json({ error: "" + error });
  }
}

export async function getCoin(req, res) {
  try {
    let coins = await getAllCoins();
    res.json({ message: coins });
  } catch (error) {
    console.error(error);
    return res.json({ error: "" + error });
  }
}
