<?php 
include 'db.php';
$result = mysqli_query($induction,'SELECT * FROM `products`');
   $i=1;
      while ($products=mysqli_fetch_assoc($result)) {
        if ($products['ID']==$i) {
        	echo " <div class='acces'>";
        echo " <img id='mousePic' src='".$products['Image']."'>";
        echo "<div class='word card-body text-center'>";
        echo "<p id='word1'>"; echo $products['Name'];"</p>";
        echo "<p id='p".$i."'>"; echo "$ ".$products['Cost'];"</p>";
        echo "<br>";
      echo "<input type='buttons' onclick='AddToCart(p".$i.".textContent)' id='footer_btn' class='btns btn-danger btn' value='Add to Cart'>";
      echo "</div>";
      echo "</div>";
      echo "<br>";
       echo "<br>";
        echo "<br>";
         echo "<br>";
         } 
         $i++;
       }
       mysqli_close($induction);
 ?>