$(window).load(function(){
    setTimeout(function() {
      $('.loader').fadeOut();
    }, 2000);
});



$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2100);
        return false;
      }
    }
  });
});


var movie1= "<img id='moviea' src='https://imgur.com/uLezNcX.gif' title='source: imgur.com' id='action' />"
var movie2= "<img id='movieb' src='https://imgur.com/I3mBEQM.gif' title='source: imgur.com' id='action' />"
var movie3= "<img id='moviec' src='https://imgur.com/8ObB1O1.gif' title='source: imgur.com' id='action' />"
var movie4= "<img id='movied' src='https://imgur.com/ylAuB8g.gif' title='source: imgur.com' id='action' />"



$(document).ready(function() {
	$('#media').append(movie1);
	$('#media').append(movie2);
	$('#media').append(movie3);
	$('#media').append(movie4);
	$('#moviea').hide();
	$('#movieb').hide();
	$('#moviec').hide();
	$('#movied').hide();

	setTimeout(function() {
    	$('#moviea').show();
  	}, 0);
  	setTimeout(function() {
    	$('#moviea').hide();
    }, 10000);
    setTimeout(function() {
    	$('#movieb').show();
    }, 10001);
    setTimeout(function() {
    	$('#movieb').hide();
    }, 20000);
    setTimeout(function() {
    	$('#moviec').show();
    }, 20001);
    setTimeout(function() {
    	$('#moviec').hide();
   	}, 30000);
    setTimeout(function() {
    	$('#movied').show();
    }, 30001);
    setTimeout(function() {
    	$('#movied').hide();
   	}, 40000);

	setInterval(function() {
		setTimeout(function() {
    		$('#moviea').show();
  		}, 0);
  		setTimeout(function() {
    		$('#moviea').hide();
    	}, 10000);
    	setTimeout(function() {
    		$('#movieb').show();
    	}, 10001);
    	setTimeout(function() {
    		$('#movieb').hide();
    	}, 20000);
    	setTimeout(function() {
    		$('#moviec').show();
    	}, 20001);
    	setTimeout(function() {
    		$('#moviec').hide();
   		}, 30000);
    	setTimeout(function() {
    		$('#movied').show();
    	}, 30001);
    	setTimeout(function() {
    		$('#movied').hide();
   		}, 40000);
    }, 40000);

});