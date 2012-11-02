
<HTML>
<HEAD>
<TITLE>HappyChat v1.0</TITLE>
<style type="text/css">
<!--
.style1 {
font-size: large;
font-family: Verdana, Arial, Helvetica, sans-serif;
}
.style2 {color: #000099}
.style3 {
font-family: Verdana, Arial, Helvetica, sans-serif;
font-size: x-small;
}
.style4 {
color: #003300;
font-family: Verdana, Arial, Helvetica, sans-serif;
}
.style6 {font-family: Verdana, Arial, Helvetica, sans-serif; font-size: x-small; color: #0000FF; }
-->
</style>
</HEAD>
<BODY>
<div align="center" class="style1">
<h1 class="style2">Happy Chat by OhMyGhoz</h1>
</div>
<FORM action="save.php" method="POST">
<TABLE align="center" width="350">
<TR>
<TD width="75"><span class="style3">NAME</span></TD>
<TD><INPUT name="nama" type="text" size="30"></TD>
</TR>
<TR>
<TD><span class="style3">EMAIL</span></TD>
<TD><INPUT name="email" type="text" size="30"></TD>
</TR>
<TR>
<TD valign="top"><span class="style3">COMMENT</span></TD>
<TD width="50%">
<TEXTAREA NAME="komentar" ROWS="4" COLS="30"></TEXTAREA></TD>
</TR>
<TR>
<TD colspan="2" align="center"><INPUT type=submit VALUE="Submit"></TD></TR>
</TABLE>
</FORM>
<TABLE width="350" align="center">
<TR>
<TD colspan="2" align="center"><h3><span class="style4">Display Entries</span></h3></TD>
</TR>
<TR>
<TD colspan="2" bgcolor="#959595" height="10"></TD>
</TR>
<TR>
<?
require_once("koneksi.php");
$tampil=mysql_query("SELECT *FROM buku_tamu ORDER BY id DESC");
while($row=mysql_fetch_object($tampil)){
?>
<TD width="75"><span class="style3">Name</span></TD>
<TD width="263"><span class="style6"><? echo ucwords($row->nama); ?></span></TD>
</TR>
<TR>
<TD><span class="style3">Email</span></TD>
<TD><span class="style6"><? echo "$row->email"; ?></span></TD></TR>
<TR>
<TD valign="top"><span class="style3">Comment</span></TD>
<TD><span class="style6"><? echo "$row->komentar"; ?></span></TD></TR>
</TR>
<TR><TD height="5" colspan="2" bgcolor="#959595"></TD>
</TR>
<?
}
?>
</TABLE>
</BODY>
</HTML> 

