// for(var i=1;i<=300;i++){
//   setTimeout(function(){
//       console.log(i);    
//   },0);  
// };
String.prototype.trim = function(){
	return this.replace(/^\s+/,"").replace(/\s+$/,"");
}
var str="  aaaa    bbbb   ";
str=str.trim();
console.log(str);