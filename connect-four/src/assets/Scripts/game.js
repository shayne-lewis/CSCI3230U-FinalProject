// DOM Elements
const resetButton = document.querySelector('.reset');
const statusSpan = document.querySelector('.status');

// columns
column0 = Array.from(document.querySelectorAll('.col-0')).reverse();
column1 = Array.from(document.querySelectorAll('.col-1')).reverse();
column2 = Array.from(document.querySelectorAll('.col-2')).reverse();;
column3 = Array.from(document.querySelectorAll('.col-3')).reverse();;
column4 = Array.from(document.querySelectorAll('.col-4')).reverse();;
column5 = Array.from(document.querySelectorAll('.col-5')).reverse();;
column6 = Array.from(document.querySelectorAll('.col-6')).reverse();;
columns = [column0, column1, column2, column3, column4, column5, column6];


// rows

topRow = Array.from(document.querySelectorAll('.row-top'));
row0 = Array.from(document.querySelectorAll('.row-0'));
row1 = Array.from(document.querySelectorAll('.row-1'));
row2 = Array.from(document.querySelectorAll('.row-2'));
row3 = Array.from(document.querySelectorAll('.row-3'));
row4 = Array.from(document.querySelectorAll('.row-4'));
row5 = Array.from(document.querySelectorAll('.row-5'));
rows = [row0, row1, row2, row3, row4, row5];

// variables
let gameIsLive = true;
let yellowIsNext = true;


// Functions
const getClassListArray = (cell) => {
    const classList = cell.classList;
    return [...classList];
};

const getCellLocation = (cell) => {
    const classList = getClassListArray(cell);

    const rowClass = classList.find(className => className.includes('row'));
    const colClass = classList.find(className => className.includes('col'));
    const rowIndex = rowClass[4];
    const colIndex = colClass[4];
    const rowNumber = parseInt(rowIndex, 10);
    const colNumber = parseInt(colIndex, 10);

    return [rowNumber, colNumber];
};

const getFirstOpenCellForColumn = (colIndex) => {
    const column = columns[colIndex];
    const columnWithoutTop = column.slice(0, 6);

    for (const cell of columnWithoutTop) {
        const classList = getClassListArray(cell);
        if (!classList.includes('yellow') && !classList.includes('red')) {
            return cell;
        }
    }

    return null;
};

const clearColorFromTop = (colIndex) => {
    const topCell = topRow[colIndex];
    topCell.classList.remove('yellow');
    topCell.classList.remove('red');
};

const getColorOfCell = (cell) => {
    const classList = getClassListArray(cell);
    if (classList.includes('yellow')) return 'yellow';
    if (classList.includes('red')) return 'red';
    return null;
};

const checkWinningCells = (cells) => {
    if (cells.length < 4) return false;

    gameIsLive = false;
    for (const cell of cells) {
        cell.classList.add('won');
    }
    statusSpan.textContent = `${yellowIsNext ? 'Yellow' : 'Red'} has won!`
    return true;
};

