import Swiper from "swiper";

export function initHomeSwiper() {
  return {
    swiper: null,
    init() {
      this.swiper = new Swiper(this.$refs.container, {
        loop: true,
        autoplay: {
          delay: 5000,
        },
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: ".carousel-pagination",
          type: "bullets",
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
      });
    },
  };
}

export function initProjectsSwiper() {
  return {
    swiper: null,
    init() {
      this.swiper = new Swiper(this.$refs.container, {
        loop: true,
        autoplay: {
          delay: 5000,
        },
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: ".carousel-pagination",
          type: "bullets",
        },
        breakpoints: {
          340: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      });
    },
  };
}
