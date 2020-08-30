import "./config/config";
import APP from "./app";
import { InsertmoneyApi } from "./events/update_money";

/***********************************
 * se ejecuta al iniciar el servicio de nodejs es para mantener
 * los precios de las monedas actualziados se actualiza una vez cuando se inicia
 * y depsues cada 5 minutos se activa si deseas que sea menso tiempo puede poner
 * el tiempo en milisegundos
 */
InsertmoneyApi();

APP.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);
  console.log(`Servidor conectado al puerto: ${process.env.PORT} `);
});
