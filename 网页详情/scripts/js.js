$(function(){

	//搜索文本框文字
	$('#inputSearch').focus(function() {
        $(this).attr({
        	value: ''
        }).blur(function() {
        $(this).attr({
        	value: '请输入商品名称'
        })
	    })
    });

	//修改皮肤样式
    $('#skin li').click(function() {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('#cssfile').attr({
            href: 'styles/skin/'+this.id+'.css'
        });
    })

	//图片放大镜效果
	$('.jqzoom').jqzoom({
		zoomType: 'standard',
		zoomWidth: 340,
		zoomHeight: 340,
		position:'right'
    });

	//顶部导航
	$('#nav ul >li').hover(function() {
		$(this).find('.jnNav').show();
	}, function() {
		$(this).find('.jnNav').hide();
	});

	//产品属性
	$('.tab_menu ul li').click(function() {
		var index = $(this).index();

		$(this).addClass('selected').siblings().removeClass('selected');
		$('.tab .tab_box div').eq(index).show().siblings().hide();
	});

	//小图片切换大图
	  $('.imgList li img').click(function() {
	    $('.jqzoomWrap img :first').replaceWith($(this));
    });

    //改变图片颜色
    $('.color_change ul li img').click(function() {
    	$('.color_change strong').text($(this).attr('alt'));

    	var index = $(this).index;
    	var $replacePic = $('imgList li a img').eq(index*3);

    	$('.jqzoomWrap img :first').replaceWith($replacePic);

    	var srcImg = $(this).attr('src');
    	var i = srcImg.lastIndexOf('.');
    	var end = srcImg.substring(i);
    	var start = srcImg.substring(0,i);
    	var srcImgBig = start + '_one_small'+end;
        var newImg = start.replace('images/pro_img/','');

    	$('#bigImg').attr('src',srcImgBig);
    	$('.imgList li').hide();
    	$('.imgList').find('.imgList_'+newImg).show();
    });

    //改变尺寸
     $('.pro_size ul li').click(function() {
     	$(this).addClass('selected').siblings().removeClass();
     	var $this = $(this);
     	$('.pro_size strong').html($this.text());
     });

     //总价
     $('#num_sort').change(function() {
     	var onePrice = $('.tbDetailPrice strong').text();
     	var num = $(this).val();
     	var price = num*onePrice;
     	$('.pro_price strong').html(price);
     });

    //评价
    $('.pro_rating ul li a').click(function() {
    	alert('您给此商品的评分是：' + $(this).text() + '分');
    });

   //放入购物车
   $('#cart').click(function() {
   	    var text = '您选择的商品是：' + $('#jnDetails h4').html() +
   	                '  尺寸是：' + $('.pro_size strong').text() +
   	                '  颜色是: ' + $('.color_change strong').text() +
   	                '  总价是: ' + $('.pro_price strong').text()
   	    alert(text);
   });

})
