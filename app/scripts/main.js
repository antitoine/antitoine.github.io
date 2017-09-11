$(() => {
  // Polyfill object-fit/object-position
  objectFitImages();

  // i18n initialisation
  function reloadLang() {
    let lang = i18next.language.split('-')[0];
    jqueryI18next.init(i18next, $);
    $('html').localize();
    $('.language-list li.active').removeClass('active');
    $('.language-list li[data-lang=' + lang + ']').addClass('active');
  }

  i18next
    .use(i18nextXHRBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
    fallbackLng: 'en',
    debug: true,
    ns: ['common'],
    defaultNS: 'common',
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
      crossDomain: true
    }
  }, reloadLang);

  i18next.on('languageChanged', reloadLang);

  $('.language-list li').on('click', function () {
    let list = $('.language-list');
    if ($(this).hasClass('active')) {
      if (list.hasClass('open')) {
        list.removeClass('open');
      } else {
        list.addClass('open');
      }
    } else {
      i18next.changeLanguage($(this).data('lang'));
      list.removeClass('open');
    }
  });

  // Main carousel
  $('.owl-carousel').owlCarousel({
    lazyLoad: true,
    loop: false,
    margin: 10,
    stagePadding: 50,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 5,
        nav: false,
      },
      480: {
        items: 2,
        stagePadding: 5,
        nav: false,
      },
      550: {
        items: 2,
        stagePadding: 20,
        nav: false,
      },
      740: {
        items: 2,
        stagePadding: 20,
      },
      1000: {
        items: 3
      },
      1300: {
        items: 4
      }
    }
  });

  $('.owl-carousel .item').on('click', function() {
    let info = $(this).find('.info');
    if (info.hasClass('open')) {
      info.removeClass('open');
    } else {
      info.addClass('open');
    }
  });

  $('.owl-carousel .item').each(function() {
    if ($(this).find('.info').length > 0) {
      $(this).css('cursor', 'pointer');
    }
  })
});




