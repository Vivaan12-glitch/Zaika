document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: [
            { item: 'Mustard Greens', quantity: '2 cups' },
            { item: 'Spinach (optional)', quantity: '1 cup' },
            { item: 'Water', quantity: '4 cups' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Butter or Ghee', quantity: '2 tablespoons' },
            { item: 'Maize Flour (Makki ka Atta)', quantity: '1-2 tablespoons' },
            { item: 'Spices (Red Chili Powder, Turmeric)', quantity: 'to taste' },
            { item: 'Maize Flour (for roti)', quantity: '2 cups' },
            { item: 'Warm Water (for dough)', quantity: 'as needed' },
            { item: 'Oil or Ghee (for cooking)', quantity: 'for greasing' },
        ],
        4: [
            { item: 'Mustard Greens', quantity: '4 cups' },
            { item: 'Spinach (optional)', quantity: '2 cups' },
            { item: 'Water', quantity: '8 cups' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Butter or Ghee', quantity: '4 tablespoons' },
            { item: 'Maize Flour (Makki ka Atta)', quantity: '2-4 tablespoons' },
            { item: 'Spices (Red Chili Powder, Turmeric)', quantity: 'to taste' },
            { item: 'Maize Flour (for roti)', quantity: '4 cups' },
            { item: 'Warm Water (for dough)', quantity: 'as needed' },
            { item: 'Oil or Ghee (for cooking)', quantity: 'for greasing' },
        ],
        6: [
            { item: 'Mustard Greens', quantity: '6 cups' },
            { item: 'Spinach (optional)', quantity: '3 cups' },
            { item: 'Water', quantity: '12 cups' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Butter or Ghee', quantity: '6 tablespoons' },
            { item: 'Maize Flour (Makki ka Atta)', quantity: '3-6 tablespoons' },
            { item: 'Spices (Red Chili Powder, Turmeric)', quantity: 'to taste' },
            { item: 'Maize Flour (for roti)', quantity: '6 cups' },
            { item: 'Warm Water (for dough)', quantity: 'as needed' },
            { item: 'Oil or Ghee (for cooking)', quantity: 'for greasing' },
        ],
        8: [
            { item: 'Mustard Greens', quantity: '8 cups' },
            { item: 'Spinach (optional)', quantity: '4 cups' },
            { item: 'Water', quantity: '16 cups' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Butter or Ghee', quantity: '8 tablespoons' },
            { item: 'Maize Flour (Makki ka Atta)', quantity: '4-8 tablespoons' },
            { item: 'Spices (Red Chili Powder, Turmeric)', quantity: 'to taste' },
            { item: 'Maize Flour (for roti)', quantity: '8 cups' },
            { item: 'Warm Water (for dough)', quantity: 'as needed' },
            { item: 'Oil or Ghee (for cooking)', quantity: 'for greasing' },
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
    const recipeId = 'sarso-da-saag-recipe'; // Unique ID for this recipe

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
