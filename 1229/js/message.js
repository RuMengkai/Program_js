//1.局部刷新
//2、为什么要使用ajax，我们以群聊为例说明
/*
function main(){
    var _timer=0;
    var _data=null;
    var _span=null;
    var _df=document.createDocumentFragment();
    var _history=document.getElementById("history");
    function request(){
        window.clearTimeout(_timer);
        ajaxRequest("get","api/getMessage.php",true,null,function(data){
            _data=JSON.parse(data);
            for(var i=1;i<_history.children.length;i++){
                _history.removeChild(_history.children[i]);
            }
            for(var key in _data) {
                _span = document.createElement("span");
                _span.className = "h";
                _span.innerHTML = key + ":" + _data[key];
                _df.appendChild(_span);
            }
            _history.appendChild(_df);
            _timer=window.setTimeout(request,2000);
        });
    }
    request();
}*/
window.onload=function(){
    /*document.getElementById("send").onclick=function(){
        var _user=document.getElementById("user").value;
        var _message=document.getElementById("message").value;
        ajaxRequest("get","api/sendMessage.php?user="+_user+"&message="+_message,true,null,function(data){});
    }*/
    //main();
	
	var _span=null;
    var _df=document.createDocumentFragment();
    var _history=document.getElementById("history");
	for(var i=1;i<_history.children.length;i++){
		_history.removeChild(_history.children[i]);
	}
	for(var key in _message) {
		_span = document.createElement("span");
		_span.className = "h";
		_span.innerHTML = key + ":" + _message[key];
		_df.appendChild(_span);
	}
	_history.appendChild(_df);
}
//console.log(_message);

/*
getMessage.php 这个接口不需要传递任何参数
作用：从服务器上获取所有聊天信息；
使用方式：
url：http://10.9.156.108/html5/Ajax/api/getMessage.php
请求方式：跨域请求
返回值为：var _message={
	//格式如下：
	"user0":"value0",
	"user1":"value1"
	.....
}
要求：将所有数据显示页面上。格式：....

sendMessage.php 这个接口必须两个参数
参数名：
user:保存用户名
message:存放聊天信息；
返回值为数字0：表示发送失败，1：表示发送成功
*/