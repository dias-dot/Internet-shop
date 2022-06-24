<?php 
include 'db.php';
$table = mysqli_query($induction,'SELECT * FROM `pusers`');

if (isset($_POST['submit'])) {
  $email=$_POST['email'];
  setcookie ("email",$email,time()+3600);
  $sql = "SELECT * FROM pusers WHERE Email='".$email."'";
  $result = mysqli_query($induction, $sql);
if (mysqli_num_rows($result) > 0) {
  while($row = mysqli_fetch_assoc($result)) {
    echo "<form method='post'>";
    echo "<table class='table'>";
    echo "<thead>"."<tr>"."
    <th scope='col'>#</th>
      <th scope='col'>Name</th>
      <th scope='col'>Email</th>"."</tr>";
      echo "<tbody>
          <tr>
             <th>".$row['ID']."</th>
             <td>".$row['Name']."</td>
             <td>".$row['Email']."</td>
          </tr>
      </tbody>";    
  
    echo "</table>";
    echo "<input type='submit' name='delete' value='Delete From Users' class='form-submit'>";
    echo "</form";
  }
} else {
  echo "Error";
}
}
if (isset($_POST['delete'])) {
  $email=$_COOKIE['email'];
  $sql = "DELETE FROM pusers WHERE Email='".$email."'";
$result = mysqli_query($induction, $sql);
if ($result) {

echo "<script>
           alert('User is deleted');
           window.location='admin.php';
  </script>";
} 
else {
  echo "<script>
           alert('User is not added');
           window.location='admin.php';
  </script>";
}
}
 ?>
 <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sign In Form</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>  
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
<link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css">  
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.js"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<link rel="stylesheet" href="style1.css" />
<script src="cute-alert.js"></script>
<script src="check.js"></script>
    <!-- Main css -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="main">
 <section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src="find.png" alt="sing up image"></figure>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Find</h2>
                        <form method="POST" class="register-form" id="login-form">
                            <div class="form-group">
                                <input type="email" name="email" id="your_pass" placeholder="Email"/>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="submit" id="signin" class="form-submit" value="Find"/>
                               <a href="admin.php" class="form-submit" style="text-decoration:none; color: white;">Back to Admin Page</a>
                            </div>
                        </form>
                    
                    </div>
                </div>
            </div>
        </section>
        </div>

 <div class="">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
      <?php 
      $i=1;
      while ($pusers=mysqli_fetch_assoc($table)) {
        echo "<tr>";
        if ($pusers['ID']==$i) {
        echo "<th>"; echo $pusers['ID']; echo "</th>";
        echo "<td>"; echo $pusers['Name']; echo "</td>";
        echo "<td>"; echo $pusers['Email']; echo "</td>";
echo "</tr>";
         } 
         $i++;
       }
        ?>
  </tbody>
</table>
</div>
</body>
</html>
