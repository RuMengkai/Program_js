// 获取滚动条的高度
function getScrollTop()
{
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop)
    {
        scrollTop=document.documentElement.scrollTop;
    }
    else if(document.body)
    {
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}
function expand(){
    var _small=document.getElementById("small");
    var _big=document.getElementById("big");
    var _step=parseInt((_small.currentStyle||window.getComputedStyle(_small,null))["left"].replace("px",""));
    _small.onmousemove=function(e){
        var scrollY=getScrollTop();
        var e=e||window.event;
        var _span = _small.children[1];
        var _left=e.clientX -_step - _span.clientWidth/2;
        var _top=e.clientY -_step - _span.clientHeight/2;
        var m_t=this.clientHeight-_span.clientHeight-scrollY;
        var m_l=this.clientWidth-_span.clientWidth;
        _span.style.left = (_left<=0?0:(_left>=m_l?m_l:_left)) + "px";
        _span.style.top = (_top<=0?0:(_top>=m_t?m_t:_top))+ scrollY + "px";
        _span.style.display = "block";
        _big.style.display = "block";
        _left=e.clientX-_step-parseInt(_span.clientWidth/2);
        _top=e.clientY-_step-parseInt(_span.clientHeight/2);
        _big.children[0].style.left=-_left*2+"px";
        _big.children[0].style.top=-_top*2+"px";
    }
}
window.onload=function(){
    expand();
}