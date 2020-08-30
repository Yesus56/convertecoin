import { USER, ROLES, ROLPERMISSION, VIEW, PERMISSION } from "../db";

export async function addUser(data) {
  console.log(data);
  try {
    return USER.create({ ...data });
  } catch (error) {
    console.log(erros);
    throw new Error("Error al guardar el usuario");
  }
}

export async function updateUser(data, where) {
  console.log(data);
  console.log(where);
  try {
    return USER.update({ ...data }, { where: { ...where } });
  } catch (error) {
    console.log(error);
    throw new Error("Error al actualziar al usuario");
  }
}

export async function getUser(where) {
  try {
    return USER.findAll({ where: { ...where }, raw: true });
  } catch (error) {
    console.log(error);
    throw new Error("Error al realizar la consulta");
  }
}

export async function getUserRol(where) {
  try {
    return USER.findAll({
      include: {
        model: ROLES,
        include: {
          model: ROLPERMISSION,
          include: [{ model: VIEW }, { model: PERMISSION }],
        },
      },
      where: { ...where },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error al realizar la consulta");
  }
}
