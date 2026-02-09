document.addEventListener('DOMContentLoaded', function () {
    const ingredients = {
        2: {
            chickenMarinade: [
                { item: 'Chicken', quantity: '500 grams (with or without bone)' },
                { item: 'Yogurt (Curd)', quantity: '1 cup' },
                { item: 'Ginger-Garlic Paste', quantity: '1 tablespoon' },
                { item: 'Red Chili Powder', quantity: '1 tablespoon (adjust to taste)' },
                { item: 'Turmeric Powder', quantity: '1/2 teaspoon' },
                { item: 'Garam Masala Powder', quantity: '1 teaspoon' },
                { item: 'Lemon Juice', quantity: '1 tablespoon' },
                { item: 'Salt', quantity: 'To taste' }
            ],
            curry: [
                { item: 'Oil (preferably peanut oil or any neutral oil)', quantity: '1 tablespoon' },
                { item: 'Onions', quantity: '1 (finely chopped)' },
                { item: 'Green Chilies', quantity: '1 (slit)' },
                { item: 'Curry Leaves', quantity: '1/2 sprig' },
                { item: 'Tomatoes', quantity: '1 (finely chopped)' },
                { item: 'Ginger-Garlic Paste', quantity: '1/2 tablespoon' },
                { item: 'Red Chili Powder', quantity: '1/2 teaspoon (adjust to taste)' },
                { item: 'Turmeric Powder', quantity: '1/4 teaspoon' },
                { item: 'Coriander Powder', quantity: '1/2 teaspoon' },
                { item: 'Cumin Powder', quantity: '1/4 teaspoon' },
                { item: 'Garam Masala', quantity: '1/4 teaspoon' },
                { item: 'Salt', quantity: 'To taste' },
                { item: 'Fresh Coriander Leaves', quantity: 'For garnish' },
                { item: 'Lemon Juice', quantity: '1/2 teaspoon (for garnish)' }
            ]
        },
        4: {
            chickenMarinade: [
                { item: 'Chicken', quantity: '1 kg (with or without bone)' },
                { item: 'Yogurt (Curd)', quantity: '2 cups' },
                { item: 'Ginger-Garlic Paste', quantity: '2 tablespoons' },
                { item: 'Red Chili Powder', quantity: '2 tablespoons (adjust to taste)' },
                { item: 'Turmeric Powder', quantity: '1 teaspoon' },
                { item: 'Garam Masala Powder', quantity: '2 teaspoons' },
                { item: 'Lemon Juice', quantity: '2 tablespoons' },
                { item: 'Salt', quantity: 'To taste' }
            ],
            curry: [
                { item: 'Oil', quantity: '4 tablespoons' },
                { item: 'Onions', quantity: '2 (finely chopped)' },
                { item: 'Green Chilies', quantity: '2 (slit)' },
                { item: 'Curry Leaves', quantity: '1 sprig' },
                { item: 'Tomatoes', quantity: '2 (finely chopped)' },
                { item: 'Ginger-Garlic Paste', quantity: '1 tablespoon' },
                { item: 'Red Chili Powder', quantity: '1 teaspoon (adjust to taste)' },
                { item: 'Turmeric Powder', quantity: '1/2 teaspoon' },
                { item: 'Coriander Powder', quantity: '1 teaspoon' },
                { item: 'Cumin Powder', quantity: '1/2 teaspoon' },
                { item: 'Garam Masala', quantity: '1 teaspoon' },
                { item: 'Salt', quantity: 'To taste' },
                { item: 'Fresh Coriander Leaves', quantity: 'For garnish' },
                { item: 'Lemon Juice', quantity: '1 teaspoon (for garnish)' }
            ]
        },
        6: {
            chickenMarinade: [
                { item: 'Chicken', quantity: '1.5 kg (with or without bone)' },
                { item: 'Yogurt (Curd)', quantity: '3 cups' },
                { item: 'Ginger-Garlic Paste', quantity: '3 tablespoons' },
                { item: 'Red Chili Powder', quantity: '3 tablespoons (adjust to taste)' },
                { item: 'Turmeric Powder', quantity: '1.5 teaspoons' },
                { item: 'Garam Masala Powder', quantity: '3 teaspoons' },
                { item: 'Lemon Juice', quantity: '3 tablespoons' },
                { item: 'Salt', quantity: 'To taste' }
            ],
            curry: [
                { item: 'Oil', quantity: '6 tablespoons' },
                { item: 'Onions', quantity: '3 (finely chopped)' },
                { item: 'Green Chilies', quantity: '3 (slit)' },
                { item: 'Curry Leaves', quantity: '1.5 sprigs' },
                { item: 'Tomatoes', quantity: '3 (finely chopped)' },
                { item: 'Ginger-Garlic Paste', quantity: '1.5 tablespoons' },
                { item: 'Red Chili Powder', quantity: '1.5 teaspoons (adjust to taste)' },
                { item: 'Turmeric Powder', quantity: '3/4 teaspoon' },
                { item: 'Coriander Powder', quantity: '1.5 teaspoons' },
                { item: 'Cumin Powder', quantity: '3/4 teaspoon' },
                { item: 'Garam Masala', quantity: '1.5 teaspoons' },
                { item: 'Salt', quantity: 'To taste' },
                { item: 'Fresh Coriander Leaves', quantity: 'For garnish' },
                { item: 'Lemon Juice', quantity: '1.5 teaspoons (for garnish)' }
            ]
        },
        8: {
            chickenMarinade: [
                { item: 'Chicken', quantity: '2 kg (with or without bone)' },
                { item: 'Yogurt (Curd)', quantity: '4 cups' },
                { item: 'Ginger-Garlic Paste', quantity: '4 tablespoons' },
                { item: 'Red Chili Powder', quantity: '4 tablespoons (adjust to taste)' },
                { item: 'Turmeric Powder', quantity: '2 teaspoons' },
                { item: 'Garam Masala Powder', quantity: '4 teaspoons' },
                { item: 'Lemon Juice', quantity: '4 tablespoons' },
                { item: 'Salt', quantity: 'To taste' }
            ],
            curry: [
                { item: 'Oil', quantity: '8 tablespoons' },
                { item: 'Onions', quantity: '4 (finely chopped)' },
                { item: 'Green Chilies', quantity: '4 (slit)' },
                { item: 'Curry Leaves', quantity: '2 sprigs' },
                { item: 'Tomatoes', quantity: '4 (finely chopped)' },
                { item: 'Ginger-Garlic Paste', quantity: '2 tablespoons' },
                { item: 'Red Chili Powder', quantity: '2 teaspoons (adjust to taste)' },
                { item: 'Turmeric Powder', quantity: '1 teaspoon' },
                { item: 'Coriander Powder', quantity: '2 teaspoons' },
                { item: 'Cumin Powder', quantity: '1 teaspoon' },
                { item: 'Garam Masala', quantity: '2 teaspoons' },
                { item: 'Salt', quantity: 'To taste' },
                { item: 'Fresh Coriander Leaves', quantity: 'For garnish' },
                { item: 'Lemon Juice', quantity: '2 teaspoons (for garnish)' }
            ]
        }
    };

    const ingredientsList = document.getElementById('ingredients-list');
    const peopleSelect = document.getElementById('people');
    const likeButton = document.querySelector('.like-btn');
    const recipeId = 'andhra-chicken-recipe'; // Unique ID for this recipe

    function updateIngredients() {
        const numPeople = peopleSelect.value;
        const selectedIngredients = ingredients[numPeople];

        ingredientsList.innerHTML = ''; // Clear previous ingredients

        for (const category in selectedIngredients) {
            const items = selectedIngredients[category];
            const categoryHeader = document.createElement('h4');
            categoryHeader.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            ingredientsList.appendChild(categoryHeader);

            items.forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.textContent = `${ingredient.item}: ${ingredient.quantity}`;
                ingredientsList.appendChild(listItem);
            });
        }
    }

    // Initialize the ingredients for the default selection
    updateIngredients();

    // Add event listener for change on the select element
    peopleSelect.addEventListener('change', updateIngredients);

    // Check localStorage for the liked state on page load
    const isLiked = localStorage.getItem(recipeId);

    if (isLiked === 'true') {
        likeButton.classList.add('liked'); // If liked, set it to liked state
    }

    // Add click event listener for the like button
    likeButton.addEventListener('click', function () {
        this.classList.toggle('liked'); // Toggle the liked class

        // Update localStorage based on current state
        if (this.classList.contains('liked')) {
            localStorage.setItem(recipeId, 'true'); // Store liked state
        } else {
            localStorage.setItem(recipeId, 'false'); // Store unliked state
        }
    });
});