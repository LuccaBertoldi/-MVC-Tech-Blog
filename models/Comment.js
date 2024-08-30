const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Comment', // This will be pluralized to 'Comments'
  tableName: 'comments' // Explicitly set table name if necessary
});

module.exports = Comment;
