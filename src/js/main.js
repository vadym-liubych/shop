import '../scss/main.scss';

import '../index.html';

import $ from 'jquery';
import 'slick-carousel';

const favoriteElement = document.querySelector('.card__favorite');

const toggleElement = () => {
  favoriteElement.classList.toggle('card__favorite--active');
};

favoriteElement.addEventListener('click', toggleElement);

$(() => {
  // const $slider = $('.catalog');

  $slider.slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
