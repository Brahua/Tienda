$(document).ready(function(){

	// Efecto del menu principal
	$('header .menu a').each(function(index, el){

		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		}, 2000 + (index * 500));
	
	});

	// Efecto del titulo
	// if( $(window).width() > 768 ){
		$('header .titulo').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .titulo').animate({
			opacity: 1,
			marginTop: '-25px'
		}, 2000);
	// }

	// Scroll del menu principal
	var acercaDe 	= $('#acerca-de').offset().top,
		articulos	= $('#articulos').offset().top,
		galeria		= $('#galeria').offset().top,
		ubicacion	= $('#ubicacion').offset().top;

	if ( $(window).width() > 768 ) {
		$('#btn-acerca-de').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: acercaDe - 250
			}, 1000);
		});
	} else {
		$('#btn-acerca-de').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: acercaDe
			}, 1000);
		});
	}

	$('#btn-articulos').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: articulos
		}, 2000);
	});

	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria
		}, 3000);
	});

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion
		}, 4000);
	});


	if (annyang) {
		console.log('funciona');
		// Let's define our first command. First the text we expect, and then the function it should call
		var commands = {
			'acerca': function () {
				if ($(window).width() > 768) {
					$('html, body').animate({
						scrollTop: acercaDe - 250
					}, 1000);
				} else {
					$('html, body').animate({
						scrollTop: acercaDe
					}, 1000);
				}
			}, 
			'articulos': function(){
				$('html, body').animate({
					scrollTop: articulos
				}, 2000);
			},
			'galería': function(){
				$('html, body').animate({
					scrollTop: galeria
				}, 3000);
			},
			'ubicación': function(){
				$('html, body').animate({
					scrollTop: ubicacion
				}, 4000);
			}
		};

		annyang.setLanguage('es-PE');
		// Add our commands to annyang
		annyang.addCommands(commands);

		// Start listening. You can call this here, or attach this call to an event, button, etc.
		annyang.start();
	}

});