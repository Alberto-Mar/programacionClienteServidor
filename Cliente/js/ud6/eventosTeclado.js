'use strict'

document.addEventListener('keydown', function(e){
    console.log(e.key);
    document.body.children[0].textContent += e.code;
    
})

document.getElementById('texto').addEventListener('touch')