import Flashcard from './components/flashcard.js';
import { vowels } from './data/vowels.js';
import { consonants } from './data/consonants.js';
import { numbers } from './data/numbers.js';

document.addEventListener('DOMContentLoaded', function () {
    const vowelsContainer = document.querySelector('.flashcards');
    const consonantsContainer = document.querySelector('.flashcards-consonants');
    const numbersContainer = document.querySelector('.flashcards-numbers');

    // Create Flashcard instances
    const vowelFlashcards = new Flashcard(vowels, vowelsContainer);
    const consonantFlashcards = new Flashcard(consonants, consonantsContainer);
    const numberFlashcards = new Flashcard(numbers, numbersContainer);

    // Render flashcards
    vowelFlashcards.render();
    consonantFlashcards.render();
    numberFlashcards.render();
});
