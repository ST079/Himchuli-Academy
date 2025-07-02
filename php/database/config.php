<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "himchuli academy";

try {
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    if ($conn->connect_error) {
        throw new Exception("Connection failed");
    }
    
    $conn->set_charset("utf8mb4");
    
    // Return the connection without echoing anything
    return $conn;
    
} catch (Exception $e) {
    // Clean any output before JSON
    ob_end_clean();
    http_response_code(500);
    die(json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]));
}
?>