<?php
// database.php
class Database {
    private $host = 'localhost';
    private $db_name = 'himchuli academy';
    private $username = 'root'; // Default XAMPP username
    private $password = '';    // Default XAMPP password (empty)
    private $conn;

    public function connect() {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                'mysql:host=' . $this->host . ';dbname=' . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            return $this->conn;
        } catch(PDOException $e) {
            die('Connection Error: ' . $e->getMessage()); // More visible error
        }
    }
}
?>