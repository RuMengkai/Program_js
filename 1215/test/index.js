/*
@rmk

*/

function createXHR(){
	try{
		//return new window.XMLHttpRequest();
		//throw Error("请更换浏览器");
		return new window.XMLHttpRequest();
	}catch(e){
		//console.log(e);
		//return new window.XMLHttpRequest();
		return  new ActiveXObject("Microsoft.XMLHttpRequest");
	}
}


function ajax(_method,_url,_state,_data,_fn){
	var _xhr=createXHR();
	_xhr.open(_method,_url,_state);
	_xhr.onreadystatechange=function(){
		if (_xhr.readyState==4) {
			_fn(_xhr.responseText);//回调函数
		}
	}
	_xhr.send(_data);
}



window.onload=function(){

	var _btn=document.getElementById("btn");
	_btn.onclick=function(){
		ajax("post","json.json",true,null,function(_return){
			var _return=JSON.parse(_return);
			document.getElementsByTagName("body")[0].children[2].innerHTML=_return.money;
		});
	}
}