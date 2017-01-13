<?php 
$name=$_POST["name"];
$f1=$_POST["f1"];
$f2=$_POST["f2"];
$arr = array(
	'name' => $name,
	'f1'=>$f1,
	'f2'=>$f2,
	'a'=>array(1,2,3),
	'a'=>111
	);
echo json_encode($arr);//json_encode是将数组转化为json。json_decode($str, true)//将json转为数组，
?>