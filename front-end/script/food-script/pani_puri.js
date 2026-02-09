document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: {
            puri: [
                { item: 'Semolina (sooji)', quantity: '1 cup' },
                { item: 'All-purpose flour (maida)', quantity: '2 tablespoons' },
                { item: 'Salt', quantity: 'A pinch' },
                { item: 'Water', quantity: 'As needed for the dough' },
                { item: 'Oil', quantity: 'For deep frying' }
            ],
            filling: [
                { item: 'Chickpeas (boiled)', quantity: '1 cup' },
                { item: 'Potatoes (boiled and mashed)', quantity: '2-3 medium-sized' },
                { item: 'Onion (finely chopped)', quantity: '1 small' },
                { item: 'Green chilies (finely chopped)', quantity: '2-3' },
                { item: 'Fresh coriander leaves (chopped)', quantity: 'To taste' },
                { item: 'Salt', quantity: 'To taste' },
                { item: 'Chaat masala', quantity: 'To taste' },
                { item: 'Lemon juice', quantity: 'To taste' }
            ],
            pani: [
                { item: 'Fresh mint leaves', quantity: '1 cup' },
                { item: 'Fresh coriander leaves', quantity: '1/2 cup' },
                { item: 'Green chilies', quantity: '2-3' },
                { item: 'Ginger', quantity: 'A small piece' },
                { item: 'Tamarind pulp', quantity: '1/4 cup' },
                { item: 'Water', quantity: 'To adjust consistency' },
                { item: 'Salt', quantity: 'To taste' },
                { item: 'Roasted cumin powder', quantity: 'A pinch' }
            ],
            variations: [
                { item: 'Pomegranate or mango', note: 'for a fruity filling' },
                { item: 'Additional spices', note: 'for extra heat in the pani' }
            ]
        },
        4: {
            puri: [
                { item: 'Semolina (sooji)', quantity: '2 cups' },
                { item: 'All-purpose flour (maida)', quantity: '4 tablespoons' },
                { item: 'Salt', quantity: 'A pinch' },
                { item: 'Water', quantity: 'As needed for the dough' },
                { item: 'Oil', quantity: 'For deep frying' }
            ],
            filling: [
                { item: 'Chickpeas (boiled)', quantity: '2 cups' },
                { item: 'Potatoes (boiled and mashed)', quantity: '4-5 medium-sized' },
                { item: 'Onion (finely chopped)', quantity: '2 small' },
                { item: 'Green chilies (finely chopped)', quantity: '4-5' },
                { item: 'Fresh coriander leaves (chopped)', quantity: 'To taste' },
                { item: 'Salt', quantity: 'To taste' },
                { item: 'Chaat masala', quantity: 'To taste' },
                { item: 'Lemon juice', quantity: 'To taste' }
            ],
            pani: [
                { item: 'Fresh mint leaves', quantity: '2 cups' },
                { item: 'Fresh coriander leaves', quantity: '1 cup' },
                { item: 'Green chilies', quantity: '4-5' },
                { item: 'Ginger', quantity: '1 piece' },
                { item: 'Tamarind pulp', quantity: '1/2 cup' },
                { item: 'Water', quantity: 'To adjust consistency' },
                { item: 'Salt', quantity: 'To taste' },
                { item: 'Roasted cumin powder', quantity: 'A pinch' }
            ],
            variations: [
                { item: 'Pomegranate or mango', note: 'for a fruity filling' },
                { item: 'Additional spices', note: 'for extra heat in the pani' }
            ]
        },
        6: {
            puri: [
                { item: 'Semolina (sooji)', quantity: '3 cups' },
                { item: 'All-purpose flour (maida)', quantity: '6 tablespoons' },
                { item: 'Salt', quantity: 'A pinch' },
                { item: 'Water', quantity: 'As needed for the dough' },
                { item: 'Oil', quantity: 'For deep frying' }
            ],
            filling: [
                { item: 'Chickpeas (boiled)', quantity: '3 cups' },
                { item: 'Potatoes (boiled and mashed)', quantity: '6-8 medium-sized' },
                { item: 'Onion (finely chopped)', quantity: '3 small' },
                { item: 'Green chilies (finely chopped)', quantity: '6-8' },
                { item: 'Fresh coriander leaves (chopped)', quantity: 'To taste' },
                { item: 'Salt', quantity: 'To taste' },
                { item: 'Chaat masala', quantity: 'To taste' },
                { item: 'Lemon juice', quantity: 'To taste' }
            ],
            pani: [
                { item: 'Fresh mint leaves', quantity: '3 cups' },
                { item: 'Fresh coriander leaves', quantity: '1.5 cups' },
                { item: 'Green chilies', quantity: '6-8' },
                { item: 'Ginger', quantity: '1 piece' },
                { item: 'Tamarind pulp', quantity: '3/4 cup' },
                { item: 'Water', quantity: 'To adjust consistency' },
                { item: 'Salt', quantity: 'To taste' },
                { item: 'Roasted cumin powder', quantity: 'A pinch' }
            ],
            variations: [
                { item: 'Pomegranate or mango', note: 'for a fruity filling' },
                { item: 'Additional spices', note: 'for extra heat in the pani' }
            ]
        },
        8: {
            puri: [
                { item: 'Semolina (sooji)', quantity: '4 cups' },
                { item: 'All-purpose flour (maida)', quantity: '8 tablespoons' },
                { item: 'Salt', quantity: 'A pinch' },
                { item: 'Water', quantity: 'As needed for the dough' },
                { item: 'Oil', quantity: 'For deep frying' }
            ],
            filling: [
                { item: 'Chickpeas (boiled)', quantity: '4 cups' },
                { item: 'Potatoes (boiled and mashed)', quantity: '8-10 medium-sized' },
                { item: 'Onion (finely chopped)', quantity: '4 small' },
                { item: 'Green chilies (finely chopped)', quantity: '8-10' },
                { item: 'Fresh coriander leaves (chopped)', quantity: 'To taste' },
                { item: 'Salt', quantity: 'To taste' },
                { item: 'Chaat masala', quantity: 'To taste' },
                { item: 'Lemon juice', quantity: 'To taste' }
            ],
            pani: [
                { item: 'Fresh mint leaves', quantity: '4 cups' },
                { item: 'Fresh coriander leaves', quantity: '2 cups' },
                { item: 'Green chilies', quantity: '8-10' },
                { item: 'Ginger', quantity: '1 piece' },
                { item: 'Tamarind pulp', quantity: '1 cup' },
                { item: 'Water', quantity: 'To adjust consistency' },
                { item: 'Salt', quantity: 'To taste' },
                { item: 'Roasted cumin powder', quantity: 'A pinch' }
            ],
            variations: [
                { item: 'Pomegranate or mango', note: 'for a fruity filling' },
                { item: 'Additional spices', note: 'for extra heat in the pani' }
            ]
        }
    };

    function updateIngredients() {
        const peopleSelect = document.getElementById('people');
        const ingredientsList = document.getElementById('ingredients-list');
        const selectedPeople = peopleSelect.value;
        const ingredientsForPeople = ingredients[selectedPeople] || {};

        ingredientsList.innerHTML = ''; // Clear previous list

        // Function to populate the list
        function addItems(section, title) {
            const sectionTitle = document.createElement('h4');
            sectionTitle.textContent = title;
            ingredientsList.appendChild(sectionTitle);

            section.forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.textContent = `${ingredient.item}: ${ingredient.quantity || ingredient.note}`;
                ingredientsList.appendChild(listItem);
            });
        }

        // Populate sections
        if (ingredientsForPeople.puri) addItems(ingredientsForPeople.puri, 'For the Puri:');
        if (ingredientsForPeople.filling) addItems(ingredientsForPeople.filling, 'For the Filling:');
        if (ingredientsForPeople.pani) addItems(ingredientsForPeople.pani, 'For the Pani:');
        if (ingredientsForPeople.variations) addItems(ingredientsForPeople.variations, 'Optional Variations:');
    }

    // Handle ingredient changes
    const peopleSelect = document.getElementById('people');
    peopleSelect.addEventListener('change', updateIngredients);

    // Initialize ingredients list on page load
    updateIngredients();

    // Like button functionality
    const likeButton = document.querySelector('.like-btn');
    const recipeId = 'pani-puri-recipe'; // Unique ID for this recipe

    // Check if the recipe was liked previously from localStorage
    const isLiked = localStorage.getItem(recipeId);

    if (isLiked === 'true') {
        likeButton.classList.add('liked');
    }

    // Toggle like state on click
    likeButton.addEventListener('click', function() {
        this.classList.toggle('liked');
        
        if (this.classList.contains('liked')) {
            localStorage.setItem(recipeId, 'true');
        } else {
            localStorage.setItem(recipeId, 'false');
        }
    });
});
