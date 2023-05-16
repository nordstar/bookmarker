const Sequelize = require('sequelize')
const {STRING, INTEGER} = Sequelize;

const db = new Sequelize('postgres://localhost/bookmarker', {
   logging: false
});

const Bookmark = db.define('Bookmark',{
   name: {
      type:STRING,
      allowNull: false,
      validate:{
         notEmpty: true,
      },
   },
})