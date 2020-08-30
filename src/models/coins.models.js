import { COINS } from "../db";

/******************************************************
 * aqui se realizan funciones basicas como agregar actualiza
 * y traer la informaciond e bsse de datos se recomieda que si
 * vas a hacer una consulta personalizada pienses is la vas a usar
 * en otro lado y la agregues aqui para mejorar el trabajo y no repetir funciones
 *****************************************************/

export async function addCoins(data) {
  try {
    await COINS.create(data);
  } catch (error) {
    console.log(error);
    throw new Error("Error al guardar");
  }
}

export function updateCoins(data, where) {
  try {
    return COINS.update({ ...data }, { where });
  } catch (error) {
    console.log(error);
    throw new Error("Error al actualizar");
  }
}

//el where es alternativo puedes ponerlo como no hacerlo
export async function getAllCoins(where) {
  try {
    return await COINS.findAll();
  } catch (error) {
    console.log(err);
    throw new Error("Error al traer los datos");
  }
}
