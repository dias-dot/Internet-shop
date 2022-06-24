<?php 
include 'db.php';
if (isset($_POST['addproduct'])){


$name=filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
$cost=filter_var(trim($_POST['cost']), FILTER_SANITIZE_STRING);
$filename=$_FILES['photo']['name'];
$target="accimg/".basename($filename);
$sql="INSERT INTO products(Image,Name,Cost) VALUES ('$filename','$name','$cost')";
$query=mysqli_query($induction,$sql);
move_uploaded_file($_FILES['photo']['tmp_name'], $target);
if ($query) {
	echo "<script>
           alert('Product is added');
           window.location='admin.php';
	</script>";
}
else{
	echo "<script>
           alert('Product is not added');
           window.location='additem.php';
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
                        <figure><img src="data:image/png;base64,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" alt="sing up image"></figure>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Add</h2>
                        <form method="POST" class="register-form" id="login-form">
                            <div class="form-group">
                                <input type="text" name="name" id="your_name" placeholder="Name of item"/>
                                <input type="file" id="uploader" name="photo" multiple accept="image/*" lang="en">
                            </div>
                            <div class="form-group">
                                <input type="text" name="cost" id="your_pass" placeholder="Price"/>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="addproduct" id="signin" class="form-submit" value="Add Item"/>
                               <a href="admin.php" class="form-submit" style="text-decoration:none; color: white;">Back to Admin Page</a>
                            </div>
                        </form>
                    
                    </div>
                </div>
            </div>
        </section>
        </div>
</body>
</html>