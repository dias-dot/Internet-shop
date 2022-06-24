<?php 
session_start();
if (isset($_SESSION['name'])) {
echo '<input type="submit" name="close"  id="sign_in_button" class="btn btn-outline-dark" value="Log Out">';
 
}
else{
echo '<button  id="sign_in_button" class="btn btn-outline-dark"><a style="color:black;" id="gotologin" href="login.html">Log In</a></button>';
}
if (isset($_POST['close'])) {
  session_destroy();
  header('Location: login.html');
}
 ?>
