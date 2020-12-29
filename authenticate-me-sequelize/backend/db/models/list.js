'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    id: DataTypes.INTEGER,
    listName: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  List.associate = function(models) {
    // associations can be defined here
    List.belongsTo(models.User, { foreignKey: 'userId' });
    List.hasMany(models.Task, { foreignKey: 'listId' });
  };
  return List;
};
