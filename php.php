<?php
$email = $_POST['email'];
$subject = $_POST['subject'];

mail($email, $subject, "Thank you")

?>