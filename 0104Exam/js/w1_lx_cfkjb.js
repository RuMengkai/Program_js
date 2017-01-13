/*打印乘法口诀表*/
function init_cf(){
	var _cf=document.getElementById('cf');
	var ofragment="";
	for (var i = 1; i <=9; i++) {
		for (var j = 1; j <=i; j++) {
			ofragment+=j+"*"+i+"="+(i*j)+"    ";
		}
		ofragment+="<br/>"
	}
	_cf.innerHTML=ofragment;
}
/*打印菱形*/
function init_lx(){
	var _lx=document.getElementById('lx');
	/*创建文档碎片*/
	var ofragment=document.createDocumentFragment();
	for (var i = -15; i < 16; i++) {
		for (var j = -15; j < 16; j++) {
			var _span=document.createElement("span");
			if (Math.abs(i)+Math.abs(j)<16) {
				_span.style.backgroundColor="#f00";
			} 
			ofragment.appendChild(_span);
		}
	}
	_lx.appendChild(ofragment);
}
window.onload=function(){
	init_lx();
	init_cf();
}