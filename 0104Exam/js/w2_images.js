function cutImg(){
	var _timer=0;
	var i=0;
	//自动切换
	function start(){
		clearTimeout(_timer);
		i++;
		if (i>5) {
			i=1;
		}
		var _images=document.getElementById("images").children[0];
		ajaxRequest("post","json/w2_images.json",true,null,function(data){
			var _data=JSON.parse(data);
			_images.src=_data[i]["img"];
		});
		_timer=setTimeout(start,2000);
	}
	start();
	//给图片按钮添加鼠标滑过时间
	var _btn=document.getElementById("btn");
	for (var i=0;i<_btn.children.length;i++) {
		_btn.children[i].onmouseover=function(){
			//清楚计时器，貌似不管用
			clearTimeout(_timer);
			console.log(_timer);
			var _images=document.getElementById("images").children[0];
			_images.src=this.src;
		}
		_btn.children[i].onmouseout=function(){
			_timer=setTimeout(start,2000);
		}
	}
}
//异步请求图片资源
function getImgbtn(){
	ajaxRequest("post","json/w2_images.json",true,null,function(data){
		var _data=JSON.parse(data);
		var _btn=document.getElementById('btn');
		var ofragment=document.createDocumentFragment();
		for (var i = 0; i < 5; i++) {
			var _input=document.createElement("input");
			_input.type="image";
			_input.src=_data[i+1]["img"];
			ofragment.appendChild(_input);
		}
		_btn.appendChild(ofragment);
		// 初始化大图
		var _img=document.createElement("img");
		var _images=document.getElementById("images");
		_img.src=_data[1]["img"];
		_images.appendChild(_img);
	})
}
window.onload=function(){
	getImgbtn();
	setTimeout(function(){
		cutImg();
	},500)
}