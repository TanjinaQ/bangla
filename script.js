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

    // Generic function to handle navigation click events
    function handleNavClick(event, sectionId) {
    event.preventDefault();
    showSection(sectionId);
    scrollToSection(sectionId);
    }

    // Add event listeners for navigation links
    const navLinks = [
    { id: 'home-link', section: 'home' },
    { id: 'vowels-link', section: 'vowels' },
    { id: 'consonants-link', section: 'consonants' },
    { id: 'numbers-link', section: 'numbers' }
    ];

    navLinks.forEach(link => {
        const element = document.getElementById(link.id);
        if (element) {
            element.addEventListener('click', (event) => handleNavClick(event, link.section));
        }
    });


    
    // Initially show the home section
    showSection('home');
    scrollToSection('home');
});


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}
