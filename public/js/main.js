document.getElementById('notifications').addEventListener('click', () => {
  document.querySelector('.overlayNo').classList.toggle('hidden')
})

document.querySelector('.overlayNo').addEventListener('click', () => {
  document.querySelector('.overlayNo').classList.toggle('hidden')
})

document.getElementById('user').addEventListener('click', () => {
  document.querySelector('.overlayUs').classList.toggle('hidden')
})

document.querySelector('.overlayUs').addEventListener('click', () => {
  document.querySelector('.overlayUs').classList.toggle('hidden')
})

var swiper = new Swiper(".mySwiperfeature", {
  slidesPerView: 2.2,
  spaceBetween: 18,
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    }
  },
  navigation: {
    nextEl: ".swiper-button-nextfeature",
    prevEl: ".swiper-button-prevfeature",
  },
   // If we need pagination
  pagination: {
    el: '.swiper-pagination-feature',
  },
});

var swiper = new Swiper(".mySwipernew", {
  slidesPerView: 2.2,
  spaceBetween: 18,
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    }
  },
  navigation: {
    nextEl: ".swiper-button-nextnew",
    prevEl: ".swiper-button-prevnew",
  },
   // If we need pagination
  pagination: {
    el: '.swiper-pagination-new',
  },
});

var swiper = new Swiper(".mySwiperupdate", {
  slidesPerView: 2.2,
  spaceBetween: 22,
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1280: {
      slidesPerView: 7,
    },
  },
  navigation: {
    nextEl: ".swiper-button-nextupdate",
    prevEl: ".swiper-button-prevupdate",
  },
   // If we need pagination
  pagination: {
    el: '.swiper-pagination-latest',
  },
});

var swiper = new Swiper(".mySwiperlike", {
  slidesPerView: 2.2,
  spaceBetween: 22,
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1280: {
      slidesPerView: 7,
    },
  },
  navigation: {
    nextEl: ".swiper-button-nextlike",
    prevEl: ".swiper-button-prevlike",
  },
   // If we need pagination
  pagination: {
    el: '.swiper-pagination-like',
  },
});

var swiper = new Swiper(".mySwiperBinge", {
  slidesPerView: 2.2,
  spaceBetween: 22,
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1280: {
      slidesPerView: 7,
    },
  },
  navigation: {
    nextEl: ".swiper-button-nextBinge",
    prevEl: ".swiper-button-prevBinge",
  },
   // If we need pagination
  pagination: {
    el: '.swiper-pagination-binge',
  },
});