/*
@rmk
*/
var main=function(){
	var _bady=document.getElementsByTagName("body")[0];
	var _div,_span,_color,_color2;
	for(var i=1;i<=9;i++){
		_div=document.createElement("div");
		for(var j=1;j<=i;j++){
			if(i%2==0){
				_color="#0f0";
			}else{
				_color="#f00";
			}
			
			_span=document.createElement("span");
			_str=i+"*"+j+"="+i*j+" ";
			_span.innerHTML=_str;
			_span.style.backgroundColor=_color;
			_div.appendChild(_span);
			if(i%2==0&&j==(i/2+1)){
				_span.style.backgroundColor="#fff";
			}
			if(j==Math.round((i==1?0:i)/2)){
				_span.style.backgroundColor="#fff";
			}
			if(i>2&&(j==1||j==i)){
				_span.style.backgroundColor="#00f";
			}
		}
		_bady.appendChild(_div);
	}
}

//九宫格
var main2=function(){
	var _bady=document.getElementsByTagName("body")[0];
	var _div,_n=1;
	for(var i=1;i<=9;i++){
		_div=document.createElement("div");
		for(var j=1;j<=9;j++){
			_span=document.createElement("span");
			_span.style.backgroundColor="#ccc";
			if(i==5||j==5||i==j||i+j==10){
				_str=_n;
				_span.innerHTML=_str;
				_span.style.backgroundColor="#000";
			}
			_n++;
			_div.appendChild(_span);
		}
		_bady.appendChild(_div);
	}
}


window.onload=function(){
	//main();
	main2();
}