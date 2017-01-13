function turn(){
	var _timer=0;

	var _pic=document.getElementById("pic")
	var _opacity=1;
	var _index=pic.children.length-1;
	(function action(){
		window.clearTimeout(_timer);
		_opacity-=0.1;
		_pic.children[_index].style.opacity=_opacity;
		if(_opacity>0){
			_timer=window.setTimeout(action,60);
		}else{
			_pic.children[_index].style.opacity=0;
			_index--;
			if(_index<0){_index=pic.children.length-1;}
			_pic.children[_index].style.zIndex=10;
			_pic.children[_index-1<0?pic.children.length-1:_index-1].style.zIndex=9;
			_pic.children[_index+1>pic.children.length-1?0:_index+1].style.zIndex=0;
			_pic.children[_index+1>pic.children.length-1?0:_index+1].style.opacity=1;
			_opacity=1;
			_timer=window.setTimeout(action,1000);
		}
		
	})()
	
}



window.onload=function(){
	turn();
}