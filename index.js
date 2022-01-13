// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>sum(1)(2)(3)(4)() - JS recursion problem</h1>`;

let sum = function(a) {
  return function(b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  }
}
console.log(sum(1)(2)(3)(4)())
