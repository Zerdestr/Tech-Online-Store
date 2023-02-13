// const Swiper = new Swiper('.__swiper', {

//   direction: 'horizontal',
//   modules: [Autoplay],
//   loop: true,
//   autoplay: {
//     delay: 3000,
//   },
//   speed: 500,

//   wrapperClass: '__wrppper',
//   slideClass: '__slide',
//   slideActiveClass: '__slide--active',
//   slideDuplicateActiveClass: '__slide-duplicate--active',
//   slideDuplicateClass: '__slide-duplicate',
//   centeredSlides: true,
//   loopedSlides: 3,

//   breakpoints: {

//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//       centeredSlides: false,
//     },

//     567: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },

//     1200: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     }
//   },

// });

// if (document.documentElement.scrollTop) {
//   header.classList.add('header--fixed');
// }

// window.addEventListener('scroll', function () {
//   if (scrollY > 0) {
//     header.classList.add('header--fixed');
//   }
//   else {
//     header.classList.remove('header--fixed');
//   }
// });


// let headerBurger = document.querySelector('.header__burger');

// headerBurger.addEventListener('click', function () {
//   let headerMenu = document.querySelector('.header__menu');
//   let body = document.querySelector('body');

//   headerBurger.classList.toggle('burger--active');
//   headerMenu.classList.toggle('header__menu--active');
//   body.classList.toggle('no-scrol');
// });

//Дропдаун

// let headerDropdawn = document.querySelectorAll('.header__item--dropdown');

// function headerDropdawnF(event) {
//   let target = event.target.closest('.header__item--dropdown');
//   let dropdownHeader = target.querySelector('.dropdown-header');
//   let dropdownHeaderHeight = dropdownHeader.clientHeight;

//   if (target.classList.contains('header__item--active')) {
//     target.classList.remove('header__item--active');
//     target.style.paddingBottom = 0;
//   }

//   else {
//     target.classList.add('header__item--active');

//     target.style.paddingBottom = dropdownHeaderHeight + 'px';
//   }
// };

// function close(event) {
//   let target = event.target.closest('.');

//   if (!target) {
//     headerDropdawn.forEach(headerDropdawnItem => {
//       headerDropdawnItem.classList.remove('--active');
//       headerDropdawnItem.style.paddingBottom = 0;
//     });

//   }
// }

// document.addEventListener('click', close);

//Проверка на мобилу

// if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
//   headerDropdawn.forEach(headerDropdawnItem => {
//     headerDropdawnItem.addEventListener('click', headerDropdawnF);
//   });
// }

// Обратный отсчет

// let deadline = '2023-01-20';

// function getTimeRemaining(endtime) {
//   let t = Date.parse(endtime) - Date.parse(new Date());
//   let seconds = Math.floor((t / 1000) % 60);
//   let minutes = Math.floor((t / 1000 / 60) % 60);
//   let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   let days = Math.floor(t / (1000 * 60 * 60 * 24));
//   return {
//     'total': t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }

// function initializeClock(id, endtime) {
//   let clock = document.getElementById(id);
//   let daysSpan = clock.querySelector('.days');
//   let hoursSpan = clock.querySelector('.hours');
//   let minutesSpan = clock.querySelector('.minutes');
//   let secondsSpan = clock.querySelector('.seconds');
//   function updateClock() {
//     let t = getTimeRemaining(endtime);

//     daysSpan.innerHTML = ('0' + t.days).slice(-2);
//     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }

//   updateClock(); // запустите функцию один раз, чтобы избежать задержки
//   let timeinterval = setInterval(updateClock, 1000);
// }

// initializeClock('clockdiv', deadline);

// Табы

// let tabButton = document.querySelectorAll('.tab__nav-item ');

// function tabTab(event) {
//   let target = event.target.closest('.tab__nav-item');

//   let tabButton = document.querySelectorAll('.tab__nav-item');

//   let tabTableWrapper = document.querySelectorAll('.tab__table-wrapper');

//   tabButton.forEach(tabButton => {
//     tabButton.classList.remove('tab__nav-item--active')
//   });

//   target.classList.add('tab__nav-item--active');

//   for (let item of tabTableWrapper) {
//     let slideData = item.dataset.target;
//     let buttunData = target.dataset.target + '-tab'

//     item.classList.remove('tab__table-wrapper--visible')

//     if (slideData == buttunData) {
//       item.classList.add('tab__table-wrapper--visible');
//     }
//   }

// }

