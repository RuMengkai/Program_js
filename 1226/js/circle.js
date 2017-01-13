function move(){
	var _circle1=document.getElementsByTagName("div")[0].getElementsByTagName("div")[1];
	var _timer=0,degree = 0;
	(function start(){
		clearTimeout(_timer);
		_circle1.style.top=400*Math.sin(degree*Math.PI/180)+350+"px";
		_circle1.style.left=-400*Math.cos(degree*Math.PI/180)+350+"px";
		degree++;
		_timer=setTimeout(start,12);
	})();
	var _circle2=document.getElementsByTagName("div")[0].getElementsByTagName("div")[2];
	var _timer2=0,degree2 = 0;
	(function start2(){
		clearTimeout(_timer2);
		_circle2.style.top=120*Math.sin(degree2*Math.PI/180)+25+"px";
		_circle2.style.left=-120*Math.cos(degree2*Math.PI/180)+25+"px";
		degree2++;
		_timer2=setTimeout(start2,2);
	})();
}
window.onload=function(){
	move();
}