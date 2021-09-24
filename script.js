const gridContainer = document.querySelector(".grid-container");

//let counter = 0; 

for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        
        const squareElement = document.createElement("div"); 
        squareElement.style = "background-color: #555; height: 25px; width: 25px;"; 
        squareElement.classList.add("square");
        gridContainer.appendChild(squareElement);  
    
        if ( i % 4 === 0 ) {
            squareElement.style = "background-color: blue; height: 25px; width: 25px;";
        }
       // counter++; 
    }

}

//console.log(counter); 