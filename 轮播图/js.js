
$(function () {
  	var $num = $('.num span');
  	var $pic = $('.box');
  	var timer = null;
    var index = 0;
    var current=0;

    function auto(){
    	timer = setInterval(function () {
	    	current++;
	    	if(current >= $num.length){
	    		current = 0;
	    	}
	        $pic.animate({top: -313*current}, 200);
        }, 2000);
    };

    auto();

  	$num.hover(function () {
  		clearInterval(timer);
        var index = $(this).index();

  		$pic.animate({top: -313*index}, 200);

        current = index;
    },auto);
});

