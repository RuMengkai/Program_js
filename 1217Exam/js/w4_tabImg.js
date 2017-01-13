function initImg(){
	var _img=document.createElement("img");
	var _images=document.getElementById("images");
	_img.src="images/c01.jpg";
	_images.appendChild(_img);
}
function cutImg(){
	var _btn=document.getElementById("btn");
	for (var i=0;i<_btn.children.length;i++) {
		_btn.children[i].onmouseover=function(e){
			var _img=document.createElement("img");
			var _images=document.getElementById("images");
			_img.src="images/"+this.value+".jpg";
			_images.innerHTML="";
			_images.appendChild(_img);
		}
	}
}
window.onload=function(){
	initImg();
	cutImg();
}
