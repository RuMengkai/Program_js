window.onload=function(){
	var _kf=new KeybordGame(document.getElementById("container")).initCss().randomChar();
	console.log(_kf===_kf.randomChar());
//  _kf.initCss();//初始化页面的css
//  _kf.randomChar();//随机字母下来
	window.onkeypress=function(e){
		var e=e||window.event;
		var _code=e.keyCode||e.which;
		var _char=String.fromCharCode(_code).toUpperCase();
		//校验按下的键码值与页面中的字母是否相等,如果的相等的时候移除该节点;
		_kf.validateCode(_char);
	}
}

function KeybordGame(_obj){
	var _collect=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var _width=0;
	var _height=0;
	this.initCss=function(){
		_width=document.documentElement.clientWidth||document.body.clientWidth;
		_height=document.documentElement.clientHeight||document.body.clientHeight;
		_obj.style.width=_width-10+"px";
		_obj.style.height=_height-10+"px";
		return this;
	}
	this.randomChar=function(){
		var _timer=0;
		function createSpan(){
			var _span=document.createElement("span");
			_span.innerHTML=_collect[Math.floor(Math.random()*_collect.length)];
			_span.style.top="-40px";
			_span.style.left=Math.floor(Math.random()*(_width-40))+"px";
			_obj.appendChild(_span);
		}
		function start(){
			window.clearTimeout(_timer);
			createSpan();
			for(var i=0;i<_obj.children.length;i++){
				_obj.children[i].style.top=parseInt(_obj.children[i].style.top.replace("px",""))+20+"px";
			}
			_timer=window.setTimeout(start,500);
		}
		start();
		return this;
	}
	this.validateCode=function(_code){
		for(var i=0;i<_obj.children.length;i++){
			if(_obj.children[i].innerHTML===_code){
				_obj.removeChild(_obj.children[i]);
				break;
			}
		}
	}
}



//面向过程的方法
function creating() {
    var _timer=0;
    var _collect = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var _obj = document.getElementById("container");
    function changeTop(){
        for(var i=0;i<_obj.children.length;i++){
            _obj.children[i].style.top=_obj.children[i].offsetTop+50+"px";
        }
    }
    (function createComponent() {
        window.clearTimeout(_timer);
        var _span = document.createElement("span");
        _span.innerHTML = _collect[Math.floor(Math.random() * 26)];
        _span.style.left = Math.random() * (_obj.clientWidth - 40) + "px";
        _span.style.top = -40 + "px";
        _obj.appendChild(_span);
        changeTop();
        _timer=window.setTimeout(createComponent,800);
    })();
}
function initCss(){
    var _width=document.documentElement.clientWidth||document.body.clientWidth;
    var _height=document.documentElement.clientHeight||document.body.clientHeight;
    var _obj=document.getElementById("container");
    _obj.style.width=_width-10+"px";
    _obj.style.height=_height-10+"px";
}
window.onload=function(){
    initCss();
    creating();
}
document.onkeydown=function(e){
    var _obj=document.getElementById("container");
    e=e||window.event;
    var _result=String.fromCharCode(e.charCode||e.which);
    for(var i=0;i<_obj.children.length;i++){
        if(_obj.children[i].innerHTML==_result){
            _obj.removeChild(_obj.children[i]);
            break;
        }
    }
}
