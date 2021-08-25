<?php
//Developer Tools!! Delete in production
error_reporting( E_ALL);
ini_set("display_errors",1);
//
include_once "model/Database.php";
include_once "model/Lessons.php";

$test = new Lessons;
$result = $test->getVocabulary();
$data = json_encode($result,JSON_UNESCAPED_UNICODE);
var_dump($data);
