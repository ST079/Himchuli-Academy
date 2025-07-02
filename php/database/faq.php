<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit();
}

require_once __DIR__ . '/database.php';
require_once __DIR__ . '/faq_functions.php';

$faq = new FAQ();
$method = $_SERVER['REQUEST_METHOD'];

try {
    switch ($method) {
        case 'GET':
            $category = $_GET['category'] ?? 'admission';
            echo json_encode($faq->getFAQs($category));
            break;
            
        case 'POST':
            $data = json_decode(file_get_contents('php://input'), true);
            if (!isset($data['question']) || !isset($data['answer'])) {
                throw new Exception('Question and answer are required');
            }
            $category = $data['category'] ?? 'admission';
            echo json_encode($faq->addFAQ($data['question'], $data['answer'], $category));
            break;
            
        case 'PUT':
            $data = json_decode(file_get_contents('php://input'), true);
            if (!isset($data['id']) || !isset($data['question']) || !isset($data['answer'])) {
                throw new Exception('ID, question and answer are required');
            }
            echo json_encode($faq->updateFAQ($data['id'], $data['question'], $data['answer']));
            break;
            
        case 'DELETE':
            $data = json_decode(file_get_contents('php://input'), true);
            if (!isset($data['id'])) {
                throw new Exception('ID is required');
            }
            echo json_encode($faq->toggleFAQ($data['id']));
            break;
            
        default:
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
    }
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(['error' => $e->getMessage()]);
}

?>