/**
 * 平台
 * @param {[element]} _stage [获取到平台元素]
 */
function Stage(_stage) {
	var _self=this;
	this.stage=document.getElementById(_stage);
	//获取屏幕的宽
	this.width=document.documentElement.clientWidth||document.body.clientWidth;
	//获取屏幕的高度
	this.height=document.documentElement.clientHeight||document.body.clientHeight;
	this.timer=0;
	this.top=0;
	this.mine=new Mine("me");
	this.main=function(){
		this.moveStage();
		this.mine.main();
		this.eventHandle();
		var _enemy=new Enemy();
		_enemy.container=this.stage;
		_enemy.moveEnemy();
		var _judge=new Judge();
		_judge.container=this.stage;
		_judge.judge();
	}
	//背景移动
	this.moveStage=function(){
		window.clearTimeout(_self.timer);
		_self.stage.style.backgroundPosition="0px "+(_self.top+=10)+"px";
		if (_self.top>_self.height) {
			_self.top=0;
		} 
		_self.timer=window.setTimeout(_self.moveStage,60);
	}

	//鼠标控制飞机动
	this.eventHandle=function(){
		this.stage.onmousemove=function(e){
			e=e||window.event;
			if(e.clientX-(_self.width-_self.stage.clientWidth)/2-_self.mine.mine.clientWidth/2>0 && e.clientX-(_self.width-_self.stage.clientWidth)/2<_self.stage.clientWidth-_self.mine.mine.clientWidth/2) {
				_self.mine.mine.style.left = e.clientX - (_self.width - _self.stage.clientWidth) / 2 -_self.mine.mine.clientWidth/2+ "px";
			}
		}
	}
}