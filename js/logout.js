const logOutButton = document.getElementById('logout');

logOutButton.addEventListener('click', () => {
    // Clear user session data (if any)
    // For example, you might want to clear localStorage or cookies here
    // localStorage.clear(); // Uncomment if using localStorage for session management

    // Redirect to the login page
    window.location.href = 'login.html'; // Adjust the path as necessary
});