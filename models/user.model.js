/*
* @Author: perry
* @Date:   2018-03-14 09:57:50
* @Last Modified by:   perry
* @Last Modified time: 2018-05-04 16:42:17
*/

const base64url = require('base64-url');
const moment = require('moment');
module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
        id: {
          type: DataTypes.UUID(32),
          notNull: true,
          primaryKey: true
        },
        openid: {
          type: DataTypes.STRING,
          allowNull: false
        },
        avatar_url: {
          type: DataTypes.TEXT
        },
        nick_name: {
          type: DataTypes.STRING,
          get() {
            return base64url.decode(this.getDataValue('nick_name'));
            // return this.getDataValue('nick_name');
          }
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

    return user;
}
