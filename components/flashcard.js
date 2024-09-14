export default class Flashcard {
    constructor(data, container) {
        this.data = data;
        this.container = container;
    }

    createCard(item) {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        // Front of the card - Bangla character
        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');

        // Bangla letter div
        const banglaLetter = document.createElement('div');
        banglaLetter.textContent = item.bangla;
        banglaLetter.classList.add('bangla-letter');
        banglaLetter.style.fontSize = '36px';

        cardFront.appendChild(banglaLetter);

        // Check if item has a name or image for the front
        if (item.name) {
            const name = document.createElement('div');
            name.textContent = item.name;
            name.classList.add('vowel-name');
            cardFront.appendChild(name);
        }

        if (item.image) {
            const image = document.createElement('img');
            image.src = item.image;
            image.alt = item.name;
            image.style.width = '50px'; // Adjust the size as needed
            image.style.height = '50px';
            image.style.marginTop = '10px';
            cardFront.appendChild(image);
        }

        // Back of the card - English transliteration and pronunciation
        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');

        const englishContainer = document.createElement('div');

        const englishLetter = document.createElement('div');
        englishLetter.textContent = item.english;
        englishLetter.style.fontSize = '24px';  // English transliteration

        const pronunciation = document.createElement('div');
        pronunciation.textContent = item.pronunciation;
        pronunciation.style.fontSize = '20px';  // Smaller font for pronunciation

        englishContainer.appendChild(englishLetter);
        englishContainer.appendChild(pronunciation);

        cardBack.appendChild(englishContainer);
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);

        // Add click event to flip the card
        card.addEventListener('click', function () {
            card.classList.toggle('flip');
        });

        this.container.appendChild(card);
    }

    render() {
        this.data.forEach(item => {
            this.createCard(item);
        });
    }
}
