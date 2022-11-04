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
    const cheeseAll = await Cheese.findAll()
    //console.table(userAll.map(j => j.toJSON()))
    console.table(boardAll.map(j => j.toJSON()))
    console.table(cheeseAll.map(j => j.toJSON()))

    userAll[0].addBoards([boardAll[0], boardAll[3]])
    userAll[1].addBoards([boardAll[1], boardAll[2]])
    userAll[2].addBoards([boardAll[1], boardAll[0]])
    userAll[3].addBoards([boardAll[2], boardAll[3]])
    userAll[4].addBoards([boardAll[3], boardAll[1]])
    userAll[5].addBoards([boardAll[0], boardAll[2]])

    boardAll[0].addCheeses([cheeseAll[0], cheeseAll[1], cheeseAll[2]])
    boardAll[1].addCheese(cheeseAll[3])
    boardAll[2].addCheeses([cheeseAll[4], cheeseAll[5], cheeseAll[1]])
    boardAll[3].addCheeses([cheeseAll[1], cheeseAll[6], cheeseAll[2]])


} 




main()