$(document).ready(function () {
   $('.carousel__inner').slick({
      speed: 500,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"></button>',
      responsive: [
         {
            breakpoint: 992,
            settings: {
               dots: true,
               arrows: false,
               dotsClass: 'slick-dots',
            }
         }
      ]
   });

   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
      $(this)
         .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
         .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
   });


   function toggleSlide(item) {
      $(item).each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
         })
      });
   };

   toggleSlide('.catalog-item__link');
   toggleSlide('.catalog-item__list_back');

   // Modal

   // $('[data-modal=consultation]').on('click', function () {
   //    $('.black-area').fadeIn('slow');
   // });

   $('[data-modal=consultation]').on('click', function () {
      $('.back-area, #consultation').fadeIn('slow');
   });
   $('.modal__close').on('click', function () {
      $('.back-area, #consultation, #order, #thanks').fadeOut('slow');
   });
   $('.button_mini').on('click', function () {
      $('.back-area, #order').fadeIn('slow');
   });

   $('.button_mini').each(function (i) {
      $(this).on('click', function name(params) {
         $('#order .modal__descr').text($('.catalog-item__subheader').eq(i).text());
      });
   });

   function valide(element) {
      $(element).validate({
         rules: {
            name: {
               required: true,
               minlength: 2
            },
            phone: {
               required: true,
               minlength: 11
            },
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            name: {
               required: "Пожалуйста, введите ваше имя",
               minlength: jQuery.validator.format("Пожалуйста, введите больше {0} cимволов")
            },
            phone: {
               required: "Пожалуйста, введите ваш номер телефона",
               minlength: jQuery.validator.format("Пожалуйста, введите {0} cимволов")
            },

            email: {
               required: "Пожалуйста, введите вашу почту",
               email: "Не правильно введен адрес почты"
            }

         }
      });
   };

   valide('#consultation-form');
   valide('#consultation form');
   valide('#order form');

   $('input[name=phone]').mask("+7 (999) 999-99-99");

   $(window).scroll(function () {
      if ($(this).scrollTop() > 1600) {
         $('.arrow-up').fadeIn();
      } else {
         $('.arrow-up').fadeOut();
      }
   })


   $(function () {
      $("a[href^='#']").click(function () {
         const _href = $(this).attr("href");
         $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
         return false;
      });
   });

   new WOW().init();
});