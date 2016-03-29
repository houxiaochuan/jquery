$(function(){
	var $lis = $(".v_content_list li");
	var $nextBtn = $('.change_btn .next');
	var $prevBtn = $('.change_btn .prev');
	var $spans = $('.highlight_tip span');
	var $content = $('.v_content');
	var $contentWidth = $content.width();
    var page = 1;
	var pageAll = Math.ceil($lis.length/4);

	$nextBtn.click(function() {
        if(page == pageAll){
            $('.v_content_list').animate({
        		left: '0px'
        		},
        		'normal');
            page=1;
            $spans.eq(page-1).attr('class','current').siblings().removeClass('current');
        }else{
        	$('.v_content_list').animate({
        		left: '-='+$contentWidth
        		},
        		'normal');
           	page++;
           	$spans.eq(page-1).addClass("current").siblings().removeClass('current');
        };

	});

	// $prevBtn.click(function(event) {
	// 	/* Act on the event */
	// });
})