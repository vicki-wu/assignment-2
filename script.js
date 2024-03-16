// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let grid = document.getElementById("grid");
    let numRows = grid.rows.length;
    let numCols = numRows > 0 ? grid.rows[0].cells.length : 0; 

    let newRow = grid.insertRow();
   
    if (numCols === 0) {
        let newCell = newRow.insertCell();
        newCell.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };
    } else {
        for (let i = 0; i < numCols; i++) {
            let newCell = newRow.insertCell();
            newCell.onclick = function() {
                this.style.backgroundColor = colorSelected;
            };
        }
    }
}

// Add a column
function addC() {
    let grid = document.getElementById("grid");
    let numRows = grid.rows.length;
    let numCols = numRows > 0 ? grid.rows[0].cells.length : 0; 

    for (let i = 0; i < numRows; i++) {
        let newCell = grid.rows[i].insertCell();
        newCell.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };
    }

    if (numRows === 0) {
        let newRow = grid.insertRow();
        let newCell = newRow.insertCell();
        newCell.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };
    }
}


// Remove a row
function removeR() {
    let grid = document.getElementById("grid");
    let numRows = grid.rows.length;

    if (numRows > 0) {
        grid.deleteRow(-1);
    }
}

// Remove a column
function removeC() {
    let grid = document.getElementById("grid");
    let numRows = grid.rows.length;

    if (numRows > 0) {
        for (let i = 0; i < numRows; i++) {
            grid.rows[i].deleteCell(-1);
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let grid = document.getElementById("grid");
    let numRows = grid.rows.length;
    let numCols = grid.rows[0].cells.length;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (grid.rows[i].cells[j].style.backgroundColor === "") {
                grid.rows[i].cells[j].style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll(){
    let grid = document.getElementById("grid");
    let numRows = grid.rows.length;
    let numCols = grid.rows[0].cells.length;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            grid.rows[i].cells[j].style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    let grid = document.getElementById("grid");
    let numRows = grid.rows.length;
    let numCols = grid.rows[0].cells.length;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            grid.rows[i].cells[j].style.backgroundColor = "";
        }
    }
}