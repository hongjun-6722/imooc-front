import './imooc.less'
import './index.css'

    window.addEventListener('scroll', function(){
        let t = $('body, html').scrollTop();   // 目前监听的是整个body的滚动条距离
        if(t>0){
            $('.top-navigation').addClass('box-active')
            $(".sitBox").show();
        }else{
            $('.top-navigation').removeClass('box-active')
            $(".sitBox").hide();
        }
    })
        
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        pagination: {
            el: '.swiper-pagination',
            bulletActiveClass: 'my-bullet-active',
        },
        navigation: {
        prevEl: '.swiper-button-next',
        nextEl: '.swiper-button-prev',
        },
        loop : true,
    })
    mySwiper.slideNext();

    $(".popbox-inner").hide();
    $(".menu-popbox").hide();
    $(".menu-item").hover(function(e){
        let item = e.currentTarget.attributes["data-menu"].value
        $(".menu-popbox").show();
        $("[data-popbox="+item+"]").show();
    },function(){
        $(".menu-popbox").hide();
        $(".popbox-inner").hide();
    });
    $(".popbox-inner").hover(function(e){
        let item = e.currentTarget.attributes["data-popbox"].value
        $(".menu-popbox").show();
        $("[data-popbox="+item+"]").show();
    },function(){
        $(".menu-popbox").hide();
        $(".menu-popbox").hide();
    });
    $(".sidebar-span").hide();
    $(".sidebar-el").hover(function(e){
        console.log(
            e.currentTarget.attributes["data-el"].value
        )
        let a = e.currentTarget.attributes["data-el"].value
        $("[data-el="+a+"] i").hide();
        $("[data-el="+a+"] span").show();
    },function(e){
        let a = e.currentTarget.attributes["data-el"].value
        $("[data-el="+a+"] i").show();
        $("[data-el="+a+"] span").hide();
    });

