<?php

if(isset($_POST['submitform'])) {
    
    $name = $_POST['contactName'];
    $subject = $_POST['contactSubject'];
    $mailFrom = $_POST['contactEmail'];
    $message = $_POST['contactMessage'];
    
    
    $mailTo = "nmursali2019@ada.edu.az";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;
        
        
    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend")
    
    
}



