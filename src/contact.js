import './style.css';
import restaurantLocation from './restaurant-location.png';
import { createParagraph } from './pageLoad';

function contactContent() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    contact.appendChild(createParagraph('📞 123 456 789'));
    contact.appendChild(createParagraph('🏠 24 Burtons Rd, California, USA'));

    const locationImage = document.createElement('img');
    locationImage.src = restaurantLocation;
    locationImage.alt = 'Restaurant location';
    contact.appendChild(locationImage);
    return contact;
}

function loadContact() {
    const main = document.querySelector('main');
    main.textContent = "";
    main.appendChild(contactContent());
    console.log('On contact page now BOYYYYSSSS')
}

export default loadContact;