module.exports = require('mysql2')
.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    db: 'burger_db'
})