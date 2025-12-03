'use strict'

let body = window
let pulsau = false

body.addEventListener('mousedown', function(e){
    pulsau = true
})
body.addEventListener('mouseup', function(e){
    pulsau = false
})
body.addEventListener('mousemove', function(e){
    if (pulsau){
        let div = document.createElement('div')
        div.style.position = 'fixed'
        div.style.left = (e.clientX-10) + 'px'
        div.style.top = (e.clientY-10) + 'px'
        div.style.width = '20px'
        div.style.height = '20px'
        div.style.borderRadius = '50%'
        div.style.backgroundColor = 'red'
        document.body.appendChild(div)
    }
})

window.addEventListener('keypress', function(e){
    
})