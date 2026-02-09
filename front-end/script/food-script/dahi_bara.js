document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: [
            { item: 'Urad Dal', quantity: '1 cup' },
            { item: 'Water', quantity: '1/2 cup (for soaking)' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Oil', quantity: 'for frying' },
            { item: 'Potatoes', quantity: '2 (boiled and peeled)' },
            { item: 'Yogurt', quantity: '1/2 cup' },
            { item: 'Green Chilies', quantity: '1 (slit)' },
            { item: 'Ginger-Garlic Paste', quantity: '1/2 teaspoon' },
            { item: 'Cumin Seeds', quantity: '1/2 teaspoon' },
            { item: 'Coriander Powder', quantity: '1/4 teaspoon' },
            { item: 'Red Chili Powder', quantity: '1/4 teaspoon' },
            { item: 'Turmeric Powder', quantity: '1/4 teaspoon' },
            { item: 'Fresh Coriander Leaves', quantity: 'for garnishing' }
        ],
        4: [
            { item: 'Urad Dal', quantity: '2 cups' },
            { item: 'Water', quantity: '1 cup (for soaking)' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Oil', quantity: 'for frying' },
            { item: 'Potatoes', quantity: '4 (boiled and peeled)' },
            { item: 'Yogurt', quantity: '1 cup' },
            { item: 'Green Chilies', quantity: '2 (slit)' },
            { item: 'Ginger-Garlic Paste', quantity: '1 teaspoon' },
            { item: 'Cumin Seeds', quantity: '1 teaspoon' },
            { item: 'Coriander Powder', quantity: '1/2 teaspoon' },
            { item: 'Red Chili Powder', quantity: '1/2 teaspoon' },
            { item: 'Turmeric Powder', quantity: '1/2 teaspoon' },
            { item: 'Fresh Coriander Leaves', quantity: 'for garnishing' }
        ],
        6: [
            { item: 'Urad Dal', quantity: '3 cups' },
            { item: 'Water', quantity: '1.5 cups (for soaking)' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Oil', quantity: 'for frying' },
            { item: 'Potatoes', quantity: '6 (boiled and peeled)' },
            { item: 'Yogurt', quantity: '1.5 cups' },
            { item: 'Green Chilies', quantity: '3 (slit)' },
            { item: 'Ginger-Garlic Paste', quantity: '1.5 teaspoons' },
            { item: 'Cumin Seeds', quantity: '1.5 teaspoons' },
            { item: 'Coriander Powder', quantity: '3/4 teaspoon' },
            { item: 'Red Chili Powder', quantity: '3/4 teaspoon' },
            { item: 'Turmeric Powder', quantity: '3/4 teaspoon' },
            { item: 'Fresh Coriander Leaves', quantity: 'for garnishing' }
        ],
        8: [
            { item: 'Urad Dal', quantity: '4 cups' },
            { item: 'Water', quantity: '2 cups (for soaking)' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Oil', quantity: 'for frying' },
            { item: 'Potatoes', quantity: '8 (boiled and peeled)' },
            { item: 'Yogurt', quantity: '2 cups' },
            { item: 'Green Chilies', quantity: '4 (slit)' },
            { item: 'Ginger-Garlic Paste', quantity: '2 teaspoons' },
            { item: 'Cumin Seeds', quantity: '2 teaspoons' },
            { item: 'Coriander Powder', quantity: '1 teaspoon' },
            { item: 'Red Chili Powder', quantity: '1 teaspoon' },
            { item: 'Turmeric Powder', quantity: '1 teaspoon' },
            { item: 'Fresh Coriander Leaves', quantity: 'for garnishing' }
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

    // Initialize the ingredients list on page load
    updateIngredients();

    // Like button functionality
    const likeButton = document.querySelector('.like-btn');
    const recipeId = 'dahi-aloo-dum-bara-recipe'; // Unique ID for this recipe

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

    // Event listener for changing the number of people
    const peopleSelect = document.getElementById('people');
    peopleSelect.addEventListener('change', updateIngredients);
});
