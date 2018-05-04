/*
* @Author: perry
* @Date:   2018-03-14 09:57:50
* @Last Modified by:   perry
* @Last Modified time: 2018-05-04 17:56:29
*/
const moment = require('moment');
module.exports = function(sequelize, DataTypes) {
    var catalog = sequelize.define('catalog', {
          catalog_name: {
            type: DataTypes.TEXT
          },
          catalog_icon: {
            type: DataTypes.TEXT
          },
          catalog_bg: {
            type: DataTypes.TEXT
          },
          created_at: {
            type: DataTypes.DATE,
            get() {
              return moment(this.getDataValue('created_at')).format('YYYY-MM-DD');
            }
          },
          updated_at: {
            type: DataTypes.DATE,
            get() {
              return moment(this.getDataValue('updated_at')).format('YYYY-MM-DD');
            }
          }
        }, {
        timestamps: false,
        freezeTableName: true
    });

    // author.associate = function(models) {
    //     models.author.hasMany(models.quote, { foreignKey: "author_id", sourceKey: "id" });
    // }

    return catalog;
}
