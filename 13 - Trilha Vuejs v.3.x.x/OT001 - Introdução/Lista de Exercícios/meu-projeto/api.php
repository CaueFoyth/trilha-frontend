<?php
$pdo = new PDO("mysql:host=localhost;dbname=meubanco", "root", "senha");
$stmt = $pdo->query("SELECT * FROM produtos");
echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
?>
