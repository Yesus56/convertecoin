import Joi from "joi";

export let schemaRolPermission = Joi.object({
  id_rol: Joi.number().required(),
  id_view: Joi.number().required(),
  id_permission: Joi.number().required(),
});

export let schemaRolPermisionid = Joi.object({
  id: Joi.number().required(),
});
