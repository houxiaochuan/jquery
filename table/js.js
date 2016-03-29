$(function(){
    //全选全不选
	$('.all').click(function() {
        $('.items').prop('checked', this.checked);
	});

    $('.items').on('change', function() {
        var isChecked = this.checked;
        var $checkboxs = $('.items');
        var len = $checkboxs.length;

        if(isChecked) {
            $checkboxs.filter(':checked').length === len
                && $('.all').prop('checked', true);
        } else {
            $('.all').prop('checked', false);
        }
    });

	//删除
	$('.oneDelete').click(function() {
        var index = $(this).index();
		$(this).parents('tr').remove();
	});

	//多选删除
    $('.mulDelete').click(function() {
    	$('.items:checkbox:checked').parents('tr').remove();
    });

    //编辑
    var index;

    $(".edit").click(function() {
        var $contentSource = $(this).parents('tr').find('td').slice(1,4);

        index = $(this).parents('tr').index();

        $("#mymodal").modal("show");
        for (var i = 0;i < $contentSource.length; i++) {
            $(".modal-body input").eq(i).val($contentSource.eq(i).text());
        };
    })

    $('#save').click(function() {
        var arr = [];

        $("#mymodal").modal("hide");
        for (var j = 0;j < 3;j++){
            var $content = $('.modal-body').find('input').eq(j).val();
            arr.push($content);
        }

        for (var i = 0; i < arr.length; i++) {
            $('tr').eq(index).find('td').slice(1, 4).eq(i).text(arr[i]);
        };
    });
})
