// $(window).load(function(){
//     setTimeout(function() {
//       $('.loader').fadeOut();
//     }, 2000);
// });

var movie1= "<img id='moviea' src='https://i.imgur.com/uLezNcX.gif' />"
// var movie2= "<img id='movieb' src='https://media.giphy.com/media/5nmNO5Fn9mTVkoBm8F/giphy.gif' />"
// var movie3= "<img id='moviec' src='https://media.giphy.com/media/9DvczI5xVK8pVsce5B/giphy.gif' />"
// var movie4= "<img id='movied' src='https://media.giphy.com/media/YlyOEhIGKvjXwh76bB/giphy.gif' />"



$(document).ready(function() {
	$('#media').append(movie1);
	$('#moviea').hide();
	// $('#media').append(movie2);
 //   	$('#movieb').hide();
 //   	$('#media').append(movie3);
 //   	$('#moviec').hide();
 //   	$('#media').append(movie4);
 //    $('#movied').hide();

	setTimeout(function() {
    	$('#moviea').show();
  	}, 0);
 //  	setTimeout(function() {
 //    	$('#moviea').hide();
 //    }, 10000);
 //    setTimeout(function() {
 //    	$('#movieb').show();
 //    }, 10001);
 //    setTimeout(function() {
 //    	$('#movieb').hide();
 //    }, 20000);
 //    setTimeout(function() {
 //    	$('#moviec').show();
 //    }, 20001);
 //    setTimeout(function() {
 //    	$('#moviec').hide();
 //   	}, 30000);
 //    setTimeout(function() {
 //    	$('#movied').show();
 //    }, 30001);
 //    setTimeout(function() {
 //    	$('#movied').hide();
 //   	}, 40000);

	// setInterval(function() {
	// 	setTimeout(function() {
 //    		$('#moviea').show();
 //  		}, 0);
 //  		setTimeout(function() {
 //    		$('#moviea').hide();
 //    	}, 10000);
 //    	setTimeout(function() {
 //    		$('#movieb').show();
 //    	}, 10001);
 //    	setTimeout(function() {
 //    		$('#movieb').hide();
 //    	}, 20000);
 //    	setTimeout(function() {
 //    		$('#moviec').show();
 //    	}, 20001);
 //    	setTimeout(function() {
 //    		$('#moviec').hide();
 //   		}, 30000);
 //    	setTimeout(function() {
 //    		$('#movied').show();
 //    	}, 30001);
 //    	setTimeout(function() {
 //    		$('#movied').hide();
 //   		}, 40000);
 //    }, 40000);

});



$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});