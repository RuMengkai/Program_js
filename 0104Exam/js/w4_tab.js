function main(){
	var _btn=document.getElementById("btn");
	var _content=document.getElementById("content");
	for (var i = 0; i < btn.children.length; i++) {
		_content.children[i].style.zIndex=0;
		btn.children[i].index=i;
		btn.children[i].onmouseover=function(){
			for (var i = 0; i < btn.children.length; i++) {
				btn.children[i].style.borderBottom="1px solid #ccc";
				_content.children[i].style.zIndex=0;
			}
			this.style.borderBottom="none";
			_content.children[this.index].style.zIndex=1;
		};
		btn.children[0].style.borderBottom="none";
		_content.children[0].style.zIndex=1;
	}
}
window.onload=function(){
	main();
}