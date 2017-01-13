/**
 * Created by Evil on 2014/6/24.
 */
 function mobileMachine(){
 	var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
 	var browser = navigator.userAgent.toLowerCase();
 	var isMobile = false;
 	for (var i=0; i<mobileAgent.length; i++){
 		if (browser.indexOf(mobileAgent[i])!=-1){
 			isMobile = true;
 			location.href = "/M/default.html";
 			break;
 		}
 	}
 }
/**
 * 以上检测用户设备是否是移动设备
 */

var _domain="http://backstage.jiudon.com/";//全局变量

/**
 * 创建XMLHttpRequest对象
 * @param _method 请求方式: post||get
 * @param _url 远程服务器地址
 * @param _async 是否异步
 * @param _parameter 向服务器发送数据
 * @param _callBack 回调函数
 */
 function parameterDeal(_parameter){
 	var _sender="";
 	if(_parameter instanceof Object){
 		for(var k in _parameter){
 			_sender+=k+"="+_parameter[k]+"&";
 		}
 		return _sender.replace(/\&$/g,"");
 	}else{
 		return _parameter;
 	}
 }
 function createXMLHttpRequest(){
 	try{
 		return new window.XMLHttpRequest();
 	}catch(e){
 		try{
 			return new ActiveXObject("MSXML2.XMLHTTP.6.0");
 		}catch(e){
 			try{
 				return new ActiveXObject("MSXML2.XMLHTTP.3.0");
 			}catch(e){
 				try{
 					return new ActiveXObject("MSXML2.XMLHTTP");
 				}catch(e){
 					try{
 						return new ActiveXObject("Microsoft.XMLHTTP");
 					}catch(e){
 						throw new Error("该浏览器版本太低,已经被大部分市场淘汰,请升级!!!");
 						return;
 					}
 				}
 			}
 		}
 	}
 }
 function ajaxRequest(_method,_url,_async,_parameter,_callBack){
 	var _ajax=createXMLHttpRequest();
 	if(_ajax){
 		_ajax.onreadystatechange=function(){
 			if(_ajax.readyState==4 && _ajax.status==200){
 				_callBack(_ajax.responseText);
 			}
 		}
 		_ajax.open(_method,_url,_async);
 		_ajax.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=utf-8");
 		_ajax.send(parameterDeal(_parameter));
 	}
 }

/**
 * 获取到普通的产品分类信息
 * @param data 未布局的子类产品分类信息
 * @param _identify //大类ID
 */
 function general(data,_identify){
 	var _temp = data.replace(/\[|(\{\$\}\])$/g, "");
 	_temp = _temp.replace(/\{\$\}\,\s*/g, "{$}");
 	var _data = _temp.split("{$}");
 	var _item = null;
 	var _html = "<ul>";
 	for (var i = 0; i < _data.length; i++) {
 		_item = _data[i].split("{:}");
 		if (parseInt(_item[3]) == parseInt(_identify)) {
 			for (var n = i; n < _data.length; n++) {
 				_item = _data[n].split("{:}");
 				if (parseInt(_item[2]) > 2 && parseInt(_item[2]) <= 3) {
 					_html += "<a href=\"" + _item[1] + "?n=" + _item[3] + "\">" + _item[0] + "</a>";
 				}
 				if (parseInt(_item[2]) <= 2 && parseInt(_item[2]) > 1) {
 					if (_html.length > 0) {
 						_html += "</li>";
 					}
 					_html += "<li class=\"root\"><a href=\"" + _item[1] + "?n=" + _item[3] + "\">" + _item[0] + "</a></li><li class=\"node\">";
 				}
 				if (n + 1 < _data.length) {
 					_item = _data[n + 1].split("{:}");
 					if (parseInt(_item[2]) <= 1 && parseInt(_item[2]) > 0) {
 						break;
 					}
 				}
 			}
 		}
 	}
 	_html += "</li></ul>";
 	jQuery("#list").html(_html);
 	jQuery("#container").css("display", "block");
 }
