var main=function(_color1,_color2,_color3,_color4){
	var _body=document.getElementsByTagName("body")[0];
	var _div,_span,_color,_color2;
	for(var i=1;i<=9;i++){
		_div=document.createElement("div");
		for(var j=1;j<=i;j++){
			if(i%2==0){
				_color=_color1;
			}else{
				_color=_color2;
			}
			_span=document.createElement("span");
			_span.style.backgroundColor=_color;
			_div.appendChild(_span);
			if(i%2==0&&j==(i/2+1)||j==Math.round((i==1?0:i)/2)){
				_span.style.backgroundColor=_color3;
			}
			if(i>2&&(j==1||j==i)){
				_span.style.backgroundColor=_color4;
			}
		}
		_body.appendChild(_div);
	}
}
window.onload=function(){
	var _timer=0;
	var _color3="#fff";
	var _color4="#00f";
	var _body=document.getElementsByTagName("body")[0];
	(function start(){
		clearTimeout(_timer);
		if (_color3!="#000") {
			_body.innerHTML="";
			main("#0f0","#f00",_color3,_color4);
			_color3="#000";
			_color4="#0f0"
		}else{
			_body.innerHTML="";
			main("#0f0","#f00",_color3,_color4);
			_color3="#fff";
			_color4="#00f"
		}
		_timer=setTimeout(start,200);
	})();
}