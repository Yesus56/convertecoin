import Joi from "joi";

export let SchemaPermission = Joi.object({
  nombre: Joi.string().required(),
});

export let SchemaPermissionId = Joi.object({
  id: Joi.number().required(),
});
