document.addEventListener('DOMContentLoaded', function() {
    // Ingredients logic
    const ingredients = {
        2: [
            { item: 'Chenna (Indian cottage cheese)', quantity: '250g' },
            { item: 'Sugar', quantity: '100g' },
            { item: 'Semolina (Sooji/Rawa)', quantity: '1 tablespoon' },
            { item: 'Cardamom powder', quantity: '1/2 teaspoon' },
            { item: 'Ghee', quantity: '1 tablespoon' },
            { item: 'Baking powder', quantity: '1/4 teaspoon' },
            { item: 'Cashews', quantity: 'A handful (optional)' },
            { item: 'Raisins', quantity: 'A handful (optional)' }
        ],
        4: [
            { item: 'Chenna (Indian cottage cheese)', quantity: '500g' },
            { item: 'Sugar', quantity: '200g' },
            { item: 'Semolina (Sooji/Rawa)', quantity: '2 tablespoons' },
            { item: 'Cardamom powder', quantity: '1 teaspoon' },
            { item: 'Ghee', quantity: '2 tablespoons' },
            { item: 'Baking powder', quantity: '1/2 teaspoon' },
            { item: 'Cashews', quantity: 'A handful (optional)' },
            { item: 'Raisins', quantity: 'A handful (optional)' }
        ],
        6: [
            { item: 'Chenna (Indian cottage cheese)', quantity: '750g' },
            { item: 'Sugar', quantity: '300g' },
            { item: 'Semolina (Sooji/Rawa)', quantity: '3 tablespoons' },
            { item: 'Cardamom powder', quantity: '1 1/2 teaspoons' },
            { item: 'Ghee', quantity: '3 tablespoons' },
            { item: 'Baking powder', quantity: '3/4 teaspoon' },
            { item: 'Cashews', quantity: 'A handful (optional)' },
            { item: 'Raisins', quantity: 'A handful (optional)' }
        ],
        8: [
            { item: 'Chenna (Indian cottage cheese)', quantity: '1kg' },
            { item: 'Sugar', quantity: '400g' },
            { item: 'Semolina (Sooji/Rawa)', quantity: '4 tablespoons' },
            { item: 'Cardamom powder', quantity: '2 teaspoons' },
            { item: 'Ghee', quantity: '4 tablespoons' },
            { item: 'Baking powder', quantity: '1 teaspoon' },
            { item: 'Cashews', quantity: 'A handful (optional)' },
            { item: 'Raisins', quantity: 'A handful (optional)' }
        ]
    };

   function updateIngredients() {
        const peopleSelect = document.getElementById('people');
        const ingredientsList = document.getElementById('ingredients-list');
        const selectedPeople = peopleSelect.value;
        const ingredientsForPeople = ingredients[selectedPeople] || [];

        ingredientsList.innerHTML = ''; // Clear previous list

        ingredientsForPeople.forEach(ingredient => {
            const listItem = document.createElement('li');
            listItem.textContent = `${ingredient.item}: ${ingredient.quantity}`;
            ingredientsList.appendChild(listItem);
        });
    }

    const peopleSelect = document.getElementById('people');
    if (peopleSelect) {
        peopleSelect.addEventListener('change', updateIngredients);
        updateIngredients();  // Initialize on page load
    }

    // Like button functionality
    function setupLikeButton(likeButton, recipeId) {
        const isLiked = localStorage.getItem(recipeId);

        if (isLiked === 'true') {
            likeButton.classList.add('liked');
        }

        likeButton.addEventListener('click', function() {
            this.classList.toggle('liked');

            if (this.classList.contains('liked')) {
                localStorage.setItem(recipeId, 'true');
            } else {
                localStorage.setItem(recipeId, 'false');
            }
        });
    }

    // Generic selector for like buttons
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        const recipeId = button.dataset.recipeId; // Assuming you use data attributes for different recipes
        setupLikeButton(button, recipeId);
    });
});