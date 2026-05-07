const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

function validate() {
    const name     = document.getElementById("name").value;
    const email    = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name)                      return alert("Name is required"),       false;
    if (!emailPattern.test(email))  return alert("Enter a valid email"),    false;
    if (password.length < 6)        return alert("Password needs 6+ chars"), false;

    window.location.href = "success.html";
    return false;
}