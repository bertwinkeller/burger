function getBurgers() {
    axios.get('/burgers')
        .then(burgers => {
            console.log(burgers)
        })
        .catch(e => console.log(e))
}

function addBurger(burger) {
    axios.post('/burgers', {
        name: burger,
        eaten: false
    })
        .then(() => {
            console.log('Burger added')
        })
        .catch(e => console.log(e))
}

function eatBurger(id) {
axios.put(`/burgers/${id}`)
.then(() => {
    console.log('Burger Eaten')
})
.catch(error => console.log(error))
}

function removeBurger(id) {
axios.delete(`/burgers/${id}`)
.then(() => {
    console.log('Burger Removed')
})
.catch(e => console.log(e))
}




document.getElementById('addBurger')
    .addEventListener('click', e => {
        e.preventDefault()
        console.log('add burger')
        addBurger(document.getElementById('burger').value)
        document.getElementById('burger').value = ''
        window.location.reload()
    }
    )

document.addEventListener('click', event => {
    if (event.target.className.includes('eatBurger')) {
        eatBurger(event.target.dataset.burger)
        window.location.reload()
    } else if (event.target.className.includes('deleteBurger')){
removeBurger(event.target.dataset.burger)
window.location.reload()
    }
})
