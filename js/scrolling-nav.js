//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar").css('background-color','white');
        $('.page-scroll').css('color','rgb(37,49,99)');
        /*var css='.page-scroll:hover{color:white;}';
        style=document.createElement('style');
        style.appendChild(document.createTextNode(css));
        $('.')*/
        $(".nonheadlink").mouseenter(function(){
          $(this).css("color","white");
        });
        $(".nonheadlink").mouseleave(function(){
          $(this).css("color","rgb(37,49,99)");
        });
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar").css('background-color','transparent');
        $(".navbar").css('border-color','transparent');
        $(".page-scroll").css('color','white');
        $(".nonheadlink").mouseenter(function(){
          $(this).css("color","white");
        });
        $(".nonheadlink").mouseleave(function(){
          $(this).css("color","white");
        });
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-20
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $(".navbar").css('background-color','transparent');
    $(".navbar").css('border-color','transparent');
    $(".page-scroll").css('color','white');
});
