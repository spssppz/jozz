
$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.header-nav').toggleClass('active');
		$('.burger').toggleClass('active');
		$('body').toggleClass('fixed');
	});
});