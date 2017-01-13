//arguments本身是一个类型object
// console.log(
// 	(function(){
// 		// return arguments instanceof Object;
// 		return typeof arguments;;
// 	})()
// );

//当一个函数赋给一个变量时，函数名不能直接调用，并且直接输出函数名的类型变为undefined,
// var f = function g(){ 
//   return 23; 
// };
// console.log(typeof f());
// console.log(typeof g);

//函数参数为function时，函数内部调用函数名与f参数名相同的函数时，指的是参数代表的函数
//如果没有参数，则调用函数自身，用于递归；
// function f(f){
// 	console.log("11");
// 	return f();
// }
// console.log(
// 	f (function(){ 
// 		return 1; 
// 	})
// );

//this指代的是当前对象，
// var foo = {
// 	"baz": 1,
// 	"bar": function() {   
// 		console.log(foo.baz);
// 		return this.baz;//这里的this指代的不是foo，而是当前的函数。
// 	}
// };
// console.log(foo.bar);
// console.log(
// 	(function(){
// 		return typeof arguments[0]();
// 	})(foo.bar)
// );
//函数赋值和调用不能同时进行
// var foo = {
// 	bar: function(){
// 	   return this.baz;
// 	}, 
// 	baz: 1
// }
// console.log(typeof(f = foo.bar)());
//if语句中不能声明函数
// var x = 1;
// function f(){}
// if (f) {
// 	x += typeof f;
// }
// f();
// console.log(x);
//赋值时要先声明
// var x = [3, typeof 2][0];
// console.log(x);
//函数嵌套
// function f(){
// 	function f(){ 
// 		console.log("1");
// 		return 1; 
// 	}
// 	console.log("2");
// 	return f();
// 	function f(){//这里f()被重写
// 		console.log("3");
// 		return 2; 
// 	}
// };
// console.log(f());
//instanceof 后面跟数据类型
// function f(){
// 	return f; 
// }
// console.log(f);
// console.log(new f());
// console.log(f()==f());
// console.log(new  f()  instanceof   f());//false

// //
// var    y = 1
// var    x = y = typeof    x;
// console.log(x);
// console.log(x==undefined);//false
// console.log(x=='undefined');//true


window.onload=function(){
	var _btn=document.getElementById("btn");
	_btn.onclick=(
		function(){
		alert("111")
		}
	)
}
