<?php
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);
//header("Content-Type: text/plain; charset=UTF-8mb4");

//$data = "data.json";
//$jsonData = file_get_contents($data);
//$dataArray = json_decode($jsonData,true);
//var_dump($dataArray);

if ($_POST['add'] == 'add') {
//  var_dump($_POST);
  $data = "data.json";
  $dataArray = array();
  $jsonData = file_get_contents($data);
  $dataArray = json_decode($jsonData,true);

  try {
    $i = 1;
    foreach ($dataArray as $key) {
      $i++;
    }
    $formData = array(
      'id' => $i,
      'english' => $_POST['english'],
      'pinyin' => $_POST['pinyin'],
      'chinese' => $_POST['chinese']
    );

    array_push($dataArray, $formData);
    $jsonData = json_encode($dataArray,JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    if (file_put_contents($data,$jsonData)) {
      echo "new vocabulary added!";
    } else {
      echo "thats some shitty spaghetti holmes";
    }
  } catch (\Exception $e) {
    echo "this is what fucked up: ", $e->getMessage(),"\n";
  }
}
?>
<form action="index.php" method="post">
  English: <br>
  <input type="text" name="english" > <br>
  Pinyin: <br>
  <input type="text" name="pinyin"> <br>
  Chinese: <br>
  <input type="text" name="chinese">
  <input type="submit" name="add" value="add">
</form>
