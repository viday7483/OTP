const button=document.querySelector('button')
const body=document.querySelector('body')
const color=['blue','black','green','aqua','brown','gray','violet','white','orange','red','pink','yellow',]

body.style.backgroundColor= 'violet'

button.addEventListener('click',changeB)

function changeB()
{
    const colorIndex=parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorIndex]
} 