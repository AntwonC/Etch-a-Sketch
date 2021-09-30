const DEFAULTSIZE = 16; 
const MAXRGBVALUE = 255; 
const MINRGBVALUE = 0; 

const gridContainer = document.querySelector(".grid-container");
const actualContainer = document.querySelector(".actual-grid");
const clear = document.querySelector("#clearButton"); 
const rainbowEffect = document.querySelector("#rainbowButton"); 
const eraser = document.querySelector("#eraserButton"); 
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
    eraser.style.backgroundColor = "yellow"; 
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
    eraser.style.backgroundColor = "yellow"; 
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
    eraser.style.backgroundColor = "yellow"; 
    sliderTextValue.textContent = `${sliderValue}x${sliderValue}`;
}

function changeGrid(sliderValue) {
    //console.log(sliderValue);
    clearGrid(sliderValue);
    reloadGrid(sliderValue); 
   
}

function eraserEffect() {
    eraser.style.backgroundColor = "white"; 
    const squareGrid = document.querySelectorAll(".square"); 

    squareGrid.forEach((squareBox) => {

    squareBox.addEventListener("mouseover", (e) => {
        squareBox.style.backgroundColor = "white";
        //console.log("Hovered over");
    
    });
});
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
    eraser.style.backgroundColor = "yellow"; 
    addHoverEffect(color.hexString);
    //console.log(color.hexString); 
});

slider.addEventListener("change", () => {
    changeSliderText(slider.value);
    changeGrid(slider.value);
});

eraser.addEventListener("click", eraserEffect);


