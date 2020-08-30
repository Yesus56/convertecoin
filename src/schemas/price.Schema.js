import Joi from "joi";

export let addPriceSchema = Joi.object({
  id_coin: Joi.number().required(),
  price: Joi.number().required(),
});