/**
 * 汽车分类信息
 */
 function special(){
 	var _html = "<ul>";
 	_html+="<li class=\"tag\"><a href=\"#\">品牌</a></li><li class=\"find\"><a href=\"/products.html#A\">A</a><a href=\"/products.html#B\">B</a><a href=\"/products.html#C\">C</a><a href=\"/products.html#D\">D</a><a href=\"/products.html#E\">E</a><a href=\"/products.html#F\">F</a><a href=\"/products.html#G\">G</a><a href=\"/products.html#H\">H</a><a href=\"/products.html#I\">I</a><a href=\"/products.html#J\">J</a><a href=\"/products.html#K\">K</a><a href=\"/products.html#L\">L</a><a href=\"/products.html#M\">M</a><a href=\"/products.html#N\">N</a><a href=\"/products.html#O\">O</a><a href=\"/products.html#P\">P</a><a href=\"/products.html#Q\">Q</a><a href=\"/products.html#R\">R</a><a href=\"/products.html#S\">S</a><a href=\"/products.html#T\">T</a><a href=\"/products.html#U\">U</a><a href=\"/products.html#V\">V</a><a href=\"/products.html#W\">W</a><a href=\"/products.html#X\">X</a><a href=\"/products.html#Y\">Y</a><a href=\"/products.html#Z\">Z</a></li>";
 	_html+="<li class=\"tag\"><a href=\"#\">价格</a></li><li class=\"find\"><a href=\"products.html?p=1\">10万以下</a><a href=\"products.html?p=2\">11-20万</a><a href=\"products.html?p=3\">21-30万</a><a href=\"products.html?p=4\">31-40万</a><a href=\"products.html?p=5\">41-50万</a><a href=\"products.html?p=6\">51-60万</a><a href=\"products.html?p=7\">61-70万</a><a href=\"products.html?p=8\">71-80万</a><a href=\"products.html?p=9\">81-90万</a><a href=\"products.html?p=10\">91-100万</a><a href=\"products.html?p=11\">100万以上</a></li>";
 	_html+="<li class=\"tag\"><a href=\"#\">排量</a></li><li class=\"find\"><a href=\"products.html?c=1\">1.0以下</a><a href=\"products.html?c=2\">1.1-2.0L</a><a href=\"products.html?c=3\">2.1-3.0L</a><a href=\"products.html?c=4\">3.1-4.0L</a><a href=\"products.html?c=5\">4.1-5.0L</a><a href=\"products.html?c=6\">5.1-6.0L</a><a href=\"products.html?c=7\">6.0L以上</a></li>";
 	_html+="<li class=\"tag\"><a href=\"#\">燃料</a></li><li class=\"find\"><a  href=\"products.html?f=1\">汽油</a><a href=\"products.html?f=2\">柴油</a><a href=\"products.html?f=3\">混动</a><a href=\"products.html?f=4\">新能源</a></li>";
 	_html+="<li class=\"tag\"><a href=\"#\">驱动</a></li><li class=\"find\"><a href=\"products.html?d=1\">前驱</a><a href=\"products.html?d=2\">后驱</a><a href=\"products.html?d=3\">四驱</a></li>";
 	_html+="<li class=\"tag\"><a href=\"#\">变速</a></li><li class=\"find\"><a href=\"products.html?m=1\">手动</a><a href=\"products.html?m=2\">自动</a><a href=\"products.html?m=3\">手自一体</a></li>";
 	_html += "</ul>";
 	jQuery("#list").html(_html);
 	jQuery("#container").css("display", "block");
 }
 function categoryEvent(data,_display){
 	jQuery(".dict").mouseenter(function () {
 		var _identify = jQuery(this).find(".tag a").prop("href").split("=")[1];
 		general(data,_identify);
        /*if(jQuery(this).prop("id")!=1){
            general(data,_identify);
        }else{
            special();
        }*/
    });
 	jQuery(".dict").mouseleave(function () {
 		jQuery(".container").css("display", "none");
 	});
 	jQuery("#container").mouseenter(function () {
 		if(_display=="none"){
 			document.getElementById("menu").style.display="block";
 		}
 		document.getElementById("container").style.display="block";
 	});
 	jQuery("#container").mouseleave(function () {
 		document.getElementById("container").style.display="none";
 		if(_display=="none"){
 			document.getElementById("menu").style.display="none";
 		}
 	});
 }
