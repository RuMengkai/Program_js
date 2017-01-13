<?php
header("Content-Type:text/html;charset=utf-8");
$mysql_server_name='localhost';//数据库连接地址'localhost'不一定是本地的 有可能是'127.0.0.1'
$mysql_username='root';//数据库用户名 'root'可能会改变
$mysql_password='';//数据库密码
$mysql_database='demo1';//数据库名称
//创建数据库连接的两种写法、
//$conn=mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
//面向对象


$conn= new mysqli($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);

mysqli_query($conn,"set character set 'utf8'");
$flag=0;

if($conn->query("insert into brand(bname) values ('李宁')")==true){//query 查询（PHP）
	echo 'success';
	$flag=1;
}
mysqli_close($conn);//关闭数据库连接


if($flag==1){
	$conn= new mysqli($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
	//解决中文乱码
	mysqli_query($conn,"set names charset 'utf8'");//设置客户端字符集为UTF-8
	mysqli_query($conn,"set character set 'utf8'");//设置连接字符集主要区别设置的范围不同！前者包含：client  | result  | connection后者包影响的就：connection
	
	$result=$conn->query("select * from brand");
	print "<ul class='menulist'>";
	while($row=mysqli_fetch_assoc($result)){//mysqli_fetch_assoc 关联数组
	
		$menuname=$row["bname"];
		print "<li>".$menuname."</li>";
	}

	print "</ul>";
	mysqli_close($conn);//关闭数据库连接
}











?>
