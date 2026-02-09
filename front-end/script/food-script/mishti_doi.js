document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: [
            { item: 'Milk', quantity: '500 ml (full-fat or whole milk)' },
            { item: 'Sugar', quantity: '1/4 cup (adjust to taste)' },
            { item: 'Cardamom Powder', quantity: '1/4 teaspoon' },
            { item: 'Yogurt (plain, unsweetened)', quantity: '1 tablespoon (as a starter culture)' },
            { item: 'Saffron (optional)', quantity: 'a few strands (for color and flavor)' },
            { item: 'Chopped Nuts (optional)', quantity: 'for garnish (e.g., almonds, pistachios)' },
        ],
        4: [
            { item: 'Milk', quantity: '1 liter (full-fat or whole milk)' },
            { item: 'Sugar', quantity: '1/2 cup (adjust to taste)' },
            { item: 'Cardamom Powder', quantity: '1/2 teaspoon' },
            { item: 'Yogurt (plain, unsweetened)', quantity: '2 tablespoons (as a starter culture)' },
            { item: 'Saffron (optional)', quantity: 'a few strands (for color and flavor)' },
            { item: 'Chopped Nuts (optional)', quantity: 'for garnish (e.g., almonds, pistachios)' },
        ],
        6: [
            { item: 'Milk', quantity: '1.5 liters (full-fat or whole milk)' },
            { item: 'Sugar', quantity: '3/4 cup (adjust to taste)' },
            { item: 'Cardamom Powder', quantity: '3/4 teaspoon' },
            { item: 'Yogurt (plain, unsweetened)', quantity: '3 tablespoons (as a starter culture)' },
            { item: 'Saffron (optional)', quantity: 'a few strands (for color and flavor)' },
            { item: 'Chopped Nuts (optional)', quantity: 'for garnish (e.g., almonds, pistachios)' },
        ],
        8: [
            { item: 'Milk', quantity: '2 liters (full-fat or whole milk)' },
            { item: 'Sugar', quantity: '1 cup (adjust to taste)' },
            { item: 'Cardamom Powder', quantity: '1 teaspoon' },
            { item: 'Yogurt (plain, unsweetened)', quantity: '4 tablespoons (as a starter culture)' },
            { item: 'Saffron (optional)', quantity: 'a few strands (for color and flavor)' },
            { item: 'Chopped Nuts (optional)', quantity: 'for garnish (e.g., almonds, pistachios)' },
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
