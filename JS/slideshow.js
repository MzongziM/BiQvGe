var slideTime=1000;//滚动时间
var finishTime=2500;//动画完成时间
var moveDistance=695;//每次移动距离
var timer;

var slideshow=document.getElementById("slideshow");
var displayNumber=document.getElementsByClassName("displayImg").length;
window.onload=function(){
	//default move model
	setInterval(function(){
		loopSlide(displayNumber);
		moveImg(slideshow,moveDistance,slideTime);
	},finishTime);
}

// 移动轮播图的方法(向left方向移动distance距离，花费time时间毫秒单位)
function moveImg(target, distance, time) {
	var each = parseInt(distance / time * 30);//每30ms的间隔移动距离
	var normalLeft=getCurrentStyle(target);
	var endLeft=normalLeft-distance;
	timer = setInterval(function() {
		if (normalLeft <= endLeft) {
			target.style.left=endLeft+"px";
			clearInterval(timer);
		} else {
			normalLeft -= each;
			target.style.left = normalLeft + "px";
		}
	}, 30);
};
//set target Position
function setTargetPosition(target){
	target.style.left="0px";
}
//返回元素left样式数值
function getCurrentStyle(target){
	return parseInt(getComputedStyle(target).left);
}
//检测轮播进度，及时返回首页
function loopSlide(displayNumebr){
	var left=getCurrentStyle(slideshow);
	var endLeft=(displayNumebr-1)*moveDistance*-1;
	if(left==endLeft){
		setTargetPosition(slideshow);
		console.log("回归");
	}else{
		return;
	}
}