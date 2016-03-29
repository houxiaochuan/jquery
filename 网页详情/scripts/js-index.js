$(function(){
	//首页中间广告
	var currentIndex;
	var timer;
	$('#jnImageroll div a').hover(function(){
    	clearInterval(timer);
    	currentIndex = $(this).index();
        $('#jnImageroll img').eq(currentIndex).show().siblings().hide();
    },function(){
    	auto();
    })

    function auto(){
        timer = setInterval(function (){
      	if(currentIndex < 3){
      		currentIndex++;
      	}else{
      		currentIndex = 0;
      	};
        $('#jnImageroll a img').eq(currentIndex).show().siblings().hide();
      },2000);
    }
    auto();

	//横向滚动
	$('#jnBrandTab ul li').click(function() {
		var $index = $(this).index();
		var $liWidth = $('#jnBrandList ul li').width();
		var x = 10;

		$('#jnBrandList').animate({
			left: '-'+(($liWidth+x)*4*$index)+'px'
		}, 1000);
	});


})
