"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rolesJoin = rolesJoin;

var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rolesJoin(rolDB) {
  let rol = {};
  Object.keys(rolDB).map(key => {
    if ((0, _isUndefined.default)(rol[rolDB[key].views[0].nombre])) {
      rol[rolDB[key].views[0].nombre] = [];
      rol[rolDB[key].views[0].nombre].push(rolDB[key].permission.nombre);
    } else {
      rol[rolDB[key].views[0].nombre].push(rolDB[key].permission.nombre);
    }
  });
  return rol;
}