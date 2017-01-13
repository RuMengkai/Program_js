/*设计思路：
1、先将HTML中table数据读出，存放到一个二维数组里。
2、再将二维数组进行冒泡排序。
3、将排好序的二维数组进行遍历，生成HTML。
*/
function main(){
	var _btn=document.getElementById("btn");
	var _table0=document.getElementById("table");
	var _table1=document.getElementById("table_sort");
	var _str="";
	var _temp;
	var _arr=[];

	_btn.onclick=function(){
		_str="";
		for (var i = 1; i < table.rows.length; i++) {
			_arr[i]=[];
			_arr[i][0]=table.rows[i].cells[0].innerHTML;
			_arr[i][1]=table.rows[i].cells[1].innerHTML;
		}

		for (var i = 1; i < _arr.length-1; i++) {
			for (var j = i+1; j < _arr.length; j++) {
				if (_arr[i][1]<_arr[j][1]) {
					_temp=_arr[i];
					_arr[i]=_arr[j];
					_arr[j]=_temp;
				}
			}
		}

		_str+="<tr><td>姓名</td><td>成绩</td></tr>";
		for (var i = 1; i < _arr.length; i++) {
			_str+="<tr><td>"+_arr[i][0]+"</td><td>"+_arr[i][1]+"</td></tr>";
		}
		_table1.innerHTML="";
		_table1.innerHTML=_str;
	}
}
window.onload=function(){
	main();
}