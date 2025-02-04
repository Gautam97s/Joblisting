<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);


include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['email'];
    $password = $_POST['password'];

    
    $sql = "SELECT * FROM users WHERE fullname = '$username' AND password = '$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        echo "Login successful! Welcome " . $username;
    } else {
        echo "Invalid username or password.";
    }

   
    mysqli_close($conn);
}

