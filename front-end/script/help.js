document.getElementById('helpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Create a FormData object to capture the form data
    const formData = new FormData(this);

    // Send the form data to the server using the fetch API
    fetch('/zaika/back-end/send_help.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        if (data.status === "success") {
            // Show success message
            alert('Your message has been sent successfully!');
            
            // Reset the form fields
            document.getElementById('helpForm').reset();
        } else {
            // Show error message if form submission failed
            alert('Failed to send the message. Please try again later.');
        }
    })
    .catch(() => {
        // Handle unexpected errors
        alert('An unexpected error occurred. Please try again.');
    });
});
