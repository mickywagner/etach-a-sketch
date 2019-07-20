let container = document.querySelector('#container')

function createGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let div = document.createElement('div')
            div.classList.add('box')
            container.appendChild(div)
            container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
            container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
        }
    }
}

function removeGrid() {
    let boxes = document.querySelectorAll('.box')
    for (let i = 0; i < boxes.length; i++) {
        container.removeChild(boxes[i])
    }
}

function draw() {
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(div => div.addEventListener('mouseover', function (e) {
        e.target.style.background = 'rgb(0,0,0)'
    }))
}

function removeColor() {
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(div => div.style.background = 'rgb(255,255,255)')
}

let newGridBtn = document.querySelector('#newGrid') 
newGridBtn.addEventListener('click', () => {
    removeGrid();
    let input = prompt('Choose a number 1-99')
    let regex = /^(\d?[1-9]|[1-9]0)$/m
    if (!regex.test(input)){
        alert('Choose a valid whole number 1-99')
        input = prompt('Choose a number 1-99')
    }
    createGrid(input, input)
    removeColor()
    draw()
})

let resetBtn = document.querySelector('#reset')
resetBtn.addEventListener('click', removeColor)

let colorPicker = document.querySelector('#colorPicker')
colorPicker.addEventListener('change', () => {
    let usrColor = colorPicker.value
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(div => div.addEventListener('mouseover', function (e) {
        e.target.style.background = `${usrColor}`
    }))
})

let randomColor = document.querySelector('#random')
randomColor.addEventListener('click', function() {
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(div => div.addEventListener('mouseover', function (e) {
        e.target.style.background = colorRandomizer()
    }))
})

function colorRandomizer() {
    return "#" + Math.floor(Math.random()*16777215).toString(16)
}


let shadeColor = document.querySelector('#shade')
shadeColor.addEventListener('click', () => {
    removeGrid()
    let input = prompt('Choose a number 1-99')
    let regex = /^(\d?[1-9]|[1-9]0)$/m
    if (!regex.test(input)){
        alert('Choose a valid whole number 1-99')
        input = prompt('Choose a number 1-99')
    }
    createGrid(input, input)
    removeColor()
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(div => div.addEventListener('mouseover', shadeIn))
})

function shadeIn(e) {
        let divColor = e.target.style.backgroundColor
        console.log(divColor)
        if (divColor.length === 18) {
            let red = divColor.substring(4, 7)
            let newRed = Math.round(red - (red * .1))
            let newColor = "rgb(" + newRed + "," + newRed + "," + newRed + ")"
            e.target.style.backgroundColor = newColor
        } else if (divColor.length === 15) {
            let red = divColor.substring(4,6)
            let newRed = Math.round(red - (red * .1))
            let newColor = "rgb(" + newRed + "," + newRed + "," + newRed + ")"
            e.target.style.backgroundColor = newColor
        } else {
            e.target.style.backgroundColor = 'rgb(0,0,0)'
        }
}


createGrid(16, 16)
removeColor()
draw()
