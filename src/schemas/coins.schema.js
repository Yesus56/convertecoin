import Joi from "joi";

export const CreateCoinSchema = Joi.object({
  name: Joi.string().required(),
  acronym: Joi.string().required(),
});

export const UpdCoinSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  acronym: Joi.string().required(),
});
