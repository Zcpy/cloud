$(function(){
    $(".position .content .content-head li").find("a").click(function(e){
        $(".position .content .content-head li a").removeClass("a-hover");
        $(this).addClass("a-hover");
    });
});