export default class Flashcard {
    constructor(data, container) {
        this.data = data;
        this.container = container;
    }

    createCard(item) {
        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('card-wrapper'); // New wrapper to hold card and button
    
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
    
        // Append the card to the wrapper
        cardWrapper.appendChild(card);
    
        // Add a button with an arrow icon outside the card
        const button = document.createElement('button');
        button.classList.add('navigate-button'); // Add a class for styling if needed
    
        // Add the icon using the Remix Icon class
        const icon = document.createElement('i');
        icon.classList.add('ri-arrow-right-line');
        button.appendChild(icon);
    
        // Use an anchor to navigate to the specific section on the vowels page
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent any event propagation
            window.location.href = `vowelPage.html#vowel-${encodeURIComponent(item.bangla)}`; // Navigate with anchor
        });
    
        // Append the button to the wrapper below the card
        cardWrapper.appendChild(button);
    
        // Add the card wrapper to the container
        this.container.appendChild(cardWrapper);
    }
    
    
    
    

    render() {
        this.data.forEach(item => {
            this.createCard(item);
        });
    }
}
