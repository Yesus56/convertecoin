import { isUndefined, indexOf } from "lodash";

export function rolPermission(req, res, next) {
  let roles = req.decode.permisos;
  let newToken = req.newToken;
  let status = true;
  let urlSplit = req.originalUrl.split("?");
  let url = typeof methoSplit == "string" ? req.originalUrl : urlSplit[0];
  if (isUndefined(roles[url])) {
    return res.status(401).json("No posee permisos a estas ruta ");
  }

  roles[url].map((value, key) => {
    if (req.method == value) {
      status = false;
      next();
    }
  });

  if (status) {
    res
      .status(401)
      .json({ message: "No tiene acceso a esta funcion", newToken, roles });
  }
}
