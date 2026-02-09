document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: [
            { item: 'Whole Wheat Flour', quantity: '1 cup' },
            { item: 'Turmeric Powder', quantity: '1/2 teaspoon' },
            { item: 'Red Chili Powder', quantity: '1/2 teaspoon' },
            { item: 'Cumin Powder', quantity: '1/2 teaspoon' },
            { item: 'Salt', quantity: '1/2 teaspoon (adjust to taste)' },
            { item: 'Fresh Fenugreek Leaves (Methi)', quantity: '1/2 cup, finely chopped' },
            { item: 'Water', quantity: 'as needed (for kneading the dough)' },
            { item: 'Oil or Ghee', quantity: 'for cooking the Thepla (optional)' },
        ],
        4: [
            { item: 'Whole Wheat Flour', quantity: '2 cups' },
            { item: 'Turmeric Powder', quantity: '1 teaspoon' },
            { item: 'Red Chili Powder', quantity: '1 teaspoon' },
            { item: 'Cumin Powder', quantity: '1 teaspoon' },
            { item: 'Salt', quantity: '1 teaspoon (adjust to taste)' },
            { item: 'Fresh Fenugreek Leaves (Methi)', quantity: '1 cup, finely chopped' },
            { item: 'Water', quantity: 'as needed (for kneading the dough)' },
            { item: 'Oil or Ghee', quantity: 'for cooking the Thepla (optional)' },
        ],
        6: [
            { item: 'Whole Wheat Flour', quantity: '3 cups' },
            { item: 'Turmeric Powder', quantity: '1.5 teaspoons' },
            { item: 'Red Chili Powder', quantity: '1.5 teaspoons' },
            { item: 'Cumin Powder', quantity: '1.5 teaspoons' },
            { item: 'Salt', quantity: '1.5 teaspoons (adjust to taste)' },
            { item: 'Fresh Fenugreek Leaves (Methi)', quantity: '1.5 cups, finely chopped' },
            { item: 'Water', quantity: 'as needed (for kneading the dough)' },
            { item: 'Oil or Ghee', quantity: 'for cooking the Thepla (optional)' },
        ],
        8: [
            { item: 'Whole Wheat Flour', quantity: '4 cups' },
            { item: 'Turmeric Powder', quantity: '2 teaspoons' },
            { item: 'Red Chili Powder', quantity: '2 teaspoons' },
            { item: 'Cumin Powder', quantity: '2 teaspoons' },
            { item: 'Salt', quantity: '2 teaspoons (adjust to taste)' },
            { item: 'Fresh Fenugreek Leaves (Methi)', quantity: '2 cups, finely chopped' },
            { item: 'Water', quantity: 'as needed (for kneading the dough)' },
            { item: 'Oil or Ghee', quantity: 'for cooking the Thepla (optional)' },
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
    
    // Like button functionality
    const likeButton = document.querySelector('.like-btn');
    const recipeId = 'thepla-recipe'; // Unique ID for this recipe

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
