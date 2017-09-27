
/*function evenOdd(){
	setTimeout(function(){
		$.each($('tr'),function(i,item){
			// if(i === 0) continue;
			if((item.firstChild.innerHTML % 2))
				$(item).addClass('even')
			else
				$(item).addClass('odd')
		})
		console.log('I DO DID!')
	},2)
}*/
function recent(){
	$('tr').remove();
	$.ajaxSettings.async = false;
	var jqxhr = $.getJSON( "http://fcctop100.herokuapp.com/api/fccusers/top/recent", function(data) {
		$.each(data,function(i, item){
	    	// console.log(this)
	    	let info = '<tr><td>'+(i+1) + '</td><td>' + '<a href=https://www.freecodecamp.com/'+item.username+' target=_blank>' +  '<span>'+item.username+'</span>' + '</a></td><td>'+item.recent+'</td><td>'+item.alltime+'</td></tr>';
	    	$('#board').append(info);
	    	// if(i % 2 ) $(info).addClass('even')
	    	if( i === 24) return false;
	    })
	})
	.done(function(){
		console.log('recent done!')
	});
	$.ajaxSettings.async = true;
	$.each($('tr'),function(i,item){
		if((item.firstChild.innerHTML % 2))
			$(item).addClass('even')
		else
			$(item).addClass('odd')
	})
}
function allTime(){
	$('tr').remove();
	$.ajaxSettings.async = false;
	var jqxhr = $.getJSON( "http://fcctop100.herokuapp.com/api/fccusers/top/alltime", 
		function(data) {
			$.each(data,function(i, item){
		    	// console.log(this)
		    	let info = '<tr><td>'+(i+1) + '</td><td>' + '<a href=https://www.freecodecamp.com/'+item.username+' target=_blank>' +  '<span>'+item.username+'</span>' + '</a></td><td>'+item.recent+'</td><td>'+item.alltime+'</td></tr>';
		    	$('#board').append(info);
		    	// if(i % 2 ) $(info).addClass('even')
		    	if( i === 24) return false;
		    })
	})
	.done(function(){
		console.log('allTime done!')
	});

	$.ajaxSettings.async = true;
	$.each($('tr'),function(i,item){
		if((item.firstChild.innerHTML % 2))
			$(item).addClass('even')
		else
			$(item).addClass('odd')
	})
}
//页面加载时默认为近期排名
recent();
$('.alltime').bind('click',function(){
	console.log('alltime is clicked!')
	allTime();
})

$('.recent').bind('click',function(){
	console.log('recent is clicked!')
	recent();
})






