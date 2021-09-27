const gridContainer = document.querySelector(".grid-container");

let counter = 0; 
/* Generation of 16x16 grid STARTS*/
for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        
        const squareElement = document.createElement("div"); 
        squareElement.style = "background-color: #e6ebe6; height: 25px; width: 25px;"; 
        squareElement.classList.add("square");
        gridContainer.appendChild(squareElement);  

        counter++; 
    
    }
    // Subtract one from height and width for anything > 16
}

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

    
});






//console.log(squareGrid); 
//console.log(counter); 