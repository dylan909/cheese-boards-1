const db = require("../db/db");
const { User, Cheese, Board } = require("../Model");

async function main(){

    const dylan = await User.findOne({where: {name: 'Dylan'}})
    const Kalim = await User.findOne({where: {name: 'Kalim'}})
    const Kevin = await User.findOne({where: {name: 'Kevin'}})
    const Bilal = await User.findOne({where: {name: 'Bilal'}})
    const Alexandra = await User.findOne({where: {name: 'Alexandra'}})
    const Rachel = await User.findOne({where: {name: 'Rachel'}})
    const Anji = await User.findOne({where: {name: 'Anji'}})


    const userAll = await User.findAll()
    const boardAll = await Board.findAll()
    console.table(userAll.map(j => j.toJSON()))
    console.table(boardAll.map(j => j.toJSON()))

    userAll[0].addCheese(boardAll[0])


} 




main()