document.addEventListener('DOMContentLoaded', function () {
    const flashcardsContainer = document.querySelector('.flashcards');

    const vowels = [
        { bangla: 'অ', english: 'aw', pronunciation: '"o"bvious', name: 'Shorey Aw' },
        { bangla: 'আ', english: 'aa', pronunciation: '"a"rmy', name: 'Shorey Aa' },
        { bangla: 'ই', english: 'i', pronunciation: '"e"ast', name: 'Rossho E' },
        { bangla: 'ঈ', english: 'ii', pronunciation: '"ea"gle', name: 'Dirgho Ee' },
        { bangla: 'উ', english: 'u', pronunciation: '"oo"p', name: 'Rossho U' },
        { bangla: 'ঊ', english: 'uu', pronunciation: '"oo"ze', name: 'Dirgho Oo' },
        { bangla: 'ঋ', english: 'ri', pronunciation: '"ri"ch', name: 'Ri' },
        { bangla: 'ঌ', english: 'lee', pronunciation: 'ear"ly"', name: 'Lee' },
        { bangla: 'এ', english: 'e', pronunciation: '"e"gg', name: 'E' },
        { bangla: 'ঐ', english: 'oy', pronunciation: '"oi"l', name: 'Oy' },
        { bangla: 'ও', english: 'o', pronunciation: 'loc"o"motion', name: 'O' },
        { bangla: 'ঔ', english: 'ou', pronunciation: '"o"ld', name: 'Ou' }
    ];

    vowels.forEach(vowel => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        // Front of the card - Bangla vowel with hover name
        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');

        // Bangla letter div
        const banglaLetter = document.createElement('div');
        banglaLetter.textContent = vowel.bangla;
        banglaLetter.classList.add('bangla-letter');
        banglaLetter.style.fontSize = '36px';

        // Vowel name div (hidden initially)
        const vowelName = document.createElement('div');
        vowelName.textContent = vowel.name;
        vowelName.classList.add('vowel-name');

        cardFront.appendChild(banglaLetter);
        cardFront.appendChild(vowelName);

        // Back of the card - English transliteration and pronunciation
        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');

        const englishContainer = document.createElement('div');

        const englishLetter = document.createElement('div');
        englishLetter.textContent = vowel.english;
        englishLetter.style.fontSize = '24px';  // English transliteration

        const pronunciation = document.createElement('div');
        pronunciation.textContent = vowel.pronunciation;
        pronunciation.style.fontSize = '20px';  // Smaller font for pronunciation

        englishContainer.appendChild(englishLetter);
        englishContainer.appendChild(pronunciation);

        cardBack.appendChild(englishContainer);
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);

        flashcardsContainer.appendChild(card);

        // Add click event to flip the card
        card.addEventListener('click', function () {
            card.classList.toggle('flip');
        });
    });
});
