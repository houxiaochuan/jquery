$(function () {
    $(".tip").hover(function(e) {
        var $div = $('<div id="addTips">这是添加的提示</div>');
        $('body').append($div);
        var x=20;
        $div.css({
        	'left': (e.pageX+x) + "px",
        	'top': (e.pageY+x) + "px"
        }).show();
    }, function() {
        $('#addTips').remove();
    });

     $("img").hover(function(e) {
        var $div = $("<div id='tooltip'><img src='"+ this.href +"' alt='产品预览图'/><\/div>");
        $('body').append($div);
        var x=20;
        $('#tooltip').css({
        	'left': (e.pageX+x) + "px",
        	'top': (e.pageY+x) + "px"
        }).show();
    }, function() {
        //$('#picTips').remove();
    });
})