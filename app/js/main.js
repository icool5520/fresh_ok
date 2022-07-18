$(function () {
  const swiper = new Swiper(".hero", {
    // direction: "horizontal",
    effect: "fade",
    loop: true,
    loopedSlides: 3,
    // speed: 2000,
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

  $(".catalog__btn").on("click", function () {
    $(this).toggleClass("active");
    $(".catalog__list").toggleClass("active");
  });

  $(".catalog__link").on("click", function () {
    $(".catalog__btn").toggleClass("active");
    $(".catalog__list").toggleClass("active");

  });

  $(".catalog").mouseleave(function () {
    $(".catalog__list.active").removeClass("active");
    $(".catalog__btn.active").removeClass("active");

  });

    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');

    var config = {
      controls: {
        scope: "local",
      },
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
});
