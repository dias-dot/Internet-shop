$(document).ready(function(){
          $('form').submit(function(event){
            var name=document.getElementById('your_name').value;
  var pass=document.getElementById('your_pass').value;
  if (pass!="" && name!="") {
     $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: new FormData(this),
      contentType: false,
      cache: false,
      processData:false,
      success: function(){
              
      },
     });
  }
  else{
    alert("Invalid username or password");
  }
            
          });
       
    });
  
  