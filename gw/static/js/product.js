// 头部动画
var ele = null;
$(".nav-list a").on("mouseover",function(e){
    e = event || window.event;
    $(".nav .nav-check").css("left",(e.target.offsetLeft + 8)+"px");
});
$(".nav-list a").on("mouseout",function(e){
    e = event || window.event;
    $(".nav .nav-check").css("left","302px");
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
// $(".product-menu .product-menu-list").on("mouseover",function(e){
//     for (var e of $(e.target.parentNode).children()){
//         if(e.className.indexOf("active") != -1){
//             ele = e;
//         }
//     }
//     e = event || window.event;
//     $(e.target.parentNode).children().eq(5).css("left",(e.target.offsetLeft + 47)+"px");
// });
// $(".product-menu .product-menu-list").on("mouseout",function(e){
//     e = event || window.event;
//     $(e.target.parentNode).children().eq(5).css("left",(ele.offsetLeft + 47)+"px");
// });
$(".product-menu .product-menu-list").on("mouseover", function (e) {
    e = event || window.event; 
    for (var i of $(e.target.parentNode).children()) {
        if (i.className.indexOf("active") != -1) {
            ele = i;
        }
    }
    $(e.target.parentNode).children().eq(5).css("left", (e.target.offsetLeft + e.target.offsetWidth / 2) + "px");

});
$(".product-menu .product-menu-list").on("mouseout", function (e) {
    e = event || window.event;
    $(e.target.parentNode).children().eq(5).css("left", ele.offsetLeft + (ele.offsetWidth / 2) + "px");
});
// 锚点动画
$(".title .product-menu .product-menu-list").on("click",function(e){
    e = event || window.event;
    console.log(e.target.dataset.index);
    if(e.target.dataset.index == 0){
        $("html").animate({
            scrollTop: $("#bed")[0].offsetTop
        },1000);
    }
    if(e.target.dataset.index == 1){
        $("html").animate({
            scrollTop: $("#sofa")[0].offsetTop
        },1000);
    }
    if(e.target.dataset.index == 2){
        $("html").animate({
            scrollTop: $("#table")[0].offsetTop
        },1000);
    }
    if(e.target.dataset.index == 3){
        $("html").animate({
            scrollTop: $("#closet")[0].offsetTop
        },1000);
    }
    if(e.target.dataset.index == 4){
        $("html").animate({
            scrollTop: $("#light")[0].offsetTop
        },1000);
    }
})