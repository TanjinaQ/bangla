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

    const consonantCardsContainer = document.querySelector('.flashcards-consonants');

    const consonants = [
        { bangla: 'ক', english: 'ka', pronunciation: '"k"ite', name: 'Ka' },
        { bangla: 'খ', english: 'kha', pronunciation: '"kh"an', name: 'Kha' },
        { bangla: 'গ', english: 'ga', pronunciation: '"g"un', name: 'Ga' },
        { bangla: 'ঘ', english: 'gha', pronunciation: '"gh"at', name: 'Gha' },
        { bangla: 'ঙ', english: 'nga', pronunciation: 'si"ng"', name: 'Nga' },
        { bangla: 'চ', english: 'cha', pronunciation: '"ch"at', name: 'Cha' },
        { bangla: 'ছ', english: 'chha', pronunciation: '"chh"air', name: 'Chha' },
        { bangla: 'জ', english: 'ja', pronunciation: '"j"ug', name: 'Ja' },
        { bangla: 'ঝ', english: 'jha', pronunciation: '"jh"ar', name: 'Jha' },
        { bangla: 'ঞ', english: 'nya', pronunciation: '"gn"ome', name: 'Nya' },
        { bangla: 'ট', english: 'tta', pronunciation: '"t"op', name: 'Tta' },
        { bangla: 'ঠ', english: 'ttha', pronunciation: '"th"ing', name: 'Ttha' },
        { bangla: 'ড', english: 'dda', pronunciation: '"d"rum', name: 'Dda' },
        { bangla: 'ঢ', english: 'ddha', pronunciation: '"dh"ire', name: 'Ddhi' },
        { bangla: 'ণ', english: 'na', pronunciation: '"n"ose', name: 'Na' },
        { bangla: 'ত', english: 'ta', pronunciation: '"t"all', name: 'Ta' },
        { bangla: 'থ', english: 'tha', pronunciation: '"th"umb', name: 'Tha' },
        { bangla: 'দ', english: 'da', pronunciation: '"d"og', name: 'Da' },
        { bangla: 'ধ', english: 'dha', pronunciation: '"dh"arma', name: 'Dha' },
        { bangla: 'ন', english: 'na', pronunciation: '"n"et', name: 'Na' },
        { bangla: 'প', english: 'pa', pronunciation: '"p"ot', name: 'Pa' },
        { bangla: 'ফ', english: 'pha', pronunciation: '"ph"one', name: 'Pha' },
        { bangla: 'ব', english: 'ba', pronunciation: '"b"all', name: 'Ba' },
        { bangla: 'ভ', english: 'bha', pronunciation: '"bh"avana', name: 'Bha' },
        { bangla: 'ম', english: 'ma', pronunciation: '"m"an', name: 'Ma' },
        { bangla: 'য', english: 'ya', pronunciation: '"y"es', name: 'Ya' },
        { bangla: 'র', english: 'ra', pronunciation: '"r"un', name: 'Ra' },
        { bangla: 'ল', english: 'la', pronunciation: '"l"ine', name: 'La' },
        { bangla: 'শ', english: 'sha', pronunciation: '"sh"ip', name: 'Sha' },
        { bangla: 'ষ', english: 'ssa', pronunciation: '"sh"un', name: 'Ssa' },
        { bangla: 'স', english: 'sa', pronunciation: '"s"un', name: 'Sa' },
        { bangla: 'হ', english: 'ha', pronunciation: '"h"at', name: 'Ha' },
        { bangla: 'ড়', english: 'rha', pronunciation: '"r"are', name: 'Rha' },
        { bangla: 'ঢ়', english: 'rra', pronunciation: '"r"un', name: 'Rra' },
        { bangla: 'য়', english: 'ya', pronunciation: '"y"et', name: 'Ya' },
        { bangla: 'ৎ', english: 't', pronunciation: '"t"ake', name: 'T' },
        { bangla: 'ং', english: 'nga', pronunciation: 'si"ng"', name: 'Nga' },
        { bangla: 'ঃ', english: 'h', pronunciation: 'ba"h"', name: 'H' },
        { bangla: 'ঁ', english: 'n', pronunciation: 'si"n"', name: 'N' }
    ];

    // Generate flashcards for consonants
    consonants.forEach(consonant => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        // Front of the card - Bangla consonant with hover name
        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');

        // Bangla letter div
        const banglaLetter = document.createElement('div');
        banglaLetter.textContent = consonant.bangla;
        banglaLetter.classList.add('bangla-letter');
        banglaLetter.style.fontSize = '36px';

        // Consonant name div (hidden initially)
        const consonantName = document.createElement('div');
        consonantName.textContent = consonant.name;
        consonantName.classList.add('vowel-name'); // Reusing the class for styling

        cardFront.appendChild(banglaLetter);
        cardFront.appendChild(consonantName);

        // Back of the card - English transliteration and pronunciation
        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');

        const englishContainer = document.createElement('div');

        const englishLetter = document.createElement('div');
        englishLetter.textContent = consonant.english;
        englishLetter.style.fontSize = '24px';  // English transliteration

        const pronunciation = document.createElement('div');
        pronunciation.textContent = consonant.pronunciation;
        pronunciation.style.fontSize = '20px';  // Smaller font for pronunciation

        englishContainer.appendChild(englishLetter);
        englishContainer.appendChild(pronunciation);

        cardBack.appendChild(englishContainer);
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);

        consonantCardsContainer.appendChild(card);

        // Add click event to flip the card
        card.addEventListener('click', function () {
            card.classList.toggle('flip');
        });
    });

     // Container for number flashcards
     const numbersCardsContainer = document.querySelector('.flashcards-numbers');

     const numbers = [
         { bangla: '১', english: '1', pronunciation: 'Ek' },
         { bangla: '২', english: '2', pronunciation: 'Dui' },
         { bangla: '৩', english: '3', pronunciation: 'Tin' },
         { bangla: '৪', english: '4', pronunciation: 'Char' },
         { bangla: '৫', english: '5', pronunciation: 'Panch' },
         { bangla: '৬', english: '6', pronunciation: 'Chhoy' },
         { bangla: '৭', english: '7', pronunciation: 'Sat' },
         { bangla: '৮', english: '8', pronunciation: 'Aat' },
         { bangla: '৯', english: '9', pronunciation: 'Noy' },
         { bangla: '১০', english: '10', pronunciation: 'Dosh' }
     ];
 
     // Generate flashcards for numbers
     numbers.forEach(number => {
         const card = document.createElement('div');
         card.classList.add('card');
 
         const cardInner = document.createElement('div');
         cardInner.classList.add('card-inner');
 
         // Front of the card - Bangla number
         const cardFront = document.createElement('div');
         cardFront.classList.add('card-front');
 
         // Bangla number div
         const banglaNumber = document.createElement('div');
         banglaNumber.textContent = number.bangla;
         banglaNumber.classList.add('bangla-letter');
         banglaNumber.style.fontSize = '36px';
 
         cardFront.appendChild(banglaNumber);
 
         // Back of the card - English number and pronunciation
         const cardBack = document.createElement('div');
         cardBack.classList.add('card-back');
 
         const englishContainer = document.createElement('div');
 
         const englishNumber = document.createElement('div');
         englishNumber.textContent = number.english;
         englishNumber.style.fontSize = '24px';  // English number
 
         const pronunciation = document.createElement('div');
         pronunciation.textContent = number.pronunciation;
         pronunciation.style.fontSize = '20px';  // Pronunciation
 
         englishContainer.appendChild(englishNumber);
         englishContainer.appendChild(pronunciation);
 
         cardBack.appendChild(englishContainer);
         cardInner.appendChild(cardFront);
         cardInner.appendChild(cardBack);
         card.appendChild(cardInner);
 
         numbersCardsContainer.appendChild(card);
 
         // Add click event to flip the card
         card.addEventListener('click', function () {
             card.classList.toggle('flip');
         });
     });
});
