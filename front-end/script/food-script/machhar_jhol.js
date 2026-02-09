document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: [
            { item: 'Fish (e.g., Rohu, Catla)', quantity: '250 grams, cleaned and cut into pieces' },
            { item: 'Mustard Oil', quantity: '2 tablespoons' },
            { item: 'Onion', quantity: '1 medium, finely sliced' },
            { item: 'Tomato', quantity: '1 medium, chopped' },
            { item: 'Ginger Paste', quantity: '0.5 tablespoon' },
            { item: 'Garlic Paste', quantity: '0.5 tablespoon' },
            { item: 'Turmeric Powder', quantity: '0.5 teaspoon' },
            { item: 'Red Chili Powder', quantity: '0.5 teaspoon (adjust to taste)' },
            { item: 'Coriander Powder', quantity: '0.5 teaspoon' },
            { item: 'Cumin Powder', quantity: '0.5 teaspoon' },
            { item: 'Green Chilies', quantity: '1, slit (adjust to taste)' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Water', quantity: 'as needed' },
            { item: 'Coriander Leaves', quantity: 'a handful, chopped (for garnish)' }
        ],
        4: [
            { item: 'Fish (e.g., Rohu, Catla)', quantity: '500 grams, cleaned and cut into pieces' },
            { item: 'Mustard Oil', quantity: '4 tablespoons' },
            { item: 'Onion', quantity: '2 medium, finely sliced' },
            { item: 'Tomato', quantity: '2 medium, chopped' },
            { item: 'Ginger Paste', quantity: '1 tablespoon' },
            { item: 'Garlic Paste', quantity: '1 tablespoon' },
            { item: 'Turmeric Powder', quantity: '1 teaspoon' },
            { item: 'Red Chili Powder', quantity: '1 teaspoon (adjust to taste)' },
            { item: 'Coriander Powder', quantity: '1 teaspoon' },
            { item: 'Cumin Powder', quantity: '1 teaspoon' },
            { item: 'Green Chilies', quantity: '2-3, slit (adjust to taste)' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Water', quantity: 'as needed' },
            { item: 'Coriander Leaves', quantity: 'a handful, chopped (for garnish)' }
        ],
        6: [
            { item: 'Fish (e.g., Rohu, Catla)', quantity: '750 grams, cleaned and cut into pieces' },
            { item: 'Mustard Oil', quantity: '6 tablespoons' },
            { item: 'Onion', quantity: '3 medium, finely sliced' },
            { item: 'Tomato', quantity: '3 medium, chopped' },
            { item: 'Ginger Paste', quantity: '1.5 tablespoons' },
            { item: 'Garlic Paste', quantity: '1.5 tablespoons' },
            { item: 'Turmeric Powder', quantity: '1.5 teaspoons' },
            { item: 'Red Chili Powder', quantity: '1.5 teaspoons (adjust to taste)' },
            { item: 'Coriander Powder', quantity: '1.5 teaspoons' },
            { item: 'Cumin Powder', quantity: '1.5 teaspoons' },
            { item: 'Green Chilies', quantity: '3-4, slit (adjust to taste)' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Water', quantity: 'as needed' },
            { item: 'Coriander Leaves', quantity: 'a handful, chopped (for garnish)' }
        ],
        8: [
            { item: 'Fish (e.g., Rohu, Catla)', quantity: '1 kg, cleaned and cut into pieces' },
            { item: 'Mustard Oil', quantity: '8 tablespoons' },
            { item: 'Onion', quantity: '4 medium, finely sliced' },
            { item: 'Tomato', quantity: '4 medium, chopped' },
            { item: 'Ginger Paste', quantity: '2 tablespoons' },
            { item: 'Garlic Paste', quantity: '2 tablespoons' },
            { item: 'Turmeric Powder', quantity: '2 teaspoons' },
            { item: 'Red Chili Powder', quantity: '2 teaspoons (adjust to taste)' },
            { item: 'Coriander Powder', quantity: '2 teaspoons' },
            { item: 'Cumin Powder', quantity: '2 teaspoons' },
            { item: 'Green Chilies', quantity: '4-5, slit (adjust to taste)' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Water', quantity: 'as needed' },
            { item: 'Coriander Leaves', quantity: 'a handful, chopped (for garnish)' }
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
