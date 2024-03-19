var lastScroll = 0;
$(window).scroll(function (e) {
  const st = $(this).scrollTop();
  if (st > 95) {
    if (st > lastScroll) {
      $(".header").addClass("hide");
      if ($(".header .mobile-menu").hasClass("open")) {
        $(".header").removeClass("hide");
      }
    } else {
      $(".header").removeClass("hide");
    }
  }
  lastScroll = st;
});

$(".header .gnb-item").hover(
  function () {
    if ($(this).children().find(".sub-item").length) {
      $(".header").addClass("on");
      $(this).addClass("on");
      $(this).children(".sub-list").addClass("on");
    }
  },
  function () {
    $(".header").removeClass("on");
    $(this).removeClass("on");
    $(this).children(".sub-list").removeClass("on");
    $(".header .sub-item:first-child").addClass("active").siblings().removeClass("active");
  }
);

$(".header .sub-item").hover(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

$(".lang-list li").click(function () {
  if ($(this).find("button").attr("disabled", true)) {
    $(this).siblings().find("button").removeAttr("disabled");
  }
  // english button
  // if ($(this).find("button").val() === "eng") {
  //   window.location.href = "https://www.woowahan.com/en";
  // } else {
  //   window.location.href = "https://www.woowahan.com";
  // }
});
$(".btn-open").click(function () {
  $(".mobile-menu").toggleClass("open");
  $("body").addClass("overflow");
});
$(".btn-close").click(function () {
  $(".mobile-menu").toggleClass("open");
  $("body").removeClass("overflow");
});
$(".footer .btn-relate").click(function () {
  $(this).parent().toggleClass("active");
});

const mainSlide = new Swiper(".sc-visual .swiper", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
const peopleSlide = new Swiper(".sc-card .swiper", {
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  allowTouchMove: true,
  grabCursor: true,
  spaceBetween: 16,
  slidesPerView: "auto",
});
$(".sc-card .swiper .swiper-slide").hover(
  function () {
    peopleSlide.autoplay.stop();
  },
  function () {
    peopleSlide.autoplay.start();
  }
);

const vid1 = document.querySelector("#vid1");
$(".btn-play")
  .find(".pause")
  .click(function () {
    vid1.pause();
    $(this).toggleClass("hidden").siblings().removeClass("hidden");
  });
$(".btn-play")
  .find(".play")
  .click(function () {
    $(this).toggleClass("hidden").siblings().removeClass("hidden");
    vid1.currentTime = 0;
    vid1.play();
  });
$(".mobile-item").click(function () {
  $(this).toggleClass("on");
});
$(".footer .btn-select").click(function () {
  $(this).parent().toggleClass("act");
});
