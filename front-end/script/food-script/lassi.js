document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: [
            { item: 'Yogurt', quantity: '1 cup' },
            { item: 'Water', quantity: '1/2 cup' },
            { item: 'Sugar or Salt', quantity: 'to taste' },
            { item: 'Cardamom Powder (optional)', quantity: 'a pinch' },
            { item: 'Mint Leaves (for garnish)', quantity: 'a few' },
        ],
        4: [
            { item: 'Yogurt', quantity: '2 cups' },
            { item: 'Water', quantity: '1 cup' },
            { item: 'Sugar or Salt', quantity: 'to taste' },
            { item: 'Cardamom Powder (optional)', quantity: '1/4 teaspoon' },
            { item: 'Mint Leaves (for garnish)', quantity: 'a handful' },
        ],
        6: [
            { item: 'Yogurt', quantity: '3 cups' },
            { item: 'Water', quantity: '1.5 cups' },
            { item: 'Sugar or Salt', quantity: 'to taste' },
            { item: 'Cardamom Powder (optional)', quantity: '1/2 teaspoon' },
            { item: 'Mint Leaves (for garnish)', quantity: 'a handful' },
        ],
        8: [
            { item: 'Yogurt', quantity: '4 cups' },
            { item: 'Water', quantity: '2 cups' },
            { item: 'Sugar or Salt', quantity: 'to taste' },
            { item: 'Cardamom Powder (optional)', quantity: '3/4 teaspoon' },
            { item: 'Mint Leaves (for garnish)', quantity: 'as needed' },
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
    const recipeId = 'lassi-recipe'; // Unique ID for this recipe

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
