function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "" || !emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    if (password == "" || password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }
    window.location.href = "success.html";
    return false;
}
