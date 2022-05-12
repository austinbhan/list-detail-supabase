// import functions and grab DOM elements

import { renderVegetable } from './utils.js';
import { getVegetables } from './vegetable-supabase.js';

async function loadData() {
    const vegetables = await getVegetables();
    console.log(vegetables);
    const main = document.getElementById('vegetable-section');

    for (let vegetable of vegetables) {
        const vegetableDiv = renderVegetable(vegetable);
        main.append(vegetableDiv);
    }
}

loadData();


// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
