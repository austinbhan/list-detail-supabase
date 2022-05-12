// This Page is Connected to vegetable-page HTML
import { getVegetable } from '../vegetable-supabase.js';


// New Function Attempt 
const vegetableDiv = document.getElementById('vegetable-div');

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const vegetable = await getVegetable(id);
    vegetableDiv.textContent = vegetable.name;
}

loadData();