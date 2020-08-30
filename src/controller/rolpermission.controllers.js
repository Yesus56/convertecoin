import {
  addRolPermission,
  getRolPermission,
  updateRolPermission,
} from "../models/rolpermission.models";
import { comparateError } from "../utils/errors";
import {
  schemaRolPermission,
  schemaRolPermisionid,
} from "../schemas/rolpermission.schema";

export async function craeteRolper(req, res) {
  let body = req.body;
  try {
    let { rolper } = body;
    let obj = await schemaRolPermission.validate({
      ...rolper,
    });
    comparateError(obj);
    let rolperCreat = await addRolPermission(obj.value);
    res.json("creado");
  } catch (error) {
    console.error(error);
    return res.json({ message: "" + error });
  }
}

export async function updRolper(req, res) {
  let body = req.body;
  try {
    let { upd } = body;
    let obj = await schemaRolPermission.validate({
      ...upd,
    });
    let where = await schemaRolPermisionid.validate({ id: body.id });
    comparateError(obj);
    comparateError(where);
    let result = await updateRolPermission(
      { ...obj.value },
      { ...where.value }
    );
    return res.json("actualizado");
  } catch (error) {
    console.error(error);
    return res.json({ message: "" + error });
  }
}

export async function getoneRolper(req, res) {
  let body = req.body;

  try {
    let obj = await schemaRolPermisionid.validate({ id: body.id });
    comparateError(obj);
    let result = await getRolPermission({ ...obj.value });
    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.json({ message: "" + error });
  }
}

export async function getAllRolper(req, res) {
  let body = req.body;
  try {
    let result = await getRolPermission();
    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.json({ message: "" + error });
  }
}
