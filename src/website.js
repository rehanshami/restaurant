import loadHome from './pageLoad.js';
import loadContact from './contact.js';
import loadMenu from './menu.js';

// create header
function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Pizzaria';
    restaurantName.classList.add('restaurant-name');

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
    
}

function createNav() {
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('button-nav');
    homeButton.textContent = 'Home';

    homeButton.addEventListener('click', ()=> {
        setActiveButton(homeButton);
        loadHome();
    })

    
    const menuButton = document.createElement('button');
    menuButton.classList.add('button-nav');
    menuButton.textContent = 'Menu';

    menuButton.addEventListener('click', ()=> {
        setActiveButton(menuButton);
        loadMenu();
    })


    const contactButton = document.createElement('button');
    contactButton.classList.add('button-nav');
    contactButton.textContent = 'Contact';

    contactButton.addEventListener('click', ()=> {
        setActiveButton(contactButton);
        loadContact();
    })

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    return main;
}

function initializeWebsite() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMain());

    loadHome();
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('button-nav');
    console.log(buttons);

    buttons.forEach((btn)=> {
        if (btn !== button) {
            button.classList.remove('active');
        }
    });
    button.classList.add('active');
}

export default initializeWebsite;
// create nav

// create main

// create footer
