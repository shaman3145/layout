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
		$('html, body').on('wheel', function(){
		return false;
		});
	}

	const enableScroll = function(){
		$('html, body').off('wheel');
	}

	$('html').on('click',
		'.call, .right-infa_phone-heder, .top-column__person-data_button, .meddle_column__button, .general_button, .footer-button', 
		function(){
		$('input').val('')
		$('.number-phone').val('+7')
		$('.form-container').fadeIn(400, disableScroll)
		$('.make_order').animate({
			width: '300px',
			height: '350px'
		},400);

	});
	
	$('.form-container__button').on('click', function(){
		$('input').val('')
		$('.number-phone').val('+7')
		$('.form-container').fadeOut(400, enableScroll)
		$('.make_order').animate({
			width: '0',
		},400);
	});

	$('.form-container').click(function(event){
		if(event.target == this){
			$(this).fadeOut(400, enableScroll)
			$('.make_order').animate({
			width: '0',

			},400);
		}
	});

	 
});

