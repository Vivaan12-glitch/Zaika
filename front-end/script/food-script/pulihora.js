document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: [
            { item: 'Cooked Rice', quantity: '2 cups (preferably cooled)' },
            { item: 'Tamarind', quantity: '2 tablespoons (soaked in warm water and extracted juice)' },
            { item: 'Turmeric Powder', quantity: '1/2 teaspoon' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Jaggery', quantity: '1 tablespoon (optional, for balancing the tanginess)' },
            { item: 'Oil', quantity: '2 tablespoons (preferably sesame oil)' },
            { item: 'Mustard Seeds', quantity: '1 teaspoon' },
            { item: 'Cumin Seeds', quantity: '1 teaspoon' },
            { item: 'Chana Dal (Bengal gram)', quantity: '1 tablespoon' },
            { item: 'Urad Dal (Black gram)', quantity: '1 tablespoon' },
            { item: 'Dry Red Chilies', quantity: '2-3 (broken into pieces)' },
            { item: 'Green Chilies', quantity: '2 (slit)' },
            { item: 'Curry Leaves', quantity: 'A handful' },
            { item: 'Peanuts', quantity: '2 tablespoons (optional, roasted)' },
            { item: 'Ginger', quantity: '1 teaspoon (finely chopped)' },
            { item: 'Asafetida (Hing)', quantity: 'A pinch (optional)' },
        ],
        4: [
            { item: 'Cooked Rice', quantity: '4 cups (preferably cooled)' },
            { item: 'Tamarind', quantity: '4 tablespoons (soaked in warm water and extracted juice)' },
            { item: 'Turmeric Powder', quantity: '1 teaspoon' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Jaggery', quantity: '2 tablespoons (optional, for balancing the tanginess)' },
            { item: 'Oil', quantity: '4 tablespoons (preferably sesame oil)' },
            { item: 'Mustard Seeds', quantity: '2 teaspoons' },
            { item: 'Cumin Seeds', quantity: '2 teaspoons' },
            { item: 'Chana Dal (Bengal gram)', quantity: '2 tablespoons' },
            { item: 'Urad Dal (Black gram)', quantity: '2 tablespoons' },
            { item: 'Dry Red Chilies', quantity: '4-6 (broken into pieces)' },
            { item: 'Green Chilies', quantity: '4 (slit)' },
            { item: 'Curry Leaves', quantity: 'A handful' },
            { item: 'Peanuts', quantity: '4 tablespoons (optional, roasted)' },
            { item: 'Ginger', quantity: '2 teaspoons (finely chopped)' },
            { item: 'Asafetida (Hing)', quantity: 'A pinch (optional)' },
        ],
        6: [
            { item: 'Cooked Rice', quantity: '6 cups (preferably cooled)' },
            { item: 'Tamarind', quantity: '6 tablespoons (soaked in warm water and extracted juice)' },
            { item: 'Turmeric Powder', quantity: '1.5 teaspoons' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Jaggery', quantity: '3 tablespoons (optional, for balancing the tanginess)' },
            { item: 'Oil', quantity: '6 tablespoons (preferably sesame oil)' },
            { item: 'Mustard Seeds', quantity: '3 teaspoons' },
            { item: 'Cumin Seeds', quantity: '3 teaspoons' },
            { item: 'Chana Dal (Bengal gram)', quantity: '3 tablespoons' },
            { item: 'Urad Dal (Black gram)', quantity: '3 tablespoons' },
            { item: 'Dry Red Chilies', quantity: '6-9 (broken into pieces)' },
            { item: 'Green Chilies', quantity: '6 (slit)' },
            { item: 'Curry Leaves', quantity: 'A handful' },
            { item: 'Peanuts', quantity: '6 tablespoons (optional, roasted)' },
            { item: 'Ginger', quantity: '3 teaspoons (finely chopped)' },
            { item: 'Asafetida (Hing)', quantity: 'A pinch (optional)' },
        ],
        8: [
            { item: 'Cooked Rice', quantity: '8 cups (preferably cooled)' },
            { item: 'Tamarind', quantity: '8 tablespoons (soaked in warm water and extracted juice)' },
            { item: 'Turmeric Powder', quantity: '2 teaspoons' },
            { item: 'Salt', quantity: 'to taste' },
            { item: 'Jaggery', quantity: '4 tablespoons (optional, for balancing the tanginess)' },
            { item: 'Oil', quantity: '8 tablespoons (preferably sesame oil)' },
            { item: 'Mustard Seeds', quantity: '4 teaspoons' },
            { item: 'Cumin Seeds', quantity: '4 teaspoons' },
            { item: 'Chana Dal (Bengal gram)', quantity: '4 tablespoons' },
            { item: 'Urad Dal (Black gram)', quantity: '4 tablespoons' },
            { item: 'Dry Red Chilies', quantity: '8-12 (broken into pieces)' },
            { item: 'Green Chilies', quantity: '8 (slit)' },
            { item: 'Curry Leaves', quantity: 'A handful' },
            { item: 'Peanuts', quantity: '8 tablespoons (optional, roasted)' },
            { item: 'Ginger', quantity: '4 teaspoons (finely chopped)' },
            { item: 'Asafetida (Hing)', quantity: 'A pinch (optional)' },
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

    // Handle ingredient changes
    const peopleSelect = document.getElementById('people');
    peopleSelect.addEventListener('change', updateIngredients);

    // Initialize ingredients list on page load
    updateIngredients();

    // Like button functionality
    const likeButton = document.querySelector('.like-btn');
    const recipeId = 'biryani-recipe'; // Unique ID for this recipe

    // Check if the recipe was liked previously from localStorage
    const isLiked = localStorage.getItem(recipeId);

    if (isLiked === 'true') {
        likeButton.classList.add('liked');
    }

    // Toggle like state on click
    likeButton.addEventListener('click', function() {
        this.classList.toggle('liked');
        
        if (this.classList.contains('liked')) {
            localStorage.setItem(recipeId, 'true');
        } else {
            localStorage.setItem(recipeId, 'false');
        }
    });
});