document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: [
            { item: 'Split Pigeon Peas (Toor Dal)', quantity: '1/2 cup' },
            { item: 'Split Gram (Chana Dal)', quantity: '2 tablespoons' },
            { item: 'Split Black Gram (Urad Dal)', quantity: '2 tablespoons' },
            { item: 'Onion', quantity: '1/2 (finely chopped)' },
            { item: 'Tomatoes', quantity: '1 (pureed)' },
            { item: 'Green Chilies', quantity: '1 (slit)' },
            { item: 'Ginger-Garlic Paste', quantity: '1/2 tablespoon' },
            { item: 'Cumin Seeds', quantity: '1/2 teaspoon' },
            { item: 'Turmeric Powder', quantity: '1/4 teaspoon' },
            { item: 'Red Chili Powder', quantity: '1/4 teaspoon' },
            { item: 'Coriander Powder', quantity: '1/4 teaspoon' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Fresh Coriander Leaves', quantity: 'for garnishing' },
            { item: 'Ghee (for tempering)', quantity: 'as needed' },
            { item: 'Whole Wheat Flour', quantity: '1/2 cup (for batti)' },
            { item: 'Semolina (Suji)', quantity: '2 tablespoons (for batti)' },
            { item: 'Ghee (melted)', quantity: '2 tablespoons (for batti)' },
            { item: 'Baking Powder', quantity: '1/4 teaspoon (for batti)' },
            { item: 'Water', quantity: 'as needed (for batti)' },
            { item: 'Jaggery', quantity: '2 tablespoons (for churma)' },
            { item: 'Cardamom Powder', quantity: 'a pinch (for churma)' },
        ],
        4: [
            { item: 'Split Pigeon Peas (Toor Dal)', quantity: '1 cup' },
            { item: 'Split Gram (Chana Dal)', quantity: '1/4 cup' },
            { item: 'Split Black Gram (Urad Dal)', quantity: '1/4 cup' },
            { item: 'Onion', quantity: '1 (finely chopped)' },
            { item: 'Tomatoes', quantity: '2 (pureed)' },
            { item: 'Green Chilies', quantity: '2 (slit)' },
            { item: 'Ginger-Garlic Paste', quantity: '1 tablespoon' },
            { item: 'Cumin Seeds', quantity: '1 teaspoon' },
            { item: 'Turmeric Powder', quantity: '1/2 teaspoon' },
            { item: 'Red Chili Powder', quantity: '1/2 teaspoon' },
            { item: 'Coriander Powder', quantity: '1/2 teaspoon' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Fresh Coriander Leaves', quantity: 'for garnishing' },
            { item: 'Ghee (for tempering)', quantity: 'as needed' },
            { item: 'Whole Wheat Flour', quantity: '1 cup (for batti)' },
            { item: 'Semolina (Suji)', quantity: '1/4 cup (for batti)' },
            { item: 'Ghee (melted)', quantity: '1/4 cup (for batti)' },
            { item: 'Baking Powder', quantity: '1/2 teaspoon (for batti)' },
            { item: 'Water', quantity: 'as needed (for batti)' },
            { item: 'Jaggery', quantity: '1/4 cup (for churma)' },
            { item: 'Cardamom Powder', quantity: '1/4 teaspoon (for churma)' },
        ],
        6: [
            { item: 'Split Pigeon Peas (Toor Dal)', quantity: '1.5 cups' },
            { item: 'Split Gram (Chana Dal)', quantity: '1/3 cup' },
            { item: 'Split Black Gram (Urad Dal)', quantity: '1/3 cup' },
            { item: 'Onion', quantity: '1 (finely chopped)' },
            { item: 'Tomatoes', quantity: '3 (pureed)' },
            { item: 'Green Chilies', quantity: '3 (slit)' },
            { item: 'Ginger-Garlic Paste', quantity: '1.5 tablespoons' },
            { item: 'Cumin Seeds', quantity: '1.5 teaspoons' },
            { item: 'Turmeric Powder', quantity: '3/4 teaspoon' },
            { item: 'Red Chili Powder', quantity: '3/4 teaspoon' },
            { item: 'Coriander Powder', quantity: '3/4 teaspoon' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Fresh Coriander Leaves', quantity: 'for garnishing' },
            { item: 'Ghee (for tempering)', quantity: 'as needed' },
            { item: 'Whole Wheat Flour', quantity: '1.5 cups (for batti)' },
            { item: 'Semolina (Suji)', quantity: '1/2 cup (for batti)' },
            { item: 'Ghee (melted)', quantity: '1/3 cup (for batti)' },
            { item: 'Baking Powder', quantity: '1 teaspoon (for batti)' },
            { item: 'Water', quantity: 'as needed (for batti)' },
            { item: 'Jaggery', quantity: '1/3 cup (for churma)' },
            { item: 'Cardamom Powder', quantity: '1/2 teaspoon (for churma)' },
        ],
        8: [
            { item: 'Split Pigeon Peas (Toor Dal)', quantity: '2 cups' },
            { item: 'Split Gram (Chana Dal)', quantity: '1/2 cup' },
            { item: 'Split Black Gram (Urad Dal)', quantity: '1/2 cup' },
            { item: 'Onion', quantity: '2 (finely chopped)' },
            { item: 'Tomatoes', quantity: '4 (pureed)' },
            { item: 'Green Chilies', quantity: '4 (slit)' },
            { item: 'Ginger-Garlic Paste', quantity: '2 tablespoons' },
            { item: 'Cumin Seeds', quantity: '2 teaspoons' },
            { item: 'Turmeric Powder', quantity: '1 teaspoon' },
            { item: 'Red Chili Powder', quantity: '1 teaspoon' },
            { item: 'Coriander Powder', quantity: '1 teaspoon' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Fresh Coriander Leaves', quantity: 'for garnishing' },
            { item: 'Ghee (for tempering)', quantity: 'as needed' },
            { item: 'Whole Wheat Flour', quantity: '2 cups (for batti)' },
            { item: 'Semolina (Suji)', quantity: '3/4 cup (for batti)' },
            { item: 'Ghee (melted)', quantity: '1/2 cup (for batti)' },
            { item: 'Baking Powder', quantity: '1 teaspoon (for batti)' },
            { item: 'Water', quantity: 'as needed (for batti)' },
            { item: 'Jaggery', quantity: '1/2 cup (for churma)' },
            { item: 'Cardamom Powder', quantity: '3/4 teaspoon (for churma)' },
        ]
    };

    function updateIngredients() {
        const peopleSelect = document.getElementById('people');
        const ingredientsList = document.getElementById('ingredients-list');
        const selectedPeople = peopleSelect.value;
        const ingredientsForPeople = ingredients[selectedPeople] || [];

        ingredientsList.innerHTML = '';

        ingredientsForPeople.forEach(ingredient => {
            const listItem = document.createElement('li');
            listItem.textContent = `${ingredient.item}: ${ingredient.quantity}`;
            ingredientsList.appendChild(listItem);
        });
    }

    const peopleSelect = document.getElementById('people');
    peopleSelect.addEventListener('change', updateIngredients);

    // Initialize the ingredients list on page load
    updateIngredients();
});


document.addEventListener("DOMContentLoaded", function() {
    // Other functionality (e.g., updating ingredients based on number of people)
    const peopleSelector = document.getElementById('people');
    peopleSelector.addEventListener('change', updateIngredients);

    function updateIngredients() {
        // Your existing logic to update ingredients
    }

    // Add like button functionality below
    const likeButton = document.querySelector('.like-btn');
    const recipeId = 'biryani-recipe'; // Unique ID for this recipe

    // Check localStorage for the liked state on page load
    const isLiked = localStorage.getItem(recipeId);

    if (isLiked === 'true') {
        likeButton.classList.add('liked'); // If liked, set it to liked state
    }

    // Add click event listener
    likeButton.addEventListener('click', function() {
        this.classList.toggle('liked'); // Toggle the liked class

        // Update localStorage based on current state
        if (this.classList.contains('liked')) {
            localStorage.setItem(recipeId, 'true'); // Store liked state
        } else {
            localStorage.setItem(recipeId, 'false'); // Store unliked state
        }
    });
});
