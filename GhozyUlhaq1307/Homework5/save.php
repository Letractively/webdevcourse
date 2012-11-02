<?
require_once("koneksi.php");
$query = "INSERT INTO buku_tamu (nama,email,komentar) VALUES ('$nama','$email','$komentar')";
$result = mysql_query($query) or die("ERROR");
echo'<script> window.location="main.php"; </script> ';
?> 
