import Joi from "joi";

export const RolidSchema = Joi.object({
  id: Joi.number().min(1).required(),
});

export const RolnameSchema = Joi.object({
  name: Joi.string().required().min(4),
  description: Joi.string().required().min(4),
});
