$(function(){

    var contents = ["#top","#concept","#menu","#view","#reserve"];
    var btn = ["#top-btn","#con-btn","#menu-btn","#view-btn","#res-btn"];

    //btnEvent
    function btnEvent(object, num){
        var speed = 800;
        $('html,body').animate({scrollTop: $(object).offset().top - num},speed);
    }
    $(btn[0]).click(function() {  
        btnEvent(contents[0], 0);     
    });
    $(btn[1]).click(function() {   
        btnEvent(contents[1], 160);  
    });
    $(btn[2]).click(function() {
        btnEvent(contents[2], 100);  
    });
    $(btn[3]).click(function() {
        btnEvent(contents[3], 0);       
    });
    $(btn[4]).click(function() { 
        btnEvent(contents[4], 160);      
    });

    //menu-slider
    $('.slider').slick({
        autoplay: false,
        speed: 1000,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
    });
    $('.slider-txt').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1500,
        slidesToShow: 1,
        asNavFor: '.slider',
        vertical: true,
        verticalSwiping: true,
        dots: true,
    });

    //scrollEvent
    $(window).scroll(function (){
        var scroll = $(window).scrollTop();
        var target = $(contents[1]).offset().top;
        var docHeight = $(document).innerHeight();
        var windowHeight = $(window).innerHeight();
        var pageBottom = docHeight - windowHeight;   

        $('.fadein,.section-title').each(function(){
            var targetElement = $(this).offset().top;
            if (scroll > targetElement - windowHeight +100){
                $(this).css('opacity','1');
                $(this).css('transform','translate(0,0)');
            }
        });

    });
});