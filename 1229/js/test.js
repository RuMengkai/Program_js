window.onload=function(){
	var _btn=document.getElementById("btn");
	_btn.onclick=function(){
		var _a=document.getElementById("input").value;
		main(_a);
	}
}
function main(_a){
	console.log(_a);
	var _object={
		"name":_a,//如果传过来的值为"\",在这里_a="\\";	注："\"!="\\";
		"f1":"\\",
		"f2":"//"
	}
	console.log(_object);
	ajaxRequest("post","test.php",true,_object,function(data){
		console.log(data);
	});
}
