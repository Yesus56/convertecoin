import Joi from "joi";
import { join } from "lodash";

const SchemaUserCreate = Joi.object({
  password: Joi.string().max(30).required(),
  password_repeat: Joi.ref("password"),
  primer_nombre: Joi.string().max(30).required(),
  segundo_nombre: Joi.string().max(30),
  primer_apellido: Joi.string().max(30).required(),
  segundo_apellido: Joi.string().max(30),
  email: Joi.string().email().required(),
  id_rol: Joi.number(),
});

const SchemaUserPassword = Joi.object({
  password: Joi.string().max(30).required,
  password_repeat: Joi.ref("password"),
});

const SchemaUserUpdate = Joi.object({
  primer_nombre: Joi.string().max(30).required(),
  segundo_nombre: Joi.string().max(30),
  primer_apellido: Joi.string().max(30).required(),
  segundo_apellido: Joi.string().max(30),
  email: Joi.string().email().required(),
  id_rol: Joi.number(),
});

const SchemaLoginuser = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
});

export {
  SchemaUserCreate,
  SchemaUserPassword,
  SchemaUserUpdate,
  SchemaLoginuser,
};
