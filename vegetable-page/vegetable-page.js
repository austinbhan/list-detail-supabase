// This Page is Connected to vegetable-page HTML

import { findById } from '../utils.js';
import { vegetables } from '../vegetables.js';

console.log('Your JS is fully functional');

const params = new URLSearchParams(window.location.search);

const vegetable = findById(params.get('id'), vegetables); 
console.log(vegetable);

// create element in vegetable detail index, then pull into vegetable-page.js,
// and then target key value inside of the array.
const hi = document.getElementById('hi');
hi.textContent = vegetable.name;

const img = document.createElement('img');
img.src = `../assets/${vegetable.name}.jpg`;

hi.append(img);

console.log(vegetable.image);