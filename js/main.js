$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="/images/Arrow left.svg" alt="arrow_left">',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="/images/Arrow right.svg" alt="arrow_right">',
        responsive: [
            {
              breakpoint: 481,
              settings: {
                arrows: false,
                }
            }
        ]
    });
    
    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('active');
    });
});