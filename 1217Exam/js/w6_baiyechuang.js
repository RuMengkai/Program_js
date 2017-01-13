//动画效果
function move(){
	var _timer=0;
	var _h=7;
	var _flag=0;
	var _container=document.getElementById("container");
	function start(){
		window.clearTimeout(_timer);
		if(_flag==0){
			_h-=0.2;
		}else{
			_h+=0.2;
		}
		for(var i=0;i<_container.children.length;i++){
			_container.children[i].style.height=_h+"px";
		}
		if(_h>=7){
			_h=7;
			_flag=0;
		}
		if(_h<=0){
			_h=0;
			_flag=1;
		}
		_timer=window.setTimeout(start,30);
	}
	start();
}
function createDiv(){
	var _div=null;
	var _container=document.getElementsByTagName("div")[0];
	for(var i=0;i<50;i++){
		_div=document.createElement("div");
		_div.style.top=(i*7)+"px";
		_div.style.backgroundPosition="0px "+(-i*7)+"px";
		_container.appendChild(_div);
	}
}
window.onload=function(){
	createDiv();
	move();
}