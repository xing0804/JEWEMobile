$(function () {
    var num1 = 0;
    $(".nav1").hammer().bind("click",function(){
        num1++;
        if(num1%2==1){
            $(this).find("span").html("关闭");
            $(".mask1").css({
                display:"block"
            })
        }else if(num1%2==0){
            $(this).find("span").html("品牌动态");
            $(".mask1").css({
                display:"none"
            })
        }
    });
    var num2 = 0;
    $(".nav2").hammer().bind("click",function(){
        num2++;
        if(num2%2==1){
            $(this).find("span").html("关闭");
            $(".mask2").css({
                display:"block"
            })
        }else if(num2%2==0){
            $(this).find("span").html("按分区浏览");
            $(".mask2").css({
                display:"none"
            })
        }
    });
    //返回顶部按钮显示
    var topbtn=document.querySelector(".top");

    window.onscroll=function(){
        var st = document.documentElement.scrollTop;
        if(st>300){
            topbtn.style.opacity=1;
        }else{
            topbtn.style.opacity=0;
        }

        //点击效果
        topbtn.onclick=function(){
            console.log("back");
            animate(document.documentElement, {
                scrollTop: 0
            }, 500);
        }
    };
    //点击加载更多
    $(".con-more").click(function(){
        $(".container").css({
            height:"18rem"
        });
        $(this).css({
            display:"none"
        })
    });

    var cons=document.querySelectorAll(".container");
    $(".a1").hammer().bind("tap",function(){
        num2++;
        $(".nav2").find("span").html("按分区浏览")
        $(".mask2").css({
            display:"none"
        });
        for(var i=0;i<cons.length;i++){
            cons[i].style.display="none"
        }
        $(".con1").css({
            display:"block"
        });
        $(".con-more").css({
            display:"block"
        });
    });
    $(".a2").hammer().bind("tap",function(){
        num2++;
        $(".nav2").find("span").html("按分区浏览")
        $(".mask2").css({
            display:"none"
        });
        
        for(var i=0;i<cons.length;i++){
            cons[i].style.display="none"
        }
        $(".con2").css({
            display:"block",
            height:"7rem"
        });
        $(".con-more").css({
            display:"none"
        });
    });
    $(".a3").hammer().bind("tap",function(){
        num2++;
        $(".nav2").find("span").html("按分区浏览")
        $(".mask2").css({
            display:"none"
        });
        
        for(var i=0;i<cons.length;i++){
            cons[i].style.display="none"
        }
        $(".con3").css({
            display:"block",
            height:"7rem"
        });
        $(".con-more").css({
            display:"none"
        });
    });
    $(".a4").hammer().bind("tap",function(){
        num2++;
        $(".nav2").find("span").html("按分区浏览")
        $(".mask2").css({
            display:"none"
        });
        
        for(var i=0;i<cons.length;i++){
            cons[i].style.display="none"
        }
        $(".con4").css({
            display:"block",
            height:"7rem"
        });
        $(".con-more").css({
            display:"none"
        });
    })
    
})