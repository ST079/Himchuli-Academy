<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include 'config.php';

try {
    // Create connection
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Fetch about information
    $aboutQuery = $conn->prepare("SELECT * FROM about_us LIMIT 1");
    $aboutQuery->execute();
    $about = $aboutQuery->fetch(PDO::FETCH_ASSOC);

    // Fetch stats
    $statsQuery = $conn->prepare("SELECT * FROM school_stats");
    $statsQuery->execute();
    $stats = $statsQuery->fetchAll(PDO::FETCH_ASSOC);

    // Fetch team members
    $teamQuery = $conn->prepare("SELECT id, name, position, photo, SUBSTRING(bio, 1, 200) as bio FROM team WHERE is_active = 1 ORDER BY display_order");
    $teamQuery->execute();
    $team = $teamQuery->fetchAll(PDO::FETCH_ASSOC);

    // Prepare response
    $response = [
        'about' => $about,
        'stats' => $stats,
        'team' => $team,
        'status' => 'success'
    ];

    echo json_encode($response);
    
} catch(PDOException $e) {
    // Handle errors
    http_response_code(500);
    echo json_encode([
        'message' => 'Database error: ' . $e->getMessage(),
        'status' => 'error'
    ]);
}
?>