var move=function(){
	var _ul=document.getElementsByTagName("ul")[0];
	var _btnUp=null;
	var _btnDown=null;
	for (var i=0;i<_ul.children.length;i++) {
		(function(arg){
			_btnUp=document.getElementsByTagName("li")[arg].children[0];
			_btnDown=document.getElementsByTagName("li")[arg].children[1];
			_btnUp.onclick=function(){
				if(arg-1>=0){
					_top1=document.getElementsByTagName("li")[arg-1];
					_top2=document.getElementsByTagName("li")[arg];
					_ul.insertBefore(_top2,_top1);
					move();
				}
			}
			_btnDown.onclick=function(){
				if(arg+1<_ul.children.length){
					_top1=document.getElementsByTagName("li")[arg+1];
					_top2=document.getElementsByTagName("li")[arg];
					_ul.insertBefore(_top1,_top2);
					move();
				}
			}
		})(i)
	}
}
window.onload=function(){
	move();
}
