var n = 0;
var bannerx = 0;
var changex = 0;
var projectn = 0;
var productn = 0;
// 头部动画
$(".nav-list a").on("mouseover",function(e){
    e = event || window.event;
    $(".nav .nav-check").css("left",(e.target.offsetLeft + 8)+"px");
});
$(".nav-list a").on("mouseout",function(e){
    e = event || window.event;
    $(".nav .nav-check").css("left","84px");
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
// 大轮播
$(".key-list").on("click",function(e){
    e = event || window.event;
    $(".key-list.active").removeClass("active");
    if(e.target.className=="ball"){
        n = e.target.parentNode.dataset.num;
        $(e.target).parent().addClass("active");
    }else{
        n = e.target.dataset.num;
        $(e.target).addClass("active");  
    } 
    $(".banner-item").css("left",(-n*100)+"%");
});
$(".banner-contain").on("touchmove",function(e){
    e = event || window.event;
    changex = ((e.changedTouches[0].pageX - bannerx)/e.changedTouches[0].screenX)*50;
    $(".banner-item").css("left",(-n*100)+changex + "%");
})
// 自动轮播
var timer = setInterval(function(){
    n ++;
    if(n > 4){
        n = 0;
};
    bannermove();
},2000);
$(".banner-contain").on("mouseover",function(e){
    clearInterval(timer);
    e = event || window.event;
    // console.log(e.pageX);
});
$(".banner-contain").on("touchstart",function(e){
    e = event || window.event;
    $(".banner-item").css("transition","");
    bannerx = e.changedTouches[0].pageX;
    clearInterval(timer);
});
$(".banner-contain").on("mouseout",function(){
    clearInterval(timer);
    timer = setInterval(function(){
        n ++;
        if(n > 4){
            n = 0;
    };
        bannermove();
    },2000);
});
$(".banner-contain").on("touchend",function(){
    clearInterval(timer);
    if(changex > 10){
        n --;
        if(n < 0){
            n = 0;
        };
        changex = 0;
        bannermove();
    }else if(changex < -10){
        n ++;
        if(n > 4){
            n = 4;
        };
        changex = 0;
        bannermove();
    }else{
        changex = 0;
        bannermove();
    }
    $(".banner-item").css("transition","all 1s ease")
    timer = setInterval(function(){
        n ++;
        if(n > 4){
            n = 0;
    };
        bannermove();
    },2000);
});
function bannermove (){
    $(".key-list.active").removeClass("active");
    $(".key-list").eq(n).addClass("active");
    $(".banner-item").css("left",(-n*100)+"%");
}
// project 动画
$(".project-menu .project-menu-list").on("mouseover",function(e){
    e = event || window.event;
        $(".project-menu .project-check").css("left",(e.target.offsetLeft + e.target.offsetWidth/2)+"px");
    
});
$(".project-menu .project-menu-list").on("mouseout",function(e){
    e = event || window.event;
    $(".project-menu .project-check").css("left",$(".project-menu .project-menu-list.active")[0].offsetLeft+($(".project-menu .project-menu-list.active")[0].offsetWidth/2) + "px");
});
// project 轮播
function projectmove() {
    $(".project-menu .project-menu-list.active").removeClass("active");
    $(".project-menu .project-menu-list").eq(projectn).addClass("active");
    $(".project-show .project-show-item").css("left",(-projectn*100)+"%");
}
$(".project-menu .project-menu-list").on("click",function(e){
    e = event || window.event;
    projectn = e.target.dataset.index;
    $(".project-show .project-show-item").css("transition","all 1s ease");
    projectmove();
});
$(".project-show").on("touchstart",function(e){
    bannerx = e.changedTouches[0].pageX;
    $(".project-show .project-show-item").css("transition","")
})
$(".project-show").on("touchmove",function(e){
    e = event || window.event;
    changex = ((e.changedTouches[0].pageX - bannerx)/e.changedTouches[0].screenX)*50;
    $(".project-show .project-show-item").css("left",(-projectn*100)+changex + "%");
});
$(".project-show").on("touchend",function(){
    $(".project-show .project-show-item").css("transition","all 1s ease");
    if(changex > 10){
        projectn --;
        if(projectn < 0){
            projectn = 0;
        };
        changex = 0;
        projectmove()
    }else if(changex < -10){
        projectn ++;
        if(projectn > 3){
            projectn = 3;
        };
        changex = 0;
        projectmove()
    }else{
        changex = 0;
        projectmove()
    }
    $(".project-menu .project-check").css("left",$(".project-menu .project-menu-list.active")[0].offsetLeft+($(".project-menu .project-menu-list.active")[0].offsetWidth/2) + "px");
   
});
// product 动画
$(".product-menu .product-list").on("mouseover",function(e){
    e = event || window.event;
    if(e.target.className == "product-list"){
        $(e.target).css("background-image","url(./static/img/index-" + e.target.dataset.url + "-active.png)");
        $(".product-menu .product-check").css("left",(e.target.offsetLeft + e.target.offsetWidth/2)+"px");
    }else if(e.target.className == "text" && e.target.parentNode.className !== "product-list active"){
        $(e.target.parentNode).css("background-image","url(./static/img/index-" + e.target.parentNode.dataset.url + "-active.png)");
        $(".product-menu .product-check").css("left",(e.target.parentNode.offsetLeft + e.target.parentNode.offsetWidth/2)+"px");
    }
});
$(".product-menu .product-list").on("mouseout",function(e){
    e = event || window.event;
    if(e.target.className == "product-list"){
        $(e.target).css("background-image","url(./static/img/index-" + e.target.dataset.url + ".png)");
    }else if(e.target.className == "text" && e.target.parentNode.className !== "product-list active"){
        $(e.target.parentNode).css("background-image","url(./static/img/index-" + e.target.parentNode.dataset.url + ".png)");
    }
    $(".product-menu .product-check").css("left",$(".product-menu .product-list.active")[0].offsetLeft+($(".product-menu .product-list.active")[0].offsetWidth/2) + "px");
});
// product 轮播
function productmove(){
    $(".product-menu .product-list.active").removeClass("active");
    $(".product-menu .product-list").eq(productn).addClass("active");
    $(".product-show .product-show-item").css("left",(-productn*100)+"%");
}
$(".product-menu .product-list").on("click",function(e){
    e = event || window.event;
    if(e.target.className == "product-list" && e.target.parentNode.className !== "product-list active"){
        productn = e.target.dataset.index;
        $(".product-menu .product-list.active").css("background-image","url(./static/img/index-" + $(".product-menu .product-list.active")[0].dataset.url + ".png)");
    }else if(e.target.className == "text" && e.target.parentNode.className !== "product-list active"){
        productn = e.target.parentNode.dataset.index;
        $(".product-menu .product-list.active").css("background-image","url(./static/img/index-" + $(".product-menu .product-list.active")[0].dataset.url + ".png)");
    }
    $(".product-show .product-show-item").css("transition","all 1s ease");
        productmove();
    $(".product-show").css("height",$(".product-show-item .product-show-list")[productn].offsetHeight);
});
$(".product-show").on("touchstart",function(e){
    bannerx = e.changedTouches[0].pageX;
    $(".product-show .product-show-item").css("transition","")
})
$(".product-show").on("touchmove",function(e){
    e = event || window.event;
    changex = ((e.changedTouches[0].pageX - bannerx)/e.changedTouches[0].screenX)*50;
    $(".product-show .product-show-item").css("left",(-productn*100)+changex + "%");
});
$(".product-show").on("touchend",function(){
    $(".product-show .product-show-item").css("transition","all 1s ease");
    if(changex > 10){
        productn --;
        if(productn < 0){
            productn = 0;
        };
        changex = 0;
        productmove();
        $(".product-show").css("height","470px");
        $(".product-show .golook").eq(productn).css("display","block");
    }else if(changex < -10){
        productn ++;
        if(productn > 4){
            productn = 4;
        };
        changex = 0;
        productmove();
        $(".product-show").css("height","470px");
        $(".product-show .golook").eq(productn).css("display","block");
    }else{
        changex = 0;
        productmove()
    }
    $(".product-menu").css("left",(-productn*100)+changex + "%");
    $(".product-menu .product-check").css("left",$(".product-menu .product-list.active")[0].offsetLeft+($(".product-menu .product-list.active")[0].offsetWidth/2) + "px");
});
// 查看
$(".product-show .golook .looking").on("click",function(){
    $(".product-show").css("height",$(".product-show-item .product-show-list")[productn].offsetHeight + 100 + "px");
    $(".product-show .golook").eq(productn).css("display","none");
});
$(".product-show .outlook .looked").on("click",function(){
    $(".product-show").css("height","470px");
    $(".product-show .golook").eq(productn).css("display","block");
});
