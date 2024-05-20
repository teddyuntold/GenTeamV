// creating a function for the random colours 

function randomColors() {
    const colors = ['Green','Blue','Red'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// creating a function for the colors to change:  This function takes an element parameter which refers to the clicked h5 tag. It then sets the color, background-color, and font-weight of the element to a random color from the getRandomColor() function
function changeColor(element) {
    const color = randomColors();
    element.style.backgroundColor = color;
    element.style.fontweight = color;
    element.style.color = color;
}

// creating an event listener 
document.querySelectorAll('.colorChanger').forEach(element => {
    element.addEventListener('click', () => changeColor(element));
  });