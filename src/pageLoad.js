import './style.css';
import chefImageSrc from './pizza-chef.png';

function createInitialContent() {
    const home = document.createElement('div');
    home.classList.add('home');

    const chefImage = document.createElement('img');
    chefImage.src = chefImageSrc;
    chefImage.alt = 'Chef';

    home.appendChild(createParagraph('Best pizza in your town'));
    home.appendChild(createParagraph('Enjoy the flavors of italy'));
    home.appendChild(chefImage);
    home.appendChild(createParagraph('Made with love since 1948'));

    return home;
}

const createParagraph = (text) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    paragraph.classList.add('para');
    return paragraph;
}

function loadHome() {
    const main = document.querySelector('main');
    main.textContent = "";
    main.appendChild(createInitialContent());
}

export default loadHome;
export {
    createParagraph,
}