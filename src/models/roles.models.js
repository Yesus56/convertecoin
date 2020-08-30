import { ROLES } from "../db";

export async function addrol(data) {
  try {
    return ROLES.create({ ...data });
  } catch (error) {
    console.log(erros);
    throw new Error("Error al guardar el usuario");
  }
}

export async function updaterol(data, where) {
  try {
    return ROLES.update({ ...data }, { where: { ...where } });
  } catch (error) {
    console.log(error);
    throw new Error("Error al actualziar al usuario");
  }
}

export async function getrol(where) {
  try {
    return ROLES.findAll({ where: { ...where } });
  } catch (error) {
    console.log(error);
    throw new Error("Error al realizar la consulta");
  }
}
