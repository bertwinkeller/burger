module.exports = app => {
    // get all burgers
app.get('/burgers', (req, res) => {
res.send('Get all burgers')
})

    // post one burger
app.post('/burgers', (req, res) => {
res.send('Post one burger')
})

    // put one burger
app.put('/burgers/:id', (req, res) => {
res.send('Update one burger')
})

    // delete one burger
app.delete('/burgers/:id', (req, res) => {
res.send('Delete one burger')
})
}