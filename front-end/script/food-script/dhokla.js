document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: [
            { item: 'Chickpea Flour (Besan)', quantity: '1 cup' },
            { item: 'Ginger-Green Chili Paste', quantity: '1 tablespoon' },
            { item: 'Lemon Juice', quantity: '1 tablespoon' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Water', quantity: 'as needed' },
            { item: 'Baking Soda', quantity: '1 teaspoon' },
            { item: 'Oil (for greasing)', quantity: '1 tablespoon' },
            { item: 'Oil (for tempering)', quantity: '1 tablespoon' },
            { item: 'Mustard Seeds', quantity: '1 teaspoon' },
            { item: 'Fresh Coriander Leaves', quantity: 'for garnish' },
            { item: 'Green Chutney and Tamarind Chutney', quantity: 'for serving' }
        ],
        4: [
            { item: 'Chickpea Flour (Besan)', quantity: '2 cups' },
            { item: 'Ginger-Green Chili Paste', quantity: '2 tablespoons' },
            { item: 'Lemon Juice', quantity: '2 tablespoons' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Water', quantity: 'as needed' },
            { item: 'Baking Soda', quantity: '2 teaspoons' },
            { item: 'Oil (for greasing)', quantity: '2 tablespoons' },
            { item: 'Oil (for tempering)', quantity: '2 tablespoons' },
            { item: 'Mustard Seeds', quantity: '2 teaspoons' },
            { item: 'Fresh Coriander Leaves', quantity: 'for garnish' },
            { item: 'Green Chutney and Tamarind Chutney', quantity: 'for serving' }
        ],
        6: [
            { item: 'Chickpea Flour (Besan)', quantity: '3 cups' },
            { item: 'Ginger-Green Chili Paste', quantity: '3 tablespoons' },
            { item: 'Lemon Juice', quantity: '3 tablespoons' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Water', quantity: 'as needed' },
            { item: 'Baking Soda', quantity: '3 teaspoons' },
            { item: 'Oil (for greasing)', quantity: '3 tablespoons' },
            { item: 'Oil (for tempering)', quantity: '3 tablespoons' },
            { item: 'Mustard Seeds', quantity: '3 teaspoons' },
            { item: 'Fresh Coriander Leaves', quantity: 'for garnish' },
            { item: 'Green Chutney and Tamarind Chutney', quantity: 'for serving' }
        ],
        8: [
            { item: 'Chickpea Flour (Besan)', quantity: '4 cups' },
            { item: 'Ginger-Green Chili Paste', quantity: '4 tablespoons' },
            { item: 'Lemon Juice', quantity: '4 tablespoons' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Water', quantity: 'as needed' },
            { item: 'Baking Soda', quantity: '4 teaspoons' },
            { item: 'Oil (for greasing)', quantity: '4 tablespoons' },
            { item: 'Oil (for tempering)', quantity: '4 tablespoons' },
            { item: 'Mustard Seeds', quantity: '4 teaspoons' },
            { item: 'Fresh Coriander Leaves', quantity: 'for garnish' },
            { item: 'Green Chutney and Tamarind Chutney', quantity: 'for serving' }
        ]
    };

    function updateIngredients() {
        const peopleSelect = document.getElementById('people');
        const ingredientsList = document.getElementById('ingredients-list');
        const selectedPeople = peopleSelect.value;
        const ingredientsForPeople = ingredients[selectedPeople] || [];

        ingredientsList.innerHTML = ''; // Clear previous ingredients

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
    const recipeId = 'dhokla-recipe'; // Unique ID for this recipe

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