// tabButton.forEach(tabItem => {
//   tabItem.addEventListener('click', tabTab);
// });

// Анимации при скролле

// const animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0) {
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animItems.length; index++) {
//       const animItem = animItems[index];
//       const animItemHeight = animItem.offsetHeight;
//       const animItemOffset = offset(animItem).top;
//       const animStart = 2;

//       let animItemPoint = window.innerHeight - animItemHeight / animStart;
//       if (animItemHeight > window.innerHeight) {
//         animItemPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
//         animItem.classList.add('_active');
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//   }

//   setTimeout(() => {
//     animOnScroll();
//   }, 300);
// }

let headerTime = document.querySelector('.header__time');
let headerTimeButton = document.querySelector('.header__time-button');

let headerCard = document.querySelector('.cart-header');
let headerCardButton = document.querySelector('.cart-header__button');

let headerAccount = document.querySelector('.account-header');
let headerAccountButton = document.querySelector('.account-header__button');

let headerSearch = document.querySelector('.header__search');
let headerSearchButton = document.querySelector('.header__search-button');

headerTimeButton.addEventListener('click', function () {
  headerTime.classList.toggle('header__time--active');
})

headerCardButton.addEventListener('click', function () {
  headerCard.classList.toggle('cart-header--active');
})

headerAccountButton.addEventListener('click', function () {
  headerAccount.classList.toggle('account-header--active');
})

headerSearchButton.addEventListener('click', function () {
  headerSearch.classList.toggle('header__search--active');
  headerSearchButton.classList.toggle('header__search-button--active');
})

import Swiper, { Navigation, Autoplay, Pagination } from 'swiper';

const promotionalSwiper = new Swiper('.promotional__swiper', {

  direction: 'horizontal',
  modules: [Navigation, Autoplay,],
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 500,

  wrapperClass: 'promotional__wrapper',
  slideClass: 'promotional__slide',

  navigation: {
    nextEl: '.promotional__next',
    prevEl: '.promotional__prev',
  },

});

const newProductslSwiper = new Swiper('.new-products__swiper', {

  direction: 'horizontal',
  modules: [Navigation],
  loop: true,
  slidesPerView: 6,


  wrapperClass: 'new-products__wrapper',
  slideClass: 'new-products__slide',

  navigation: {
    nextEl: '.new-products__next',
    prevEl: '.new-products__prev',
  },

});

const reviewSwiper = new Swiper('.review__swiper', {

  direction: 'horizontal',
  modules: [Pagination, Autoplay],
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 500,

  wrapperClass: 'review__wrapper',
  slideClass: 'review__slide',

  pagination: {
    el: '.review__pagination',
    type: 'bullets',
    bulletClass: 'review__pagination-bullet',
    bulletActiveClass: 'review__pagination-bullet--active',
    clickable: true
  },

});


const ratings = document.querySelectorAll('.card-rating');

if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive, ratingValue;

  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRatings(rating);
  }

  function initRatings(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();

    if (rating.classList.contains('card-rating--set')) {
      setRating(rating);
    }
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.card-rating__active');
    ratingValue = rating.querySelector('.card-rating__value');
  }

  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.card-rating__item')

    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];

      ratingItem.addEventListener('mouseenter', function (e) {
        initRatingVars(rating);

        setRatingActiveWidth(ratingItem.value);
      });

      ratingItem.addEventListener('mouseleave', function (e) {
        setRatingActiveWidth();
      })


      ratingItem.addEventListener('click', function (e) {
        initRatingVars(rating);

        ratingValue.innerHTML = index + 1;
        setRatingActiveWidth();
      })
    }
  }
}


// let tabButton = document.querySelectorAll('.tab__nav-item ');

// function tabTab(event) {
//   let target = event.target.closest('.tab__nav-item');

//   let tabButton = document.querySelectorAll('.tab__nav-item');

//   let tabTableWrapper = document.querySelectorAll('.tab__table-wrapper');

//   tabButton.forEach(tabButton => {
//     tabButton.classList.remove('tab__nav-item--active')
//   });

//   target.classList.add('tab__nav-item--active');

//   for (let item of tabTableWrapper) {
//     let slideData = item.dataset.target;
//     let buttunData = target.dataset.target + '-tab'

//     item.classList.remove('tab__table-wrapper--visible')

//     if (slideData == buttunData) {
//       item.classList.add('tab__table-wrapper--visible');
//     }
//   }

// }

// tabButton.forEach(tabItem => {
//   tabItem.addEventListener('click', tabTab);
// });