/**
 * 读取产品分类信息
 */
 function categoryReader(_display){
 	jQuery.post("/url/CategoryReader",{},function(data,textStatus){
 		if(textStatus=="success") {
 			var _regex = /\{\$\}/g;
 			var _html = "";
 			var _nav="";
 			if (_regex.test(data)) {
 				var _temp = (data.replace(/\[|\]/g,"") + "{$}").replace(/(\{\$\}){2}/g, "").replace(/\{\$\},\s*/g, "{$}");
 				var _data = _temp.split("{$}");
 				var _item = null;
 				for (var i = 0; i < _data.length; i++) {
 					_item = _data[i].split("{:}");
 					if (parseInt(_item[2]) == 2) {
 						_html += "<a href=\"" + _item[1] + "?n=" + _item[3] + "\">" + _item[0] + "</a>";
 					}
 					if (parseInt(_item[2]) == 1) {
 						if (_html.length > 0) {
 							_html += "</li></ul>"
 						}
 						_html += "<ul class=\"dict\" id=\""+_item[5]+"\"><li class=\"tag\"><a href=\"" + _item[1] + "?n=" + _item[3] + "\">" + _item[0] + "</a></li><li class=\"item\">";
 					}
 					if(_item[5]==1){
 						_nav+="<a href=\""+_item[1]+"?n="+_item[3]+"\">"+_item[0]+"</a>";
 					}
 				}
 				_html += "</li></ul>";
 				document.getElementById("nav").innerHTML=_nav;
 				jQuery("#menu").css("display",_display);
 				jQuery("#menu").html(_html);
 				categoryEvent(data,_display);
 			}
 		}
 	},"text");
 }

