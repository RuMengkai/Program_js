var initCss=function(x1,x2,y1,y2){
	var _box=document.getElementById("box");
	var _li=null;
	_box.innerHTML="";
	for (var i=x1;i<x2;i++) {
		for(var j=y1;j<y2;j++){
			if (i==j||i+j==4){
				_li=document.createElement("div");
				_li.style.backgroundColor="#f00";
				_li.style.left=j*100+"px"
				_li.style.top=i*100+"px"
				_box.appendChild(_li);
			}
		}
	}
}
var turn=function(){
	var _btn1=document.getElementsByTagName("button")[0];
	var _btn2=document.getElementsByTagName("button")[1];
	var n=0;
	_btn1.onclick=function(){
		n++;
		if (n==4) {
			n=0;
		}
		switch(n){
			case 0:initCss(0,3,0,5);break;
			case 1:initCss(0,5,0,3);break;
			case 2:initCss(2,5,0,5);break;
			case 3:initCss(0,5,2,5);break;
		}
	}
	_btn2.onclick=function(){
		n++;
		if (n==4) {
			n=0;
		}
		switch(n){
			case 0:initCss(0,3,0,5);break;
			case 3:initCss(0,5,0,3);break;
			case 2:initCss(2,5,0,5);break;
			case 1:initCss(0,5,2,5);break;
		}
	}
}
window.onload=function(){
	initCss(0,3,0,5);
	turn();
}
