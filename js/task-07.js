const text = document.querySelector('#text')
const size = document.querySelector('#font-size-control')

text.style.fontSize = size.value + 'px'

const textSize = function(){
    text.style.fontSize = size.value + 'px'
}

size.addEventListener('input', textSize)