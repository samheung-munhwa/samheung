$(function(){
    function gnbSlide(){   
        $(this).find('.gnb-nav-sub').stop().slideToggle().toggleClass('on');
    }
    
    $('.gnb-nav-pc li').hover(gnbSlide); 
    $('.gnb-nav-mob li').click(gnbSlide);
    
    
    //스크롤 할 경우 scroll 함수 실행
    window.onscroll = function () {
        scroll()
    };

    function scroll() {
                
        //스크롤 이벤트, 50px을 기준으로
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            $(".header").addClass("is-scroll");
        } else {
            $(".header").removeClass("is-scroll");
        }
    }
    
    //모바일 메뉴 버튼 애니메이션
    $(".mob_menu_btn").click(function () {
        $(this).toggleClass('active');
        $(this).find(".menu_top, .menu_mid, .menu_bottom, .other_bar").toggleClass('active');
    });
    
    $(".mob_menu_btn").click(function () {
        $(".gnb-nav-mob").stop().slideToggle("1000");
    });
//documnet ready funtion
});