/**
 * 以下为创建登陆窗口的组件
 * createLogin方法创建登陆窗口的代码
 * loginCommon公共调用的方法,内含关闭窗口的方法;
 */
 function createLogin(){
 	var _common=document.createElement("div");
 	_common.id="common";
 	var _frame=document.createElement("div");
 	_frame.id="frame";
 	_frame.className="frame";
 	var _html="<span class=\"login_top\">";
 	_html+="<a href=\"/index.html\" class=\"user_logo\"><img alt=\"\" src=\"/ImgFiles/user_logo.gif\"/></a>";
 	_html+="<a href=\"/UserCenter/register.html\" class=\"user_reg\">注册会员</a>";
 	_html+="</span>";
 	_html+="<table cellpadding=\"0\" cellspacing=\"0\" class=\"load_table\">";
 	_html+="<tr>";
 	_html+="<td style=\"text-align:right; font-size:13px; color:#555; width:70px;\">用户名：</td>";
 	_html+="<td style=\"text-align:left; width:171px;\"><input type=\"text\" id=\"user\" style=\"width:170px;\"/></td>";
 	_html+="</tr>";
 	_html+="<tr>";
 	_html+="<td style=\"text-align:right; font-size:13px; color:#555; width:70px;\">密码：</td>";
 	_html+="<td style=\"text-align:left; width:171px;\"><input type=\"password\" id=\"pwd\" style=\"width:170px;\"/></td>";
 	_html+="</tr>";
 	_html+="<tr>";
 	_html+="<td style=\"text-align:right; font-size:13px; color:#555; width:70px;\">验证码：</td>";
 	_html+="<td style=\"text-align:left; width:171px;\"><input type=\"text\" id=\"code\" style=\"width:80px;\"/><img alt=\"\" src=\"/url/ValidateCode\" onclick=\"javascript:this.src='/url/ValidateCode?'+Math.random()\"/></td>";
 	_html+="</tr>";
 	_html+="<tr>";
 	_html+="<td colspan=\"2\" style=\"height:25px; display:none;\" id=\"tip\"></td>";
 	_html+="</tr>";
 	_html+="<tr>";
 	_html+="<td colspan=\"2\">";
 	_html+="<input type=\"checkbox\" id=\"auto\" style=\"margin:0px; padding:0px; border:solid 1px #555; width:13px; height:13px; overflow:hidden; margin-left:60px; margin-top:3px; display:inline;\">";
 	_html+="<span style=\"font-size:13px; color:#555; float:left; line-height:20px;\">自动登录</span>";
 	_html+="<a href=\"/UserCenter/forget.html\" style=\"font-size:13px; line-height:20px; float:left; margin-left:10px; display:inline; color:#555; text-decoration:underline;\">忘记密码?</a>";
 	_html+="</td>";
 	_html+="</tr>";
 	_html+="<tr>";
 	_html+="<td colspan=\"2\" style=\"height:33px; position:relative;\">";
 	_html+="<span id=\"load\">会员登录</span>";
 	_html+="</td>";
 	_html+="</tr>";
 	_html+="</table>";
 	_html+="<span id=\"close\">X</span>";
 	_frame.innerHTML=_html;
 	var _body=document.getElementsByTagName("body")[0];
 	_body.appendChild(_common);
 	_body.appendChild(_frame);
 	var _width=document.documentElement.clientWidth || document.body.clientWidth;
 	var _height=document.documentElement.clientHeight || document.body.clientHeight;
 	_frame.style.left=(_width-_frame.offsetWidth)/2+"px";
 	_frame.style.top=(_height-_frame.offsetHeight)/2+"px";
}//创建html代码
function checkUserState(_exec){
	jQuery.post("/url/UserHandle",{"cmd":"login"},function(data,textStatus){
		if(textStatus=="success"){
			if(data!="failed"){
				var _data=data.split("$");

				var _html="";
				_html+="<a href=\"/UserCenter/user_center.html?user="+_data[0]+"\" class=\"u_account\">"+_data[2]+":"+_data[0]+"</a>";
				_html+="<span class=\"u_score\">积分"+_data[1]+"</span>";
				_html+="<span id=\"t_exit\">退出</span>";
				document.getElementById("top_user").innerHTML=_html;
				
				_html="<a href=\"/UserCenter/user_center.html?user="+_data[0]+"\" class=\"user_account\">"+_data[0]+"</a>";
				_html+="<span id=\"b_exit\">退出</span>";
				document.getElementById("user_name").innerHTML=_html;

				if(_exec){
					_html="<a href=\"/UserCenter/user_center.html?user="+_data[0]+"\" class=\"bar_user\"><span>亲爱的,</span><span class=\"bar_account\">"+_data[0]+"</span><span>欢迎光临!</span></a>";
					_html+="<span class=\"bar_score\"><span class=\"score_t\">积分</span><span class=\"score_num\">"+_data[1]+"</span></span>";
					document.getElementById("main_user").innerHTML=_html;
					document.getElementById("photo_src").src=/(\/\w+){2}\.((jpg)|(png)|(gif))/g.test(_data[3])?_data[3].match(/(\/\w+){2}\.((jpg)|(png)|(gif))/g)[0]:"/ImgFiles/u_photo.gif";
				}
				
				function execExit(){
					jQuery.post("/url/UserNameHandle",{"cmd":"exit"},function(data,textStatus){
						if(textStatus=="success"){
							if(data=="failed"){
								document.getElementById("top_user").innerHTML="<span class=\"login\" id=\"t_login\">会员，请登录</span><a href=\"/UserCenter/register.html\" class=\"reg\">免费注册</a>";
								document.getElementById("user_name").innerHTML="<span id=\"b_login\" class=\"load\">请,登陆</span><a href=\"/UserCenter/register.html\" class=\"registered\">免费注册</a>";
								if(_exec){
									document.getElementById("main_user").innerHTML="<span id=\"hi\">Hi~您好!</span><span id=\"m_login\">请登录</span><span id=\"reg\">&lt;免费注册&gt;</span>";
									document.getElementById("photo_src").src="/ImgFiles/u_photo.gif";
								}
								loginEvent(_exec);
								var _url=window.location.href;
								if(/UserCenter/g.test(_url)){
									window.location.href="/index.html";
								}
							}
						}
					},"text");
				}
				document.getElementById("t_exit").onclick=function(){
					execExit();
				}
				document.getElementById("b_exit").onclick=function(){
					execExit();
				}
			}
		}
	});
}//检测用户登陆状态
function userLogin(_exec){
	var _user=jQuery("#user").val();
	var _pwd=jQuery("#pwd").val();
	var _code=jQuery("#code").val();
	jQuery.post("/url/LoginHandle",{"user":_user,"pwd":_pwd,"code":_code},function(data,textStatus){
		if(textStatus=="success"){
			var _cmd=parseInt(data);
			if(_cmd<0){
				alert("用户名或密码错误,请检查!");
			}else if(_cmd==0){
				alert("验证码错误!");
			}else{
				checkUserState(_exec);
			}
		}
	},"text");
}//点击登陆时验证用户信息
function loginCommon(_exec) {
    createLogin();//当用户点击登陆时,显示登陆组件;
    document.getElementById("close").onclick=function(){
    	var _body=document.getElementsByTagName("body")[0];
    	var _common=document.getElementById("common");
    	var _frame=document.getElementById("frame");
    	_body.removeChild(_common);
    	_body.removeChild(_frame);
    }
    document.onkeydown=function(event){
    	var event=event || window.event;
    	if(event.keyCode==13){
    		userLogin(_exec);
    		var _body=document.getElementsByTagName("body")[0];
    		_body.removeChild(document.getElementById("common"));
    		_body.removeChild(document.getElementById("frame"));
    	}
    }
    document.getElementById("load").onclick=function(){
    	userLogin(_exec);
    	var _body=document.getElementsByTagName("body")[0];
    	_body.removeChild(document.getElementById("common"));
    	_body.removeChild(document.getElementById("frame"));
    }
}//用户登陆的窗口中几个按钮操作
/**
 * 以上为创建登陆窗口的组件结束
 */
 function hiddenMenu(){
 	jQuery("#menu").mouseleave(function(){
 		document.getElementById("menu").style.display="none";
 		document.getElementById("container").style.display="none";
 	});
 	jQuery("#menu").mouseenter(function(){
 		document.getElementById("menu").style.display="block";
 		document.getElementById("container").style.display="block";
 	});
 }
 function showCategory(){
 	jQuery("#tag").mouseenter(function(){
 		document.getElementById("menu").style.display="block";
 	});
 	jQuery("#tag").mouseleave(function(){
 		document.getElementById("menu").style.display="none";
 	});
 }
 function searching(_obj,_value,_url){
 	_obj.onclick=function(){
 		var _key=window.encodeURIComponent(_value);
 		window.location.href=_url+"?k="+_key;
 	}
 }
 function loginEvent(_exec){
 	document.getElementById("t_login").onclick=function(){
 		loginCommon(_exec);
 	}
 	document.getElementById("b_login").onclick=function(){
 		loginCommon(_exec);
 	}
 	if(_exec){
 		document.getElementById("m_login").onclick=function(){
 			loginCommon(_exec);
 		}
 	}
 }
