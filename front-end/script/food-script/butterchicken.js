document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: {
            chickenMarinade: [
                { item: 'Chicken', quantity: '250g' },
                { item: 'Yogurt', quantity: '50g' },
                { item: 'Ginger-Garlic Paste', quantity: '1 tablespoon' },
                { item: 'Lemon Juice', quantity: '1 tablespoon' },
                { item: 'Red Chili Powder', quantity: '1/2 tablespoon' },
                { item: 'Turmeric Powder', quantity: '1/4 teaspoon' },
                { item: 'Garam Masala', quantity: '1/2 teaspoon' },
                { item: 'Salt', quantity: 'To taste' }
            ],
            sauce: [
                { item: 'Butter', quantity: '1.5 tablespoons' },
                { item: 'Oil', quantity: '1/2 tablespoon' },
                { item: 'Onion', quantity: '1/2 large (finely chopped)' },
                { item: 'Green Chilies', quantity: '1 (slit)' },
                { item: 'Ginger-Garlic Paste', quantity: '1/2 tablespoon' },
                { item: 'Tomato Puree', quantity: '1 cup' },
                { item: 'Red Chili Powder', quantity: '1/2 teaspoon' },
                { item: 'Garam Masala', quantity: '1/4 teaspoon' },
                { item: 'Cumin Powder', quantity: '1/4 teaspoon' },
                { item: 'Cream', quantity: '2 tablespoons' },
                { item: 'Kasuri Methi', quantity: '1/4 tablespoon' },
                { item: 'Salt', quantity: 'To taste' }
            ],
            garnish: [
                { item: 'Fresh Coriander Leaves', quantity: 'A small handful' }
            ]
        },
        4: {
            chickenMarinade: [
                { item: 'Chicken', quantity: '500g' },
                { item: 'Yogurt', quantity: '100g' },
                { item: 'Ginger-Garlic Paste', quantity: '2 tablespoons' },
                { item: 'Lemon Juice', quantity: '2 tablespoons' },
                { item: 'Red Chili Powder', quantity: '1 tablespoon' },
                { item: 'Turmeric Powder', quantity: '1 teaspoon' },
                { item: 'Garam Masala', quantity: '1 teaspoon' },
                { item: 'Salt', quantity: 'To taste' }
            ],
            sauce: [
                { item: 'Butter', quantity: '3 tablespoons' },
                { item: 'Oil', quantity: '1 tablespoon' },
                { item: 'Onion', quantity: '1 large (finely chopped)' },
                { item: 'Green Chilies', quantity: '2 (slit)' },
                { item: 'Ginger-Garlic Paste', quantity: '1 tablespoon' },
                { item: 'Tomato Puree', quantity: '2 cups' },
                { item: 'Red Chili Powder', quantity: '1 teaspoon' },
                { item: 'Garam Masala', quantity: '1 teaspoon' },
                { item: 'Cumin Powder', quantity: '1/2 teaspoon' },
                { item: 'Cream', quantity: '1/2 cup' },
                { item: 'Kasuri Methi', quantity: '1 tablespoon' },
                { item: 'Salt', quantity: 'To taste' }
            ],
            garnish: [
                { item: 'Fresh Coriander Leaves', quantity: 'A handful' }
            ]
        },
        6: {
            chickenMarinade: [
                { item: 'Chicken', quantity: '750g' },
                { item: 'Yogurt', quantity: '150g' },
                { item: 'Ginger-Garlic Paste', quantity: '3 tablespoons' },
                { item: 'Lemon Juice', quantity: '3 tablespoons' },
                { item: 'Red Chili Powder', quantity: '1.5 tablespoons' },
                { item: 'Turmeric Powder', quantity: '1.5 teaspoons' },
                { item: 'Garam Masala', quantity: '1.5 teaspoons' },
                { item: 'Salt', quantity: 'To taste' }
            ],
            sauce: [
                { item: 'Butter', quantity: '4.5 tablespoons' },
                { item: 'Oil', quantity: '1.5 tablespoons' },
                { item: 'Onion', quantity: '1.5 large (finely chopped)' },
                { item: 'Green Chilies', quantity: '3 (slit)' },
                { item: 'Ginger-Garlic Paste', quantity: '1.5 tablespoons' },
                { item: 'Tomato Puree', quantity: '3 cups' },
                { item: 'Red Chili Powder', quantity: '1.5 teaspoons' },
                { item: 'Garam Masala', quantity: '1.5 teaspoons' },
                { item: 'Cumin Powder', quantity: '3/4 teaspoon' },
                { item: 'Cream', quantity: '3/4 cup' },
                { item: 'Kasuri Methi', quantity: '1.5 tablespoons' },
                { item: 'Salt', quantity: 'To taste' }
            ],
            garnish: [
                { item: 'Fresh Coriander Leaves', quantity: 'A large handful' }
            ]
        },
        8: {
            chickenMarinade: [
                { item: 'Chicken', quantity: '1kg' },
                { item: 'Yogurt', quantity: '200g' },
                { item: 'Ginger-Garlic Paste', quantity: '4 tablespoons' },
                { item: 'Lemon Juice', quantity: '4 tablespoons' },
                { item: 'Red Chili Powder', quantity: '2 tablespoons' },
                { item: 'Turmeric Powder', quantity: '2 teaspoons' },
                { item: 'Garam Masala', quantity: '2 teaspoons' },
                { item: 'Salt', quantity: 'To taste' }
            ],
            sauce: [
                { item: 'Butter', quantity: '6 tablespoons' },
                { item: 'Oil', quantity: '2 tablespoons' },
                { item: 'Onion', quantity: '2 large (finely chopped)' },
                { item: 'Green Chilies', quantity: '4 (slit)' },
                { item: 'Ginger-Garlic Paste', quantity: '2 tablespoons' },
                { item: 'Tomato Puree', quantity: '4 cups' },
                { item: 'Red Chili Powder', quantity: '2 teaspoons' },
                { item: 'Garam Masala', quantity: '2 teaspoons' },
                { item: 'Cumin Powder', quantity: '1 teaspoon' },
                { item: 'Cream', quantity: '1 cup' },
                { item: 'Kasuri Methi', quantity: '2 tablespoons' },
                { item: 'Salt', quantity: 'To taste' }
            ],
            garnish: [
                { item: 'Fresh Coriander Leaves', quantity: 'A very large handful' }
            ]
        }
    };

    function updateIngredients() {
        const peopleSelect = document.getElementById('people');
        const ingredientsList = document.getElementById('ingredients-list');
        const selectedPeople = peopleSelect.value;
        const ingredientsForPeople = ingredients[selectedPeople] || {};

        ingredientsList.innerHTML = '';

        for (const [category, items] of Object.entries(ingredientsForPeople)) {
            const categoryTitle = document.createElement('h5');
            categoryTitle.textContent = `For the ${category.replace(/([A-Z])/g, ' $1').toLowerCase()}:`;
            ingredientsList.appendChild(categoryTitle);

            const list = document.createElement('ul');
            items.forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.textContent = `${ingredient.item}: ${ingredient.quantity}`;
                list.appendChild(listItem);
            });
            ingredientsList.appendChild(list);
        }
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
