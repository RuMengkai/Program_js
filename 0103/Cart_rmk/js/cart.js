function main(){
	var _content=document.getElementsByTagName('img')[0];
	var _src="img/img"+document.cookie.match(/\d+/)+".jpg";
	console.log(_src);
	_content.src=_src;
}
window.onload=function(){
	main();
}