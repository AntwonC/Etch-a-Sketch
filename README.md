# Etch-a-Sketch
Project: Etch-a-Sketch

https://antwonc.github.io/Etch-a-Sketch/

![](https://imgur.com/2nkzJva.png)

# Global Variables: 
-------------------------------------------------------------------------------------------------
DEFAULTSIZE: size of grid<br>  
MAXRGBVALUE: 255<br> 
MINRGBVALUE: 0<br> 
-------------------------------------------------------------------------------------------------
# Functions: 
-------------------------------------------------------------------------------------------------
**reloadGrid(value)**

**Parameters**<br> 
value: size of grid

**Description:**<br>
<br> 
This function will clear the grid and replace it with a blank grid. It does this by going through the whole grid and making every pixel white. We use CSS Grid functions to 
get our desired outcome. This function also uses the **addHoverEffect(color)** function 
to get the trailing effect.
<br>  
-------------------------------------------------------------------------------------------------
**addHoverEffect(color)** 

**Parameters**<br> 
color: the hexcode value of chosen color for trail 

**Description:**<br> 
<br> 
This function adds the trailing effect for mouseover events over the grid. The color will be 
what is selected for the color wheel. 
<br> 
-------------------------------------------------------------------------------------------------
**clearGrid(value)** 

**Parameters**<br> 
value: Size of the grid 

**Description:**<br> 
<br> 
This function will clear the grid when the "CLEAR" button is clicked. It will loop through each pixel of the grid and change the default color to white. It uses **reloadGrid(value)** function to help with clearing the grid. 
<br> 
-------------------------------------------------------------------------------------------------
**rainbowSquares()** 

**Parameters**<br>
None 

**Description:**<br> 
<br> 
This function will go through each pixel and calculate a random RGB value from 0-255 three times. 
Every 10th pixel will 100% be a black pixel just to see if it works properly. Each pixel will be a random color.
<br> 
-------------------------------------------------------------------------------------------------
**changeSliderText(sliderValue)**

**Parameters**<br>
sliderValue: selected size of the slider 

**Description:**<br> 
<br> 
This function visually changes the slider text to the selected grid size. 
<br> 
-------------------------------------------------------------------------------------------------
**changeGrid(sliderValue)** 

**Parameters**<br>
sliderValue: size of the grid that is selected

**Description:**<br> 
<br> 
This function uses the **clearGrid(sliderValue)** and **reloadGrid(sliderValue)** to change the size of the grid.
<br>  
-------------------------------------------------------------------------------------------------
**eraserEffect()** 

**Parameters**<br> 
None

**Description:**<br> 
<br> 
This function when executed goes through every pixel and then adds an event listener to all the 
pixels and changes the color to white. 
<br> 
-------------------------------------------------------------------------------------------------

**The color wheel picker uses the iro.js color wheel API to get the selected color the user picks.**
