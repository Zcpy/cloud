$(".negotiable").on("change",function () {
    if($(".negotiable").is(":checked")){
        $(".icon").css("background-image","url(../img/gongzimianyi02.png)");
    }else{
        $(".icon").css("background-image","url(../img/gongzimianyi01.png)");
    }
});