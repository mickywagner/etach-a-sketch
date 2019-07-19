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

        createGrid(6, 6)
        drawBW()