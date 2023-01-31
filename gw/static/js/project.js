// 头部动画
var ele = null;
$(".nav-list a").on("mouseover", function (e) {
    e = event || window.event;
    $(".nav .nav-check").css("left", (e.target.offsetLeft + 8) + "px");
});
$(".nav-list a").on("mouseout", function (e) {
    e = event || window.event;
    $(".nav .nav-check").css("left", "194px");
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
// title 动画
// $(".project-menu .project-menu-list").on("mouseover",function(e){
//     for (var e of $(e.target.parentNode).children()){
//         if(e.className.indexOf("active") != -1){
//             ele = e;
//         }
//     }
//     e = event || window.event;
//     $(e.target.parentNode).children().eq(4).css("left",(e.target.offsetLeft + 47)+"px");
// });
// $(".project-menu .project-menu-list").on("mouseout",function(e){
//     e = event || window.event;
//     $(e.target.parentNode).children().eq(4).css("left",(ele.offsetLeft + 47)+"px");
// });
$(".project-menu .project-menu-list").on("mouseover", function (e) {
    e = event || window.event; 
    for (var i of $(e.target.parentNode).children()) {
        if (i.className.indexOf("active") != -1) {
            ele = i;
        }
    }
    $(e.target.parentNode).children().eq(4).css("left", (e.target.offsetLeft + e.target.offsetWidth / 2) + "px");

});
$(".project-menu .project-menu-list").on("mouseout", function (e) {
    e = event || window.event;
    $(e.target.parentNode).children().eq(4).css("left", ele.offsetLeft + (ele.offsetWidth / 2) + "px");
});
// 锚点动画
$(".title .project-menu .project-menu-list").on("click",function(e){
    e = event || window.event;
    console.log(e.target.dataset.index);
    if(e.target.dataset.index == 0){
        $("html").animate({
            scrollTop: $("#home")[0].offsetTop
        },1000);
    }
    if(e.target.dataset.index == 1){
        $("html").animate({
            scrollTop: $("#work")[0].offsetTop
        },1000);
    }
    if(e.target.dataset.index == 2){
        $("html").animate({
            scrollTop: $("#food")[0].offsetTop
        },1000);
    }
    if(e.target.dataset.index == 3){
        $("html").animate({
            scrollTop: $("#more")[0].offsetTop
        },1000);
    }
})