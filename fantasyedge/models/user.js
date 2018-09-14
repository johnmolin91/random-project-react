module.exports = function(sequelize, DataTypes) {
    var playersadvanced = sequelize.define("playersadvanced", {
        Rk: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        Player: DataTypes.STRING
        }, {
        timestamps: false,
        freezeTableName: true,
        }
    );
    return playersadvanced;
}