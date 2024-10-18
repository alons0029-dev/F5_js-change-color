// Select the element whose background color you want to check
const elemento = document.querySelector('elemento');

// Get the computed background color (this returns the color in RGB format)
const backgroundColor = getComputedStyle(elemento).getPropertyValue('background-color');

// Define the colors to check (in RGB format)
const color1 = 'rgb(255, 0, 0)';  // Example: red
const color2 = 'rgb(0, 128, 0)';  // Example: green
const color3 = 'rgb(0, 0, 255)';  // Example: blue

// Conditional to check the background color and execute logic
if (backgroundColor === color1) {
    console.log('The background color is red!');
    // Do something if the background is red
} else if (backgroundColor === color2) {
    console.log('The background color is green!');
    // Do something if the background is green
} else if (backgroundColor === color3) {
    console.log('The background color is blue!');
    // Do something if the background is blue
} else {
    console.error('Error: Background color does not match any specified color.');
    // Handle the error case
}
