/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "coins",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "nombre de la moneda",
      },
      acronym: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "acronimo de la moneda",
      },
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "id de la persona q cera o actualiza ",
      },
      createdAt: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: sequelize.fn("now"),
        comment: "fechad e creacion",
      },
      updatedAt: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: sequelize.fn("now"),
        comment: "decha de actualizacion",
      },
    },
    {
      sequelize,
      tableName: "coins",
      schema: "coin",
    }
  );
};
