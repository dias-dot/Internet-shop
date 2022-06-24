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
                        <figure><img src="customize.png" alt="sing up image"></figure>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Settings</h2>
                        <form method="POST" class="register-form" id="login-form" action="additem.php">
                         	<div class="form-group form-button">
                                <input type="submit" name="additem" id="signin" class="form-submit" value="Add item to Database"/>
                            </div>
                        </form>
                        <form method="POST" class="register-form" id="login-form" action="seadel.php">
                         	<div class="form-group form-button">
                                <input type="submit" name="Seadeal" id="signin" class="form-submit" value="Search and Delete User"/>
                            </div>
                        </form>
                         <form method="POST" class="register-form" id="login-form" action="logout.php">
                            <div class="form-group form-button">
                                <input type="submit" name="logout" id="signin" class="form-submit" value="Log Out"/>
                            </div>
                        </form>                       
                    </div>
                </div>
            </div>
        </section>
        </div>
</body>
</html>