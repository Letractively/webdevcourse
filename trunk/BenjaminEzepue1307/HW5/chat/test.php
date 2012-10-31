<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251"/>
<title>Facebook.com/Benjamin_Ezepue/messages</title>
</head>
<body>
<h4>вывод сообщение введеное в форме при помощи PHP(без mysql) <h4>
Welcome <?php echo $_POST["name"]; ?>!<br />
Your message is:<?php echo $_POST["message"]; ?><br/><br/><br/>
<h4>вывод сообщение введеное в форме при помощи mysql (по умолчанию выводится последнее сообщение из базы данных )<h4>
<?php
$myserver="localhost";
$mylogin="root";
$mypassword="";
$db = mysql_connect($myserver, $mylogin);
if (!$db)
  {
  die('Could not connect: ' . mysql_error());
  }
else
	?>

<?php mysql_select_db("chat", $db);
$sql="INSERT INTO messages (name, message)
VALUES
('$_POST[name]','$_POST[message]')";
if (!mysql_query($sql,$db))
  {
  die('Error: ' . mysql_error());
  }
$result = mysql_query("SELECT * FROM messages");
$row = mysql_fetch_array($result);
echo $row["message"];
//$sql=INSERT INTO `messages` VALUES ('', '".
//$name."','".$message."', NOW())";
//$result = mysql_query($sql);
//$result = mysql_query("SELECT * FROM messages");
//$row = mysql_fetch_array($result);
//echo $row["message"];?>
</body>
</html>
