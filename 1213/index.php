<?php
	error_reporting(0);
class animation{
	public $images="";
	public function images(){
		for($i=1;$i<7;$i++){
			$images.="<img src=\"images/c0$i.jpg\" alt=\"\"/>";
		}
		echo $images;
	}
}
$animation=new animation;
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>图片</title>
		<script src="js/index.js" type="text/javascript" charset="utf-8"></script>
	</head>
	<style type="text/css">
		#content{width:630px;height: 315px;position: relative;overflow: hidden;margin-left: -315px;left: 50%;}
		#box{width:630px;height: 315px;position: relative;overflow: hidden;margin-left: -315px;left: 50%;}
		#box>img{position: absolute;}
		
		#btn{position: relative;z-index: 3;top: -42px;left: 50%;width: 240px;margin-left: -118px;}
		#btn>button{margin-left: 10px;position: relative;}
	</style>
	<body>
		<div id="content">
			<div id="box">
				<?php $animation->images()?>
			</div>
			<div id="btn">
				<button>1</button>
				<button>2</button>
				<button>3</button>
				<button>4</button>
				<button>5</button>
				<button>6</button>
			</div>
		</div>
	</body>
</html>