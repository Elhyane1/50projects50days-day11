let key = document.getElementsByClassName('showbox')[0]
let keycode = document.getElementsByClassName('showbox')[1]
let code = document.getElementsByClassName('showbox')[2]
let fpage = document.querySelector('.fpage')
let containers = document.querySelectorAll('.container')

document.addEventListener('keydown', function(event){
    fpage.style.display = 'none'
    containers.forEach(element => {
        element.style.display = 'flex'
    });
    key.innerHTML = `${event.key}`
    keycode.innerHTML = `${event.keyCode}`
    code.innerHTML = `${event.code}`
})