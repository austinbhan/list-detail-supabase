// This Page is Connected to vegetable-page HTML
import { getVegetable } from '../vegetable-supabase.js';

const vegetableDiv = document.getElementById('vegetable-div');

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const vegetable = await getVegetable(id);

    const img = document.createElement('img');
    img.setAttribute('id', 'vegetable-picture');
    img.src = `../assets/${vegetable.name}.jpg`;

    const description = document.createElement('div');
    description.setAttribute('id', 'vegetable-description');
    description.textContent = `Say hi to ${vegetable.name}. They're ${vegetable.color} and cost $${vegetable.price}.`;

    vegetableDiv.append(img, description);
}

loadData();