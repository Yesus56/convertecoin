import jwt from "jsonwebtoken";
import { isEmpty } from "lodash";

export function verifiToken(req, res, next) {
  let tokenreq = req.get("token");

  if (isEmpty(tokenreq)) {
    return res.status(401).json({
      CodeE: "56",
      err: "TOKEN NO ENVIADO",
    });
  }

  jwt.verify(tokenreq, process.env.PASSSECRET, (err, decode) => {
    if (!isEmpty(err)) {
      return res.status(401).json(err);
    }
    let { exp, ...rest } = decode;
    let newToken = jwt.sign(
      {
        nacionalidad: decode.nacionalidad,
        cedula: decode.cedula,
        usuario: decode.usuario,
        primer_nombre: decode.primer_nombre,
        primer_apellido: decode.primer_apellido,
        email: decode.email,
        special_permissions: decode.special_permissions,
        permisos: decode.permisos,
        nombreRol: decode.nombreRol,
      },
      process.env.PASSSECRET
    );
    req.decode = decode;
    req.newToken = newToken;
    next();
  });
}
