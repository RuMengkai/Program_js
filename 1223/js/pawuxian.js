function move(){
	var _lists1=document.getElementsByTagName("div")[0].getElementsByTagName("div")[0];
	var _timer;
	var _flag=0;
	var _x=0;
	function start(){
		clearTimeout(_timer);
		_x+=2;
		_lists1.style.top=(_x-400)*(_x-400)*1/400+"px";
		_lists1.style.left=_x+"px";
		if (_lists1.style.left!="800px") {
			setTimeout(start,10);
		}
	}
	start();
}
window.onload=function(){
	move();
}