let headerTime = document.querySelector('.header__time');

let headerCard = document.querySelector('.cart-header');

let headerAccount = document.querySelector('.account-header');

let headerSearch = document.querySelector('.header__search');
let headerSearchButton = document.querySelector('.header__search-button');

document.addEventListener('click', function (e) {
  let target = e.target.closest('.header__time-button');
  let targetContent = e.target.closest('.header__time');

  if (target) {
    headerTime.classList.toggle('header__time--active');
  } else if (!target && !targetContent) {
    headerTime.classList.remove('header__time--active');
  }
})

document.addEventListener('click', function (e) {
  let target = e.target.closest('.cart-header__button');
  let targetContent = e.target.closest('.cart-header');

  if (target) {
    headerCard.classList.toggle('cart-header--active');
  } else if (!target && !targetContent) {
    headerCard.classList.remove('cart-header--active');
  }
})

document.addEventListener('click', function (e) {
  let target = e.target.closest('.account-header__button');
  let targetContent = e.target.closest('.account-header');

  if (target) {
    headerAccount.classList.toggle('account-header--active');
  } else if (!target && !targetContent) {
    headerAccount.classList.remove('account-header--active');
  }
})

let colorButtons = document.querySelectorAll('.colors__button');

if (colorButtons.length > 0) {
  colorButtons.forEach(colorButton => {
    colorButton.addEventListener('click', function (e) {
      let target = e.target.closest('.colors__button');
      let colorButtonActive = document.querySelector('.colors__button--active');

      if (target) {
        colorButtonActive.classList.remove('colors__button--active');
        target.classList.toggle('colors__button--active');
      }
    })
  });
}

let viewButtons = document.querySelectorAll('.right-catalog__view-button');

if (viewButtons.length > 0) {
  viewButtons.forEach(viewButton => {
    viewButton.addEventListener('click', function (e) {
      let target = e.target.closest('.right-catalog__view-button');
      let viewButtonActive = document.querySelector('.right-catalog__view-button--active');
      let catalogList = document.querySelector('.right-catalog__list')

      if (!target.classList.contains('right-catalog__view-button--active')) {

        if (target.classList.contains('right-catalog__view-button--grid')) {
          catalogList.classList.remove('right-catalog__list--column');

          viewButtonActive.classList.remove('right-catalog__view-button--active');
          target.classList.add('right-catalog__view-button--active');
        } else {
          catalogList.classList.add('right-catalog__list--column');

          viewButtonActive.classList.remove('right-catalog__view-button--active');
          target.classList.add('right-catalog__view-button--active');
        }
      }
    })
  });
}

let textButton = document.querySelector('.right-catalog__text-button');