/**
 * 获取购物车产品数量
 */
 function obtainCartNum(){
 	ajaxRequest("post","/url/CartNumHandle",true,null,function(data){
 		document.getElementById("counter").innerHTML=(data!=""?data:"0");
 	});
 }
/**
 * 产品目录上的广告
 * @param _data
 */
 function categoryAds(_data) {
 	var _html="";
 	var _item=new Array();
 	sortData(_item,_data);
 	for(var n=0;n<_item.length;n++){
 		if(n>0){
 			_html += "<a href=\"" + _item[n][2] + "?n=" + _item[n][0] + "\" class=\"brand\"><img alt=\"\" src=\"" + _domain + "UploadFiles/Images" + _item[n][1].match(/(\/\w+)+\.((jpg)|(png)|(gif))/g)[0] + "\"/></a>";
 		}else{
 			_html += "<a href=\"" + _item[n][2] + "?n=" + _item[n][0] + "\" class=\"b_t\"><img alt=\"\" src=\"" + _domain + "UploadFiles/Images" + _item[n][1].match(/(\/\w+)+\.((jpg)|(png)|(gif))/g)[0] + "\"/></a>";
 		}
 	}
 	document.getElementById("comment").innerHTML=_html;
 }
/**
 * 读取产品分类一栏中的广告信息
 */
 function sortData(_item,_data){
 	var _min=new Array();
 	for(var i=0;i<_data.length;i++){
 		_item.push(_data[i].split("{:}"));
 	}
 	for(var h=0;h<_item.length;h++){
 		for(var v=h+1;v<_item.length;v++){
 			if(parseInt(_item[h][3])>parseInt(_item[v][3])){
 				_min=_item[v];
 				_item[v]=_item[h];
 				_item[h]=_min;
 			}
 		}
 	}
 }
