const {burger} = require('../controllers')


module.exports = app => {
    app.get('/', (req, res) => {
        burger.getBurgers(burgers => {
            res.render('index', {burgers})
        })
    })
}