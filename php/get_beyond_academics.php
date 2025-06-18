<?php
include 'database.php'; // Use the same database.php from previous examples

// Fetch activities data
$query = "SELECT * FROM beyond_academics ORDER BY activity_date DESC";
$result = $conn->query($query);

$activities = array();
while($row = $result->fetch_assoc()) {
    $activities[] = $row;
}

// Fetch featured activities (marked as featured in database)
$featured_query = "SELECT * FROM beyond_academics WHERE is_featured = 1 ORDER BY activity_date DESC LIMIT 3";
$featured_result = $conn->query($featured_query);

$featured_activities = array();
while($row = $featured_result->fetch_assoc()) {
    $featured_activities[] = $row;
}

$response = array(
    'featured' => $featured_activities,
    'activities' => $activities
);

echo json_encode($response);
$conn->close();
?>