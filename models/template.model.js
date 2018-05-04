/*
* @Author: perry
* @Date:   2018-03-14 09:57:50
* @Last Modified by:   perry
* @Last Modified time: 2018-05-04 16:39:16
*/

const moment = require('moment');
module.exports = function(sequelize, DataTypes) {
    var template = sequelize.define('benison', {
        thumb: {
          type: DataTypes.STRING,
          comment: '统一的使用一个名称，上传图片是只要统一前面的这个名称'
        },
        top: {
          type: DataTypes.INTEGER(10),
          defaultValue: 0,
          comment: '文字距离顶部的坐标'
        },
        position: {
          type: DataTypes.ENUM('center', 'left', 'right'),
          defaultValue: 'center',
          comment: '文字对齐方式'
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

    return template;
}