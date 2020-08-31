"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createViews = createViews;
exports.getViews = getViews;
exports.updViews = updViews;
exports.viewOne = viewOne;

var _view = require("../schemas/view.schema");

var _view2 = require("../models/view.models");

var _errors = require("../utils/errors");

//trabaja los modelos de la tabla view
async function createViews(req, res) {
  let body = req.body;

  try {
    let {
      view
    } = body;
    let obj = await _view.SchemaViews.validate({ ...view
    });
    (0, _errors.comparateError)(obj);
    let viewCreate = await (0, _view2.addView)({ ...obj.value
    });
    res.json({
      message: "Vista Creada"
    });
  } catch (error) {
    console.error(error);
    return res.json({
      error: "" + error
    });
  }
}

async function getViews(req, res) {
  let body = req.body;

  try {
    let view = await (0, _view2.getView)();
    res.json({
      message: view
    });
  } catch (error) {
    console.log(error);
    return res.json({
      error: "" + error
    });
  }
}

async function updViews(req, res) {
  let body = req.body;

  try {
    let obj = await _view.SchemaViews.validate({
      nombre: body.nombre
    });
    let where = await _view.SchemaviewsId.validate({
      id: body.id
    });
    (0, _errors.comparateError)(obj);
    (0, _errors.comparateError)(where);
    let result = await (0, _view2.updateView)({ ...obj.value
    }, { ...where.value
    });
    return res.json({
      message: "actualizado"
    });
  } catch (error) {
    console.error(error);
    return res.json({
      error: "" + error
    });
  }
}

async function viewOne(req, res) {
  let body = req.query;

  try {
    let {
      id_view
    } = body;

    let obj = _view.SchemaviewsId.validate({
      id: id_view
    });

    (0, _errors.comparateError)(obj);
    let view = await (0, _view2.getView)(obj.value);
    res.json({
      message: view
    });
  } catch (error) {
    console.log(error);
    return res.json({
      error: "" + error
    });
  }
}