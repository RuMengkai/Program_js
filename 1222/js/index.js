//????js能否设置自定义库函数。解决：可以

function fx(){
	this.value="已点击";
}

fx.binding=function(_current){
	//_current.c=this;//这里的this是fx方法
	var _self=this;//保存函数，保存this
	_current.c=function(){//将返回值设置成为一个函数；
		_current.fm=_self;//将函数转换赋值给_current.fm；
		_current.fm();//调用函数
	}
	return _current.c;
}

//将绑定到原型上
Object.prototype.rmk=function(_current){
	//_current.c=this;//这里的this是fx方法
	var _self=this;//保存函数，保存this
	_current.c=function(){//将返回值设置成为一个函数；
		_current.fm=_self;//将函数转换赋值给_current.fm；
		_current.fm();//调用函数
	}
	return _current.c;
}

function main(){
	var _btn=document.getElementById("btn");
	_btn.onclick=function(){
		//window.setTimeout(fx.binding(this),2000);//setTimeout()函数的第一个参数必须是函数时才能起到延时的效果，如果是表达式会直接执行。
		window.setTimeout(function(){
			this.value="茹孟凯";
		}.rmk(this),2000);//setTimeout()函数的第一个参数必须是函数时才能起到延时的效果，如果是表达式会直接执行。
		//window.setTimeout(n=3+1,2000);//这里的第一个参数就会直接执行，不会起到延时的效果。
	}
}
window.onload=function(){
	main();
}
//字符串默认toString方法
var _obj={
	_:function(){
		alert("afunction");
	},
	toString:function(){
		alert("toString");
	}
}
_obj._();


var _test="{\"a\":\"10.9\",\"b\":100.3}";
var _result=JSON.parse(_test,function(key,val){
	console.log(key+"|"+val);
	if (typeof(val)=="string") {
		return Math.round(Number(val));
	} else {
		// alert(val);
		return val;	}
});
console.log(_result);
console.log(_test);


