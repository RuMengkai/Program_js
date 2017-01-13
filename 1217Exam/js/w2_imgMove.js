var move=function(){
	for (var i=0;i<9;i++) {
		
		(function (tag){
			var _li=document.getElementsByTagName("body")[0].children[tag];
			console.log(_li);
			_li.onmousedown=function(e){
				var dx = e.offsetX, dy = e.offsetY;
				document.onmousemove = function(e){
					console.log(e.offsetX+"|"+e.offsetY);
					_li.style.left = e.clientX - dx + "px";
					_li.style.top = e.clientY - dy + "px";
					_li.style.zIndex=99;
				}
				document.onmouseup=function(){
					_li.style.zIndex=1;
					document.onmousemove = null;
				}
			}
		})(i)
	}
	
}
//初始化图片
var initPosition=function(){
	var _body=document.getElementsByTagName("body")[0];
	var _images="";
	var n=1;
	for(var i=0;i<3;i++){
		for (var j=0;j<3;j++) {
			var _li=document.createElement("div");
			_images='<div class="dd"></div><img src="images/0'+(n)+'.png"/>';
			_li.innerHTML=_images;
			_li.className="li";
			_li.style.top=i*120+"px"
			_li.style.left=j*160+"px"
			_body.appendChild(_li);
			n++;
		}
	}
}
window.onload=function(){
	//初始化图片
	initPosition();
	// setTimeout(function(){
		move();
	// },0)
}
//每个li位置信息初始化
var getPosition=function(_arr){
	var _ul=document.getElementById("main");
	for (var i=0;i<_ul.children.length;i++) {
		_arr.push({"top":_ul.children[i].offsetTop,"left":_ul.children[i].offsetLeft});
	}
	console.log(_arr);
}