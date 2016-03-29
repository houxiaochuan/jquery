$(function(){

    $('#inputName,#inputNumber').blur(function() {
    	var $tips;

    	$(this).parent().find('.tips').remove();
    	if ($(this).val() === '') {
    		if($(this).is("#inputName")){
                $tips = '姓名不能为空';
    		}else{
                $tips = '学号不能为空';
    		}
            $(this).parent().append('<span class="tips">'+$tips+'</span>');
    	}
    });
})