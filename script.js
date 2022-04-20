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
            actualContainer.appendChild(squareElement);  
        
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
           
        });
    });
}


function clearGrid(value) {
    eraser.style.backgroundColor = "yellow"; 
  
    const squareGrid = document.querySelectorAll(".square"); 
    let newGrid = null; 

    squareGrid.forEach((squareBox) => {
            squareBox.style.backgroundColor = "white";
    });

 
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
    
    clearGrid(sliderValue);
    reloadGrid(sliderValue); 
   
}

function eraserEffect() {
    eraser.style.backgroundColor = "white"; 
    const squareGrid = document.querySelectorAll(".square"); 

    squareGrid.forEach((squareBox) => {

    squareBox.addEventListener("mouseover", (e) => {
        squareBox.style.backgroundColor = "white";
        
    
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
// Adding event listener to the CLEAR button
clear.addEventListener("click", () =>{
    clearGrid(slider.value); 
}); 

// The RAINBOW effect when button is clicked
rainbowEffect.addEventListener("click", rainbowSquares); 
// Change trail when a different on color wheel is clicked
colorPicker.on("color:change", function(color) {
    eraser.style.backgroundColor = "yellow"; 
    addHoverEffect(color.hexString);
    
});
// Change size of grid whenever slider is changed
slider.addEventListener("change", () => {
    changeSliderText(slider.value);
    changeGrid(slider.value);
});
// Eraser when button is clicked
eraser.addEventListener("click", eraserEffect);


