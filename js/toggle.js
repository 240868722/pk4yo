
$(function(){
    //手机端导航按钮
    var tag = 1;/*关闭*/
    $(".menu").click(function(){
        if(tag == 1){
            $(".head_right_list").slideDown();
            $(".banner h2").css("display","none");
            $(".banner img").css("display","none");
            tag = 0
        } else if(tag == 0){
            $(".head_right_list").slideUp();
            $(".banner h2").fadeIn(1000);
            $(".banner img").fadeIn(1000)
            tag = 1
        }
    });


    //导航栏
    $(".head_right_list li").mouseenter(function(){
        $(this).children("ul").stop().show()

    });


    $(".head_right_list li").mouseleave(function(){
        $(this).children("ul").stop().hide()
    })
});
    //banner中间图片显示
    setTimeout(function(){
        $(".banner img").fadeIn(1000)
    },800);

    setTimeout(function(){
        $(".banner h2").fadeIn(1000)
    },800);
    setTimeout(function(){
        $(".main_introduce p").fadeIn(1000)
    },800)
    //手机端导航栏显示bug修复
    $(window).resize(function(){
        if($(this).width()>640){
            $(".head_right_list").show();
        };


})
