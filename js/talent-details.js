$(".option-2 a").on("click",function () {
    if( $(this).find("span").html()=="已收藏"){
        $(this).find("img").attr("src","../img/shoucang02.png");
        $(this).find("span").html("收藏");
    }else{
        $(this).find("img").attr("src","../img/shoucang01.png");
        $(this).find("span").html("已收藏");
    }
});