// i18n initialisation
(() => {
  function reloadLang() {
    jqueryI18next.init(i18next, $);
    $('html').localize();
    $('.language-list li.active').removeClass('active');
    $('.language-list li[data-lang=' + i18next.language + ']').addClass('active');
  }

  i18next
    .use(i18nextXHRBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
    fallbackLng: 'en',
    debug: false,
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

})();



