import { addrol, getrol, updaterol } from "../models/roles.models";
import { comparateError } from "../utils/errors";
import { RolidSchema, RolnameSchema } from "../schemas/rol.schema";

//crear el rol
export async function createRol(req, res) {
  let body = req.body;
  try {
    let { rol } = body;
    let obj = await RolnameSchema.validate({ ...rol });
    comparateError(obj);
    console.log(obj);
    let rolc = await addrol({ ...obj.value });
    return res.json("Rol creado");
  } catch (error) {
    console.log(error);
    return res.json({ message: "" + error });
  }
}

//actualizando el nombre del rol
export async function updRol(req, res) {
  let body = req.body;
  try {
    let { updrol } = body;
    let obj = await RolnameSchema.validate({ ...updrol });
    let where = await RolidSchema.validate({ id: body.id_rol });
    comparateError(obj);
    comparateError(where);
    let result = await updaterol({ ...obj.value }, { ...where.value });
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.json({ message: "" + error });
  }
}

//traer todos los roles existentes y puede filtrar si pasa un dato extra para el where
export async function getaLLRol(req, res) {
  let body = req.body;
  try {
    let result = await getrol();
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.json({ message: "" + error });
  }
}

export async function getOne(req, res) {
  let body = req.body;
  try {
    let where = await RolidSchema.validate({ id: body.id_rol });
    comparateError(where);
    let result = await getrol({ ...where.value });
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.json({ message: "" + error });
  }
}
