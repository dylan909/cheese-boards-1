const Board = require("./board.model");
const Cheese = require("./cheese.model");
const User = require("./user.model");


User.hasMany(Board)
Board.belongsTo(User)

Cheese.belongsToMany(Board, {through: 'Cheese_Board'})
Board.belongsToMany(Cheese, {through: 'Cheese_Board'})

module.exports = { Board, Cheese, User }