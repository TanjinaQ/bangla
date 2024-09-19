import { vowels } from './data/vowels.js';

document.addEventListener('DOMContentLoaded', () => {
    const vowelsContainer = document.getElementById('vowels-container');
    
    // Loop through each vowel and create a section for it
    vowels.forEach(vowel => {
        // Create a container for each vowel
        const vowelSection = document.createElement('div');
        vowelSection.id = `vowel-${vowel.bangla}`; // Unique ID for scrolling
        vowelSection.classList.add('vowel-section');
        
        // Create the content for each vowel
        const vowelTitle = document.createElement('h2');
        vowelTitle.textContent = vowel.bangla;
        vowelSection.appendChild(vowelTitle);

        // Add more details if needed, e.g., example words, pronunciation, etc.
        const description = document.createElement('p');
        description.textContent = `Details about ${vowel.bangla}.`;
        vowelSection.appendChild(description);

        vowelsContainer.appendChild(vowelSection);
    });

    // Back button functionality
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor behavior
            window.history.back(); // Navigate to the previous page
        });
    }
});
