// require npm packages
const express = require('express')
const {join} = require('path')
const app = express()

// middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.listen(3000)