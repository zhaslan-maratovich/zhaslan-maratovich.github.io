document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('.header');
  var classHeaderHide = 'header--hide';
  var info = document.querySelector('.trave-info');
  var classInfoHide = 'trave-info--hide';

  var showHeader = function () {
    if (header) {
      header.classList.add(classHeaderHide);
    }
  };

  var hideHeader = function () {
    if (header) {
      header.classList.remove(classHeaderHide);
    }
  };

  var showInfo = function () {
    if (info) {
      info.classList.add(classInfoHide);
    }
  };

  var hideInfo = function () {
    if (info) {
      info.classList.remove(classInfoHide);
    }
  };

  var infoAddPrice = function (addPrice) {
    if (info) {
      //
    }
  };

  (function () {
    var optionsSeasons = {
      arrows: false,
      perPage: 4,
      gap: 30,
      pagination: false,
      speed: 800,
      updateOnMove: true,
      breakpoints: {
        1319: {
          gap: 16,
        },
        1023: {
          perPage: 1,
          fixedWidth: 210,
          padding: 24,
        },
        639: {
          padding: 16,
        }
      }
    };
    var optionsCountries = {
      arrows: true,
      perPage: 4,
      gap: 30,
      pagination: false,
      speed: 800,
      updateOnMove: true,
      breakpoints: {
        1319: {
          gap: 16,
        },
        1023: {
          perPage: 1,
          fixedWidth: 210,
          padding: 24,
        },
        639: {
          padding: 16,
        }
      }
    };
    var optionsTabs = {
      arrows: false,
      pagination: false,
      autoWidth: true,
      gap: 8,
      breakpoints: {
        1023: {
          padding: 24,
        },
        639: {
          gap: 4,
          padding: 16,
        }
      }
    }
    var optionsUniqueList = {
      arrows: false,
      pagination: false,
      autoWidth: true,
      gap: 16,
      breakpoints: {
        1023: {
          padding: 24,
        },
        639: {
          padding: 16,
        }
      }
    }

    var optionsTravelSlides = {
      arrows: true,
      pagination: false,
      autoWidth: true,
      gap: 30,
      breakpoints: {
        1319: {
          gap: 16,
        },
        1023: {
          padding: 24,
        },
        639: {
          padding: 16,
        }
      }
    }

    var splidesConfig = [
      ['.js-splide-main-seasons', optionsSeasons],
      ['.js-splide-main-countries', optionsCountries],
      ['.js-splide-main-tabs', optionsTabs],
      ['.js-splide-unique-list', optionsUniqueList],
      ['.js-splide-travel-slides', optionsTravelSlides],
      ['.js-splide-travel-route', optionsUniqueList],
    ];

    splidesConfig.forEach(function (config) {
      var selector = config[0];
      var options = config[1];

      if (document.querySelector(selector)) {
        new Splide( selector, options ).mount();
      }
    })
  })();

  (function () {
    var btnShowProgramInTravel = document.querySelector('.js-show-program-travel');
    var travelAddonBtn = document.querySelector('.js-travel-addon-btn');
    var travelShowFormBtn = document.querySelector('.js-travel-show-form');
    var travelHideFormBtn = document.querySelector('.js-travel-hide-form');

    travelAddonBtn && travelAddonBtn.addEventListener('click', function () {
      var addonList = document.querySelector('.travel-addons-list');
      var classHideList = 'travel-addons-list--hide';

      if (addonList.classList.contains(classHideList)) {
        addonList.classList.remove(classHideList);
        travelAddonBtn.innerHTML = 'Скрыть';
      } else {
        addonList.classList.add(classHideList);
        travelAddonBtn.innerHTML = 'Раскрыть';
      }
    });

    var form = document.querySelector('.travel-form');
    var classHideForm = 'travel-form--hide';

    travelShowFormBtn && travelShowFormBtn.addEventListener('click', function () {
      form.classList.remove(classHideForm);
    });
    travelHideFormBtn && travelHideFormBtn.addEventListener('click', function () {
      form.classList.add(classHideForm);
    });
  })();

  (function () {
    var prevTopOffset = 0;

    document.addEventListener('scroll', function () {
      if (window.pageYOffset > prevTopOffset) {
        showHeader();
        hideInfo();
      } else {
        hideHeader();
        showInfo();
      }
      prevTopOffset = window.pageYOffset;
    });
  })();

  (function () {
    var addEls = document.querySelectorAll('.travel-addons__add');
    var removeEls = document.querySelectorAll('.travel-addons__delete');
    var countSelectAdds = 0;

    function updateInfoAddons(countAdds) {
      var classHide = 'trave-info__addons--hide';
      var infoAddons = document.querySelector('.trave-info__addons');

      if (countAdds > 0) {
        infoAddons.classList.remove(classHide);
        infoAddons.querySelector('.trave-info__addons-count').innerHTML = countAdds;
      } else {
        infoAddons.classList.add(classHide);
      }
    }

    for (var addEl of addEls) {
      addEl.addEventListener('click', function (e) {
        // var addPrice = this.dataset.price;
        countSelectAdds += 1;
        updateInfoAddons(countSelectAdds);
        this.parentElement.parentElement.classList.add('travel-addons--added');
      });
    }

    for (var removeEl of removeEls) {
      removeEl.addEventListener('click', function (e) {
        console.log('===');
        // var addPrice = this.dataset.price;
        countSelectAdds -= 1;
        updateInfoAddons(countSelectAdds);
        this.parentElement.parentElement.classList.remove('travel-addons--added');
      });
    }
  })();
});