"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "db", {
  enumerable: true,
  get: function () {
    return _database.db;
  }
});
exports.VIEW = exports.USER = exports.ROLES = exports.ROLPERMISSION = exports.PERMISSION = exports.PRICES = exports.COINS = void 0;

var _database = require("../config/database");

var _sequelize = _interopRequireDefault(require("sequelize"));

var _coins = _interopRequireDefault(require("./coin/coins"));

var _prices = _interopRequireDefault(require("./coin/prices"));

var _permission = _interopRequireDefault(require("./security/permission"));

var _rol_permission = _interopRequireDefault(require("./security/rol_permission"));

var _roles = _interopRequireDefault(require("./security/roles"));

var _users = _interopRequireDefault(require("./security/users"));

var _views = _interopRequireDefault(require("./security/views"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*********************************************
 * En este archivo se inician todas las configuraciondes
 * la base de datos para mejor gestion y se llaman en el archivo models
 * al menos que se necesite una consulta directamente de controller
 * si deseas hacer un query manual debe importar db, y colocar db.nombre de la base de datos
 * por ejemplo db.coverter_coin.query
 *********************************************/
//importar modelos de la base de datos
//schema coins
//schema security
//inicializando las funciones de cada esquema
//schema coins
const COINS = (0, _coins.default)(_database.db.coin_converte, _sequelize.default);
exports.COINS = COINS;
const PRICES = (0, _prices.default)(_database.db.coin_converte, _sequelize.default); //schema Security

exports.PRICES = PRICES;
const PERMISSION = (0, _permission.default)(_database.db.coin_converte, _sequelize.default);
exports.PERMISSION = PERMISSION;
const ROLPERMISSION = (0, _rol_permission.default)(_database.db.coin_converte, _sequelize.default);
exports.ROLPERMISSION = ROLPERMISSION;
const ROLES = (0, _roles.default)(_database.db.coin_converte, _sequelize.default);
exports.ROLES = ROLES;
const USER = (0, _users.default)(_database.db.coin_converte, _sequelize.default);
exports.USER = USER;
const VIEW = (0, _views.default)(_database.db.coin_converte, _sequelize.default);
/*****************
 * aqui se realiza las claves foraneas
 ******************/

/**********************
 * clave foranea de los usuario contra roles
 */

exports.VIEW = VIEW;
USER.hasOne(ROLES, {
  foreignKey: "id",
  sourceKey: "id_rol"
});
ROLES.belongsTo(USER, {
  foreignKey: "id",
  sourceKey: "id_rol"
});
/*******************************
 * Rol contra rolpermission
 */

ROLES.hasMany(ROLPERMISSION, {
  foreignKey: "id_rol",
  sourceKey: "id"
});
ROLPERMISSION.belongsTo(ROLES, {
  foreignKey: "id_rol",
  sourceKey: "id"
});
/****************
 * Roplpermission contra view y permission
 *
 */

ROLPERMISSION.hasMany(VIEW, {
  foreignKey: "id",
  sourceKey: "id_view"
});
VIEW.belongsTo(ROLPERMISSION, {
  foreignKey: "id",
  sourceKey: "id_view"
});
ROLPERMISSION.hasOne(PERMISSION, {
  foreignKey: "id",
  sourceKey: "id_permission"
});
/*COINS.hasMany(PRICES, {
  sourceKey: "id_coin",
  foreignKey: "id",
});

PRICES.belongsTo(COINS, {
  sourceKey: "id",
  foreignKey: "id_coin",
});
*/