const yellowCellNode = document.getElementById('cell-yellow')
const redCellNode = document.getElementById('cell-red')
const cellNodes = document.getElementsByClassName('cell')
const cellNodesMatrix = []
let coll = 0
for (let i = 0; i < cellNodes.length; i++) {
    // if (!(i % 6) && i !== 0) {
    //     coll++
    // }

    !cellNodesMatrix[i % 7] && (cellNodesMatrix[i % 7] = [])
    cellNodesMatrix[i % 7].push(cellNodes[i])
}
const buttonsIds = ['btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7']
const posMatrix = Array.from({length: 7}, (_, i) => Array.from({length: 6}, (_, i) => 0))
console.log({cellNodesMatrix, posMatrix})
let currentPlayer = 1;

buttonsIds.forEach(btn => {
    document.getElementById(btn).addEventListener('click', (e) => {
        const col = e.target.dataset.col

        for (let i = posMatrix[col].length; i >= 0; i--) {
            if (posMatrix[col][i] === 0) {
                posMatrix[col][i] = currentPlayer
                cellNodesMatrix[col][i].style.background = currentPlayer === 1 ? "red" : currentPlayer === 2 && "yellow"
                break;
            }
        }

        if (currentPlayer === 1) {
            currentPlayer = 2;
        } else if (currentPlayer === 2) {
            currentPlayer = 1;
        }
    })
})

function generateCellPosition() {

}