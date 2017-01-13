function clock(){
	var _nowDate=new Date();
	var _stopDate=new Date(2016,11,31);
	var _date=new Date(_stopDate.getTime()-_nowDate.getTime());
	var _day=_date.getDate();
	var _hours=_date.getHours()-8;
	var _Minutes=_date.getMinutes();
	var _Seconds=_date.getSeconds();
	var _code="距离元旦放假还有：";
	_code+='<img src="images/'+Math.floor(_day/(10))+'.png" /img>'+'<img src="images/'+Math.floor(_day%(10))+'.png" /img>天';
	_code+='<img src="images/'+Math.floor(_hours/(10))+'.png" /img>'+'<img src="images/'+Math.floor(_hours%(10))+'.png" /img>小时 ';
	_code+='<img src="images/'+Math.floor(_Minutes/(10))+'.png" /img>'+'<img src="images/'+Math.floor(_Minutes%(10))+'.png" /img>分 ';
	_code+='<img src="images/'+Math.floor(_Seconds/(10))+'.png" /img>'+'<img src="images/'+Math.floor(_Seconds%(10))+'.png" /img>秒';
	return _code;
}
var _timer=0;
function main(){
	window.clearTimeout(_timer);
 	document.getElementById("box").innerHTML=clock();
	_timer=window.setTimeout(main,1000);
}
window.onload=function(){
	main();
}