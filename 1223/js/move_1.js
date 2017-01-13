function move(){
	var _lists1=document.getElementsByTagName("div")[0].getElementsByTagName("div")[0];
	var _lists2=document.getElementsByTagName("div")[0].getElementsByTagName("div")[1];
	var _timer=0;
	var _left0=0,_top0=0;
	var _left1=700,_top1=0;
	var f0X=0,f0Y=0;
	var f1X=0,f1Y=0;
	function start(){
		clearTimeout(_timer);
		//判断圆心距平方小于10000时，
		if((_lists1.offsetLeft-_lists2.offsetLeft)*(_lists1.offsetLeft-_lists2.offsetLeft)+
			(_lists1.offsetTop-_lists2.offsetTop)*(_lists1.offsetTop-_lists2.offsetTop)<10000){
			f0Y=f0Y?0:1;
			f1X=f1X?0:1;
			f1Y=f1Y?0:1;
			f0X=f0X?0:1;
		}
		//小球0X轴
		if (f0X==0) {
			_left0+=5;
		} else {
			_left0-=5;
		}
		if (_lists1.style.left==700+"px") {
			f0X=1;
		} else if (_lists1.style.left==0+"px") {
			f0X=0;
		}
		//小球0Y轴
		if (f0Y==0) {
			_top0+=5;
		} else {
			_top0-=5;
		}
		if (_lists1.style.top==400+"px") {
			f0Y=1;
		} else if (_lists1.style.top==0+"px") {
			f0Y=0;
		}

		//小球1X轴
		if (f1X==0) {
			_left1-=5;
		} else {
			_left1+=5;
		}
		if (_lists2.style.left==700+"px") {
			f1X=0;
		} else if (_lists2.style.left==0+"px") {
			f1X=1;
		}
		//小球1Y轴
		if (f1Y==0) {
			_top1+=10;
		} else {
			_top1-=10;
		}
		if (_lists2.style.top==400+"px") {
			f1Y=1;
		} else if (_lists2.style.top==0+"px") {
			f1Y=0;
		}

		_lists1.style.left=_left0+"px";
		_lists1.style.left=_left0+"px";
		_lists1.style.top=_top0+"px";
		_lists1.style.top=_top0+"px";

		_lists2.style.left=_left1+"px";
		_lists2.style.left=_left1+"px";
		_lists2.style.top=_top1+"px";
		_lists2.style.top=_top1+"px";
		setTimeout(start,10);
	}
	start();
}
window.onload=function(){
	move();
}