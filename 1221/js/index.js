var main=function(){
	// var _str="abc123nmp456xyz789";
	// var _reg1=/([a-z]+)\d+/g;
	// var _reg2=/([a-z]+\d+){2}/g;

	// // console.log(_reg,);
	// console.log(_reg1.exec(_str));
	// var _temp="123hi12j3ij21iniun213nj";
	// var _reg=/\w/g;
	// console.log(_reg.test(_temp));
	var _temp="\\\\";
	console.log(_temp);
	var _reg=/\\\\/;
	console.log(_reg.exec(_temp));
	console.log(_reg.test(_temp));

}
//[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?


window.onload=function(){
	//main();
	var _str="asddf23432";
	var _reg=/[^\d]+/;
	alert(typeof(_str.match(_reg)));
	alert(_str.match(_reg)[0]);
}