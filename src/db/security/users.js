/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "users",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "password del usuario",
      },
      primer_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "nombre",
      },
      segundo_nombre: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "segundo nombre",
      },
      primer_apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "apellido",
      },
      segundo_apellido: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "segundo apellido",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "email",
      },
      id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "rol del usuario",
        references: {
          model: {
            tableName: "roles",
            schema: "security",
          },
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "users",
      schema: "security",
      timestamps: false,
    }
  );
};
