$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
        speed: 800,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        on: {
            slideChange: function(swiper) {
              $('.swiper-slide-active .tit, .swiper-slide-active p span').removeClass('is-active');
            },
            slideChangeTransitionEnd: function(swiper) {
                $('.swiper-slide-active .tit').addClass('is-active');
                
                setTimeout(function(){ 
                    $('.swiper-slide-active p span').eq(0).addClass('is-active');
                }, 600);
                setTimeout(function(){ 
                    $('.swiper-slide-active p span').eq(1).addClass('is-active');
                }, 700);
                setTimeout(function(){ 
                    $('.swiper-slide-active p span').eq(2).addClass('is-active');
                }, 800); 
            }
          }
    });
//documnet ready funtion
});