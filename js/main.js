$(function() {

  $(document).ready(init);

  function init(){
    $('div.hidden').fadeIn(2000).removeClass('hidden');

    $(document).on('scroll', checkNavPos);

    // initial nav text color white
    $('.navLink').css('color','white');

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
      $('.navLink').css('color','rgb(37,49,99)');

    } else {
      $('#programHeader').css('background-color', 'transparent');
      $('.navLink').css('color','white');
    }
  }
});

/*https://blackrockdigital.github.io/startbootstrap-scrolling-nav/*/

/*text-decoration: underline;*/
