// import functions and grab DOM elements
import { vegetables } from '../vegetables.js';
import { renderVegetable } from '../utils.js';

const vegetableSection = document.getElementById('vegetable-section');

function renderVegetables() {
    vegetableSection.textContent = '';
    for (let vegetable of vegetables) {
        const div = renderVegetable(vegetable);
        vegetableSection.append(div);
    }
    return vegetableSection;
}

vegetableSection.append(renderVegetables());

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
