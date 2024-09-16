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

    // Function to show the selected section and hide others
    function showSection(sectionId) {
        const sections = ['home', 'vowels', 'consonants', 'numbers'];
        sections.forEach(id => {
            document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
        });
    }

    // Event listeners for navigation links
    document.getElementById('home-link').addEventListener('click', function (event) {
        event.preventDefault();
        showSection('home');
    });

    document.getElementById('vowels-link').addEventListener('click', function (event) {
        event.preventDefault();
        showSection('vowels');
    });

    document.getElementById('consonants-link').addEventListener('click', function (event) {
        event.preventDefault();
        showSection('consonants');
    });

    document.getElementById('numbers-link').addEventListener('click', function (event) {
        event.preventDefault();
        showSection('numbers');
    });

    // Initially show the home section
    showSection('home');
});
