import './style.css';
import cheesyMeat from './cheese-and-meat-pizza.png';
import meatVeges from './meat-and-veges.png';
import meatSalami from './meat-salami-pizza.png';
import vegetarian from './vegetarian-pizza.png';

function menuContent() {
    const menu = document.createElement('div');
    menu.classList.add('menu');


    menu.appendChild(createCard('Salsiccia', 'Tomato sauce, Mozarella, 3 types of meat, Garlic, Basil, Olives', meatVeges, 'Meat and vegetables pizza'));

    menu.appendChild(createCard('Gamberi', 'Tomato sauce, Mozarella, Sausage, Basil', cheesyMeat, 'Gamberi pizza'));

    menu.appendChild(createCard('Vegetarian', 'Tomato sauce, Mozarella, Olives, Mushrooms, Basil', vegetarian, 'Vegetarian pizza'));

    menu.appendChild(createCard('Pepperoni', 'Spicy salami, Tomato sauce, Mozarella, Tomato, Olives', meatSalami, 'Spicy salami pizza'));


    return menu;

    
}


function createCard(title, text, img, altText) {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardImage = document.createElement('img');
    cardImage.src = img;
    cardImage.alt = altText;

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;
    

    const cardText = document.createElement('p');
    cardText.textContent = text;

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardText);

    return card;

}

function loadMenu() {
    const main = document.querySelector('main');
    main.textContent = "";
    main.appendChild(menuContent());
}

export default loadMenu;

