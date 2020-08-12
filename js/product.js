$(function () {
    var num = 0;
    $(".nav").hammer().bind("click", function () {
        num++;
        if (num % 2 == 1) {
            $(this).find("span").html("关闭");
            $(".nav-mask").css({
                display: "block"
            })
        } else if (num % 2 == 0) {
            $(this).find("span").html("一生一世/耳钉");
            $(".nav-mask").css({
                display: "none"
            })
        }
    });
    //返回顶部按钮显示
    var topbtn = document.querySelector(".top");

    window.onscroll = function () {
        var st = document.documentElement.scrollTop;
        if (st > 700) {
            topbtn.style.opacity = 1;
        } else {
            topbtn.style.opacity = 0;
        }

        //点击效果
        topbtn.onclick = function () {
            console.log("back");
            animate(document.documentElement, {
                scrollTop: 0
            }, 1000);
        }
    };

    var num = 0;
    //信息点击出现
    $(".news-title").hammer().bind("tap", function () {
        if (num % 2 == 0) {
            $(".news-content").css({
                animation: "show2 1s 1 forwards"
            })
            $(this).next(".news-content").css({
                animation: "show 1s 1 forwards"
            })
            $(this).children(".show-btn").html("-");
            num++;
        } else if (num % 2 == 1) {
            $(".news-content").css({
                animation: "show2 1s 1 forwards"
            })
            $(this).children(".show-btn").html("+");
            num++;
        }
    });


    $(".con-item").hammer().bind("tap",function(){
        window.location.replace("../jewelry.html");
    })

})