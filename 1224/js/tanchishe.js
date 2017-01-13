//创建实物
function createbody(){
	for (var i = 0; i <= 500; i++) {
		var _body=document.createElement("div");
		_body.className="body";
		document.getElementsByTagName("body")[0].appendChild(_body);
	}
}
function createFood(){
	var _food=document.createElement("div");
	var _width=document.documentElement.clientWidth;
	var _height=document.documentElement.clientHeight;
	_food.style.left=Math.floor((_width*Math.random())/10)*10+"px";
	_food.style.top=Math.floor((_height*Math.random())/10)*10+"px";
	_food.style.backgroundColor="red";
	_food.className="body";
	document.getElementsByTagName("body")[0].appendChild(_food);
}
window.onload=function(){
	createbody();
	createFood();
}
//移动蛇的身体
function moveBody(){
	var _body=document.getElementsByTagName("body")[0];
	for(var i=_body.children.length-2;i>=1;i--){
		_body.children[i].style.left=_body.children[i-1].style.left;
		_body.children[i].style.top=_body.children[i-1].style.top;
	}
}
var _timer=0;
function moveSnake(_cmd){
	var _head=document.getElementById("head");
	var _key = "";
	var _left=0,_top=0;
	//左右
	if (_cmd == 37 || _cmd == 39) {
		_key = "left";
	} else {
		_key = "top";
	}
	function start() {
		window.clearTimeout(_timer);
		//获取外部样式
		_left = parseInt((_head.currentStyle || window.getComputedStyle(_head, null))["left"].replace("px", ""));
		_top = parseInt((_head.currentStyle || window.getComputedStyle(_head, null))["top"].replace("px", ""));
		if (_cmd == 37 || _cmd == 38) {
			_head.style[_key] = parseInt((_head.currentStyle || window.getComputedStyle(_head, null))[_key].replace("px", "")) - 10 + "px";
		} else {
			_head.style[_key] = parseInt((_head.currentStyle || window.getComputedStyle(_head, null))[_key].replace("px", "")) + 10 + "px";
		}
		//判断是否吃到实物
		var _foodW=document.getElementsByTagName("body")[0].lastChild;
		if (_head.style.left==_foodW.style.left&&_head.style.top==_foodW.style.top) {
			_foodW.style.backgroundColor="darkred";
			createFood();
		}
		moveBody();//移动身体其他部分，重新布局
		_timer=window.setTimeout(start,200);
	}
	start();
}
window.onkeydown=function(e){
	window.clearTimeout(_timer);//任意键停止
	var e=e||window.event;
	//←: 37		↑: 38 	  →: 39	  ↓: 40
	if(e.keyCode>=37 && e.keyCode<=40) {
		moveSnake(e.keyCode);
	}
}