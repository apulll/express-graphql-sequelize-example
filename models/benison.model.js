/*
* @Author: perry
* @Date:   2018-03-14 09:57:50
* @Last Modified by:   perry
* @Last Modified time: 2018-05-04 16:33:32
*/

const moment = require('moment');
const base64url = require('base64-url');


module.exports = function(sequelize, DataTypes) {
    var benison = sequelize.define('benison', {
      benisons_txt: {
        type: DataTypes.TEXT,
        get() {
          return base64url.decode(this.getDataValue('benisons_txt'));
          // return this.getDataValue('nick_name');
        }
      },
      liked_total: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        COMMENT: '用户喜欢度',
        description: '用户喜欢度'
      },
      is_belong_template: {
        type: DataTypes.INTEGER(2),
        defaultValue: 0,
        comment: '是否是默认的模板祝福语',
        description: '是否是默认的模板祝福语'
      },
      password: {
        type: DataTypes.STRING,
        comment: '祝福语密码，当密码设置了时，用户查看该祝福需要输入密码',
        description: '祝福语密码，当密码设置了时，用户查看该祝福需要输入密码'
      },
      status: {
        type: DataTypes.INTEGER(2),
        defaultValue: 1
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

    return benison;
}