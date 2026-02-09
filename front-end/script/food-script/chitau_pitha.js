document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: [
            { item: 'Rice Flour', quantity: '1 cup' },
            { item: 'Water', quantity: '1/2 cup' },
            { item: 'Grated Coconut', quantity: '1/2 cup' },
            { item: 'Jaggery', quantity: '1/4 cup (grated)' },
            { item: 'Salt', quantity: 'A pinch' },
            { item: 'Banana Leaves', quantity: 'For steaming (optional)' }
        ],
        4: [
            { item: 'Rice Flour', quantity: '2 cups' },
            { item: 'Water', quantity: '1 cup' },
            { item: 'Grated Coconut', quantity: '1 cup' },
            { item: 'Jaggery', quantity: '1/2 cup (grated)' },
            { item: 'Salt', quantity: 'A pinch' },
            { item: 'Banana Leaves', quantity: 'For steaming (optional)' }
        ],
        6: [
            { item: 'Rice Flour', quantity: '3 cups' },
            { item: 'Water', quantity: '1.5 cups' },
            { item: 'Grated Coconut', quantity: '1.5 cups' },
            { item: 'Jaggery', quantity: '3/4 cup (grated)' },
            { item: 'Salt', quantity: 'A pinch' },
            { item: 'Banana Leaves', quantity: 'For steaming (optional)' }
        ],
        8: [
            { item: 'Rice Flour', quantity: '4 cups' },
            { item: 'Water', quantity: '2 cups' },
            { item: 'Grated Coconut', quantity: '2 cups' },
            { item: 'Jaggery', quantity: '1 cup (grated)' },
            { item: 'Salt', quantity: 'A pinch' },
            { item: 'Banana Leaves', quantity: 'For steaming (optional)' }
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
    const recipeId = 'chitau-pitha-recipe'; // Unique ID for this recipe

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
