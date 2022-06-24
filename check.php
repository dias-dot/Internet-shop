
<?php 
include 'db.php';
session_start();
if (isset($_POST['signin'])) {

$name=mysqli_real_escape_string($induction,$_POST['your_name']);
$pass=mysqli_real_escape_string($induction,$_POST['your_pass']);


        $sql_query = "select count(*) as cntUser from pusers where Name='".$name."' and Password='".$pass."'";
        $result = mysqli_query($induction,$sql_query);
        $row = mysqli_fetch_array($result);

        $count = $row['cntUser'];

        
            if ($name=="didi_m1000" && $pass=="dias") {
                 header('Location: admin.php');
            }
            else
            {
              if($count > 0){
            $_SESSION['name']=$name;
            header('Location: Project.html');
            echo "GREAT WORK";}
            else{
            echo "<script>alert('Invalid name or password');
            window.location='login.html';
            </script>";;
        }
    }
 
mysqli_close($induction);
}   
 ?>