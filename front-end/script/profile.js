// profile.js

// Function to display the profile data
function displayProfile(profile) {
    document.getElementById('displayName').textContent = profile.name;
    document.getElementById('displayAge').textContent = profile.age;
    document.getElementById('displayGender').textContent = profile.gender;
    document.getElementById('displayPhone').textContent = profile.phone;
    document.getElementById('displayState').textContent = profile.state;

    document.getElementById('profileFormSection').style.display = 'none';
    document.getElementById('displayProfileSection').style.display = 'flex';
}

// Function to show the form
function showForm() {
    document.getElementById('profileFormSection').style.display = 'flex';
    document.getElementById('displayProfileSection').style.display = 'none';
}

// On page load, check if profile exists
document.addEventListener('DOMContentLoaded', function() {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
        const profile = JSON.parse(storedProfile);
        displayProfile(profile);
    } else {
        showForm();
    }
});

// Handle form submission
document.getElementById('userProfileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.getElementById('gender').value;
    const phoneCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phone').value.trim();
    const phone = `${phoneCode} ${phoneNumber}`;
    const state = document.getElementById('state').value;

    // Simple validation (optional)
    if (!name || !age || !gender || !phoneNumber || !state) {
        alert('Please fill in all required fields.');
        return;
    }

    // Store data in localStorage
    const profileData = {
        name,
        age,
        gender,
        phone,
        state
    };

    localStorage.setItem('profile', JSON.stringify(profileData));

    // Display the profile
    displayProfile(profileData);
});

// Handle delete profile
document.getElementById('deleteProfileButton').addEventListener('click', function() {
    const confirmation = confirm('Are you sure you want to delete your profile?');
    if (confirmation) {
        localStorage.removeItem('profile');
        showForm();
    }
});
