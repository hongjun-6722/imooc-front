window.addEventListener('scroll', function(){

    let t = $('body, html').scrollTop();   // 目前监听的是整个body的滚动条距离

    if(t>0){

       $('.part1').addClass('box-active')
       $(".sitBox").show();

   }else{

       $('.part1').removeClass('box-active')
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

//如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
new Swiper('.swiper-container')
var mySwiper = document.querySelector('.swiper-container').swiper
mySwiper.slideNext();



var list = new Vue({
    el: '.list',
    data: {
      message1: '免费课程',
      message2: '实战课程',
      message3: '金职位',
      message4: 'wiki',
      message5: '专栏',
      message6: '手记',
      message7: '下载APP',
      message8: '购物车',
      message9: '我的课程',
    }
})

var menuContent1 = new Vue({
    el: '.menuContent',
    data: {
      message1: '前沿/区块链/人工智能',
      message2: '前端',
      message3: '后端',
      message4: '运动',
    }
    
})

var pophide = new Vue({
    el: '.pophide',
    data: {
        a:{
          m0:'前沿技术',
          m1:'微服务',
          m2:'区块链',
          m3:'以太坊',
          m4:'机器学习',
          course1:'Spring Cloud Alibaba微服务从入门到进阶',
          course2:'Spring Cloud Alibaba微服务从入门到进阶',
          course3:'Spring Cloud Alibaba微服务从入门到进阶',
          course4:'Spring Cloud Alibaba微服务从入门到进阶',
        },
        b:{
            m0:'前端开发',
            m1:'微服务',
            m2:'区块链',
            m3:'以太坊',
            m4:'机器学习',
            course1:'Spring Cloud Alibaba微服务从入门到进阶',
            course2:'Spring Cloud Alibaba微服务从入门到进阶',
            course3:'Spring Cloud Alibaba微服务从入门到进阶',
            course4:'Spring Cloud Alibaba微服务从入门到进阶',
        },
        c:{
            m0:'后端开发',
            m1:'微服务',
            m2:'区块链',
            m3:'以太坊',
            m4:'机器学习',
            course1:'Spring Cloud Alibaba微服务从入门到进阶',
            course2:'Spring Cloud Alibaba微服务从入门到进阶',
            course3:'Spring Cloud Alibaba微服务从入门到进阶',
            course4:'Spring Cloud Alibaba微服务从入门到进阶',
        },
        d:{
            m0:'移动开发',
            m1:'微服务',
            m2:'区块链',
            m3:'以太坊',
            m4:'机器学习',
            course1:'Spring Cloud Alibaba微服务从入门到进阶',
            course2:'Spring Cloud Alibaba微服务从入门到进阶',
            course3:'Spring Cloud Alibaba微服务从入门到进阶',
            course4:'Spring Cloud Alibaba微服务从入门到进阶',
        },
    }
})

var menuContent2 = new Vue({
    el: '.part2a',
    data: {
      message1: 'Java工程师体系课',
      message2: '从0到胜任大厂Java岗位',
      message3: '后端',
      message4: '运动',
    }
    
})

var fix = new Vue({
    el: '.fix',
    data: {
      message1: '意见反馈',
      message2: '意见反馈',
      message3: '意见反馈',
      message4: '意见反馈',
    },
})

$(".a").hide();
$("#a").hover(
    function () {
        $(".a").show();
    }, function () {
        $(".a").hide();
    }
)
$("#b").hover(
    function () {
        $(".b").show();
    }, function () {
        $(".b").hide();
    }
)
$("#c").hover(
    function () {
        $(".c").show();
    }, function () {
        $(".c").hide();
    }
)
$("#d").hover(
    function () {
        $(".d").show();
    }, function () {
        $(".d").hide();
    }
)

$("#fixas").hide();
$("#fixa").hover(
    function () {
        $("#fixai").hide();
        $("#fixas").show();
    }, function () {
        $("#fixas").hide();
        $("#fixai").show();
    }
)

$("#fixbs").hide();
$("#fixb").hover(
    function () {
        $("#fixbi").hide();
        $("#fixbs").show();
    }, function () {
        $("#fixbs").hide();
        $("#fixbi").show();
    }
)

$("#fixcs").hide();
$("#fixc").hover(
    function () {
        $("#fixci").hide();
        $("#fixcs").show();
    }, function () {
        $("#fixcs").hide();
        $("#fixci").show();
    }
)

$("#fixds").hide();
$("#fixd").hover(
    function () {
        $("#fixdi").hide();
        $("#fixds").show();
    }, function () {
        $("#fixds").hide();
        $("#fixdi").show();
    }
)