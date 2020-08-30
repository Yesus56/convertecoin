import { SchemaViews, SchemaviewsId } from "../schemas/view.schema";
import { addView, updateView, getView } from "../models/view.models";
import { comparateError } from "../utils/errors";
//trabaja los modelos de la tabla view
export async function createViews(req, res) {
  let body = req.body;

  try {
    let { view } = body;
    let obj = await SchemaViews.validate({ ...view });
    comparateError(obj);
    let viewCreate = await addView({ ...obj.value });
    res.json("Vista Creada");
  } catch (error) {
    console.error(error);
    res.json({ message: "" + error });
  }
}
export async function getViews(req, res) {
  let body = req.body;
  try {
    let view = await getView();
    res.json(view);
  } catch (error) {
    console.log(error);
    res.json({ message: "" + error });
  }
}
export async function updViews(req, res) {
  let body = req.body;
  try {
    let obj = await SchemaViews.validate({ nombre: body.nombre });
    let where = await SchemaviewsId.validate({ id: body.id });
    comparateError(obj);
    comparateError(where);
    let result = await updateView({ ...obj.value }, { ...where.value });
    return res.json("actualizado");
  } catch (error) {
    console.error(error);
    res.json({ message: "" + error });
  }
}
export async function viewOne(req, res) {
  let body = req.body;
  try {
    let { id_view } = body;
    let obj = SchemaviewsId.validate({ id: id_view });
    comparateError(obj);
    let view = await getView(obj.value);
    res.json(view);
  } catch (error) {
    console.log(error);
    res.json({ message: "" + error });
  }
}
