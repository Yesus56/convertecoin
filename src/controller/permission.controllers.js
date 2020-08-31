import {
  addPermission,
  getPermission,
  updatePermission,
} from "../models/permission.models";
import { comparateError } from "../utils/errors";
import {
  SchemaPermission,
  SchemaPermissionId,
} from "../schemas/permission.schema";

//trabaja los modelos de la tabla permission
export async function createPermission(req, res) {
  let body = req.body;
  try {
    let obj = await SchemaPermission.validate({ nombre: body.nombre });
    comparateError(obj);
    let permissionCreate = await addPermission({ nombre: obj.value.nombre });
    res.json("permiso creado");
  } catch (error) {
    console.error(error);
    return res.json({ error: "" + error });
  }
}

export async function updPermission(req, res) {
  let body = req.body;
  try {
    let obj = await SchemaPermission.validate({ nombre: body.nombre });
    let where = await SchemaPermissionId.validate({ id: body.id });
    comparateError(obj), comparateError(where);
    let result = await updatePermission(
      { nombre: obj.value.nombre },
      { ...where.value }
    );
    return res.json({ message: "actualizado" });
  } catch (error) {
    console.error(error);
    return res.json({ error: "" + error });
  }
}

export async function getPermissionOne(req, res) {
  let body = req.query;
  try {
    console.log(body.id);
    let obj = await SchemaPermissionId.validate({ id: body.id });
    comparateError(obj);
    let result = await getPermission(obj.value);
    return res.json({ message: result });
  } catch (error) {
    console.error(error);
    return res.json({ error: "" + error });
  }
}

export async function GetAllPermission(req, res) {
  let body = req.body;
  try {
    let result = await getPermission();
    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.json({ error: "" + error });
  }
}
