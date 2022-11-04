const { describe, default: test } = require("node:test");
const { Board, User, Cheese } = require("../Model");

describe('A board can be laoded with its cheeses', () => {
    test('', async () => {
        const b1 = await Board.create({
            type: 'Aged',
            description: 'Gouda, Sharp Cheddar, Gruyere',
            rating: '8'
        }) 
        const c2 = await Cheese.Create([
            {title: 'Gouda',
            description:'aromatic and caramel-like flavour combined with its dense and springy texture'}
        ])
        await b1.addCheese(c2)
    })
})