$(function(){
	// RESPONSIVE SETUP
	var vw = $(window).width();
	var vh = $(window).height();
	var vw_resize;
	var vh_resize;
	var circle_selected = false;
	$(window).on('resize load', function(){
		// set viewport dimensions
		// vw(viewport width) && vh(viewport height)
		var vw = $(window).width();
		var vh = $(window).height();
		vw_resize = $(window).width();
		vh_resize = $(window).height();
		var past_height;
		var past_width;
		// console.log(vh);
		// console.log(vw);
		// RESPONSIVE SETUP ON RESIZE
		// white ribbon
		
		if(vh < 800) {
			vh = 800;
			past_height = true;
			$('body').removeClass('body-class-hidden');
		} else {
			past_height = false;
			$('body').addClass('body-class-hidden');
		}
		if(vw < 620) {
			vw = 620;
			past_width = true;
			$('body').removeClass('body-class-hidden');	
		} else {
			past_width = false;
			$('body').addClass('body-class-hidden');
		}
		if(past_width && past_height) {
			$('.block-alert').removeClass('hidden');
		} else {
			$('.block-alert').addClass('hidden');
		}
		$('.white-ribbon').css({
			'height': vh/12,
			'width': vw,
			'margin-top':(vh/2)-(vh/11)
		});
		// cirlce ration setup for hero frame and image
		var frame_ratio = ((vh/2) + (vw/4))/2;
		console.log(frame_ratio);
		// hero frame
		$('.hero-frame').css({
			'height': frame_ratio,
			'width': frame_ratio,
			'margin-top':(vh/2)-(vh/4),
			'margin-left':(vw/2) - frame_ratio/2
		});
		// hero image
		$('.hero-image').css({
			// 'height': frame_ratio,
			'width': frame_ratio
		});
		// hero title
		$('.hero-title').css({
			'margin-top':(vh/2)-(vh/4) - (vh/10),
			'margin-left':(vw/2) - ($('.hero-title').width()/2)
		});
		if(vh > 800) { 
			// next section container
			$('.next-section-container').css({
				'height': vh/8,
				'width': vw
			});
			// next section
			$('.next-section').css({
				'height': vh/8,
				'width': vw/4
			});
			// section circle
			var circle_ratio = (($('.next-section').width()/4) + ($('.next-section').height()/1.5))/2;
			if(circle_selected == false) {
			$('.section-circle').css({
				'height': circle_ratio,
				'width': circle_ratio,
				'margin-top': ((vh/8)/2) - (((vh/8)/1.5)/2),
				'margin-left': $('.next-section').width()/2 - (circle_ratio/2)
				// 'margin-left': ($('.next-section').width()/2)-($('.next-section').width()/4)
			});
			$('.section-circle').removeClass('hidden');
			} else {
				$('.selected-circle').css({
					'width': vw
				});
			}
		} else {
			$('.section-circle').addClass('hidden');
			// next section container
			$('.next-section-container').css({
				'height': vh,
				'width': vw/12,
				// 'display': 'inline-block'
			});
		}

	var colors = ['#d7dff4', '#d1efd0', '#f4f4d7', '#f4d7f4'];
	var options = $('.next-section-container').children();
	var count = 0;
	for(var i = options.length; i > 0; i = i - 1) {
		console.log(options[count]);
		$(options[count]).append('<input class="oppo" type="hidden" value="'+i+'">');
		count++;
	}
		$('.section-circle').on('click', function(){
		circle_selected = true;
		$(this).addClass('selected-circle').siblings().removeClass('selected-circle');
		var parent = $(this).parent();
		var aunt_uncles = $(parent).siblings('.next-section');
		var cousins = $(aunt_uncles).children('.section-circle');
		var val = $('.selected-circle').siblings('.selected-circle-input').val(); 
		var oppo_val = $('.selected-circle').siblings('.oppo').val();
		var starting_width = $(this).width();
		console.log(oppo_val);
		$(this).animate({
			'border-radius':0
		}, function() {
			console.log((vw/4)*val);
			$(cousins).fadeOut(500);
			$(this).css({'position':'fixed'});
    		$(this).animate({
    			'width':(vw/4)*oppo_val - 110
    		}, function() {
				$(this).animate({
					'margin-left':0 - ((vw_resize/4)*val) - (4*val),
					'width': $(window).width()
				}, function(){
					$(this).animate({
						'bottom':0
					});
					$('body').animate({
						'backgroundColor': colors[val]
					}, 500, function(){
						$('.hero-title').fadeOut();
					});
					setTimeout(function(){
					
					var top_right_circle_size = (($(window).width())/16 + ($(window).height())/16)/2;
						$('.hero-frame').stop(1000).animate({
							'width': top_right_circle_size,
							'height': top_right_circle_size,
							'margin-top': 20,
							'margin-left': 20
						}, 500);
						$('.hero-image').stop(1000).animate({
							'width': top_right_circle_size,
							'top': -15
						}, 500);
					},1000);
				});
  			});
		});
	});
	});

});