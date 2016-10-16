$(function(){
	$('.section-circle').on('dblclick', function(){
		$(this).html('');
		$(tihs).siblings().children('input').remove();
		$('<input type="text" class="section-circle-input" placeholder="Enter">').appendTo(this);
	});
	// $(document).on('change', '.section-circle-input', function(){
			
	// });	

	$(document).on('focus', '.section-circle-input', function() {
		var for_add = $(this).parent().addClass('circle-selected').siblings().removeClass('circle-selected');
		$('circle-selected').focus();
	}).on('blur', '.section-circle-input', function() {
		console.log('hey');
		var val = $('.section-circle-input').val();
		if(val) {
			console.log(val);
			$('.section-circle-input').remove();
			$('.circle-selected').html(val);
	 	}	
	});
	
});

