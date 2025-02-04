// function validatelogin(){
//     const username = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     if (username ===  "" ||  password === ""){
//         alert("Please fill out the fields!");
//         return false;
//     }
//     return true;
// }

// function validatesignup() {
//     const uname = document.getElementById("uname").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value.trim();

//     console.log(`Username: ${uname}, Email: ${email}, Password: ${password}`);

//     if (uname === "" || email === "" || password === "") {
//         alert("Please fill out all the fields!");
//         return false;
//     }

  
//     const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if (!emailPattern.test(email)) {
//         alert("Please enter a valid email address!");
//         return false;
//     }

   
//     if (password.length < 6) {
//         alert("Password must be at least 6 characters long.");
//         return false;
//     }

//     return true; 
// }


function validatelogin() {
    // Get the email and password values from the form
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Regular expression for validating email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email field is empty
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    // Check if the email format is valid
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Check if the password field is empty
    if (password === "") {
        alert("Please enter your password.");
        return false;
    }

    // If all checks pass, return true to allow the form to submit
    return true;
}

function validatesignup() {
    // Get the values from the form
    var fullname = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Regular expression for validating email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the name field is empty
    if (fullname === "") {
        alert("Please enter your full name.");
        return false;
    }

    // Check if the email field is empty
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    // Check if the email format is valid
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Check if the password field is empty
    if (password === "") {
        alert("Please enter your password.");
        return false;
    }

    // If all checks pass, return true to allow the form to submit
    return true;
}


