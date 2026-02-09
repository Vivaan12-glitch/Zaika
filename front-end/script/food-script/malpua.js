document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: [
            { item: 'All-Purpose Flour (Maida)', quantity: '1/2 cup' },
            { item: 'Semolina (Rava/Sooji)', quantity: '1/4 cup' },
            { item: 'Sugar', quantity: '3/8 cup (adjust to taste)' },
            { item: 'Milk', quantity: '1/2 cup (or as needed)' },
            { item: 'Banana', quantity: '1/2 ripe (mashed)' },
            { item: 'Cardamom Powder', quantity: '1/4 teaspoon' },
            { item: 'Fennel Seeds', quantity: '1/4 teaspoon (optional)' },
            { item: 'Baking Powder', quantity: '1/4 teaspoon' },
            { item: 'Water', quantity: 'as needed (to adjust the batter consistency)' },
            { item: 'Ghee or Oil', quantity: 'for frying' },
            { item: 'Chopped Nuts', quantity: 'for garnish (optional)' },
            { item: 'Grated Coconut', quantity: 'for garnish (optional)' },
        ],
        4: [
            { item: 'All-Purpose Flour (Maida)', quantity: '1 cup' },
            { item: 'Semolina (Rava/Sooji)', quantity: '1/2 cup' },
            { item: 'Sugar', quantity: '3/4 cup (adjust to taste)' },
            { item: 'Milk', quantity: '1 cup (or as needed)' },
            { item: 'Banana', quantity: '1 ripe (mashed)' },
            { item: 'Cardamom Powder', quantity: '1/2 teaspoon' },
            { item: 'Fennel Seeds', quantity: '1/2 teaspoon (optional)' },
            { item: 'Baking Powder', quantity: '1/2 teaspoon' },
            { item: 'Water', quantity: 'as needed (to adjust the batter consistency)' },
            { item: 'Ghee or Oil', quantity: 'for frying' },
            { item: 'Chopped Nuts', quantity: 'for garnish (optional)' },
            { item: 'Grated Coconut', quantity: 'for garnish (optional)' },
        ],
        6: [
            { item: 'All-Purpose Flour (Maida)', quantity: '1.5 cups' },
            { item: 'Semolina (Rava/Sooji)', quantity: '3/4 cup' },
            { item: 'Sugar', quantity: '1 cup (adjust to taste)' },
            { item: 'Milk', quantity: '1.5 cups (or as needed)' },
            { item: 'Banana', quantity: '1.5 ripe (mashed)' },
            { item: 'Cardamom Powder', quantity: '3/4 teaspoon' },
            { item: 'Fennel Seeds', quantity: '3/4 teaspoon (optional)' },
            { item: 'Baking Powder', quantity: '3/4 teaspoon' },
            { item: 'Water', quantity: 'as needed (to adjust the batter consistency)' },
            { item: 'Ghee or Oil', quantity: 'for frying' },
            { item: 'Chopped Nuts', quantity: 'for garnish (optional)' },
            { item: 'Grated Coconut', quantity: 'for garnish (optional)' },
        ],
        8: [
            { item: 'All-Purpose Flour (Maida)', quantity: '2 cups' },
            { item: 'Semolina (Rava/Sooji)', quantity: '1 cup' },
            { item: 'Sugar', quantity: '1.5 cups (adjust to taste)' },
            { item: 'Milk', quantity: '2 cups (or as needed)' },
            { item: 'Banana', quantity: '2 ripe (mashed)' },
            { item: 'Cardamom Powder', quantity: '1 teaspoon' },
            { item: 'Fennel Seeds', quantity: '1 teaspoon (optional)' },
            { item: 'Baking Powder', quantity: '1 teaspoon' },
            { item: 'Water', quantity: 'as needed (to adjust the batter consistency)' },
            { item: 'Ghee or Oil', quantity: 'for frying' },
            { item: 'Chopped Nuts', quantity: 'for garnish (optional)' },
            { item: 'Grated Coconut', quantity: 'for garnish (optional)' },
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
