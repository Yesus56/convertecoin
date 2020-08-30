/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "rol_permission",
    {
      id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "roles",
            schema: "security",
          },
          key: "id",
        },
      },
      id_view: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "views",
            schema: "security",
          },
          key: "id",
        },
      },
      id_permission: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "permission",
            schema: "security",
          },
          key: "id",
        },
      },
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      tableName: "rol_permission",
      schema: "security",
      timestamps: false,
    }
  );
};
