$(document).ready(function(){

	$(window).scroll(function(){
		var ancho = $(window).width();

		if (ancho > 768) {
			var scroll = $(window).scrollTop();

			$('header .titulo').css({
				'transform': 'translate(0px,' + scroll / 2 + '%)'
			});

			$('.acerca-de article').css({
				'transform': 'translate(0px, -' + scroll / 4 + '%)'
			});
		}
	});

	$(window).resize(function(){
		var ancho = $(window).width();
		if(ancho < 768) {
			$('.acerca-de article').css({
				'transform': 'translate(0px, 0px)'
			});
		}
	});

});