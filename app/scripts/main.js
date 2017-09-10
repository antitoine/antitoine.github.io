// i18n initialisation
(() => {
  function reloadLang(lng) {
    jqueryI18next.init(i18next, $);
    $('html').localize();
    $('select.language-selector').val(i18next.language);
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

  $('select.language-selector').on('change', function () {
    i18next.changeLanguage(this.value);
  });
})();



