<?php
require_once 'database.php';

class FAQ {
    private $db;

    public function __construct() {
        $this->db = (new Database())->connect();
    }

    // Get all active FAQs
    public function getFAQs($category = 'admission') {
        try {
            $query = 'SELECT * FROM faqs WHERE is_active = 1 AND category = ? ORDER BY created_at DESC';
            $stmt = $this->db->prepare($query);
            $stmt->execute([$category]);
            return $stmt->fetchAll();
        } catch(PDOException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    // Add new FAQ
    public function addFAQ($question, $answer, $category = 'admission') {
        try {
            $query = 'INSERT INTO faqs (question, answer, category) VALUES (?, ?, ?)';
            $stmt = $this->db->prepare($query);
            $stmt->execute([$question, $answer, $category]);
            return ['success' => true, 'id' => $this->db->lastInsertId()];
        } catch(PDOException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    // Update FAQ
    public function updateFAQ($id, $question, $answer) {
        try {
            $query = 'UPDATE faqs SET question = ?, answer = ? WHERE id = ?';
            $stmt = $this->db->prepare($query);
            $stmt->execute([$question, $answer, $id]);
            return ['success' => $stmt->rowCount() > 0];
        } catch(PDOException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    // Toggle FAQ status
    public function toggleFAQ($id) {
        try {
            $query = 'UPDATE faqs SET is_active = NOT is_active WHERE id = ?';
            $stmt = $this->db->prepare($query);
            $stmt->execute([$id]);
            return ['success' => $stmt->rowCount() > 0];
        } catch(PDOException $e) {
            return ['error' => $e->getMessage()];
        }
    }
}
?>