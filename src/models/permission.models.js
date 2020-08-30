import { PERMISSION } from "../db";

export async function addPermission(data) {
  try {
    return PERMISSION.create({ ...data });
  } catch (error) {
    console.log(erros);
    throw new Error("Error al guardar");
  }
}

export async function updatePermission(data, where) {
  try {
    return PERMISSION.update({ ...data }, { where: { ...where } });
  } catch (error) {
    console.log(error);
    throw new Error("Error al actualziar");
  }
}

export async function getPermission(where) {
  try {
    return PERMISSION.findAll({ where: { ...where } });
  } catch (error) {
    console.log(error);
    throw new Error("Error al realizar la consulta");
  }
}
