import { db } from "../config/database";
import Sequelize from "sequelize";

/*********************************************
 * En este archivo se inician todas las configuraciondes
 * la base de datos para mejor gestion y se llaman en el archivo models
 * al menos que se necesite una consulta directamente de controller
 * si deseas hacer un query manual debe importar db, y colocar db.nombre de la base de datos
 * por ejemplo db.coverter_coin.query
 *********************************************/

//importar modelos de la base de datos

//schema coins
import coins from "./coin/coins";
import prices from "./coin/prices";

//schema security
import permission from "./security/permission";
import rolpermission from "./security/rol_permission";
import roles from "./security/roles";
import user from "./security/users";
import view from "./security/views";

//inicializando las funciones de cada esquema

//schema coins
const COINS = coins(db.coin_converte, Sequelize);
const PRICES = prices(db.coin_converte, Sequelize);

//schema Security

const PERMISSION = permission(db.coin_converte, Sequelize);
const ROLPERMISSION = rolpermission(db.coin_converte, Sequelize);
const ROLES = roles(db.coin_converte, Sequelize);
const USER = user(db.coin_converte, Sequelize);
const VIEW = view(db.coin_converte, Sequelize);

/*****************
 * aqui se realiza las claves foraneas
 ******************/

/**********************
 * clave foranea de los usuario contra roles
 */

USER.hasOne(ROLES, {
  foreignKey: "id",
  sourceKey: "id_rol",
});

ROLES.belongsTo(USER, {
  foreignKey: "id",
  sourceKey: "id_rol",
});

/*******************************
 * Rol contra rolpermission
 */

ROLES.hasMany(ROLPERMISSION, {
  foreignKey: "id_rol",
  sourceKey: "id",
});

ROLPERMISSION.belongsTo(ROLES, {
  foreignKey: "id_rol",
  sourceKey: "id",
});

/****************
 * Roplpermission contra view y permission
 *
 */

ROLPERMISSION.hasMany(VIEW, {
  foreignKey: "id",
  sourceKey: "id_view",
});

VIEW.belongsTo(ROLPERMISSION, {
  foreignKey: "id",
  sourceKey: "id_view",
});

ROLPERMISSION.hasOne(PERMISSION, {
  foreignKey: "id",
  sourceKey: "id_permission",
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
export { COINS, PRICES, PERMISSION, ROLPERMISSION, ROLES, USER, VIEW, db };
