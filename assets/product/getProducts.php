<?php
/**
 * Created by PhpStorm.
 * User: Jérôme
 * Date: 19/12/2023
 * Time: 19:15
 */
header('Content-Type: application/json');

/**
 * connexion à la base de données
 */
try {
    $connexion = new PDO('mysql:host=db5000296647.hosting-data.io;dbname=dbs289874','dbu136770','JD90200jd*');
    $retour["success"] = true;
}
catch(Exception $ex) {
    $retour["success"] = false;
}

$typeId = $_POST['type'];
$request = $connexion->prepare("SELECT * FROM products where type_id=:type_id");
$bindings = array(
    ':type_id' => $typeId
);
$request->execute($bindings);

$retour = $request->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($retour);








?>