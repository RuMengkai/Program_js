document.cookie="n=1";
console.log(document.cookie);
function queryCookie(_key){
	var _tmp=document.cookie.split("; ");
	for(var i=0;i<_tmp.length;i++){
		if(_key===_tmp[i].split("=")[0]){
			return _tmp[i].split("=")[1];
		}
	}
}
console.log(queryCookie("n"));