
<?php
    $string = $_POST['jsonString'];
    $file_name= $_POST['file_name'];
                        $myfile = fopen('../logs/'.$file_name,"a") or die("Unable to open file!"); 
                        fwrite($myfile, $string);
                        fclose($myfile);
?>