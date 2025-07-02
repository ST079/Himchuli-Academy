<?php
include 'config.php';

// Get pagination parameters from request with defaults
$page = isset($_GET['page']) ? max(1, (int)$_GET['page']) : 1;
$perPage = isset($_GET['per_page']) ? max(1, (int)$_GET['per_page']) : 6;

try {
    // Get total count of activities
    $countQuery = "SELECT COUNT(*) as total FROM beyond_academics";
    $countResult = $conn->query($countQuery);
    
    if (!$countResult) {
        throw new Exception("Count query failed: " . $conn->error);
    }
    
    $totalItems = (int)$countResult->fetch_assoc()['total'];
    $totalPages = $totalItems > 0 ? ceil($totalItems / $perPage) : 1;
    $page = min($page, $totalPages);
    $offset = ($page - 1) * $perPage;
    
    // Get paginated activities
    $query = "SELECT * FROM beyond_academics ORDER BY activity_date DESC LIMIT ?, ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ii", $offset, $perPage);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if (!$result) {
        throw new Exception("Activities query failed: " . $conn->error);
    }
    
    $activities = [];
    while ($row = $result->fetch_assoc()) {
        $activities[] = $row;
    }

    // Fetch featured activities (unchanged)
    $featured_query = "SELECT * FROM beyond_academics WHERE is_featured = 1 ORDER BY activity_date DESC LIMIT 3";
    $featured_result = $conn->query($featured_query);
    
    if (!$featured_result) {
        throw new Exception("Featured activities query failed: " . $conn->error);
    }
    
    $featured_activities = [];
    while ($row = $featured_result->fetch_assoc()) {
        $featured_activities[] = $row;
    }

    // Clean output buffer before JSON
    ob_end_clean();
    
    // Return successful response with pagination info
    echo json_encode([
        'success' => true,
        'featured' => $featured_activities,
        'activities' => $activities,
        'pagination' => [
            'current_page' => $page,
            'per_page' => $perPage,
            'total_items' => $totalItems,
            'total_pages' => $totalPages
        ]
    ]);
    
} catch (Exception $e) {
    ob_end_clean();
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
} finally {
    if (isset($conn)) {
        $conn->close();
    }
}
?>