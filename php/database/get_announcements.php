<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include 'config.php';

try {
    $query = "SELECT * FROM announcements ORDER BY created_at DESC LIMIT 3";
    $result = $conn->query($query);
    
    $announcements = [];
    while($row = $result->fetch_assoc()) {
        $announcements[] = $row['content'];
    }
    
    echo json_encode([
        'success' => true,
        'announcements' => $announcements
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}

$conn->close();
?>