
const { burger } = require('../controllers')

module.exports = app => {
    // get all burgers
    app.get('/burgers', (req, res) => {
        burger.getBurgers(burger => {
            res.json(burger)
            console.log(burger)
        })
    })

    // post one burger
    app.post('/burgers', (req, res) => {
        burger.addBurgers(req.body.name, req.body.eaten, () => {
            res.sendStatus(200)
        })
    })

    // put one burger
    app.put('/burgers/:id', (req, res) => {
        burger.eatBurger(parseInt(req.params.id), () => {
            res.sendStatus(200)
        }
        )
    })


    // delete one burger
    app.delete('/burgers/:id', (req, res) => {
        burger.removeBurger(parseInt(req.params.id), () => {
            res.sendStatus(200)
        })
        
    }) 
};