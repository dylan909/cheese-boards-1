const Board = require("./board.model");
const Cheese = require("./cheese.model");
const User = require("./user.model");



User.belongsToMany(Board, {through: 'User_Board'})
Board.belongsToMany(User, {through: 'User_Board'})

Cheese.belongsToMany(Board, {through: 'Cheese_Board'})
Board.belongsToMany(Cheese, {through: 'Cheese_Board'})

module.exports = { Board, Cheese, User }