import isUndefined from "lodash/isUndefined";
function rolesJoin(rolDB) {
  let rol = {};
  Object.keys(rolDB).map((key) => {
    if (isUndefined(rol[rolDB[key].views[0].nombre])) {
      rol[rolDB[key].views[0].nombre] = [];
      rol[rolDB[key].views[0].nombre].push(rolDB[key].permission.nombre);
    } else {
      rol[rolDB[key].views[0].nombre].push(rolDB[key].permission.nombre);
    }
  });

  return rol;
}

export { rolesJoin };
