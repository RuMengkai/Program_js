/**
 * Created by Evil on 2017/1/5.
 */
function Mine(_me){
    this.mine=document.getElementById(_me);
    this.timer=0;
    this.now=null;
    this.bullet=new Bullet();
    var _self=this;
    this.main=function(){
        this.mine.style.top=(this.mine.parentNode.clientHeight-this.mine.clientHeight)+"px";
        this.fire();
    }
    this.fire=function(){
        window.clearTimeout(_self.timer);
        _self.now=_self.bullet.createBullet();
        _self.now.style.left=_self.mine.offsetLeft+_self.mine.clientWidth/2-3.5+"px";
        _self.now.style.top=_self.mine.offsetTop-18+"px";
        _self.mine.parentNode.appendChild(_self.now);
        _self.bullet.bullets=document.getElementsByTagName("span");
        _self.bullet.stage=_self.mine.parentNode;
        _self.bullet.moveBullet();
        _self.timer=window.setTimeout(_self.fire,60);
    }
}