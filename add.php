<?php 
include 'db.php';
if (isset($_POST['signup']) && ($_POST['name']!="" || $_POST['pass']!='' || $_POST['email']!='') ) {
if ($_POST['pass'] ==$_POST['re_pass'] ) {


$name=filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
$pass=filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);
$email=filter_var(trim($_POST['email']), FILTER_SANITIZE_STRING);

$sql = "INSERT INTO pusers (Name,Email ,Password)
VALUES ('$name', '$email','$pass')";
if (mysqli_query($induction, $sql)) {
     header('Location:login.html');
} else { 
     
}
}
else {
	header('Location:register.html');
}
mysqli_close($induction);
}
else{

}
 ?>
