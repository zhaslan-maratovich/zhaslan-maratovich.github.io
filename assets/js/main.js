// helpers
function onScroll (downCallback, upCallback) {
  function isDown (currentOffset, prevOffset) {
    return currentOffset > prevOffset;
  }

  var prevPageYOffset = 0;

  document.addEventListener('scroll', function () {
    if ( isDown(window.pageYOffset, prevPageYOffset) ) {
      downCallback && downCallback();
    } else {
      upCallback && upCallback();
    }

    prevPageYOffset = window.pageYOffset;
  });
}

function onScrollDown (callback) {
  onScroll(callback);
}

function onScrollUp (callback) {
  onScroll(null, callback);
}

document.addEventListener('DOMContentLoaded', function() {
  var header = {
    el: document.querySelector('.header'),
    classes: {
      hide: 'header--hide',
    },

    show: function () {
      if (header.el) {
        header.el.classList.remove(header.classes.hide);
      }
    },
    hide: function () {
      if (header.el) {
        header.el.classList.add(header.classes.hide);
      }
    },
  };

  var travelInfo = {
    el: document.querySelector('.trave-info'),
    classes: {
      hide: 'trave-info--hide',
    },

    show: function () {
      if (travelInfo.el) {
        travelInfo.el.classList.remove(travelInfo.classes.hide);
      }
    },
    hide: function () {
      if (travelInfo.el) {
        travelInfo.el.classList.add(travelInfo.classes.hide);
      }
    },
  };

  // Слайдеры
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
    var footer = document.querySelector('footer');

    onScrollDown(function () {
      if (window.scrollY < 100) {
        header.show();
      } else {
        header.hide();
      }

      if (footer && footer.offsetTop < window.scrollY + window.innerHeight) {
        travelInfo.hide();
      } else {
        travelInfo.show();
      }
    });

    onScrollUp(function () {
      header.show();
      travelInfo.hide();
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