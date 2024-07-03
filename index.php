<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>user inputs</title>
</head>
<body>
    <form action="index.php" method="get">
        Name:<input type="text" name="name"><br>
        Age:<input type="number" name="age"><br>
        <input type="submit">
</form><br><hr><hr>
<?php
      Your Name is : echo $_GET["name"] ?>
<?php
      Your Age is : echo $_GET["age"] ?>
    
    
</body>
</html>