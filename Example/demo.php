<?php
class Animal{
	public function one(){
		$images="";
		for($i=1;$i<8;$i++){
			$images=$images."<img src=\"images/0$i".".jpg\"/>";
		}
		echo $images;
	}
}
$animal=new Animal();
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
		<link rel="stylesheet" href="demo.css"/>
		<script type="text/javascript" src="demo.js"></script>
	</head>
	<body>
		<div id="pic"><?php
			$animal->one();
		?></div>
	</body>
</html>
