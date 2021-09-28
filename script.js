const DEFAULTSIZE = 16; 

const gridContainer = document.querySelector(".grid-container");
const actualContainer = document.querySelector(".actual-grid");

function reloadGrid(value) {
    for(let i = 0; i < value; i++) {
        for(let j = 0; j < value; j++) {
            
            const squareElement = document.createElement("div"); 
            squareElement.style = `background-color: #e6ebe6;`; 
            squareElement.classList.add("square");
            actualContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
            actualContainer.style.gridTemplateRows = `repeat(${value}, 1fr)`;
           // actualContainer.style = `grid-template-columns: repeat(${gridSize}, minmax(0,1fr) [col-start]);`;
            //actualContainer.style = `grid-template-rows: repeat(${gridSize}, minxmax(0,1fr) [row-end]);`;
            actualContainer.appendChild(squareElement);  
    
           // counter++; 
        
        }
        // Subtract one from height and width for anything > 16
    }

    addHoverEffect(); 
}

function addHoverEffect() {
    const squareGrid = document.querySelectorAll(".square"); 

    squareGrid.forEach((squareBox) => {

    squareBox.addEventListener("mouseover", (e) => {
        squareBox.style.backgroundColor = "red";
        //console.log("Hovered over");
       
    });
});
}




const gridSize = 16; 

let counter = 0; 

reloadGrid(DEFAULTSIZE); 
/* Generation of 16x16 grid STARTS*/
/* for(let i = 0; i < gridSize; i++) {
    for(let j = 0; j < gridSize; j++) {
        
        const squareElement = document.createElement("div"); 
        squareElement.style = `background-color: #e6ebe6; height: 25px; width: 25px;`; 
        squareElement.classList.add("square");
        actualContainer.style.gridTemplateColumns = `repeat(${gridSize}, minmax(0,1fr) [col-start])`;
        actualContainer.style.gridTemplateRows = `repeat(${gridSize}, minmax(0,1fr) [row-start])`;
       // actualContainer.style = `grid-template-columns: repeat(${gridSize}, minmax(0,1fr) [col-start]);`;
        //actualContainer.style = `grid-template-rows: repeat(${gridSize}, minxmax(0,1fr) [row-end]);`;
        actualContainer.appendChild(squareElement);  

        counter++; 
    
    }
    // Subtract one from height and width for anything > 16
} */

gridContainer.appendChild(actualContainer); 

console.log(counter); 
/* Generation of 16x16 grid ENDS*/

/* The "pen-like" effect of hovering over elements STARTS */
const squareGrid = document.querySelectorAll(".square"); 

squareGrid.forEach((squareBox) => {

    squareBox.addEventListener("mouseover", (e) => {
        squareBox.style.backgroundColor = "red";
        //console.log("Hovered over");
       
    });
});
/* The "pen-like" effect of hovering over elements ENDS */

const clear = document.querySelector("#clearButton"); 
let newGrid = null; 

clear.addEventListener("click", (e) => {

    squareGrid.forEach((squareBox) => {

            squareBox.style.backgroundColor = "#e6ebe6";
    });

    newGrid = Number(prompt("Enter a number for a new grid"));
    actualContainer.textContent = ''; 
    reloadGrid(newGrid); 
    
});






//console.log(squareGrid); 
//console.log(counter); 