function getBurgers(){
    axios.get('/burgers')
    .then(burgers => {
        console.log(burgers)
    })
    .catch(e => console.log(e))
}

function addBurger(burger){
    axios.post('/burgers', {
        name: burger,
        eaten: false
    })
    .then(() => {
        console.log('Burger added')
    })
    .catch(e => console.log(e))
}

function eatBurger(){
    
}
function removeBurger(){

}




document.getElementById('addBurger')
.addEventListener('click', e => {
    e.preventDefault()
    console.log('add burger')
    addBurger(document.getElementById('burger').value)
}
)

document.addEventListener('click',  event => {
    if(event.target.className.includes('eatBurger')){
    }else if (event.target.className.includes('deleteBurger'))
})