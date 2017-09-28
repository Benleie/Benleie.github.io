
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
	},0)
}*/
function addTh(){
	let $th_1 = $('<th id="number"/>'),
		$th_2 = $('<th>name</th>'),
		$th_3 = $('<th>recent</th>'),
		$th_4 = $('<th>alltime</th>');
	let $tr = $('<tr>')
	$tr.append($th_1).append($th_2).append($th_3).append($th_4)
	$('#board').append($tr)
}
function get25(data){
	$.each(data,function(i, item){
    	// console.log(this)
    	let info = '<tr><td>'+(i+1) + '</td><td>' + '<a href=https://www.freecodecamp.com/'+item.username+' target=_blank>' +  '<span>'+item.username+'</span>' + '</a></td><td>'+item.recent+'</td><td>'+item.alltime+'</td></tr>';
    	
    	// if((i % 2)) console.log($(info))
    		// $(info).addClass('even')

    	$('#board').append(info);
    	if( i === 24) return false;
    })
}
function oddEven(){
	$.each($('tr'),function(i,item){
		if((item.firstChild.innerHTML % 2))
			$(item).addClass('even')
		else
			$(item).addClass('odd')
	})
}
function recent(){
	$('tr').remove();
	addTh();
	$.ajaxSettings.async = false;
	var jqxhr = $.getJSON( "http://fcctop100.herokuapp.com/api/fccusers/top/recent", get25).done(function(){
		console.log('recent done!')
	});
	$.ajaxSettings.async = true;
	
	oddEven();
}
function allTime(){
	$('tr').remove();
	addTh();
	$.ajaxSettings.async = false;
	var jqxhr = $.getJSON( "http://fcctop100.herokuapp.com/api/fccusers/top/alltime", get25).done(function(){
		console.log('allTime done!')
	});
	$.ajaxSettings.async = true;
	oddEven();
}
//页面加载时默认为近期排名
recent();
$('.alltime').bind('click',function(){
	$('span#recentp').addClass('no');
	$('span#alltimep').removeClass('no')
	allTime();
})

$('.recent').bind('click',function(){
	$('span#alltimep').addClass('no');
	$('span#recentp').removeClass('no')
	recent();
})






