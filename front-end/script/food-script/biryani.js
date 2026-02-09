document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: {
            chickenMarinade: [
                { item: 'Chicken', quantity: '500g' },
                { item: 'Yogurt', quantity: '100g' },
                { item: 'Ginger-Garlic Paste', quantity: '1 tablespoon' },
                { item: 'Biryani Masala', quantity: '1 tablespoon' },
                { item: 'Red Chili Powder', quantity: '1/2 tablespoon' },
                { item: 'Turmeric Powder', quantity: '1/4 teaspoon' },
                { item: 'Garam Masala', quantity: '1/2 teaspoon' },
                { item: 'Salt', quantity: 'To taste' },
                { item: 'Lemon Juice', quantity: '1 tablespoon' },
                { item: 'Chopped Coriander Leaves', quantity: 'A small handful' }
            ],
            rice: [
                { item: 'Basmati Rice', quantity: '1 cup' },
                { item: 'Water', quantity: '2 cups' },
                { item: 'Green Cardamom Pods', quantity: '1-2' },
                { item: 'Cloves', quantity: '2-3' },
                { item: 'Bay Leaf', quantity: '1/2' },
                { item: 'Cinnamon Stick', quantity: '1/2' },
                { item: 'Salt', quantity: '1/2 teaspoon' }
            ],
            biryani: [
                { item: 'Onions', quantity: '1 large' },
                { item: 'Tomatoes', quantity: '1' },
                { item: 'Mint Leaves', quantity: '1/4 cup' },
                { item: 'Chopped Coriander Leaves', quantity: 'A small handful' },
                { item: 'Saffron Milk', quantity: '2 tablespoons' },
                { item: 'Ghee or Oil', quantity: '1 tablespoon' },
                { item: 'Fried Onions', quantity: 'Optional, for garnish' }
            ]
        },
        4: {
            chickenMarinade: [
                { item: 'Chicken', quantity: '1kg' },
                { item: 'Yogurt', quantity: '200g' },
                { item: 'Ginger-Garlic Paste', quantity: '2 tablespoons' },
                { item: 'Biryani Masala', quantity: '2 tablespoons' },
                { item: 'Red Chili Powder', quantity: '1 tablespoon' },
                { item: 'Turmeric Powder', quantity: '1/2 teaspoon' },
                { item: 'Garam Masala', quantity: '1 teaspoon' },
                { item: 'Salt', quantity: 'To taste' },
                { item: 'Lemon Juice', quantity: '2 tablespoons' },
                { item: 'Chopped Coriander Leaves', quantity: 'A handful' }
            ],
            rice: [
                { item: 'Basmati Rice', quantity: '2 cups' },
                { item: 'Water', quantity: '4 cups' },
                { item: 'Green Cardamom Pods', quantity: '2-3' },
                { item: 'Cloves', quantity: '4-5' },
                { item: 'Bay Leaf', quantity: '1' },
                { item: 'Cinnamon Stick', quantity: '1' },
                { item: 'Salt', quantity: '1 teaspoon' }
            ],
            biryani: [
                { item: 'Onions', quantity: '2 large' },
                { item: 'Tomatoes', quantity: '2' },
                { item: 'Mint Leaves', quantity: '1/2 cup' },
                { item: 'Chopped Coriander Leaves', quantity: 'A handful' },
                { item: 'Saffron Milk', quantity: '1/4 cup' },
                { item: 'Ghee or Oil', quantity: '2 tablespoons' },
                { item: 'Fried Onions', quantity: 'Optional, for garnish' }
            ]
        },
        6: {
            chickenMarinade: [
                { item: 'Chicken', quantity: '1.5kg' },
                { item: 'Yogurt', quantity: '300g' },
                { item: 'Ginger-Garlic Paste', quantity: '3 tablespoons' },
                { item: 'Biryani Masala', quantity: '3 tablespoons' },
                { item: 'Red Chili Powder', quantity: '1.5 tablespoons' },
                { item: 'Turmeric Powder', quantity: '3/4 teaspoon' },
                { item: 'Garam Masala', quantity: '1.5 teaspoons' },
                { item: 'Salt', quantity: 'To taste' },
                { item: 'Lemon Juice', quantity: '3 tablespoons' },
                { item: 'Chopped Coriander Leaves', quantity: 'A large handful' }
            ],
            rice: [
                { item: 'Basmati Rice', quantity: '3 cups' },
                { item: 'Water', quantity: '6 cups' },
                { item: 'Green Cardamom Pods', quantity: '3-4' },
                { item: 'Cloves', quantity: '6-7' },
                { item: 'Bay Leaf', quantity: '1.5' },
                { item: 'Cinnamon Stick', quantity: '1.5' },
                { item: 'Salt', quantity: '1.5 teaspoons' }
            ],
            biryani: [
                { item: 'Onions', quantity: '3 large' },
                { item: 'Tomatoes', quantity: '3' },
                { item: 'Mint Leaves', quantity: '3/4 cup' },
                { item: 'Chopped Coriander Leaves', quantity: 'A large handful' },
                { item: 'Saffron Milk', quantity: '1/3 cup' },
                { item: 'Ghee or Oil', quantity: '3 tablespoons' },
                { item: 'Fried Onions', quantity: 'Optional, for garnish' }
            ]
        },
        8: {
            chickenMarinade: [
                { item: 'Chicken', quantity: '2kg' },
                { item: 'Yogurt', quantity: '400g' },
                { item: 'Ginger-Garlic Paste', quantity: '4 tablespoons' },
                { item: 'Biryani Masala', quantity: '4 tablespoons' },
                { item: 'Red Chili Powder', quantity: '2 tablespoons' },
                { item: 'Turmeric Powder', quantity: '1 teaspoon' },
                { item: 'Garam Masala', quantity: '2 teaspoons' },
                { item: 'Salt', quantity: 'To taste' },
                { item: 'Lemon Juice', quantity: '4 tablespoons' },
                { item: 'Chopped Coriander Leaves', quantity: 'A very large handful' }
            ],
            rice: [
                { item: 'Basmati Rice', quantity: '4 cups' },
                { item: 'Water', quantity: '8 cups' },
                { item: 'Green Cardamom Pods', quantity: '4-5' },
                { item: 'Cloves', quantity: '8-10' },
                { item: 'Bay Leaf', quantity: '2' },
                { item: 'Cinnamon Stick', quantity: '2' },
                { item: 'Salt', quantity: '2 teaspoons' }
            ],
            biryani: [
                { item: 'Onions', quantity: '4 large' },
                { item: 'Tomatoes', quantity: '4' },
                { item: 'Mint Leaves', quantity: '1 cup' },
                { item: 'Chopped Coriander Leaves', quantity: 'A very large handful' },
                { item: 'Saffron Milk', quantity: '1/2 cup' },
                { item: 'Ghee or Oil', quantity: '4 tablespoons' },
                { item: 'Fried Onions', quantity: 'Optional, for garnish' }
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
    
     // Function to save favorite recipe to the database
     function saveFavorite(recipeId) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "add_favorite.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText); // Log the response for debugging
            }
        };
        // Send user ID and recipe ID
        const userId = getUserId(); // Implement this function to retrieve the logged-in user ID
        xhr.send(`user_id=${userId}&recipe_id=${recipeId}`);
    }

    // Optional: Function to remove favorite recipe from the database
    function removeFavorite(recipeId) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "remove_favorite.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText); // Log the response for debugging
            }
        };
        const userId = getUserId(); // Implement this function to retrieve the logged-in user ID
        xhr.send(`user_id=${userId}&recipe_id=${recipeId}`);
    }

    // Placeholder function to get user ID from session or local storage
    function getUserId() {
        // Assuming user ID is stored in session or local storage
        return localStorage.getItem('user_id'); // Or retrieve from session if you're using PHP sessions
    }
});