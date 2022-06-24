$(document).ready(function(){
          $('#register-form').submit(function(event){
          	var pass=document.getElementById('pass').value;
	var	repass=document.getElementById('re_pass').value;
	if (pass==repass) {
     $.ajax({
     	type: 'POST',
     	url: 'add.php',
     	data: new FormData(this),
     	contentType: false,
     	cache: false,
     	processData:false,
     	success: function(){
     		       cuteAlert({
  type: "success",
  title: "Success Title",
  message: "Success Message",
  buttonText: "Okay"
});
     	},
     });
	}
	else{
		alert("Password is not confirmed");
	}
          	
          });
       
		});
	
	
