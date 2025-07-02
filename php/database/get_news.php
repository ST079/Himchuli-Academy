<?php
include 'config.php';

// Get pagination parameters from request
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$perPage = isset($_GET['per_page']) ? (int)$_GET['per_page'] : 5;

try {
    // Calculate offset for pagination
    $offset = ($page - 1) * $perPage;
    
    // Get total count of news items
    $countQuery = "SELECT COUNT(*) as total FROM news";
    $countResult = $conn->query($countQuery);
    $totalItems = $countResult->fetch_assoc()['total'];
    $totalPages = ceil($totalItems / $perPage);
    
    // Get paginated news
    $query = "SELECT * FROM news ORDER BY date_posted DESC LIMIT $offset, $perPage";
    $result = $conn->query($query);
    
    if (!$result) {
        throw new Exception("News query failed: " . $conn->error);
    }
    
    $news = [];
    while ($row = $result->fetch_assoc()) {
        $news[] = $row;
    }

    // Get events (unchanged)
    $events_query = "SELECT * FROM events WHERE event_date >= CURDATE() ORDER BY event_date ASC LIMIT 3";
    $events_result = $conn->query($events_query);
    
    if (!$events_result) {
        throw new Exception("Events query failed: " . $conn->error);
    }
    
    $events = [];
    while ($row = $events_result->fetch_assoc()) {
        $events[] = $row;
    }

    // Clean output buffer before JSON
    ob_end_clean();
    
    // Return successful response with pagination info
    echo json_encode([
        'success' => true,
        'news' => $news,
        'events' => $events,
        'pagination' => [
            'current_page' => $page,
            'per_page' => $perPage,
            'total_items' => $totalItems,
            'total_pages' => $totalPages
        ]
    ]);
    
} catch (Exception $e) {
    ob_end_clean();
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
} finally {
    $conn->close();
}