var change=function(){
	var _box=document.getElementById("box");
	var _btn=document.getElementById("btn");
	var _timer=0;
	var _opacity=1;
	var _n=5;
	function start(){
		clearTimeout(_timer);
		try{
			_box.children[(_n==0)?5:_n-1].style.opacity=1;
			_box.children[(_n==0)?5:_n-1].style.zIndex=-1;
			_opacity-=0.1;
			if (_opacity>=0.1) {
				_box.children[_n].style.zIndex=1;
				_box.children[_n].style.opacity=_opacity;
				_timer=setTimeout(start,30);
			}else{
				_box.children[_n].style.opacity=0;
				_opacity=1;
				_n-=1;
				_timer=setTimeout(start,2000);
			}
		}catch(e){
			_n=5;
			_timer=setTimeout(start,30);
		}
	}
	start();
	
	
	var _opacity2=0;
	var _timer2=0;
	for(var i=0;i<=5;i++){
		(function(i){
			_btn.children[i].onmouseover=function(){
				clearTimeout(_timer);
				_box.children[i].style.zIndex="2";
				_box.children[i].style.opacity=_opacity2;
				(function start2(){
					clearTimeout(_timer2);
					_opacity2+=0.1;
					if (_opacity2<=1) {
						_box.children[i].style.opacity=_opacity2;
						_timer2=setTimeout(start2,10);
					}
				})()
			}
			_btn.children[i].onmouseout=function(){
				_timer=setTimeout(start,30);
				_box.children[i].style.opacity=_opacity2=0;
				_box.children[i].style.zIndex="-1";
				_opacity2-=0;
//				(function start2(){
//					clearTimeout(_timer2);
//					_opacity2-=0.1;
//					if (_opacity2>0) {
//						_box.children[i].style.opacity=_opacity2;
//						_timer2=setTimeout(start2,30);
//					}else{
//						_box.children[i].style.opacity=1;
//						_box.children[i].style.zIndex="-1";
//					}
//				})()
			}
		})(i)
	}
}

window.onload=function(){
	change();
}
