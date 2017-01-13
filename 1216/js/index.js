var initArray=function(_cols){
	for (var i=0;i<_cols.length;i++) {
		_cols[i]=0;
	}
}
//控制每列的高度；
var getcols=function(_cols){
	var _min=_cols[0];
	var _index=0;
	for (var i=0;i<_cols.length;i++) {
		if (_min>_cols[i]) {
			_min=_cols[i];
			_index=i;
		}
	}
	return _index;
}
//设置定位
var setPosition2=function(_cols){
	
	var _panel=document.getElementById("box");
	var _n=0;
	var _complete=true;
	var _timer=0;
	function checking(){
		clearTimeout(_timer);
		for(var i=0;i<_panel.children.length;i++){
			//检测图片是否加载完成
			if(_panel.children[i].children[0].complete){
				_n=getcols(_cols);
				_panel.children[i].style.left=_n*150+"px";
				_panel.children[i].style.top=_cols[_n]+"px";
				_cols[_n]+=_panel.children[i].offsetHeight;
			}else{
				_timer=window.setTimeout(checking,200);
				break;
			}
		}
	}
}

//设置定位
var setPosition=function(_cols){
	var _panel=document.getElementById("box");
	var _n=0;
	var _complete=true;
	for(var i=0;i<_panel.children.length;i++){
		//检测图片是否加载完成
		
		_n=getcols(_cols);
		_panel.children[i].style.left=_n*150+"px";
		_panel.children[i].style.top=_cols[_n]+"px";
		_cols[_n]+=_panel.children[i].offsetHeight;
	}
}
var readImg=function(_cols){
	var _panel=document.getElementById("box");
	var _div=null;
	var _img=null;
	var _n=0;
	for (var i = 0; i < 58; i++) {
		_div=document.createElement("div");	
		_img=document.createElement("img");	
		_img.src="img/"+(i+1)+".jpg";
		_div.appendChild(_img);
		_panel.appendChild(_div);
	}
}
var initCss=function(){
	var _panel=document.getElementById("box");
	var _w=document.documentElement.clientWidth||document.body.clientWidth;
	var _col=Math.floor(_w/150);
	_panel.style.width=_col*150+"px";
	return _col;
}
window.onload=function(){
	var _col=initCss();//获取列
	var _cols=new Array(_col);
	//初始化数组
	initArray(_cols);
	readImg(_cols);
//	setPosition2(_cols);
	setTimeout(function(){
		setPosition	(_cols);
	},1000);
}
