const DEFAULTSIZE = 16; 
const MAXRGBVALUE = 255; 
const MINRGBVALUE = 0; 

const gridContainer = document.querySelector(".grid-container");
const actualContainer = document.querySelector(".actual-grid");
const clear = document.querySelector("#clearButton"); 
const rainbowEffect = document.querySelector("#rainbowButton"); 
const slider = document.querySelector("#myRange"); 
const slideContainer = document.querySelector(".slideContainer"); 
const colorPicker = new iro.ColorPicker("#picker", {
    width: 100, 
    color: "#71f5f1"
}); 


function reloadGrid(value) {
    for(let i = 0; i < value; i++) {
        for(let j = 0; j < value; j++) {
            
            const squareElement = document.createElement("div"); 
            squareElement.style = `background-color: white;`; 
            squareElement.classList.add("square");
            actualContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
            actualContainer.style.gridTemplateRows = `repeat(${value}, 1fr)`;
           // actualContainer.style = `grid-template-columns: repeat(${gridSize}, minmax(0,1fr) [col-start]);`;
            //actualContainer.style = `grid-template-rows: repeat(${gridSize}, minxmax(0,1fr) [row-end]);`;
            actualContainer.appendChild(squareElement);  
    
           // counter++; 
        
        }
        
    }

    addHoverEffect(colorPicker.color.hexString); 
    gridContainer.appendChild(actualContainer); 
}

function addHoverEffect(color) {
    const squareGrid = document.querySelectorAll(".square"); 

        squareGrid.forEach((squareBox) => {

        squareBox.addEventListener("mouseover", (e) => {
            squareBox.style.backgroundColor = color;
            //console.log("Hovered over");
        
        });
    });
}


function clearGrid(value) {
   // console.log("Value in clearGrid(): " + value); 
    const squareGrid = document.querySelectorAll(".square"); 
    let newGrid = null; 

    squareGrid.forEach((squareBox) => {
            squareBox.style.backgroundColor = "white";
    });

    //newGrid = Number(prompt("Enter a number for a new grid"));
    actualContainer.textContent = ''; 
    reloadGrid(value); 

}

function rainbowSquares() {
    const squareGrid = document.querySelectorAll(".square"); 

    let counter = 0; 

    squareGrid.forEach((squareBox) => {

        squareBox.addEventListener("mouseover", (e) => {
            if ( counter == 10 ) {
                counter = 0; 
                squareBox.style.backgroundColor = "black"; 
            }
            let firstValue = Math.floor(Math.random() * (MAXRGBVALUE - MINRGBVALUE +1) + MINRGBVALUE);
            let secondValue = Math.floor(Math.random() * (MAXRGBVALUE - MINRGBVALUE +1) + MINRGBVALUE);
            let thirdValue = Math.floor(Math.random() * (MAXRGBVALUE - MINRGBVALUE +1) + MINRGBVALUE);

            squareBox.style.backgroundColor = `rgb(${firstValue}, ${secondValue}, ${thirdValue})`; 
            counter++; 

        });
    });

}

function changeSliderText(sliderValue) {
    sliderTextValue.textContent = `${sliderValue}x${sliderValue}`;
}

function changeGrid(sliderValue) {
    //console.log(sliderValue);
    clearGrid(sliderValue);
    reloadGrid(sliderValue); 
   
}

/* Shows the current grid STARTS */ 
const sliderTextValue = document.createElement("div");
sliderTextValue.textContent = slider.value + "x" + slider.value;
sliderTextValue.classList.add("slideText");  
slideContainer.appendChild(sliderTextValue); 
/* Shows the current grid ENDS */

reloadGrid(DEFAULTSIZE); 

clear.addEventListener("click", () =>{
    clearGrid(slider.value); 
}); 
rainbowEffect.addEventListener("click", rainbowSquares); 

colorPicker.on("color:change", function(color) {
    addHoverEffect(color.hexString);
    //console.log(color.hexString); 
});

slider.addEventListener("change", () => {
    changeSliderText(slider.value);
    changeGrid(slider.value);
});


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


//console.log(counter); 
/* Generation of 16x16 grid ENDS*/

/* The "pen-like" effect of hovering over elements STARTS */
/*const squareGrid = document.querySelectorAll(".square"); 

squareGrid.forEach((squareBox) => {

    squareBox.addEventListener("mouseover", (e) => {
        squareBox.style.backgroundColor = "red";
        //console.log("Hovered over");
       
    });
}); */
/* The "pen-like" effect of hovering over elements ENDS */









//console.log(squareGrid); 
//console.log(counter); 