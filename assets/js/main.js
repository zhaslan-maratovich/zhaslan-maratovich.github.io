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
  const header = {
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

  const travelInfo = {
    el: document.querySelector('.trave-info'),
    elAddons: document.querySelector('.trave-info__addons'),
    elForm: document.querySelector('.travel-form'),
    classes: {
      hide: 'trave-info--hide',
      hideAddons: 'trave-info__addons--hide',
      hideForm: 'travel-form--hide',
    },

    start: () => {
      travelInfo.clickHandlerStart();
    },

    clickHandlerStart: () => {
      const travelShowFormBtn = document.querySelector('.js-travel-show-form');
      const travelHideFormBtn = document.querySelector('.js-travel-hide-form');
      const form = travelInfo.elForm;
      const classHideForm = travelInfo.classes.hideForm;

      travelShowFormBtn && travelShowFormBtn.addEventListener('click', function () {
        form.classList.remove(classHideForm);
      });
      travelHideFormBtn && travelHideFormBtn.addEventListener('click', function () {
        form.classList.add(classHideForm);
      });
    },

    show: () => {
      if (travelInfo.el) {
        travelInfo.el.classList.remove(travelInfo.classes.hide);
      }
    },
    hide: () => {
      if (travelInfo.el) {
        travelInfo.el.classList.add(travelInfo.classes.hide);
      }
    },
    updateInfoAddons: (countAdds) => {
      const classHide = travelInfo.classes.hideAddons;
      const addons = travelInfo.elAddons;

      if (countAdds > 0) {
        addons.classList.remove(classHide);
        addons.querySelector('.trave-info__addons-count').innerHTML = countAdds;
      } else {
        addons.classList.add(classHide);
      }
    }
  };

  travelInfo.start();

  // Слайдеры
  (function () {
    const optionsSeasons = {
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
    const optionsCountries = {
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
    const optionsTabs = {
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
    const optionsUniqueList = {
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
    const optionsTravelSlides = {
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
    };
    const optionsTravelRoute = {
      arrows: false,
      pagination: false,
      autoWidth: true,
      gap: 16,
      padding: '2.5rem',
      breakpoints: {
        1023: {
          padding: 24,
        },
        639: {
          padding: 16,
        }
      }
    };

    const splidesConfig = [
      ['.js-splide-main-seasons', optionsSeasons],
      ['.js-splide-main-countries', optionsCountries],
      ['.js-splide-main-tabs', optionsTabs],
      ['.js-splide-unique-list', optionsUniqueList],
      ['.js-splide-travel-slides', optionsTravelSlides],
      ['.js-splide-travel-route', optionsTravelRoute],
    ];

    splidesConfig.forEach(function (config) {
      const selector = config[0];
      const options = config[1];

      if (document.querySelector(selector)) {
        new Splide( selector, options ).mount();
      }
    })
  })();

  (function () {
    const travelPage = {
      elBtnAddon: document.querySelector('.js-travel-addon-btn'),
      elAddonList: document.querySelector('.travel-addons-list'),
      elsBtnAdd: document.querySelectorAll('.travel-addons__add'),
      elsBtnRemove: document.querySelectorAll('.travel-addons__delete'),
      elProgram: document.querySelector('.program'),
      elBtnProgramShow: document.querySelector('.program-button'),
      classes: {
        hideAddonsList: 'travel-addons-list--hide',
        addedAddons: 'travel-addons--added',
        hideProgram: 'program--hide',
      },

      start: () => {
        travelPage.toggleOnMobileStart();
        travelPage.toggleAddonsStart();
        travelPage.toggleProgramStart();
      },

      toggleOnMobileStart: () => {
        const btn = travelPage.elBtnAddon;
        const addonList = travelPage.elAddonList;
        const classHideList = travelPage.classes.hideAddonsList;

        btn && btn.addEventListener('click', function () {
          if (addonList.classList.contains(classHideList)) {
            addonList.classList.remove(classHideList);
            btn.innerHTML = 'Скрыть';
          } else {
            addonList.classList.add(classHideList);
            btn.innerHTML = 'Раскрыть';
          }
        })
      },

      toggleAddonsStart: () => {
        let countSelectAdds = 0;

        for (let el of travelPage.elsBtnAdd) {
          el.addEventListener('click', function () {
            const elParent = this.parentElement.parentElement;

            countSelectAdds += 1;
            travelPage.updateInfoAddons(countSelectAdds);
            elParent.classList.add(travelPage.classes.addedAddons);
          });
        }

        for (let el of travelPage.elsBtnRemove) {
          el.addEventListener('click', function (e) {
            const elParent = this.parentElement.parentElement;

            countSelectAdds -= 1;
            travelPage.updateInfoAddons(countSelectAdds);
            elParent.classList.remove(travelPage.classes.addedAddons);
          });
        }
      },

      toggleProgramStart: () => {
        const btn = travelPage.elBtnProgramShow;
        const program = travelPage.elProgram;
        const classHideProgram = travelPage.classes.hideProgram;

        const btnTextOnHide = 'Показать всю программу';
        const btnTextOnShow = 'Скрыть всю программу';

        btn && btn.addEventListener('click', () => {
          if (program.classList.contains(classHideProgram)) {
            program.classList.remove(classHideProgram);
            btn.innerHTML = btnTextOnShow;
          } else {
            program.classList.add(classHideProgram);
            btn.innerHTML = btnTextOnHide;
          }
        });
      },

      updateInfoAddons: (countAdds) => {
        travelInfo.updateInfoAddons(countAdds);
        travelInfo.show();
      }
    };

    travelPage.start();
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

});