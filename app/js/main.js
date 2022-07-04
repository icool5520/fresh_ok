$(function(){
  const swiper = new Swiper(".promotions", {
    direction: "horizontal",
    loop: true,
    loopedSlides: 3,
    speed: 2000,
    autoHeight: true,
    // autoplay: {
    //   delay: 6000,
    //   disableOnInteraction: true,
    // },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
	});

  $(".catalog__btn").on("click", function() {
    $(this).toggleClass("active");
    $(".catalog__list").toggleClass("active");
	});

	$(".catalog__link").on("click", function() {
    $('.catalog__btn').toggleClass("active");
    $(".catalog__list").toggleClass("active");
	});

	$(".catalog__list").mouseleave(function () {
    $(".catalog__list.active").removeClass("active");
	});

  var mixer = mixitup(".top-product__content");
})
