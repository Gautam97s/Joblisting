<?php
$host = 'localhost';
$db = 'job_portal';
$user = 'root';
$pass = 'SamACP';

$conn = mysqli_connect($host, $user, $pass, $db);
if (mysqli_connect_errno()) {
    die("Connection failed: " . $conn->connect_error);
}else {
    echo"Successfull";
}