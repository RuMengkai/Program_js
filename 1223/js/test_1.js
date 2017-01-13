function main(){
	var _cname="1638";
	var _span=document.getElementById("span");
	_span.innerHTML=`这里是${_cname}`;
	var _div=document.getElementsByTagName('div');
	console.log(Array.from(_div));
	console.log(_div);
}
function main1(){
	var _arr=[9,8,7,6,5,4,3,2,1];
	var _re=_arr.find(function(_value,_index,arr){
		console.log(arr);
		return _value<6;
	});

	console.log(_re);
	var _arr=[9,8,7,6,5,4,3,2,1];
	var _re=_arr.findIndex(function(_value,_index,arr){
		console.log(arr);
		return _value<6;
	});
	console.log(_re);
}
window.onload=function(){
	main();
	main1();
}