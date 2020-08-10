$(function () {
    var num = 0;
    $(".nav").hammer().bind("click",function(){
        num++;
        if(num%2==1){
            $(this).find("span").html("关闭");
            $(".nav-mask").css({
                display:"block"
            })
        }else if(num%2==0){
            $(this).find("span").html("珠宝首饰");
            $(".nav-mask").css({
                display:"none"
            })
        }
    });
    //返回顶部按钮显示
    var topbtn=document.querySelector(".top");

    window.onscroll=function(){
        var st = document.documentElement.scrollTop;
        if(st>700){
            topbtn.style.opacity=1;
        }else{
            topbtn.style.opacity=0;
        }

        //点击效果
        topbtn.onclick=function(){
            console.log("back");
            animate(document.documentElement, {
                scrollTop: 0
            }, 1000);
        }
    };
    //查看更多
    $(".more").click(function(){
        $(".container").css({
            height:"43rem"
        });
        $(this).css({
            display:"none"
        })
    });
    //标签点击效果
    $(".label1 a").hammer().bind("tap",function(){
        $(".label1 a").each(function(){
            $(this).removeClass("checklabel")
        })
        $(this).addClass("checklabel");
    });
    $(".label2 a").hammer().bind("tap",function(){
        $(".label2 a").each(function(){
            $(this).removeClass("checklabel")
        })
        $(this).addClass("checklabel");
    });
    // console.log($(".label1 a")[0]);
    // $(".label1 a")[0].hammer().bind("tap",function(){
    //     $(".con-item").css({
    //         display:block
    //     })
    // })
})