/**
 * banner信息
 */
 function slider(data){
 	var _slider=new Slider(data,67,30);
 	_slider.createDom();
 	_slider.initCss();
 	var _timer=window.setTimeout(function(){_slider.autoRun();},2000);
 	document.getElementById("a_l").onclick=function(){
 		window.clearTimeout(_timer);
 		_slider.leftRun();
 		_timer=window.setTimeout(function(){_slider.autoRun();},2000);
 	}
 	document.getElementById("a_r").onclick=function(){
 		window.clearTimeout(_timer);
 		_slider.rightRun();
 		_timer=window.setTimeout(function(){_slider.autoRun();},2000);
 	}
 	var _points=document.getElementById("circle").getElementsByTagName("span");
 	for(var i=0;i<_points.length;i++) {
 		(function (n) {
 			_points[i].onclick = function () {
 				window.clearTimeout(_timer);
 				_slider.circleClick(n);
 				_timer=window.setTimeout(function(){_slider.autoRun();},2000);
 			}
 		})(i);
 	}
 }
/**
 * 显示滚动图下面的广告
 */
 function mainHot(_data){
 	if(document.getElementById("ad")) {
 		var _html = "";
 		var _item = new Array();
 		sortData(_item, _data);
 		for (var i = 0; i < _item.length; i++) {
 			if (i > 0) {
 				_html += "<a href=\"" + _item[i][2] + "\"><img alt=\"\" src=\"" + _domain + "UploadFiles/Images" + _item[i][1].match(/(\/\w+)+\.\w+/g)[0] + "\" /></a>";
 			} else {
 				_html += "<a href=\"" + _item[i][2] + "\" class=\"first\"><img alt=\"\" src=\"" + _domain + "UploadFiles/Images" + _item[i][1].match(/(\/\w+)+\.\w+/g)[0] + "\" /></a>";
 			}
 		}
 		document.getElementById("ad").innerHTML = _html;
 	}
 }
