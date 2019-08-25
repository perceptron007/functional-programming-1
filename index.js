// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('rainbow');

const addColor = color => {
  const element = document.getElementById('rainbow');
  const div = document.createElement('div');
  div.style.paddingTop = '10px';
  div.style.backgroundColor = color;
  div.style.paddingBottom = '10px';
  element.appendChild(div);
}

addColor('red');
addColor('orange');
addColor('yellow');
addColor('green');
addColor('aqua');