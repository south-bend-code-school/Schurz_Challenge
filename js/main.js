$(function() {

  $(document).ready(init);

  function init(){
    $('div.hidden').fadeIn(2000).removeClass('hidden');

    $(document).on('scroll', checkNavPos);

    $(window).scroll(function(){
    	$('.container p').each(function(){
        	var scrollTop     = $(window).scrollTop(),
            	elementOffset = $(this).offset().top,
           		distance      = (elementOffset - scrollTop),
    			    windowHeight  = $(window).height(),
    			    breakPoint    = windowHeight*0.9;

    			if(distance > breakPoint) {
    				$(this).addClass("more-padding");
    			}  if(distance < breakPoint) {
    				$(this).removeClass("more-padding");
    			}
    	});
    });

  }


  function checkNavPos(){
    var scrollPos = $('title').position();

    if(scrollPos.top > 50){
      $('#programHeader').css('background-color', 'white');
    } else {
      $('#programHeader').css('background-color', 'transparent');
    }
  }





});