const checkStatusOfGame = (cell) => {
    const color = getColorOfCell(cell);
    if (!color) return;
    const [rowIndex, colIndex] = getCellLocation(cell);

    // Check horizontally
    let winningCells = [cell];
    let currRow = rowIndex;
    let currCol = colIndex - 1;
    while (currCol >= 0) {
        const cellToCheck = rows[currRow][currCol];
        if (getColorOfCell(cellToCheck) === color) {
            winningCells.push(cellToCheck);
            currCol--;
        } else {
            break;
        }
    }
    currCol = colIndex + 1;
    while (currCol <= 6) {
        const cellToCheck = rows[currRow][currCol];
        if (getColorOfCell(cellToCheck) === color) {
            winningCells.push(cellToCheck);
            currCol++;
        } else {
            break;
        }
    }
    let isWinningCombo = checkWinningCells(winningCells);
    if (isWinningCombo) return;


    // Check vertically
    winningCells = [cell];
    currRow = rowIndex - 1;
    currCol = colIndex;
    while (currRow >= 0) {
        const cellToCheck = rows[currRow][currCol];
        if (getColorOfCell(cellToCheck) === color) {
            winningCells.push(cellToCheck);
            currRow--;
        } else {
            break;
        }
    }
    currRow = rowIndex + 1;
    while (currRow <= 5) {
        const cellToCheck = rows[currRow][currCol];
        if (getColorOfCell(cellToCheck) === color) {
            winningCells.push(cellToCheck);
            currRow++;
        } else {
            break;
        }
    }
    isWinningCombo = checkWinningCells(winningCells);
    if (isWinningCombo) return;


    // Check diagonally /
    winningCells = [cell];
    currRow = rowIndex + 1;
    currCol = colIndex - 1;
    while (currCol >= 0 && currRow <= 5) {
        const cellToCheck = rows[currRow][currCol];
        if (getColorOfCell(cellToCheck) === color) {
            winningCells.push(cellToCheck);
            currRow++;
            currCol--;
        } else {
            break;
        }
    }
    currRow = rowIndex - 1;
    currCol = colIndex + 1;
    while (currCol <= 6 && currRow >= 0) {
        const cellToCheck = rows[currRow][currCol];
        if (getColorOfCell(cellToCheck) === color) {
            winningCells.push(cellToCheck);
            currRow--;
            currCol++;
        } else {
            break;
        }
    }
    isWinningCombo = checkWinningCells(winningCells);
    if (isWinningCombo) return;


    // Check diagonally \
    winningCells = [cell];
    currRow = rowIndex - 1;
    currCol = colIndex - 1;
    while (currCol >= 0 && currRow >= 0) {
        const cellToCheck = rows[currRow][currCol];
        if (getColorOfCell(cellToCheck) === color) {
            winningCells.push(cellToCheck);
            currRow--;
            currCol--;
        } else {
            break;
        }
    }
    currRow = rowIndex + 1;
    currCol = colIndex + 1;
    while (currCol <= 6 && currRow <= 5) {
        const cellToCheck = rows[currRow][currCol];
        if (getColorOfCell(cellToCheck) === color) {
            winningCells.push(cellToCheck);
            currRow++;
            currCol++;
        } else {
            break;
        }
    }
    isWinningCombo = checkWinningCells(winningCells);
    if (isWinningCombo) return;

    // Check to see if we have a tie
    const rowsWithoutTop = rows.slice(0, 6);
    for (const row of rowsWithoutTop) {
        for (const cell of row) {
            const classList = getClassListArray(cell);
            if (!classList.includes('yellow') && !classList.includes('red')) {
                return;
            }
        }
    }

    gameIsLive = false;
    statusSpan.textContent = "Game is a tie!";
};

// Event Handlers
const handleCellMouseOver = (e) => {
    if (!gameIsLive) return;
    const cell = e.target;
    const [rowIndex, colIndex] = getCellLocation(cell);

    const topCell = topRow[colIndex];
    topCell.classList.add(yellowIsNext ? 'yellow' : 'red');
};

const handleCellMouseOut = (e) => {
    const cell = e.target;
    const [rowIndex, colIndex] = getCellLocation(cell);
    clearColorFromTop(colIndex);
};

const handleCellClick = (e) => {
    if (!gameIsLive) return;
    const cell = e.target;
    const [rowIndex, colIndex] = getCellLocation(cell);

    const openCell = getFirstOpenCellForColumn(colIndex);

    if (!openCell) return;

    openCell.classList.add(yellowIsNext ? 'yellow' : 'red');
    checkStatusOfGame(openCell);

    yellowIsNext = !yellowIsNext;
    clearColorFromTop(colIndex);
    if (gameIsLive) {
        const topCell = topRow[colIndex];
        topCell.classList.add(yellowIsNext ? 'yellow' : 'red');
    }
};




// Adding Event Listeners
for (const row of rows) {
    for (const cell of row) {
        cell.addEventListener('mouseover', handleCellMouseOver);
        cell.addEventListener('mouseout', handleCellMouseOut);
        cell.addEventListener('click', handleCellClick);
    }
}

resetButton.addEventListener('click', () => {
    for (const row of rows) {
        for (const cell of row) {
            cell.classList.remove('red');
            cell.classList.remove('yellow');
            cell.classList.remove('won');
        }
    }
    gameIsLive = true;
    yellowIsNext = true;
    statusSpan.textContent = '';
});