var _left=0;
var _timer="";
var _div1=null;
function main(){
	window.clearTimeout(_timer);
	if(_left>=3000){
		_left-=3000;
	}else{
		_left+=10;
	}
	if (_left%1000==0&&_left!=0) {
		_timer=window.setTimeout(main,1000);
	}else{
		_div1.style.left=_left+"px";
		_timer=window.setTimeout(main,10);
	}
}
window.onload=function(){
	_div1=document.getElementById("banner");
	setTimeout(function(){main()},1000);
}