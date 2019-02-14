<?php

$admin_email = "alexgc0810@gmail.com";
$email = $_POST['email'];
$name = $_POST['name'];
$comment = $_POST['comment'];
$message = "Nombre: " . $name . "\nCorreo: " . $email . "\nMensaje: " . $comment;
  
//send email
mail($admin_email, "Correo de la pagina", $message);
header("Location:contact.html");
?>
