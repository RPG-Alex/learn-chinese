<?php
class Lessons {
  private $db;
  public function __construct(){
    $this->db = new Database;
  }

  public function getVocabulary(){
    $this->db->query('SELECT *
                        FROM vocabulary
                        ORDER BY vocabulary.vid DESC');

    $results= $this->db->resultSet();

    return $results;
  }
}
 ?>
