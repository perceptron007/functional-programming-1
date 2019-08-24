// Import stylesheets
import './style.css';

// Write Javascript code!
const getColorElement = (color) => {
  const div = document.createElement('div');
  div.style.paddingTop = '10px';
  div.style.backgroundColor = color;
  div.style.paddingBottom = '10px';
  return div;
}

const colors = ['red', 'aqua', 'green', 'yellow', 'blue'];
const ids = ['rainbow', 'cycle'];
// What if the addColor was supposed to return a value, forEach will ignore it ?
// What can we do to solve this problem ?
// Change the function above so that it accepts an array of different ids and apply the same logic all over them
const getElementsById = id => document.getElementById(id);
const elements = ids.map(getElementsById);

const appendChild = (colorElement) => (parentElement) => parentElement.appendChild(colorElement);
const colorElements = colors.map(getColorElement);
const colors= colorElements.map(appendChild);

elements.forEach(item => colors.forEach(f => f(item)));