/**
 * 显示滚供图最右边的广告
 */
 function mainTop(_data){
 	if(document.getElementById("hot")) {
 		var _html = "";
 		var _item = new Array();
 		sortData(_item, _data);
 		for (var i = 0; i < _item.length; i++) {
 			if (i > 0) {
 				_html += "<a href=\"" + _item[i][2] + "\" class=\"mt\"><img alt=\"\" src=\"" + _domain + "UploadFiles/Images" + _item[i][1].match(/(\/\w+)+\.\w+/g)[0] + "\"/></a>";
 			} else {
 				_html += "<a href=\"" + _item[i][2] + "\"><img alt=\"\" src=\"" + _domain + "UploadFiles/Images" + _item[i][1].match(/(\/\w+)+\.\w+/g)[0] + "\"/></a>";
 			}
 		}
 		document.getElementById("hot").innerHTML = _html;
 	}
 }
/**
 * 显示列表中广告位内容
 */
 function contentAdvertise(_data){
 	if(document.getElementById("album0")) {
 		var _html = "";
 		var _item = new Array();
 		sortData(_item, _data);
 		for (var i = 0; i < _item.length; i += 5) {
 			document.getElementById("ad_l" + Math.floor(i / 4)).children[2].innerHTML = "<a href=\"" + _item[i][2] + "\" class=\"img\"><img alt=\"\" src=\"" + _domain + "UploadFiles/Images" + _item[i][1].match(/(\/\w+)+\.\w+/g)[0] + "\"/>";
 			_html += "<span class=\"ad_c\"><a href=\"" + _item[i + 1][2] + "\"><img alt=\"\" src=\"" + _domain + "UploadFiles/Images" + _item[i + 1][1].match(/(\/\w+)+\.\w+/g)[0] + "\"/></a></span>";
 			_html += "<span class=\"ad_r\">";
 			_html += "<a href=\"" + _item[i + 2][2] + "\" class=\"h\"><img alt=\"\" src=\"" + _domain + "UploadFiles/Images" + _item[i + 2][1].match(/(\/\w+)+\.\w+/g)[0] + "\"/></a>";
 			_html += "<a href=\"" + _item[i + 3][2] + "\" class=\"v\"><img alt=\"\" src=\"" + _domain + "UploadFiles/Images" + _item[i + 3][1].match(/(\/\w+)+\.\w+/g)[0] + "\"/></a>";
 			_html += "<a href=\"" + _item[i + 4][2] + "\" class=\"v\"><img alt=\"\" src=\"" + _domain + "UploadFiles/Images" + _item[i + 4][1].match(/(\/\w+)+\.\w+/g)[0] + "\"/></a>";
 			_html += "</span>";
 			document.getElementById("album" + Math.floor(i / 4)).innerHTML = _html;
 			_html = "";
 		}
 	}
 }
/**
 * 读取广告信息
 */
 function advertiseReader(cmd){
 	ajaxRequest("post","/url/AdvertiseReader",true,{"key":"home","condition":"a_position_place = '首页广告'"},function(_data){
 		if(/(\{\$\})$/g.test(_data)) {
 			var _list = _data.replace(/(\{\$\})$/g, "").split("{$}");
 			var _temp = null;
 			var _json = {"10": [], "11": [], "12": [], "13": [], "14": [],"15":[],"16":[],"17":[],"18":[],"19":[]};
 			for (var i = 0; i < _list.length; i++) {
 				_temp = _list[i].split("{:}");
 				_json[_temp[4]].push(_list[i]);
 			}
 			if(_json["10"].length>0){
 				categoryAds(_json["10"]);
 			}
 			if(cmd) {
 				if (_json["11"].length > 0) {
 					slider(_json[11]);
 				}
 				if (_json["12"].length > 0) {
 					mainHot(_json["12"]);
 				}
 				if (_json["13"].length > 0) {
 					mainTop(_json["13"]);
 				}
 				if (_json["14"].length > 0) {
 					contentAdvertise(_json["14"]);
 				}
 			}
 		}
 	});
 }
