<?php
// Start output buffering
ob_start();

// Include database connection
require_once 'config.php';

try {
    // Get news ID from request
    $newsId = isset($_GET['id']) ? (int)$_GET['id'] : 0;
    
    if ($newsId <= 0) {
        throw new Exception("Invalid news ID");
    }

    // Get database connection
    $conn = include 'config.php';
    
    // Get single news item
    $query = "SELECT * FROM news WHERE id = ?";
    $stmt = $conn->prepare($query);
    
    if (!$stmt) {
        throw new Exception("Prepare failed: " . $conn->error);
    }
    
    $stmt->bind_param("i", $newsId);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        throw new Exception("News not found");
    }

    $newsItem = $result->fetch_assoc();

    // Get related news
    $relatedQuery = "SELECT id, title, date_posted FROM news WHERE id != ? ORDER BY date_posted DESC LIMIT 3";
    $relatedStmt = $conn->prepare($relatedQuery);
    
    if (!$relatedStmt) {
        throw new Exception("Prepare failed: " . $conn->error);
    }
    
    $relatedStmt->bind_param("i", $newsId);
    $relatedStmt->execute();
    $relatedResult = $relatedStmt->get_result();

    $relatedNews = [];
    while ($row = $relatedResult->fetch_assoc()) {
        $relatedNews[] = $row;
    }

    // Clean buffer and output JSON
    ob_end_clean();
    echo json_encode([
        'success' => true,
        'news' => $newsItem,
        'related' => $relatedNews
    ]);

} catch (Exception $e) {
    // Clean buffer and output error
    ob_end_clean();
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
} finally {
    // Close statements and connection if they exist
    if (isset($stmt)) $stmt->close();
    if (isset($relatedStmt)) $relatedStmt->close();
    if (isset($conn)) $conn->close();
}
?>