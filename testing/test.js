const { describe, default: test } = require("node:test");
const { Board, User, Cheese } = require("../Model");

describe('Collection of tests', () => {
    beforeEach(async () => {
        await User.sync({ force: true })
        await Cheese.sync({ force: true })
        await Board.sync({ force: true })


        await Cheese.bulkCreate([
            {title: 'Gouda', description: 'Intense, caramel / butterscotch flavor, browned butter, toffee'},
            {title: 'Chedda', description: 'Umami, sharp, bold, toasted hazelnuts, whiskey'}])

        await User.bulkCreate([
            {name: 'Dylan', email: 'Dylan@trainline.com'},
            {name: 'Kalim', email: 'Kalim@trainline.com'}])
        
        await Board.bulkCreate([
            {type: 'Aged', description: 'Gouda, Sharp Cheddar, Gruyere', rating: 6},
            {type: 'Crumbly', description: 'Goat and Feta Cheese', rating: 10}
        ])
    })
    test('A board can be loaded with its cheeses', async () => {
        let boards = await Board.findAll()
        let cheese = await Cheese.findAll()


        boards[0].addCheese(cheese[0])
    })
})