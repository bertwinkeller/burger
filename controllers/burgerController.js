const db = require('../config')

module.exports= {
    getBurgers(cb){
        let result = []
        db.query('SELECT * FROM burger', (e, burger) =>{
            if(e){
                console.log(e)
            }
            cb(burger)
        })
      
    },
    addBurgers(name, eaten, cb){
        db.query(`INSERT INTO burger (name, eaten)
        VALUES ('${name}',${eaten})`, e => {
            if (e) {
                console.log(e)
            }
            cb()
        })
    },
    eatBurger(id, cb){
        db.query(`UPDATE burger SET eaten=true WHERE id = ${id}`, e => {
            if(e) {
                console.log(e)
            }
            cb()
        })
    },
    removeBurger(id, cb){
        db.query(`DELETE FROM burger WHERE id = ${id}`, e => {
            if(e){
                console.log(e)
            }
            cb()
        })

    }
};