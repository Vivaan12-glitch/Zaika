// Toggle Password Visibility (used in login.html and register.html)
function togglePasswordVisibility() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    if (togglePassword && passwordField) {
        togglePassword.addEventListener('click', () => {
            // Check current password field type and toggle between text and password
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);

            // Update the icon based on the type
            const eyeIcon = type === 'password' ? "url('images/eye.png')" : "url('images/eye.png')";
            togglePassword.style.backgroundImage = eyeIcon;
        });
    }
}

// Call the toggle password function when the page loads
togglePasswordVisibility();

// Call the function for register page
togglePasswordVisibility('togglePassword', 'password');

// code correct till now(see password for both)


// Function to handle form submission via AJAX
function handleFormSubmission() {
    const form = document.getElementById('registerForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(form);
            const messageElement = document.getElementById('message');

            // Validate email before sending
            if (!isValidEmail(formData.get('email'))) {
                messageElement.className = 'message error-message';
                messageElement.innerHTML = 'Please enter a valid email.';
                return;
            }

            fetch('/zaika/back-end/register.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'EXISTS') {
                    messageElement.className = 'message error-message';
                    messageElement.innerHTML = data.message;
                } else if (data.status === 'OK' && data.redirect) {
                    window.location.href = data.redirect;
                } else if (data.status === 'ERROR') {
                    messageElement.className = 'message error-message';
                    messageElement.innerHTML = data.message;
                }
            })
            .catch(() => {
                messageElement.className = 'message error-message';
                messageElement.innerHTML = 'An unexpected error occurred. Please try again.';
            });
        });
    }
}


// Function to handle login form submission via AJAX (login data )
function handleLoginFormSubmission() {
    const form = document.getElementById('loginForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(form);

            fetch('/zaika/back-end/login.php', { // Ensure the path to login.php is correct
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                const messageElement = document.getElementById('message');

                if (data.status === 'SUCCESS' && data.redirect) {
                    // Redirect to homepage on successful login
                    window.location.href = data.redirect;
                } else if (data.status === 'INVALID') {
                    // Incorrect username/password
                    messageElement.className = 'message error-message';
                    messageElement.innerHTML = data.message;
                } else if (data.status === 'NOT_FOUND') {
                    // User doesn't exist
                    messageElement.className = 'message error-message';
                    messageElement.innerHTML = data.message;
                }
            })
            .catch(() => {
                const messageElement = document.getElementById('message');
                messageElement.className = 'message error-message';
                messageElement.innerHTML = 'An unexpected error occurred. Please try again.';
            });
        });
    }
}

// Function to handle dynamic search
function handleSearch() {
    const searchBar = document.getElementById('searchBar');
    const recipes = document.querySelectorAll('.recipe-card');

    if (searchBar && recipes.length > 0) {
        searchBar.addEventListener('input', () => {
            const query = searchBar.value.toLowerCase();

            recipes.forEach(recipe => {
                const recipeName = recipe.getAttribute('data-name').toLowerCase();
                recipe.style.display = recipeName.includes(query) ? 'block' : 'none';
            });
        });
    }
}

// Function to handle country-state dropdown
function handleCountryStateDropdown() {
    const countrySelect = document.getElementById('country');
    const stateSelect = document.getElementById('state');

    if (countrySelect && stateSelect) {
        countrySelect.addEventListener('change', () => {
            stateSelect.disabled = countrySelect.value !== 'India';
        });
    }
}

// New: Function to pre-select state from profile in localStorage
function setStateFromProfile() {
    // Check if the user has a profile saved in localStorage
    const storedProfile = localStorage.getItem('profile');
    
    if (storedProfile) {
        // Parse the saved profile data
        const profileData = JSON.parse(storedProfile);
        const savedState = profileData.state; // Get the saved state

        // Set the state in the dropdown if it exists
        const stateDropdown = document.getElementById('stateDropdown'); // Change 'stateDropdown' to the ID used in your home page
        if (stateDropdown && savedState) {
            stateDropdown.value = savedState; // Pre-select the saved state in the dropdown
        }
    }
}

// Function to handle country-state dropdown and filter recipes based on state
function handleCountryStateDropdown() {
    const stateDropdown = document.getElementById('stateDropdown');
    const recipes = document.querySelectorAll('.recipe-card'); // All recipe cards

    if (stateDropdown) {
        // Listen for changes in the state dropdown
        stateDropdown.addEventListener('change', () => {
            const selectedState = stateDropdown.value;

            recipes.forEach(recipe => {
                // Get the state associated with each recipe
                const recipeState = recipe.getAttribute('data-state');

                // Show recipe if it matches the selected state, otherwise hide it
                if (recipeState === selectedState || selectedState === "State") {
                    recipe.style.display = 'block'; // Show matching recipes
                } else {
                    recipe.style.display = 'none'; // Hide non-matching recipes
                }
            });
        });
    }
}


   // Function to update the login/logout button based on the user's login state
function updateAuthButtons() {
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true'; // Check login status

    if (loginButton && logoutButton) {
        if (isLoggedIn) {
            // User is logged in: show logout button and hide login button
            logoutButton.style.display = 'block';
            loginButton.style.display = 'none';
        } else {
            // User is not logged in: show login button and hide logout button
            logoutButton.style.display = 'none';
            loginButton.style.display = 'block';
        }
    }
}

// Function to handle logout
function logoutUser() {
    // Remove the login state
    localStorage.removeItem('loggedIn');
    
    // Update the buttons to reflect the logout state
    updateAuthButtons();
    
    // Optionally redirect to homepage or login page after logout
    window.location.href = 'home.html';
}

// Function to handle login form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            
            // Logic to validate user credentials here (you can add validation)
            
            // Assuming login is successful, set login state
            localStorage.setItem('loggedIn', 'true');
            
            // Redirect to the homepage
            window.location.href = 'home.html';
        });
    }

    // Handle register form submission
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            
            // Logic to validate registration details here (you can add validation)
            
            // Assuming registration is successful, set login state
            localStorage.setItem('loggedIn', 'true');
            
            // Redirect to the homepage
            window.location.href = 'home.html';
        });
    }

    // Call the function to update buttons on page load (in case it's the homepage)
    updateAuthButtons();
});


// Initialize functions on page load
document.addEventListener('DOMContentLoaded', () => {
    togglePasswordVisibility(); // Initialize password visibility toggle
    handleFormSubmission(); // Initialize form submission handling (for register page)
    handleLoginFormSubmission(); // Initialize login form submission handling (for login page)
    handleSearch(); // Initialize dynamic search
    handleCountryStateDropdown(); // Initialize dropdown handling
    setStateFromProfile(); // Initialize state from profile data in localStorage
});
