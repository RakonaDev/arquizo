<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);
$email               = $_POST["email"];
$nombreCompleto      = $_POST["nombres"] . "" . $_POST["apellidos"];
$celular             = $_POST["celular"];
$direccion           = $_POST["direccion"];
$puesto              = $_POST["puesto"];
$nombreArchivo = $_FILES['my_file']['name'];
$tipoArchivo = $_FILES['my_file']['type'];
$rutaArchivo = $_FILES['my_file']['tmp_name'];

$message            = "Nombre Completo: " . $nombreCompleto . "\n";
$message            = $message . "Email: " . $email . "\n";
$message            = $message . "Celular: " . $celular . "\n";
$message            = $message . "Mi Direcci贸n: " . $direccion . "\n";
$message            = $message . "Puesto Deseado: " . $puesto . "\n";

try {
  // Configuración del servidor SMTP
  $mail->isSMTP();
  $mail->Host = 'smtp.zoho.com'; // Servidor SMTP de Zoho
  $mail->SMTPAuth = true;
  $mail->Username = 'info@arquizo.com'; // Tu correo en Zoho
  $mail->Password = 'info123'; // Tu contraseña en Zoho
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Protocolo de encriptación
  $mail->Port = 587; // Puerto SMTP de Zoho

  // Remitente
  $mail->setFrom('info@arquizo.com', 'Nombre del Remitente');
  // Destinatario
  $mail->addAddress($email); // Dirección de destino

  // Adjuntar archivo
  $mail->addAttachment($rutaArchivo, $nombreArchivo); // Ruta del archivo a adjuntar

  // Contenido del correo
  $mail->isHTML(true); // Enviar en formato HTML
  $mail->Subject = 'Búsqueda de Empleo';
  $mail->Body = $message;
  $mail->AltBody = $message;

  // Enviar el correo
  $mail->send();
  echo 'Correo enviado correctamente';
} catch (Exception $e) {
  echo "Error al enviar el correo: {$mail->ErrorInfo}";
}