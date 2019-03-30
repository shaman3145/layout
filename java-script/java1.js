$(function(){
$('.meddle_column__exampels').slick({
    dots: true,
    infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	prevArrow: "<img src='images/arrowL.png' class='prev' alt='1'>",
    nextArrow: "<img src='images/arrowR.png' class='next' alt='2'>",
  	responsive: [
    {
      breakpoint: 1110,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
				


	$('#heder-container__menu-buttom_invisible').on('click', function(){
		$('.heder-menu_visible').animate(400).toggleClass('heder-menu_invisible');
		$('#heder-container__menu-buttom_invisible').fadeOut(0)
		$('#rollup-button').fadeIn(0)
	});
	$('#rollup-button').on('click', function(){
		$('.heder-menu_visible').toggleClass('heder-menu_invisible');
		$('#rollup-button').fadeOut(0)
		$('#heder-container__menu-buttom_invisible').fadeIn(0)
	});

	$('.number-phone').on('keydown', function(event){
		console.log(event.which)
		if ( event.keyCode != 8 && event.which  <  48 || event.which > 57 )
		{
			return false;
		}

	});
	const disableScroll = function(){
		$('html').on('wheel', function(){
		return false;
		});
	}

	const enableScroll = function(){
		$('html').off('wheel');
	}

	$('html, body').on('click',
		'.call, .right-infa_phone-heder, .top-column__person-data_button, .meddle_column__button, .general_button, .footer-button', 
		function(){
		$('input').val('')
		$('.number-phone').val('+7')
		$('.form-container').fadeIn({start: disableScroll, duration: 400})

	});
	
	$('.form-container__button').on('click', function(){
		$('input').val('')
		$('.number-phone').val('+7')
		$('.form-container').fadeOut({start: enableScroll, duration: 400})
	});

	$('.form-container').click(function(event){
		if(event.target == this){
			$(this).fadeOut({start: enableScroll, duration: 400})

		}
	});
});

