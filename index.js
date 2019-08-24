// Import stylesheets
import './style.css';


const colors = ['red', 'aqua', 'green', 'yellow', 'blue'];
const ids = ['rainbow', 'cycle'];

// Write Javascript code!
const getColorElement = (color) => {
  const div = document.createElement('div');
  div.style.paddingTop = '10px';
  div.style.backgroundColor = color;
  div.style.paddingBottom = '10px';
  return div;
}

const getElementsById = id => document.getElementById(id);

const appendChild = (colorElement) => (parentElement) =>      parentElement.appendChild(colorElement);

const colorsFunction = 
  colors.map(getColorElement)
        .map(appendChild);

const applyColor = element => colorsFunction.map(f => f(element));

ids.map(getElementsById)
   .map(applyColor);