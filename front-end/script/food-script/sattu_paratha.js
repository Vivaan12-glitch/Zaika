document.addEventListener('DOMContentLoaded', function() {
    const ingredients = {
        2: {
            dough: [
                { item: 'Whole Wheat Flour (Atta)', quantity: '2 cups' },
                { item: 'Water', quantity: 'as needed' },
                { item: 'Salt', quantity: '1/2 teaspoon (optional)' },
                { item: 'Oil or Ghee', quantity: '1 tablespoon (optional)' }
            ],
            filling: [
                { item: 'Sattu Flour', quantity: '1 cup' },
                { item: 'Onion', quantity: '1 small, finely chopped (optional)' },
                { item: 'Green Chilies', quantity: '1-2, finely chopped' },
                { item: 'Coriander Leaves', quantity: 'a handful, chopped (optional)' },
                { item: 'Ginger', quantity: '1 teaspoon, grated (optional)' },
                { item: 'Lemon Juice', quantity: '1 tablespoon (optional)' },
                { item: 'Salt', quantity: 'to taste' },
                { item: 'Carom Seeds (Ajwain)', quantity: '1/2 teaspoon (optional)' },
                { item: 'Black Pepper', quantity: 'to taste (optional)' }
            ],
            cooking: [
                { item: 'Ghee or Oil', quantity: 'for frying' }
            ],
            accompaniments: [
                { item: 'Yogurt or Raita', quantity: 'as desired' },
                { item: 'Pickles', quantity: 'as desired' },
                { item: 'Salad', quantity: 'as desired' }
            ]
        },
        4: {
            dough: [
                { item: 'Whole Wheat Flour (Atta)', quantity: '4 cups' },
                { item: 'Water', quantity: 'as needed' },
                { item: 'Salt', quantity: '1 teaspoon (optional)' },
                { item: 'Oil or Ghee', quantity: '2 tablespoons (optional)' }
            ],
            filling: [
                { item: 'Sattu Flour', quantity: '2 cups' },
                { item: 'Onion', quantity: '2 small, finely chopped (optional)' },
                { item: 'Green Chilies', quantity: '2-4, finely chopped' },
                { item: 'Coriander Leaves', quantity: 'a handful, chopped (optional)' },
                { item: 'Ginger', quantity: '2 teaspoons, grated (optional)' },
                { item: 'Lemon Juice', quantity: '2 tablespoons (optional)' },
                { item: 'Salt', quantity: 'to taste' },
                { item: 'Carom Seeds (Ajwain)', quantity: '1 teaspoon (optional)' },
                { item: 'Black Pepper', quantity: 'to taste (optional)' }
            ],
            cooking: [
                { item: 'Ghee or Oil', quantity: 'for frying' }
            ],
            accompaniments: [
                { item: 'Yogurt or Raita', quantity: 'as desired' },
                { item: 'Pickles', quantity: 'as desired' },
                { item: 'Salad', quantity: 'as desired' }
            ]
        },
        6: {
            dough: [
                { item: 'Whole Wheat Flour (Atta)', quantity: '6 cups' },
                { item: 'Water', quantity: 'as needed' },
                { item: 'Salt', quantity: '1.5 teaspoons (optional)' },
                { item: 'Oil or Ghee', quantity: '3 tablespoons (optional)' }
            ],
            filling: [
                { item: 'Sattu Flour', quantity: '3 cups' },
                { item: 'Onion', quantity: '3 small, finely chopped (optional)' },
                { item: 'Green Chilies', quantity: '3-6, finely chopped' },
                { item: 'Coriander Leaves', quantity: 'a handful, chopped (optional)' },
                { item: 'Ginger', quantity: '3 teaspoons, grated (optional)' },
                { item: 'Lemon Juice', quantity: '3 tablespoons (optional)' },
                { item: 'Salt', quantity: 'to taste' },
                { item: 'Carom Seeds (Ajwain)', quantity: '1.5 teaspoons (optional)' },
                { item: 'Black Pepper', quantity: 'to taste (optional)' }
            ],
            cooking: [
                { item: 'Ghee or Oil', quantity: 'for frying' }
            ],
            accompaniments: [
                { item: 'Yogurt or Raita', quantity: 'as desired' },
                { item: 'Pickles', quantity: 'as desired' },
                { item: 'Salad', quantity: 'as desired' }
            ]
        },
        8: {
            dough: [
                { item: 'Whole Wheat Flour (Atta)', quantity: '8 cups' },
                { item: 'Water', quantity: 'as needed' },
                { item: 'Salt', quantity: '2 teaspoons (optional)' },
                { item: 'Oil or Ghee', quantity: '4 tablespoons (optional)' }
            ],
            filling: [
                { item: 'Sattu Flour', quantity: '4 cups' },
                { item: 'Onion', quantity: '4 small, finely chopped (optional)' },
                { item: 'Green Chilies', quantity: '4-8, finely chopped' },
                { item: 'Coriander Leaves', quantity: 'a handful, chopped (optional)' },
                { item: 'Ginger', quantity: '4 teaspoons, grated (optional)' },
                { item: 'Lemon Juice', quantity: '4 tablespoons (optional)' },
                { item: 'Salt', quantity: 'to taste' },
                { item: 'Carom Seeds (Ajwain)', quantity: '2 teaspoons (optional)' },
                { item: 'Black Pepper', quantity: 'to taste (optional)' }
            ],
            cooking: [
                { item: 'Ghee or Oil', quantity: 'for frying' }
            ],
            accompaniments: [
                { item: 'Yogurt or Raita', quantity: 'as desired' },
                { item: 'Pickles', quantity: 'as desired' },
                { item: 'Salad', quantity: 'as desired' }
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
            categoryTitle.textContent = `For the ${category}:`;
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
