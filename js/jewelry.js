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
            $(this).find("span").html("珠宝首饰");
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
    //查看更多
    $(".more").click(function () {
        $(".container").css({
            height: "43rem"
        });
        $(this).css({
            display: "none"
        })
    });
    //标签点击效果
    $(".label1 a").hammer().bind("tap", function () {
        $(".label1 a").each(function () {
            $(this).removeClass("checklabel")
        })
        $(this).addClass("checklabel");
    });
    $(".label2 a").hammer().bind("tap", function () {
        $(".label2 a").each(function () {
            $(this).removeClass("checklabel")
        })
        $(this).addClass("checklabel");
    });
    // console.log($(".label1 a")[0]);
    //全部
    $(".label1 .a0").hammer().bind("tap", function () {
        $(".con-item").css({
            display: "block"
        });
        $(".more").css({
            display: "block"
        });
        $(".container").css({
            height:"25.8rem"
        })

    })
    //一生一世
    $(".label1 .a1").hammer().bind("tap", function () {
        $(".con-item").css({
            display: "none"
        })
        // console.log($(".con-item").hasClass("lift"));
        if ($(".con-item").hasClass("life")) {
            $(".container").css({
                height: "13rem"
            });
            $(".more").css({
                display: "none"
            });
            $(".life").css({
                display: "block"
            });
            
        };

    });
    //几何系列
    $(".label1 .a2").hammer().bind("tap", function () {
        $(".con-item").css({
            display: "none"
        })
        if ($(".con-item").hasClass("geometry")) {
            $(".container").css({
                height: "17rem"
            });
            $(".more").css({
                display: "none"
            })
            $(".geometry").css({
                display: "block"
            })
        };
        

    });
    //字母系列
    $(".label1 .a3").hammer().bind("tap", function () {
        $(".con-item").css({
            display: "none"
        })
        if ($(".con-item").hasClass("letter")) {
            $(".container").css({
                height: "13rem"
            });
            $(".more").css({
                display: "none"
            })
            $(".letter").css({
                display: "block"
            })
        }

    });
    //全部
    $(".label2 .a0").hammer().bind("tap", function () {
        $(".con-item").css({
            display: "block"
        });
        $(".more").css({
            display: "block"
        });
        $(".container").css({
            height:"25.8rem"
        })

    })
    //戒指
    $(".label2 .a1").hammer().bind("tap", function () {
        $(".con-item").css({
            display: "none"
        })
        if ($(".con-item").hasClass("ring")) {
            $(".container").css({
                height: "9rem"
            });
            $(".more").css({
                display: "none"
            })
            $(".ring").css({
                display: "block"
            })
        }

    });
    //耳钉耳环
    $(".label2 .a2").hammer().bind("tap", function () {
        $(".con-item").css({
            display: "none"
        })
        if ($(".con-item").hasClass("earing")) {
            $(".container").css({
                height: "17rem"
            });
            $(".more").css({
                display: "none"
            })
            $(".earing").css({
                display: "block"
            })
        }

    });
    //项链/吊坠
    $(".label2 .a3").hammer().bind("tap", function () {
        $(".con-item").css({
            display: "none"
        })
        if (($(".con-item").hasClass("necklace")) && ($(".con-item").hasClass("life"))) {
            $(".container").css({
                height: "9rem"
            });
            $(".more").css({
                display: "none"
            })
            $(".necklace").css({
                display: "block"
            })
        }

    });
    //手镯/手链
    $(".label2 .a4").hammer().bind("tap", function () {
        $(".con-item").css({
            display: "none"
        })
        if ($(".con-item").hasClass("bracelet")) {
            $(".container").css({
                height: "9rem"
            });
            $(".more").css({
                display: "none"
            })
            $(".bracelet").css({
                display: "block"
            })
        }

    });


    $(".con-item").hammer().bind("tap",function(){
        window.location.replace("../product.html");
    })


})