
$(".ns-item").hover(function(){
    $(this).find(".text .top").css("color","#1874dc");
},function () {
    $(this).find(".text .top").css("color","#333");
});
for(var n=0;n<4;n++){
    (function(n){
        $(".nav-center").find("a").eq(n+1).hover(function(){
            $(this).addClass("index-nav-hover");
            $(".nav-second").eq(n).show();
        },function () {
            $(this).removeClass("index-nav-hover");
            $(".nav-second").eq(n).hover(function () {
                $(this).show();
                $(".nav-center").find("a").eq(n+1).addClass("index-nav-hover");
            },function () {
                $(this).hide();
                $(".nav-center").find("a").eq(n+1).removeClass("index-nav-hover");
            })
            $(".nav-second").hide();
        });
    })(n);
}
