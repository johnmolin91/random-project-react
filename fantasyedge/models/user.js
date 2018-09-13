module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("playersadvanced", {
        Player: DataTypes.STRING
    }, {
        freezeTableName: true
    });
    return User;
}