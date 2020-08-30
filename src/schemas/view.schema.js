import Joi from "joi";

export let SchemaViews = Joi.object({
  nombre: Joi.string().required(),
});

export let SchemaviewsId = Joi.object({
  id: Joi.number().required(),
});
