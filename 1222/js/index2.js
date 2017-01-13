//let、const声明的关键字是没有变量提升的，块状作用域以{}为界线、并且let和var会在同一作用域声明相同变量冲突
//const申明的变量必须立即赋值。
function main(){
	// var b=10;
	// var b=2;
	//let b=10;
	if(true){
	 	// let b=2;//产生作用域封闭区
	 	// Math.
	}
}
// 解构赋值
function move(){
	var _btn=document.getElementById("btn");
	var _timer=0;
	var _top=0;
	var _left=2;
	var _n=1;
	function start(){
		clearTimeout(_timer);
		if (_left>500) {
			_top-=10;
			_n=1;
		} else {
			_n*=1.1;
			_top+=10;
			_left+=_n;
		}
		if(_top<0){
			_top=500;
		}
		_btn.style.top=_top+"px";
		_btn.style.left=_left+"px";
		setTimeout(start,100);
	}
	start();
}
window.onload=function(){
	move();
}