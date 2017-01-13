// 解构赋值
function move(){
	var _btn=document.getElementById("btn");
	var speedX = 6;
	var speedY = -20;
	var _timer=0
	function start(){
		clearTimeout(_timer);
		_btn.style.top = _btn.offsetTop+speedY++ +"px";
		_btn.style.left = _btn.offsetLeft+speedX+"px";
		setTimeout(start,200);
	}
	start();
}
window.onload=function(){
	move();
}