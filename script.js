import Flashcard from './components/flashcard.js';
import { vowels } from './data/vowels.js';
import { consonants } from './data/consonants.js';
import { numbers } from './data/numbers.js';

document.addEventListener('DOMContentLoaded', function () {
    const vowelsContainer = document.querySelector('.flashcards');
    const consonantsContainer = document.querySelector('.flashcards-consonants');
    const numbersContainer = document.querySelector('.flashcards-numbers');
    const navbar = document.querySelector('.navbar');

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

    // Function to scroll to the selected section with dynamic offset
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        const offset = navbar.offsetHeight + 20; // Add extra space to the navbar's height as the offset
        const bodyRect = document.body.getBoundingClientRect().top;
        const sectionRect = section.getBoundingClientRect().top;
        const sectionPosition = sectionRect - bodyRect;
        const offsetPosition = sectionPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    // Event listeners for navigation links
    document.getElementById('home-link').addEventListener('click', function (event) {
        event.preventDefault();
        showSection('home');
        scrollToSection('home');
    });

    document.getElementById('vowels-link').addEventListener('click', function (event) {
        event.preventDefault();
        showSection('vowels');
        scrollToSection('vowels');
    });

    document.getElementById('consonants-link').addEventListener('click', function (event) {
        event.preventDefault();
        showSection('consonants');
        scrollToSection('consonants');
    });

    document.getElementById('numbers-link').addEventListener('click', function (event) {
        event.preventDefault();
        showSection('numbers');
        scrollToSection('numbers');
    });

    // Initially show the home section
    showSection('home');
    scrollToSection('home');
});
