function move(){
	var _lists1=document.getElementsByTagName("div")[0].getElementsByTagName("div")[0];
	var _timer=0,degree = 0,_color=0;
	(function start(){
		clearTimeout(_timer);
		_lists1.style.top=350*Math.sin(degree*Math.PI/180)+350+"px";
		_lists1.style.left=-350*Math.cos(degree*Math.PI/180)+350+"px";
		degree=degree+1;
		_timer=setTimeout(start,1);
	})();
	var _flag=0;
	(function color(){
		clearTimeout(_color);
		if (_flag==0) {
			_lists1.style.background="#f00";
			_flag=1;
		} else if(_flag==1){
			_lists1.style.background="#0f0";
			_flag=2;
		}else{
			_lists1.style.background="#00f";
			_flag=0;
		}
		_color=setTimeout(color,500);
	})();

}
window.onload=function(){
	move();
}