if (textButton) {

  textButton.addEventListener('click', function () {
    let catalogText = document.querySelector('.right-catalog__text');
    catalogText.classList.add('right-catalog__text--active');
    textButton.style.display = 'none';
  })
}

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

  breakpoints: {
    320: {
      slidesPerView: 2,
    },

    565: {
      slidesPerView: 3,
    },

    1030: {
      slidesPerView: 6,
    },
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

const productSwiper = new Swiper('.product__swiper', {

  direction: 'horizontal',
  modules: [Pagination],

  wrapperClass: 'product__wrapper',
  slideClass: 'product__slide',

  pagination: {
    el: '.product__swiper-pagination',
    type: 'bullets',
    bulletClass: 'product__swiper-pagination-bullet',
    bulletActiveClass: 'product__swiper-pagination-bullet--active',
    clickable: true
  },

});

const productInfoSwiper = new Swiper('.product-info__swiper', {

  direction: 'horizontal',
  modules: [Pagination, Autoplay],
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 500,

  wrapperClass: 'product-info__wrapper',
  slideClass: 'product-info__slide',

  pagination: {
    el: '.product-info__swiper-pagination',
    type: 'bullets',
    bulletClass: 'product-info__swiper-pagination-bullet',
    bulletActiveClass: 'product-info__swiper-pagination-bullet--active',
    clickable: true
  },

});

let headerBurger = document.querySelector('.header__burger');
let headerBurgerClose = document.querySelector('.header__mobile-burger');
let mobileMenu = document.querySelector('.header__mobile-list');
let body = document.querySelector('body');

headerBurger.addEventListener('click', function () {
  mobileMenu.classList.add('header__mobile-list--active');
  body.classList.add('no-scrol');
})

headerBurgerClose.addEventListener('click', function () {
  mobileMenu.classList.remove('header__mobile-list--active');
  body.classList.remove('no-scrol');
})

document.addEventListener('click', function (e) {
  if (body.classList.contains('no-scrol')
    && !e.target.closest('.header__mobile-list')
    && !e.target.closest('.header__burger')
  ) {
    mobileMenu.classList.remove('header__mobile-list--active');
    body.classList.remove('no-scrol');
  }
})

let filterButton = document.querySelector('.right-catalog__filter-button');

if (filterButton) {
  let catalog = document.querySelector('.catalog');
  let catalogCLose = document.querySelector('.left-catalog__close');

  filterButton.addEventListener('click', function () {
    catalog.classList.add('catalog--active');
    body.style.overflow = 'hidden';
  })

  catalogCLose.addEventListener('click', function () {
    catalog.classList.remove('catalog--active');
    body.style.overflow = 'scroll';
  })

  document.addEventListener('click', function (e) {
    if (catalog.classList.contains('catalog--active')
      && !e.target.closest('.left-catalog')
      && !e.target.closest('.right-catalog__filter-button')
    ) {
      catalog.classList.remove('catalog--active');
      body.style.overflow = 'scroll';
    }
  })
}


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


let tabFunction = (tabButtonClass, tabWrapperClass, tabItemClass) => {


  let tabButtons = document.querySelectorAll('.' + tabButtonClass);

  if (tabButtons.length > 0) {

    tabButtons.forEach(tabButton => {

      tabButton.addEventListener('click', function (e) {

        let targetWrapper = e.target.closest('.' + tabWrapperClass);
        let targetButton = e.target.closest('.' + tabButtonClass);
        let targetButtonActive = targetWrapper.querySelector('.' + tabButtonClass + '--active');
        let targetData = targetButton.dataset.target;
        let tabItemData = targetData + '-tab';
        let tabItem = targetWrapper.querySelector(`[data-target='${tabItemData}']`);
        let tabItemActive = targetWrapper.querySelector('.' + tabItemClass + '--active');

        console.log(targetButton);

        if (!targetButton.classList.contains(tabButtonClass + '--active')) {

          targetButtonActive.classList.remove(tabButtonClass + '--active');
          targetButton.classList.add(tabButtonClass + '--active');
          tabItemActive.classList.remove(tabItemClass + '--active');
          tabItem.classList.add(tabItemClass + '--active');
        }
      })
    });
  }
}

tabFunction('categories__tab-button', 'categories__item--tab', 'categories__list');

tabFunction('product__tab-button', 'product', 'product__tab');

const smoothHeight = (itemSelector, buttonSelector, contentSelector) => { // объявляем основную функцию, которая принимает в качестве параметров селекторы элемента, кнопки внутри элемента и блока с контентом

  const items = document.querySelectorAll(itemSelector) // находим все элементы по переданному селектору в параметре itemSelector и записываем в константу items

  if (!items.length) return // если таких элементов нет, прекращаем выполнение функции

  items.forEach(el => { // для каждого элемента
    const button = el.querySelector(buttonSelector) // находим кнопку и записываем в константу button
    const content = el.querySelector(contentSelector) // находим блок с контентом и записываем в константу content

    button.addEventListener('click', () => { // при клике на кнопку
      if (el.dataset.open !== 'true') { // если значение data-атрибута open у элемента не равно 'true' и блок с контентом еще не отображен
        el.dataset.open = 'true' // тогда устанавливаем значение 'true'
        content.style.maxHeight = `${content.scrollHeight}px` // и блоку с контентом устанавливаем inline-свойсво max-height со вычисленным значением полной высоты этого блока
      } else { // если блок с контентом отображен и значение data-атрибута open у элемента равно 'true'
        el.dataset.open = 'false' // тогда устанавливаем значение 'false'
        content.style.maxHeight = '' // и сбрасываем ранее установленное inline-свойсво max-height
      }
    })

    const onResize = () => { // объявляем функцию onResize, которая будет корректировать значение inline-свойства max-height при изменении размеров окна браузера
      if (el.dataset.open === 'true') { // если значение data-атрибута open у элемента равно 'true' (коректировать высоту нужно только если блок контента отображен)
        if (parseInt(content.style.maxHeight) !== content.scrollHeight) { // если текущее значение inline-свойства max-height у блока контента не равно полной высоте
          content.style.maxHeight = `${content.scrollHeight}px` // только тогда блоку с контентом корректируем значение inline-свойсва max-height
        }
      }
    }

    window.addEventListener('resize', onResize) // вызываем функцию onResize при изменении размеров окна браузера
  })

}

smoothHeight('.footer__col', '.footer__col-title', '.footer__col-wrapper'); // вызываем основную функцию smoothHeight и передаем в качестве параметров  необходимые селекторы

smoothHeight('.left-catalog__item', '.left-catalog__item-title', '.left-catalog__item-wrapper');


let header = document.querySelector('.header');

window.addEventListener('scroll', function () {
  if (scrollY > 43) {
    header.classList.add('header--fixed');
  }
  else {
    header.classList.remove('header--fixed');
  }
});

let sort = document.querySelector('.sort-choice');
import Choices, { } from 'choices.js';

if (sort) {

  let multiplyChoices = () => {
    const element = document.querySelectorAll('.sort-choice');

    element.forEach(el => {
      const choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: '',

      });

    });
  }
  multiplyChoices();
}


let counter = document.querySelector('.product__counter');
if (counter) {




  let counterInput = counter.querySelector('.product__counter-input');
  let counterUp = counter.querySelector('.product__counter-button--up');
  let counterDown = counter.querySelector('.product__counter-button--down');
  let price = document.querySelector('.product__price-num1');
  const priceNum = price.innerHTML;


  counterUp.addEventListener('click', function () {
    counterInput.value = +counterInput.value + 1;

    // let priceNow = document.querySelector('.product__price-num1');
    // priceNow.innerHTML = +priceNow.innerHTML + +priceNum.innerHTML;


  })

  counterDown.addEventListener('click', function () {
    if (counterInput.value > 1) {
      counterInput.value = +counterInput.value - 1;
      // price.innerHTML = +price.innerHTML - +priceNum.innerHTML;
    }
  })

}