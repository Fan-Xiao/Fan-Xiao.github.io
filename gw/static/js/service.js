// 头部动画
var ele = null;
$(".nav-list a").on("mouseover",function(e){
    e = event || window.event;
    $(".nav .nav-check").css("left",(e.target.offsetLeft + 8)+"px");
});
$(".nav-list a").on("mouseout",function(e){
    e = event || window.event;
    $(".nav .nav-check").css("left","412px");
});
$(".header-contain-m .menu").on("touchend",function(e){
    e = event || window.event;
    e.stopPropagation();
    $(".header-contain-m .nav").css("height","284px");
});
$(".header-contain-m .nav").on("touchend",function(e){
    e = event || window.event;
    e.stopPropagation();
})
$("html").on("touchend",function(){
    $(".header-contain-m .nav").css("height","0");
});
