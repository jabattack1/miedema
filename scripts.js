// $(window).load(function(){
//     setTimeout(function() {
//       $('.loader').fadeOut();
//     }, 2000);
// });

var movie1= "<iframe width='1000' height='700' src='https://www.youtube.com/embed/EKeTpxznWe8?autoplay=1&&mute=1&controls=0&loop=1&showinfo=0&playlist=EKeTpxznWe8' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
// var movie2= "<img id='movieb' src='https://i.imgur.com/J6sjDIU.gif' />"
// var movie3= "<img id='moviec' src='https://i.imgur.com/Yy5iWrE.gif' />"
// var movie4= "<img id='movied' src='https://i.imgur.com/Ix3pFXW.gif' />"



$(document).ready(function() {
	$('#media').append(movie1);
	$('#moviea').hide();
	// $('#media').append(movie2);
 //   	$('#movieb').hide();
 //   	$('#media').append(movie3);
 //   	$('#moviec').hide();
 //   	$('#media').append(movie4);
 //    $('#movied').hide();

	// setTimeout(function() {
 //    	$('#moviea').show();
 //  	}, 0);
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