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
    let boxGrid = document.querySelectorAll('.box')
    for (let i = 0; i < boxGrid.length; i++) {
        container.removeChild(boxGrid[i])
    }
}

function drawBW() {
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(div => div.addEventListener('mouseover', function (e) {
        e.target.style.background = 'black'
    }))
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
    drawBW()
})

createGrid(16, 16)
drawBW()