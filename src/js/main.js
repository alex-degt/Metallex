$(document).ready(function () {
	AOS.init();

	$(window).scroll(function () {
		var height = $(window).scrollTop();
		if (height > 100) {
			$("#nav").addClass("nav--fixed");
		} else {
			$("#nav").removeClass("nav--fixed");
		}
	});

	// Mobile NAV visible on click
	$("#nav-toggle").on("click", function () {
		$(this).toggleClass("nav-toggle--active");
		$("#nav__menu").toggleClass("nav__menu--visible");
		$("#nav-toggle").toggleClass("nav-toggle--visible");
		$("body").toggleClass("body--fixed");
	});

	$(".nav__menu-link").on("click", function () {
		$("#nav__menu").removeClass("nav__menu--visible");
		$("#nav-toggle").removeClass("nav-toggle--visible");
		$("#nav-toggle").removeClass("nav-toggle--active");
		$("body").removeClass("body--fixed");
	});

	baguetteBox.run(".gallery-container");

	$(".partners__carousel").slick({
		autoplay: true,
		infinite: true,
		autoplaySpeed: 1000,
		arrows: false,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
		],
	});
});
