document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: {
            arisaPitha: [
                { item: 'Rice Flour', quantity: '2 cups (preferably from soaked and ground rice)' },
                { item: 'Jaggery', quantity: '1 cup (grated or powdered)' },
                { item: 'Water', quantity: 'As needed (for dough)' },
                { item: 'Coconut', quantity: '1 cup (grated, fresh or desiccated)' },
                { item: 'Cardamom Powder', quantity: '1 teaspoon (for flavor)' },
                { item: 'Salt', quantity: 'A pinch (optional)' },
                { item: 'Ghee', quantity: 'For frying (clarified butter)' },
                { item: 'Sesame Seeds', quantity: '1 tablespoon (optional, for added flavor and texture)' },
                { item: 'Nutmeg Powder', quantity: 'A pinch (optional, for extra aroma)' }
            ]
        },
        4: {
            arisaPitha: [
                { item: 'Rice Flour', quantity: '4 cups' },
                { item: 'Jaggery', quantity: '2 cups' },
                { item: 'Water', quantity: 'As needed' },
                { item: 'Coconut', quantity: '2 cups' },
                { item: 'Cardamom Powder', quantity: '2 teaspoons' },
                { item: 'Salt', quantity: 'A pinch (optional)' },
                { item: 'Ghee', quantity: 'For frying' },
                { item: 'Sesame Seeds', quantity: '2 tablespoons (optional)' },
                { item: 'Nutmeg Powder', quantity: 'A pinch (optional)' }
            ]
        },
        6: {
            arisaPitha: [
                { item: 'Rice Flour', quantity: '6 cups' },
                { item: 'Jaggery', quantity: '3 cups' },
                { item: 'Water', quantity: 'As needed' },
                { item: 'Coconut', quantity: '3 cups' },
                { item: 'Cardamom Powder', quantity: '3 teaspoons' },
                { item: 'Salt', quantity: 'A pinch (optional)' },
                { item: 'Ghee', quantity: 'For frying' },
                { item: 'Sesame Seeds', quantity: '3 tablespoons (optional)' },
                { item: 'Nutmeg Powder', quantity: 'A pinch (optional)' }
            ]
        },
        8: {
            arisaPitha: [
                { item: 'Rice Flour', quantity: '8 cups' },
                { item: 'Jaggery', quantity: '4 cups' },
                { item: 'Water', quantity: 'As needed' },
                { item: 'Coconut', quantity: '4 cups' },
                { item: 'Cardamom Powder', quantity: '4 teaspoons' },
                { item: 'Salt', quantity: 'A pinch (optional)' },
                { item: 'Ghee', quantity: 'For frying' },
                { item: 'Sesame Seeds', quantity: '4 tablespoons (optional)' },
                { item: 'Nutmeg Powder', quantity: 'A pinch (optional)' }
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
    // Event listener for when the number of people is changed
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
