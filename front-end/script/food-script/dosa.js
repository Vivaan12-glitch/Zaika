document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: [
            { item: 'Urad Dal', quantity: '1/2 cup' },
            { item: 'Rice', quantity: '1 cup' },
            { item: 'Fenugreek Seeds (optional)', quantity: '1/4 teaspoon' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Water', quantity: 'as needed (for soaking and grinding)' },
            { item: 'Oil or Ghee', quantity: 'for cooking' },
            { item: 'Cooked Rice (optional)', quantity: '1/4 cup (for extra softness)' }
        ],
        4: [
            { item: 'Urad Dal', quantity: '1 cup' },
            { item: 'Rice', quantity: '2 cups' },
            { item: 'Fenugreek Seeds (optional)', quantity: '1/2 teaspoon' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Water', quantity: 'as needed (for soaking and grinding)' },
            { item: 'Oil or Ghee', quantity: 'for cooking' },
            { item: 'Cooked Rice (optional)', quantity: '1/2 cup (for extra softness)' }
        ],
        6: [
            { item: 'Urad Dal', quantity: '1.5 cups' },
            { item: 'Rice', quantity: '3 cups' },
            { item: 'Fenugreek Seeds (optional)', quantity: '3/4 teaspoon' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Water', quantity: 'as needed (for soaking and grinding)' },
            { item: 'Oil or Ghee', quantity: 'for cooking' },
            { item: 'Cooked Rice (optional)', quantity: '3/4 cup (for extra softness)' }
        ],
        8: [
            { item: 'Urad Dal', quantity: '2 cups' },
            { item: 'Rice', quantity: '4 cups' },
            { item: 'Fenugreek Seeds (optional)', quantity: '1 teaspoon' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Water', quantity: 'as needed (for soaking and grinding)' },
            { item: 'Oil or Ghee', quantity: 'for cooking' },
            { item: 'Cooked Rice (optional)', quantity: '1 cup (for extra softness)' }
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

