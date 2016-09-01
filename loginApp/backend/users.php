<?php
$user = json_decode(file_get_contents('php://input'));
if($user->mail == 'dhaval.v@tasolglobal.com' && $user->pass == '123456')
    //echo 'success';
    session_start();
    $_SESSION['uid'] = uniqid('ang_');
    print $_SESSION['uid'];
/*else
    echo "error";*/
?>
