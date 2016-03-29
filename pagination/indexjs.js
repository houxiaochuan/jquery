page({
	$container: $('.box'),
	per_page: 10,
	page: 9,
	total: 106
});
function page(options){
	var total = options.total;
	var per_page = options.per_page;
	var page = options.page;
	var totalPage=Math.ceil(total/per_page);
	var i;
	var firstPage="<li><a href='javascript:;'><span aria-hidden='true'>&laquo;</span></a></li>",
		// content2 = '<li><a href="#">i</a></li>',
		lastPage = '<li><a href="#" ><span aria-hidden="true">&raquo;</span></a></li>';
    if(page < 3){
    	 i = 1;
    }else if(page > totalPage - 2){
	    i = totalPage - 4;
		if(page === total){
            lastPage = '<li>' +
			      	       '<a href="#" aria-label="Next">' +
			        	       '<span aria-hidden="false">&raquo;</span>' +
			      		   '</a>' +
			    	   '</li>';
		}
    }
    else {
         i = page - 2;
    }
    var content = '';
    $('.box ul').children().remove();
   // if(){
	    $('.box ul').append(firstPage);
	    for(var j=0;j<5;j++){
	    	content += '<li><a href="javascript:;">' + i + '</a></li>';
	    	i++;
	    }
		$('.box ul').append(content);
	    $('.box ul').append(lastPage);
   /* }else{
        for(var j=0;j<5;j++){
        	$contains.$('li')[j].html('i');
        	i++;
        }
    }
    }*/
}