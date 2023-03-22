var swiper = new Swiper(".mySwiperhero", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});


var swiper = new Swiper(".mySwiperfeature", {
  slidesPerView: 1,
  spaceBetween: 18,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: ".swiper-button-nextfeature",
    prevEl: ".swiper-button-prevfeature",
  },
});

var swiper = new Swiper(".mySwipernew", {
  slidesPerView: 1,
  spaceBetween: 18,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: ".swiper-button-nextnew",
    prevEl: ".swiper-button-prevnew",
  },
});

var swiper = new Swiper(".mySwiperupdate", {
  slidesPerView: 1,
  spaceBetween: 22,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 7,
    },
  },
  navigation: {
    nextEl: ".swiper-button-nextupdate",
    prevEl: ".swiper-button-prevupdate",
  },
});

var swiper = new Swiper(".mySwiperlike", {
  slidesPerView: 1,
  spaceBetween: 22,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 7,
    },
  },
  navigation: {
    nextEl: ".swiper-button-nextlike",
    prevEl: ".swiper-button-prevlike",
  },
});

var swiper = new Swiper(".mySwiperlike2", {
  slidesPerView: 1,
  spaceBetween: 22,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 7,
    },
  },
  navigation: {
    nextEl: ".swiper-button-nextlike2",
    prevEl: ".swiper-button-prevlike2",
  },
});