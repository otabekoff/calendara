import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Calendara",
  description: "A customizable and versatile calendar library for dynamic date handling.",
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    uz: {
      label: 'O\'zbekcha',
      lang: 'uz',
      link: '/uz/',
      themeConfig: {
        nav: [
          { text: 'Asosiy sahifa', link: '/uz/' },
        ],
        outline: {
          level: [2, 3],
          label: "Ushbu sahifada"
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              uz: { // make this `root` if you want to translate the default locale
                translations: {
                  button: {
                    buttonText: 'Izlash',
                    buttonAriaLabel: 'Izlash tugmasi'
                  },
                  modal: {
                    displayDetails: 'Ko\'proq ko\'rsatish',
                    resetButtonTitle: 'Izlash matnini o\'chirish',
                    backButtonTitle: 'Ortga qaytish',
                    noResultsText: 'Ma\'lumotlar topilmadi: ',
                    footer: {
                      selectText: 'TANLASH',
                      selectKeyAriaLabel: 'Tanlash tugmasi',
                      navigateText: 'HARAKATLANISH',
                      navigateUpKeyAriaLabel: 'Yuqoriga harakatlanish tugmasi',
                      navigateDownKeyAriaLabel: 'Pastga harakatlanish tugmasi',
                      closeText: 'YOPISH',
                      closeKeyAriaLabel: 'esc'
                    }
                  }
                }
              }
            }
          }
        }
      },
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      themeConfig: {
        nav: [
          { text: 'Главная страница', link: '/ru/' },
        ],
        outline: {
          level: [2, 3],
          label: "На этой странице"
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              ru: { // make this `root` if you want to translate the default locale
                translations: {
                  button: {
                    buttonText: 'Поиск',
                    buttonAriaLabel: 'Кнопка поиска'
                  },
                  modal: {
                    displayDetails: 'Показать больше',
                    resetButtonTitle: 'Сбросить текст поиска',
                    backButtonTitle: 'Назад',
                    noResultsText: 'Данные не найдены: ',
                    footer: {
                      selectText: 'ВЫБРАТЬ',
                      selectKeyAriaLabel: 'Кнопка выбора',
                      navigateText: 'НАВИГАЦИЯ',
                      navigateUpKeyAriaLabel: 'Кнопка перемещения вверх',
                      navigateDownKeyAriaLabel: 'Кнопка перемещения вниз',
                      closeText: 'ЗАКРЫТЬ',
                      closeKeyAriaLabel: 'esc'
                    }
                  }
                }
              }
            }
          }
        }
      },
    },
    tr: {
      label: 'Türkçe',
      lang: 'tr',
      link: '/tr/',
      themeConfig: {
        nav: [
          { text: 'Giriş sayfası', link: '/tr/' },
        ],
        outline: {
          level: [2, 3],
          label: "Bu sayfada"
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              tr: { // make this `root` if you want to translate the default locale
                translations: {
                  button: {
                    buttonText: 'Ara',
                    buttonAriaLabel: 'Arama butonu'
                  },
                  modal: {
                    displayDetails: 'Daha fazla göster',
                    resetButtonTitle: 'Arama metnini temizle',
                    backButtonTitle: 'Geri dön',
                    noResultsText: 'Veri bulunamadı: ',
                    footer: {
                      selectText: 'SEÇ',
                      selectKeyAriaLabel: 'Seçim butonu',
                      navigateText: 'GEZİN',
                      navigateUpKeyAriaLabel: 'Yukarı gitme butonu',
                      navigateDownKeyAriaLabel: 'Aşağı gitme butonu',
                      closeText: 'KAPAT',
                      closeKeyAriaLabel: 'esc'
                    }
                  }
                }
              }
            }
          }
        }
      },
    },
    ar: {
      label: 'عربي',
      lang: 'ar',
      link: '/ar/',
      themeConfig: {
        nav: [
          { text: 'الصفحة الرئيسة', link: '/ar/' },
        ],
        outline: {
          level: [2, 3],
          label: "في هذه الصفحة"
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              ar: { // make this `root` if you want to translate the default locale
                translations: {
                  button: {
                    buttonText: 'بحث',
                    buttonAriaLabel: 'زر البحث'
                  },
                  modal: {
                    displayDetails: 'عرض المزيد',
                    resetButtonTitle: 'مسح النص البحثي',
                    backButtonTitle: 'العودة للخلف',
                    noResultsText: 'لم يتم العثور على بيانات: ',
                    footer: {
                      selectText: 'اختر',
                      selectKeyAriaLabel: 'زر الاختيار',
                      navigateText: 'التنقل',
                      navigateUpKeyAriaLabel: 'زر التنقل لأعلى',
                      navigateDownKeyAriaLabel: 'زر التنقل لأسفل',
                      closeText: 'إغلاق',
                      closeKeyAriaLabel: 'esc'
                    }
                  }
                }
              }
            }
          }
        }
      },
      dir: 'rtl',
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home page', link: '/' },
    ],
    search: {
      provider: 'local'
    },
    // localeLinks: {
    //   text: 'Uzbek',
    //   items: [
    //     { text: 'Ўзбекча', link: 'https://oz.waffle.dev' },
    //     { text: 'English', link: 'https://en.waffle.dev' },
    //     { text: 'Русский', link: 'https://ru.waffle.dev' }
    //   ]
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
