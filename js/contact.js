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
            $(this).find("span").html("联系我们");
            $(".nav-mask").css({
                display:"none"
            })
        }
    });
    //返回顶部按钮显示
    var topbtn=document.querySelector(".top");

    window.onscroll=function(){
        var st = document.documentElement.scrollTop;
        if(st>400){
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
    //地图缩放
    var zoomleval=15;
    $(".enlarge").hammer().bind("tap",function(){
        zoomleval++;
        console.log(zoomleval);
    })
    $(".narrow").hammer().bind("tap",function(){
        zoomleval--;
        console.log(zoomleval);
    })
    //地图显示
    var map = map = new AMap.Map('map', {
        resizeEnable: true,
        viewMode: '3D',
        zoom: zoomleval, //设置地图显示的缩放级别
        center: [112.447763,38.015111] //设置地图中心点坐标112.45358231249665, 38.02132026276655
    });
    // 创建一个 Marker 实例：（标记点）
    var marker = new AMap.Marker({
        position: new AMap.LngLat(112.447763,38.015111), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        offset: new AMap.Pixel(-16, -45),
        title: "中北大学"
    });

    // 将创建的点标记添加到已有的地图实例：
    map.add(marker);

    //内容
    marker.content = '<div class="info-title">这里是中北大学<br>欢迎广大学子来到中北大学</div>'
    marker.on('mouseover', markerOver);
    //图标移入事件 
    function markerOver(e) {
        infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
    }
})