import { VIEW } from "../db";

export async function addView(data) {
  try {
    return VIEW.create({ ...data });
  } catch (error) {
    console.log(erros);
    throw new Error("Error al guardar la vista");
  }
}

export async function updateView(data, where) {
  try {
    return VIEW.update({ ...data }, { where: { ...where } });
  } catch (error) {
    console.log(error);
    throw new Error("Error al actualziar la vista");
  }
}

export async function getView(where) {
  try {
    return VIEW.findAll({ where: { ...where } });
  } catch (error) {
    console.log(error);
    throw new Error("Error al realizar la vista");
  }
}
