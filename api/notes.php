<?php
header("Content-Type: application/json");

$student = $_POST['student'] ?? '';
$math = $_POST['math'] ?? '';
$cs = $_POST['cs'] ?? '';

$final = ($math + $cs) / 2;

echo json_encode([
    "student" => $student,
    "final_grade" => number_format($final, 2)
]);
