"use strict";

require("./config/config");

var _app = _interopRequireDefault(require("./app"));

var _update_money = require("./events/update_money");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***********************************
 * se ejecuta al iniciar el servicio de nodejs es para mantener
 * los precios de las monedas actualziados se actualiza una vez cuando se inicia
 * y depsues cada 5 minutos se activa si deseas que sea menso tiempo puede poner
 * el tiempo en milisegundos
 */
(0, _update_money.InsertmoneyApi)();

_app.default.listen(process.env.PORT, err => {
  if (err) throw new Error(err);
  console.log(`Servidor conectado al puerto: ${process.env.PORT} `);
});