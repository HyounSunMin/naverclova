$(document).ready(function(){

    //스크롤 레이아웃

    let gnb = $('.gnb > ul > li');

    gnb.click(function(){
        n = $(this).index();
        console.log(n);
        $('html, body').stop().animate({scrollTop:$('main > section').eq(n).offset().top}, 500);
    });


    //배너 슬라이드
    // function moveleft(){
    //     $('#slide > ul').animate({'left':'-1920px'}, 700, function(){
    //         $('#slide > ul > li:first-child').insertAfter('#slide > ul > li:last-child');
    //         $('#slide > ul').css('left','0px');
    //     });
    // }
    // let Time = setInterval(moveleft, 3000);

    var swiper = new Swiper(".main_slide", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
      });

      
      // 제품 슬라이드

      var swiper = new Swiper(".pro_slide", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
      });
   
});