<?
$server="localhost"; //alamat server default biasanya localhost
$user="root"; //user untuk database, default root
$password=""; //password database, default biasanya kosong
$database="bukutamu"; //untuk memanggil database
$open=mysql_connect("$server","$user","$password")
or die("koneksi database gagal");
$db=mysql_Select_db($database) or die("database tidak ditemukan");
?> 
