<?php
include 'database.php';

$query = "SELECT * FROM news ORDER BY date_posted DESC";
$result = $conn->query($query);

$news = array();
while($row = $result->fetch_assoc()) {
    $news[] = $row;
}

// Get upcoming events
$events_query = "SELECT * FROM events WHERE event_date >= CURDATE() ORDER BY event_date ASC LIMIT 3";
$events_result = $conn->query($events_query);

$events = array();
while($row = $events_result->fetch_assoc()) {
    $events[] = $row;
}

$response = array(
    'news' => $news,
    'events' => $events
);

echo json_encode($response);
$conn->close();
?>