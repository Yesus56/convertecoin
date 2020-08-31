"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifiToken = verifiToken;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verifiToken(req, res, next) {
  let tokenreq = req.get("token");

  if ((0, _lodash.isEmpty)(tokenreq)) {
    return res.status(401).json({
      CodeE: "56",
      error: "TOKEN NO ENVIADO"
    });
  }

  _jsonwebtoken.default.verify(tokenreq, process.env.PASSSECRET, (err, decode) => {
    if (!(0, _lodash.isEmpty)(err)) {
      return res.status(401).json(err);
    }

    let {
      exp,
      ...rest
    } = decode;

    let newToken = _jsonwebtoken.default.sign({
      nacionalidad: decode.nacionalidad,
      cedula: decode.cedula,
      usuario: decode.usuario,
      primer_nombre: decode.primer_nombre,
      primer_apellido: decode.primer_apellido,
      email: decode.email,
      special_permissions: decode.special_permissions,
      permisos: decode.permisos,
      nombreRol: decode.nombreRol
    }, process.env.PASSSECRET);

    req.decode = decode;
    req.newToken = newToken;
    next();
  });
}