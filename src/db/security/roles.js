/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "roles",
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
        comment: "nomrbe del rol",
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "descripcion del rol",
      },
    },
    {
      sequelize,
      tableName: "roles",
      schema: "security",
      timestamps: false,
    }
  );
};
