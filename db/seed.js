const { Cheese, Board, User } = require('../Model')
const db = require('./db')


async function seed(){

    await db.sync({
        force: true
    })

    await User.bulkCreate([
        {name: 'Dylan', email: 'Dylan@trainline.com'},
        {name: 'Kalim', email: 'Kalim@trainline.com'},
        {name: 'Kevin', email: 'Kevin@trainline.com'},
        {name: 'Bilal', email: 'Bilal@trainline.com'},
        {name: 'Alexandra', email: 'Alexandra@trainline.com'},
        {name: 'Rachel', email: 'Rachel@trainline.com'},
        {name: 'Anji', email: 'Anji@trainline.com'}
    ])

    await Cheese.bulkCreate([
        {title: 'Gouda', description: 'Intense, caramel / butterscotch flavor, browned butter, toffee'},
        {title: 'Chedda', description: 'Umami, sharp, bold, toasted hazelnuts, whiskey'},
        {title: 'Gruyere', description: 'Sweet, slightly salty, complex, slightly earthy, beefy'},
        {title: 'Feta', description: 'Tangy, salty, pungent, intense'},
        {title: 'Parmesan', description: 'Dry, crackly, crumbly, rough'},
        {title: 'Manchego', description: 'Flaky, grainy, and slightly crystalized'},
        {title: 'Provolone', description: 'Beefy, sharp, nutty, salty undertones'}
    ])

    await Board.bulkCreate([
        {type: 'Aged', description: 'Gouda, Sharp Cheddar, Gruyere', rating: 6},
        {type: 'Crumbly', description: 'Goat and Feta Cheese', rating: 10},
        {type: 'Firm', description: 'Parmesan, Manchego, Gouda', rating: 2},
        {type: 'Smoked', description: 'Gouda, Provolone, and Cheddar', rating: 4},
    ])

}

seed()