import { ROLPERMISSION } from "../db";

export async function addRolPermission(data) {
  try {
    return ROLPERMISSION.create({ ...data });
  } catch (error) {
    console.log(erros);
    throw new Error("Error al guardar");
  }
}

export async function updateRolPermission(data, where) {
  try {
    return ROLPERMISSION.update({ ...data }, { where: { ...where } });
  } catch (error) {
    console.log(error);
    throw new Error("Error al actualziar");
  }
}

export async function getRolPermission(where) {
  try {
    return ROLPERMISSION.findAll({ where: { ...where } });
  } catch (error) {
    console.log(error);
    throw new Error("Error al realizar la consulta");
  }
}
