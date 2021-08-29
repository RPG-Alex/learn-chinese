<?php
//Developer Tools!! Delete in production
//error_reporting( E_ALL);
//ini_set("display_errors",1);
//page header for API
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//Import necesasry models for API
include_once "model/Database.php";
include_once "model/Lessons.php";
//If lesson is posted this will handle the input
if ($_POST['lesson'] == 'flash' OR $_GET['lesson'] == 'flash') {
  $test = new Lessons;
  $result = $test->getVocabulary();
  $data = json_encode($result,JSON_UNESCAPED_UNICODE);
  echo $data;
} elseif ($_POST['lesson'] > 0 ) {
  echo "See me later";
} else {
  echo "You should not be seeing this";
}
