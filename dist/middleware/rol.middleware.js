"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rolPermission = rolPermission;

var _lodash = require("lodash");

function rolPermission(req, res, next) {
  let roles = req.decode.permisos;
  let newToken = req.newToken;
  let status = true;
  let urlSplit = req.originalUrl.split("?");
  let url = typeof methoSplit == "string" ? req.originalUrl : urlSplit[0];

  if ((0, _lodash.isUndefined)(roles[url])) {
    return res.status(401).json({
      error: "No posee permisos a estas ruta "
    });
  }

  roles[url].map((value, key) => {
    if (req.method == value) {
      status = false;
      next();
    }
  });

  if (status) {
    res.status(401).json({
      error: "No tiene acceso a esta funcion",
      newToken
    });
  }
}