document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: [
            { item: 'Whole Wheat Flour (Atta)', quantity: '2 cups' },
            { item: 'Ghee (Clarified Butter)', quantity: '3 tablespoons (for dough) + extra for basting' },
            { item: 'Salt', quantity: '1 teaspoon (or to taste)' },
            { item: 'Water', quantity: 'as needed (for kneading)' },
            { item: 'Baking Soda', quantity: '1/4 teaspoon (optional, for fluffiness)' },
            { item: 'Sattu (Roasted Gram Flour)', quantity: '1 cup' },
            { item: 'Onion', quantity: '1 medium, finely chopped' },
            { item: 'Green Chilies', quantity: '2-3, finely chopped (adjust to taste)' },
            { item: 'Ginger', quantity: '1-inch piece, grated' },
            { item: 'Garlic', quantity: '4-5 cloves, minced' },
            { item: 'Lemon Juice', quantity: 'from 1 lemon' },
            { item: 'Coriander Leaves', quantity: 'a handful, chopped' },
            { item: 'Carom Seeds (Ajwain)', quantity: '1/2 teaspoon' },
            { item: 'Mustard Oil', quantity: '1 tablespoon (optional)' },
            { item: 'Eggplant (Baingan)', quantity: '1 large' },
            { item: 'Tomatoes', quantity: '2 medium' },
            { item: 'Potatoes', quantity: '2 medium, boiled and peeled' },
            { item: 'Garlic (roasted)', quantity: '4-5 cloves' },
            { item: 'Green Chilies (for Chokha)', quantity: '1-2, finely chopped (to taste)' },
            { item: 'Onion (optional)', quantity: '1 small, finely chopped' },
            { item: 'Coriander Leaves (for Chokha)', quantity: 'a handful, chopped' },
            { item: 'Mustard Oil (for Chokha)', quantity: '1 tablespoon' },
            { item: 'Salt (for Chokha)', quantity: 'to taste' }
        ],
        4: [
            { item: 'Whole Wheat Flour (Atta)', quantity: '4 cups' },
            { item: 'Ghee (Clarified Butter)', quantity: '6 tablespoons (for dough) + extra for basting' },
            { item: 'Salt', quantity: '2 teaspoons (or to taste)' },
            { item: 'Water', quantity: 'as needed (for kneading)' },
            { item: 'Baking Soda', quantity: '1/2 teaspoon (optional, for fluffiness)' },
            { item: 'Sattu (Roasted Gram Flour)', quantity: '2 cups' },
            { item: 'Onion', quantity: '2 medium, finely chopped' },
            { item: 'Green Chilies', quantity: '4-6, finely chopped (adjust to taste)' },
            { item: 'Ginger', quantity: '2-inch piece, grated' },
            { item: 'Garlic', quantity: '8-10 cloves, minced' },
            { item: 'Lemon Juice', quantity: 'from 2 lemons' },
            { item: 'Coriander Leaves', quantity: 'a handful, chopped' },
            { item: 'Carom Seeds (Ajwain)', quantity: '1 teaspoon' },
            { item: 'Mustard Oil', quantity: '2 tablespoons (optional)' },
            { item: 'Eggplant (Baingan)', quantity: '2 large' },
            { item: 'Tomatoes', quantity: '4 medium' },
            { item: 'Potatoes', quantity: '4 medium, boiled and peeled' },
            { item: 'Garlic (roasted)', quantity: '8-10 cloves' },
            { item: 'Green Chilies (for Chokha)', quantity: '2-4, finely chopped (to taste)' },
            { item: 'Onion (optional)', quantity: '2 small, finely chopped' },
            { item: 'Coriander Leaves (for Chokha)', quantity: 'a handful, chopped' },
            { item: 'Mustard Oil (for Chokha)', quantity: '2 tablespoons' },
            { item: 'Salt (for Chokha)', quantity: 'to taste' }
        ],
        6: [
            { item: 'Whole Wheat Flour (Atta)', quantity: '6 cups' },
            { item: 'Ghee (Clarified Butter)', quantity: '9 tablespoons (for dough) + extra for basting' },
            { item: 'Salt', quantity: '3 teaspoons (or to taste)' },
            { item: 'Water', quantity: 'as needed (for kneading)' },
            { item: 'Baking Soda', quantity: '3/4 teaspoon (optional, for fluffiness)' },
            { item: 'Sattu (Roasted Gram Flour)', quantity: '3 cups' },
            { item: 'Onion', quantity: '3 medium, finely chopped' },
            { item: 'Green Chilies', quantity: '6-9, finely chopped (adjust to taste)' },
            { item: 'Ginger', quantity: '3-inch piece, grated' },
            { item: 'Garlic', quantity: '12-15 cloves, minced' },
            { item: 'Lemon Juice', quantity: 'from 3 lemons' },
            { item: 'Coriander Leaves', quantity: 'a handful, chopped' },
            { item: 'Carom Seeds (Ajwain)', quantity: '1.5 teaspoons' },
            { item: 'Mustard Oil', quantity: '3 tablespoons (optional)' },
            { item: 'Eggplant (Baingan)', quantity: '3 large' },
            { item: 'Tomatoes', quantity: '6 medium' },
            { item: 'Potatoes', quantity: '6 medium, boiled and peeled' },
            { item: 'Garlic (roasted)', quantity: '12-15 cloves' },
            { item: 'Green Chilies (for Chokha)', quantity: '3-6, finely chopped (to taste)' },
            { item: 'Onion (optional)', quantity: '3 small, finely chopped' },
            { item: 'Coriander Leaves (for Chokha)', quantity: 'a handful, chopped' },
            { item: 'Mustard Oil (for Chokha)', quantity: '3 tablespoons' },
            { item: 'Salt (for Chokha)', quantity: 'to taste' }
        ],
        8: [
            { item: 'Whole Wheat Flour (Atta)', quantity: '8 cups' },
            { item: 'Ghee (Clarified Butter)', quantity: '12 tablespoons (for dough) + extra for basting' },
            { item: 'Salt', quantity: '4 teaspoons (or to taste)' },
            { item: 'Water', quantity: 'as needed (for kneading)' },
            { item: 'Baking Soda', quantity: '1 teaspoon (optional, for fluffiness)' },
            { item: 'Sattu (Roasted Gram Flour)', quantity: '4 cups' },
            { item: 'Onion', quantity: '4 medium, finely chopped' },
            { item: 'Green Chilies', quantity: '8-12, finely chopped (adjust to taste)' },
            { item: 'Ginger', quantity: '4-inch piece, grated' },
            { item: 'Garlic', quantity: '16-20 cloves, minced' },
            { item: 'Lemon Juice', quantity: 'from 4 lemons' },
            { item: 'Coriander Leaves', quantity: 'a handful, chopped' },
            { item: 'Carom Seeds (Ajwain)', quantity: '2 teaspoons' },
            { item: 'Mustard Oil', quantity: '4 tablespoons (optional)' },
            { item: 'Eggplant (Baingan)', quantity: '4 large' },
            { item: 'Tomatoes', quantity: '8 medium' },
            { item: 'Potatoes', quantity: '8 medium, boiled and peeled' },
            { item: 'Garlic (roasted)', quantity: '16-20 cloves' },
            { item: 'Green Chilies (for Chokha)', quantity: '4-8, finely chopped (to taste)' },
            { item: 'Onion (optional)', quantity: '4 small, finely chopped' },
            { item: 'Coriander Leaves (for Chokha)', quantity: 'a handful, chopped' },
            { item: 'Mustard Oil (for Chokha)', quantity: '4 tablespoons' },
            { item: 'Salt (for Chokha)', quantity: 'to taste' }
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
