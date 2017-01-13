function B(){
	
	var i=0;
	
	return function(){

		alert(i++);

	}

}
var A=B();//注意B();的返回值
// A();//0
// A();//1


function fun(n,o) {
  console.log(o)
  return {
    fun:function(m){
      return fun(m,n);
    }
  };
}
var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);//undefined,0,0,0
var b = fun(0).fun(1).fun(2).fun(3);//undefined,0,1,2
var c = fun(0).fun(1);  c.fun(2);  c.fun(3);//undefined,0,1,1
//问:三行a,b,c的输出分别是什么？


function main(){
	var _btn=document.getElementById("btn");
	_btn.onclick=fn(100);
	
	function fn(m){
		alert(m);
		return function(){
			fn(m);
		}
	}
}
window.onload=function(){
	main();
}


function rmk(){
	this.id="11";
}
var _r=new rmk();
_r.id
