function init() {
	var _url=window.location.href;
	var _identify=_url.match(/n=\d+/g)[0].replace(/n=/,"");
	var _img=document.getElementsByTagName("img")[0]
	_img.src="img/img"+_identify+".jpg";

	var _push=document.getElementById("pushData");
	_push.onclick=function () {
		document.cookie="id="+_identify;
	}
}
window.onload=function () {
	init();
}