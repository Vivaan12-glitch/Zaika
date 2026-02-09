document.addEventListener('DOMContentLoaded', function () {
    // Ingredients data for Rasabali
    const ingredients = {
        2: {
            chhenaPatties: [
                { item: 'Fresh Chhena', quantity: '1 cup' },
                { item: 'Semolina (Rava/Sooji)', quantity: '1 tablespoon' },
                { item: 'Sugar', quantity: '1 tablespoon' },
                { item: 'Cardamom Powder', quantity: '1/8 teaspoon' },
                { item: 'Baking Powder', quantity: 'A pinch' },
                { item: 'Oil or Ghee', quantity: 'For deep frying' }
            ],
            milkSyrup: [
                { item: 'Full-fat Milk', quantity: '500 ml' },
                { item: 'Sugar', quantity: '1/4 cup' },
                { item: 'Cardamom Powder', quantity: '1/4 teaspoon' },
                { item: 'Saffron', quantity: 'A few strands (optional)' },
                { item: 'Chopped Dry Fruits', quantity: 'For garnish (optional)' }
            ]
        },
        4: {
            chhenaPatties: [
                { item: 'Fresh Chhena', quantity: '2 cups' },
                { item: 'Semolina (Rava/Sooji)', quantity: '2 tablespoons' },
                { item: 'Sugar', quantity: '2 tablespoons' },
                { item: 'Cardamom Powder', quantity: '1/4 teaspoon' },
                { item: 'Baking Powder', quantity: 'A pinch' },
                { item: 'Oil or Ghee', quantity: 'For deep frying' }
            ],
            milkSyrup: [
                { item: 'Full-fat Milk', quantity: '1 liter' },
                { item: 'Sugar', quantity: '1/2 cup' },
                { item: 'Cardamom Powder', quantity: '1/2 teaspoon' },
                { item: 'Saffron', quantity: 'A few strands (optional)' },
                { item: 'Chopped Dry Fruits', quantity: 'For garnish (optional)' }
            ]
        },
        6: {
            chhenaPatties: [
                { item: 'Fresh Chhena', quantity: '3 cups' },
                { item: 'Semolina (Rava/Sooji)', quantity: '3 tablespoons' },
                { item: 'Sugar', quantity: '3 tablespoons' },
                { item: 'Cardamom Powder', quantity: '3/8 teaspoon' },
                { item: 'Baking Powder', quantity: 'A pinch' },
                { item: 'Oil or Ghee', quantity: 'For deep frying' }
            ],
            milkSyrup: [
                { item: 'Full-fat Milk', quantity: '1.5 liters' },
                { item: 'Sugar', quantity: '3/4 cup' },
                { item: 'Cardamom Powder', quantity: '3/4 teaspoon' },
                { item: 'Saffron', quantity: 'A few strands (optional)' },
                { item: 'Chopped Dry Fruits', quantity: 'For garnish (optional)' }
            ]
        },
        8: {
            chhenaPatties: [
                { item: 'Fresh Chhena', quantity: '4 cups' },
                { item: 'Semolina (Rava/Sooji)', quantity: '4 tablespoons' },
                { item: 'Sugar', quantity: '4 tablespoons' },
                { item: 'Cardamom Powder', quantity: '1/2 teaspoon' },
                { item: 'Baking Powder', quantity: 'A pinch' },
                { item: 'Oil or Ghee', quantity: 'For deep frying' }
            ],
            milkSyrup: [
                { item: 'Full-fat Milk', quantity: '2 liters' },
                { item: 'Sugar', quantity: '1 cup' },
                { item: 'Cardamom Powder', quantity: '1 teaspoon' },
                { item: 'Saffron', quantity: 'A few strands (optional)' },
                { item: 'Chopped Dry Fruits', quantity: 'For garnish (optional)' }
            ]
        }
    };

    // Function to update ingredients
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

    // Initialize the ingredients list on page load
    updateIngredients();

    // Event listener for the people dropdown
    const peopleSelect = document.getElementById('people');
    peopleSelect.addEventListener('change', updateIngredients);

    // Like button functionality for both Rasabali and Biryani recipes
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(likeButton => {
        const recipeId = likeButton.getAttribute('data-recipe-id'); // Get unique recipe ID from data attribute

        // Check localStorage for the liked state on page load
        const isLiked = localStorage.getItem(recipeId);

        if (isLiked === 'true') {
            likeButton.classList.add('liked'); // If liked, set it to liked state
        }

        // Add click event listener
        likeButton.addEventListener('click', function () {
            this.classList.toggle('liked'); // Toggle the liked class

            // Update localStorage based on current state
            if (this.classList.contains('liked')) {
                localStorage.setItem(recipeId, 'true'); // Store liked state
            } else {
                localStorage.setItem(recipeId, 'false'); // Store unliked state
            }
        });
    });
});
