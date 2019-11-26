
const {burger} = require('../controllers')

module.exports = app => {
    // get all burgers
app.get('/burgers', (req, res) => {
    burger.getBurgers(burger =>{
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
res.send('Update one burger')
})

    // delete one burger
app.delete('/burgers/:id', (req, res) => {
res.send('Delete one burger')
})
};