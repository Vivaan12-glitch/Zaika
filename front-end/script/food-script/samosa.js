document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: {
            dough: [
                { item: 'All-purpose flour (maida)', quantity: '1 cup' },
                { item: 'Semolina (rava)', quantity: '1 tablespoon (optional)', },
                { item: 'Oil or ghee', quantity: '1.5 tablespoons' },
                { item: 'Salt', quantity: '1/4 teaspoon' },
                { item: 'Water', quantity: 'as needed' },
            ],
            filling: [
                { item: 'Potatoes', quantity: '1 large, boiled and mashed' },
                { item: 'Green peas', quantity: '1/4 cup (optional, boiled)' },
                { item: 'Finely chopped onions', quantity: '1/2 cup' },
                { item: 'Green chilies', quantity: '1, finely chopped' },
                { item: 'Ginger-garlic paste', quantity: '1/2 tablespoon' },
                { item: 'Cumin seeds', quantity: '1/2 teaspoon' },
                { item: 'Fennel seeds', quantity: '1/4 teaspoon (optional)' },
                { item: 'Mustard seeds', quantity: '1/4 teaspoon (optional)' },
                { item: 'Turmeric powder', quantity: '1/4 teaspoon' },
                { item: 'Red chili powder', quantity: '1/2 teaspoon' },
                { item: 'Coriander powder', quantity: '1/2 teaspoon' },
                { item: 'Garam masala', quantity: '1/2 teaspoon' },
                { item: 'Salt', quantity: 'to taste' },
                { item: 'Chopped fresh coriander leaves', quantity: '1 tablespoon' },
                { item: 'Lemon juice', quantity: '1/2 tablespoon (optional)' },
            ],
            serving: [
                { item: 'Chutney (like mint or tamarind)', quantity: 'as desired' },
                { item: 'Yogurt', quantity: 'as desired (optional)' }
            ]
        },
        4: {
            dough: [
                { item: 'All-purpose flour (maida)', quantity: '2 cups' },
                { item: 'Semolina (rava)', quantity: '2 tablespoons (optional)' },
                { item: 'Oil or ghee', quantity: '3 tablespoons' },
                { item: 'Salt', quantity: '1/2 teaspoon' },
                { item: 'Water', quantity: 'as needed' },
            ],
            filling: [
                { item: 'Potatoes', quantity: '2 large, boiled and mashed' },
                { item: 'Green peas', quantity: '1/2 cup (optional, boiled)' },
                { item: 'Finely chopped onions', quantity: '1 cup' },
                { item: 'Green chilies', quantity: '2, finely chopped' },
                { item: 'Ginger-garlic paste', quantity: '1 tablespoon' },
                { item: 'Cumin seeds', quantity: '1 teaspoon' },
                { item: 'Fennel seeds', quantity: '1/2 teaspoon (optional)' },
                { item: 'Mustard seeds', quantity: '1/2 teaspoon (optional)' },
                { item: 'Turmeric powder', quantity: '1/2 teaspoon' },
                { item: 'Red chili powder', quantity: '1 teaspoon' },
                { item: 'Coriander powder', quantity: '1 teaspoon' },
                { item: 'Garam masala', quantity: '1 teaspoon' },
                { item: 'Salt', quantity: 'to taste' },
                { item: 'Chopped fresh coriander leaves', quantity: '2 tablespoons' },
                { item: 'Lemon juice', quantity: '1 tablespoon (optional)' },
            ],
            serving: [
                { item: 'Chutney (like mint or tamarind)', quantity: 'as desired' },
                { item: 'Yogurt', quantity: 'as desired (optional)' }
            ]
        },
        6: {
            dough: [
                { item: 'All-purpose flour (maida)', quantity: '3 cups' },
                { item: 'Semolina (rava)', quantity: '3 tablespoons (optional)' },
                { item: 'Oil or ghee', quantity: '4.5 tablespoons' },
                { item: 'Salt', quantity: '3/4 teaspoon' },
                { item: 'Water', quantity: 'as needed' },
            ],
            filling: [
                { item: 'Potatoes', quantity: '3 large, boiled and mashed' },
                { item: 'Green peas', quantity: '3/4 cup (optional, boiled)' },
                { item: 'Finely chopped onions', quantity: '1.5 cups' },
                { item: 'Green chilies', quantity: '3, finely chopped' },
                { item: 'Ginger-garlic paste', quantity: '1.5 tablespoons' },
                { item: 'Cumin seeds', quantity: '1.5 teaspoons' },
                { item: 'Fennel seeds', quantity: '3/4 teaspoon (optional)' },
                { item: 'Mustard seeds', quantity: '3/4 teaspoon (optional)' },
                { item: 'Turmeric powder', quantity: '3/4 teaspoon' },
                { item: 'Red chili powder', quantity: '1.5 teaspoons' },
                { item: 'Coriander powder', quantity: '1.5 teaspoons' },
                { item: 'Garam masala', quantity: '1.5 teaspoons' },
                { item: 'Salt', quantity: 'to taste' },
                { item: 'Chopped fresh coriander leaves', quantity: '3 tablespoons' },
                { item: 'Lemon juice', quantity: '1.5 tablespoons (optional)' },
            ],
            serving: [
                { item: 'Chutney (like mint or tamarind)', quantity: 'as desired' },
                { item: 'Yogurt', quantity: 'as desired (optional)' }
            ]
        },
        8: {
            dough: [
                { item: 'All-purpose flour (maida)', quantity: '4 cups' },
                { item: 'Semolina (rava)', quantity: '4 tablespoons (optional)' },
                { item: 'Oil or ghee', quantity: '6 tablespoons' },
                { item: 'Salt', quantity: '1 teaspoon' },
                { item: 'Water', quantity: 'as needed' },
            ],
            filling: [
                { item: 'Potatoes', quantity: '4 large, boiled and mashed' },
                { item: 'Green peas', quantity: '1 cup (optional, boiled)' },
                { item: 'Finely chopped onions', quantity: '2 cups' },
                { item: 'Green chilies', quantity: '4, finely chopped' },
                { item: 'Ginger-garlic paste', quantity: '2 tablespoons' },
                { item: 'Cumin seeds', quantity: '2 teaspoons' },
                { item: 'Fennel seeds', quantity: '1 teaspoon (optional)' },
                { item: 'Mustard seeds', quantity: '1 teaspoon (optional)' },
                { item: 'Turmeric powder', quantity: '1 teaspoon' },
                { item: 'Red chili powder', quantity: '2 teaspoons' },
                { item: 'Coriander powder', quantity: '2 teaspoons' },
                { item: 'Garam masala', quantity: '2 teaspoons' },
                { item: 'Salt', quantity: 'to taste' },
                { item: 'Chopped fresh coriander leaves', quantity: '4 tablespoons' },
                { item: 'Lemon juice', quantity: '2 tablespoons (optional)' },
            ],
            serving: [
                { item: 'Chutney (like mint or tamarind)', quantity: 'as desired' },
                { item: 'Yogurt', quantity: 'as desired (optional)' }
            ]
        }
    };

    function updateIngredients() {
        const peopleSelect = document.getElementById('people');
        const ingredientsList = document.getElementById('ingredients-list');
        const selectedPeople = peopleSelect.value;
        const ingredientsForPeople = ingredients[selectedPeople] || { dough: [], filling: [], serving: [] };

        ingredientsList.innerHTML = '';

        ['dough', 'filling', 'serving'].forEach(section => {
            const sectionHeader = document.createElement('h3');
            sectionHeader.textContent = section.charAt(0).toUpperCase() + section.slice(1);
            ingredientsList.appendChild(sectionHeader);

            ingredientsForPeople[section].forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.textContent = `${ingredient.item}: ${ingredient.quantity}`;
                ingredientsList.appendChild(listItem);
            });
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
