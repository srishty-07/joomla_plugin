<?php
$cookie_name="user";
$cookie_value="abc";

setcookie($cookie_name,$cookie_value,time()+(86400*30),"/");
?>

<html>
  <body>

     <?php
       if(!isset($_COOKIE[$cookie_name])){

        echo "cookie is not set" . "<br>";
        echo date("Y-m-d h:i:sa") . "<br>";

       }
       else{
        echo $_COOKIE[$cookie_name];
        
       }
       
     ?>

  </body>
</html>