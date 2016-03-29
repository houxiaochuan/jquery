$(function(){
    //nav
    $('.nav li a').hover(function() {
    	$('.fore').show();
    },function() {
        $('.fore').hide();
    });

    //轮播图
    var index = 0;
    var timer;

    $('.imageRoll-as a').hover(function() {
        clearInterval(timer);
    	index = $(this).index();
    	$('#imageRoll>a img').eq(index).show().siblings().hide();
        $(this).css('background-color','blue').siblings().css('background-color','#444');
    },auto
    );
    function auto(){
        timer = setInterval(function(){
            if(index < $('#imageRoll>a img').length-1){
                index++;
            }else{
                index = 0;
            }
            $('#imageRoll>a img').eq(index).show().siblings().hide();
        },4000);
    }
    auto();
})
