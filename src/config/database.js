import Sequelize from "sequelize";
import config from "./database.json";

/************************************************************************
para la configuracion de la base de datos debe dirigirte al archivo database.json y seguir 
el mismo esquema que ya se tiene para cambiarlo y si deseas 
agregar una nueva solo tiene que repetir la que ya existe dentro de esa base y automaticamente
el se coenctara a ambas base de datos
***************************************************************************/

export const db = {};
Object.keys(config.database).map((key) => {
  let database = config.database[key];

  db[key] = new Sequelize(
    database.database,
    database.username,
    database.password,
    {
      ...database.patch,
    }
  );
  db[key]
    .authenticate()
    .then(() => {
      console.log(`Coneccion establecida con ${key}.`);
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
});

// crear moedelos de la base de datos
// sequelize-auto -o "./db/coin" -d coin_converter -h localhost -u postgres -p 5432 -x root -e postgres -s coin
//-s es el esquema
//-d la base de datos
//-h lugar del servidro
//-u usuario
//-p puerto
//-x clave
//-e tipo de base de datos
