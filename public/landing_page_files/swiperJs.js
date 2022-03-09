 var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        freeMode:true,
        spaceBetween:10,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: false,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
        595:{
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            

        },
          1000: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 60
          },
          1057: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 40
          },
          1365: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 30
          },
        
        }
      });