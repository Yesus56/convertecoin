"use strict";

/* jshint indent: 2 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define("prices", {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_coin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "id de la tabla conis",
      references: {
        model: {
          tableName: "coins",
          schema: "coin"
        },
        key: "id"
      }
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      comment: "precio de la moneda"
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.fn("now"),
      comment: "fecha de creacion"
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "fecha de actualizacion"
    }
  }, {
    sequelize,
    tableName: "prices",
    schema: "coin"
  });
};