// Simple form validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields 🌸");
        return false;
    } else {
        alert("Thank you for reaching out! We care about you 💚");
        return true;
    }
}