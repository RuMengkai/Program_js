//格式化时间
var getfomatData=function(_date){
	//var _date=new Date();
	var _year=_date.getFullYear();
	var _month=_date.getMonth()+1;
	var _day=_date.getDate();
	var _h=_date.getHours();
	var _m=_date.getMinutes();
	return _year+"-"+_month+"-"+_day+" "+_h+":"+_m;
}
//格式化时间留言的时间
var getfomatData2=function(_date){
	var _year=_date.getFullYear();
	var _month=_date.getMonth()+1;
	var _day=_date.getDate();
	var _h=_date.getHours();
	var _m=_date.getMinutes();
	return _year+"-"+_month+"-"+_day;
}
//格式化时间留言的时间二
var getfomatData3=function(_date){
	var _year=_date.getFullYear();
	var _month=_date.getMonth()+1;
	var _day=_date.getDate();
	var _h=_date.getHours()-8;
	var _m=_date.getMinutes();
	if(_h==0){
		return _m+"分钟前";
	}else{
		return _h+"小时"+_m+"分前";
	}
}

//提交留言
var postMessage=function(){
	var _btn_name=document.getElementById("btn_name");
	var _btn_msg=document.getElementById("btn_msg");
	if(_btn_name.value==""||_btn_msg.value==""){
		alert("姓名或留言不能为空");
		return 0;
	}else{
		var _date=getfomatData3(new Date(60000));
		var _li=document.createElement("li");
		_li.innerHTML='<div class="pic"><a href="###"></a></div><p><a href="#">'+_btn_name.value+'</a><br/>'+_btn_msg.value+'<br /></p><span>'+_date+'</span>';
		var _ul=document.getElementById("content");
		_ul.insertBefore(_li,_ul.children[0]);
		//向json中存放数据
	}
}
//初始化数据
var _fx=function(_data){
	var _ul=document.getElementById("content");
	_data=JSON.parse(_data);
	var _messages="";
	_ul.innerHTML="";
	for (var key in _data) {
		var _li=document.createElement("li");
		//获取现在时间
		var _nowDate=new Date();
		//获取留言时间
		var _dateM=new Date(Number(_data[key]["date"]));
		//获取时间差
		var _dateCha=new Date(_nowDate.getTime()-_dateM.getTime());
		var _day=_dateCha.getDate();
		console.log(_day);
		//如果时间大于一天
		if(_day>=2){
			_data[key]["date"]=getfomatData2(new Date(Number(_data[key]["date"])));
		}else{
			_data[key]["date"]=getfomatData3(_dateCha);
		}
		_messages='<div class="pic"><a href="###"></a></div><p><a href="#">'+_data[key]["name"]+'</a><br/>'+_data[key]["message"]+'<br /></p><span>'+_data[key]["date"]+'</span>';
		_li.innerHTML=_messages;
		_ul.insertBefore(_li,_ul.children[0]);
	}
}
//ajax获取数据
var getData=function(){
	ajax("post","js/message.json",true,null,_fx);
}
window.onload=function(){
//	var date=new Date(2016,11,15,22,55);
//	console.log(date.getTime());
//	var date=new Date();
//	console.log(date.getTime());
	//自动刷新时间
	var _timer=0;
	(function start(){
		clearTimeout(_timer);
		getData();
		_timer=setTimeout(start,30000);
	})()
	var _btn_submit=document.getElementById('btn_submit');
	_btn_submit.onclick=postMessage;
}
