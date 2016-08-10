$(".timeline-item").hover(function () {
    $(".timeline-item").removeClass("active");
    $(this).toggleClass("active");
    $(this).prev(".timeline-item").toggleClass("close");
    $(this).next(".timeline-item").toggleClass("close");
});


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


//
// jQuery(function ($) {
//     function changeColor(selector, colors, time) {
//         /* Params:
//          * selector: string,
//          * colors: array of color strings,
//          * every: integer (in mili-seconds)
//          */
//         var curCol = 0,
//             timer = setInterval(function () {
//                 if (curCol === colors.length) curCol = 0;
//                 $(selector).css("color", colors[curCol]);
//                 curCol++;
//             }, time);
//     }
//     $(window).load(function () {
//         changeColor(".fa-heart", ["white", "red", "red", "red"], 300);
//     });
// });

$(document).ready(function () {
    $('div.hidden').fadeIn(3500).removeClass('hidden');
});
