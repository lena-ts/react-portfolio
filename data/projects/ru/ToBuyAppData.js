const RuToBuyAppData = {
    id: 3,
    url: 'tobuy-app',
    title: <div>ToBuy:<br></br>cписок покупок</div>,
    subtitle: <span>Какие продукты купить в магазине</span>,
    icon_path: '../intro/app-icons/tobuy-icon.png',
    intro_screen_1_path: '../intro/intro-images/tobuy3.png',
    intro_screen_2_path: '../intro/intro-images/tobuy4.png',
    appstore_link: 'https://apps.apple.com/us/app/tobuy-shopping-list/id1489580128',
    playmarket_link: 'https://play.google.com/store/apps/details?id=com.tobuyapp.android',
    // prototype_link: 'https://lena-ts.github.io/tobuy-test/start.html',
    prototype_link_type: 'html',
    background_color: '#F0F4F7',
    downloads: '111K',
    downloads_text: "установок",
    reviews: '1.3K',
    reviews_text: "отзывов",
    description: '',
    model: <div></div>,
    competitors: [
        {
            case:1,
            title: "Case 1. Bring App",
            pros: [
                "Authentic product images",
                "Large catalog of products",
                "Search field to find products",
                "Apple watch support",
                "iPad support",
                "iOS 14 widgets",
                "Multiple lists",
                "Shared lists lists"
            ],
            cons: [
                "Not very visual, items are not distinguished",
                "Need to scroll to see all categories",
                "Dark theme only available",
                "Registration process slows down user experience"
            ],
            images: [
                'projects/tobuy/cases/case1_1.png',
                'projects/tobuy/cases/case1_2.png',
                'projects/tobuy/cases/case1_3.png',
            ]
        },
        {
            case:2,
            title: "Case 2. Listonic App",
            pros: [
                "Small visual elements complements text",
                "Large catalog of products",
                "Multiple lists"
            ],
            cons: [
                "Not very visual, hard distinguished items",
                "Long text names creates cognitive load",
                "Poor UI contrasts"
            ],
            images: [
                'projects/tobuy/cases/case2_1.png',
                'projects/tobuy/cases/case2_2.png',
            ]
        },
        {
            case:3,
            title: "Case 3. Shoppie App",
            pros: [
                "Clean and colorful design",
                "Very visual items, easy to tap",
                "Add products to favourites",
                "More or less functionality"
            ],
            cons: [
                "Large item images cause long scrolling",
                "Checked items remain in list and take space",
                "Categories break takes much space and cause \n" +
                "long scrolling",
                "New items adding in separate screen"
            ],
            images: [
                'projects/tobuy/cases/case3_1.png',
                'projects/tobuy/cases/case3_2.png',
            ]
        }
    ],
    visual_identification: {
        title: "Визуальный стиль",
        subtitle:"Типографика, цвета",
        typography_title: "Типографика",
        colors_title: "Цвета",
        additional_colors_title: "Дополнительные цвета",
        font_name: "Poppins",
        letter_fill: 'conic-gradient(from 180deg at 50% 50%, #EEA4C3 0deg, #A7E4EC 65.63deg, #FDD7A6 150deg, #C4E4B6 226.87deg, #E9BCB8 301.88deg, #CACFD5 360deg)',
        colors: {
            primary: [
                "#27C967",
                "#2B2B2B",
                "#CACFD5",
            ],
            secondary: [
                "#C5E4F8",
                "#F3CE80",
                "#A6D586",
                "#CDC8BF",
                "#F3AAD2",
                "#E88798",
                "#83C1E3",
                "#FFF1CE",
                "#97DEDA",
                "#E9D0F2",
                "#FBCFE8",
                "#FBE5CE",
                "#F3CCCD",
                "#D5C8FD",
            ],
            additional: []
        },
        ds_image: 'projects/tobuy/ui/design-system.png',
    },
    interview: {
        answers1: [
            {
                id: 1,
                body: "I use Google Docs and share list with my husband",
                person: "Woman, 33 y.o.",
                status: "Housewife",
                result_class: "use-smth"
            },
            {
                id: 2,
                body: "I buy few items usually so I don’t have to recollect or fix something",
                person: "Man, 29 y.o.",
                status: "Living alone",
                result_class: "keep-in-mind"
            },
            {
                id: 3,
                body: "I use Bring App, but sometimes it’s not easy to find items since they \n" +
                    "are look the same ",
                person: "Woman, 24 y.o.",
                status: "Living alone",
                result_class: "use-smth"
            }
        ],
        answers2: [
            {
                id: 5,
                body: "I use mobile app to create shopping list, and open it at the store",
                person: "Woman, 24 y.o.",
                status: "Living alone",
                result_class: "use-smth"
            },
            {
                id: 4,
                body: "I usually fix items on paper sheet",
                person: "Woman, 27 y.o.",
                status: "Living with boyfriend",
                result_class: "use-smth"
            },
            {
                id: 6,
                body: "Well, I think I just keep in mind all the stuff",
                person: "Man, 24 y.o.",
                status: "Student",
                result_class: "keep-in-mind"
            }
        ]

    },
    schema: {
        image: '../projects/tobuy/schema/schema.png'
    },
    ux : {
        image: '../projects/tobuy/ux/ux-flow.png'
    },
    ui : {
        title: "Интерфейс и продуктовые кейсы",
        subtitle: "Экраны ниже соответствуют актуальной версии приложения в AppStore",
        // image: 'projects/tobuy/ui/ui.png',
        website_img: '../projects/tobuy/ui/website.png',
        website_link: "https://www.dobraapps.com/tobuy/",
        website_title: "Посадочная страница ToBuy",
        screens: [
            '../projects/tobuy/ui/screens/1.png',
            '../projects/tobuy/ui/screens/2_2.png',
            '../projects/tobuy/ui/screens/3_3.png',
            '../projects/tobuy/ui/screens/4.png',
            '../projects/tobuy/ui/screens/5_5.png',
            '../projects/tobuy/ui/screens/6.png',
            '../projects/tobuy/ui/screens/7.png',
            '../projects/tobuy/ui/screens/8_8.png',
            '../projects/tobuy/ui/screens/9.png',
            '../projects/tobuy/ui/screens/10_1.png',
            // 'projects/tobuy/ui/screens/10_2.png',
            '../projects/tobuy/ui/screens/11_1.png',
            // 'projects/tobuy/ui/screens/11_2.png',
            '../projects/tobuy/ui/screens/11_3.png',
            '../projects/tobuy/ui/screens/17_1.png',
            '../projects/tobuy/ui/screens/17_2.png',
            '../projects/tobuy/ui/screens/17_3.png',
            // 'projects/tobuy/ui/screens/18_3.png',
            // 'projects/tobuy/ui/screens/18_5.png',
            // 'projects/tobuy/ui/screens/18_4.png',
            // 'projects/tobuy/ui/screens/18_1.png',
            // 'projects/tobuy/ui/screens/18_2.png',
            // 'projects/tobuy/ui/screens/s_2.png',
            // 'projects/tobuy/ui/screens/s_1.png',
            // 'projects/tobuy/ui/screens/s_2.png',
            // 'projects/tobuy/ui/screens/s_3.png',
            // 'projects/tobuy/ui/screens/s_4.png',
            // 'projects/tobuy/ui/screens/s_0.png',
            '../projects/tobuy/ui/screens/11.png',
            '../projects/tobuy/ui/screens/12.png',
            '../projects/tobuy/ui/screens/13.png',
            '../projects/tobuy/ui/screens/14.png',
            '../projects/tobuy/ui/screens/15.png',
            // 'projects/tobuy/ui/screens/16.png',
            // 'projects/tobuy/ui/screens/17.png',
            // 'projects/tobuy/ui/screens/18.png',
            // 'projects/tobuy/ui/screens/19.png',
            // 'projects/tobuy/ui/screens/20.png',
            // 'projects/tobuy/ui/screens/21.png',
            // 'projects/tobuy/ui/screens/22.png',
            // 'projects/tobuy/ui/screens/23.png',
            // 'projects/tobuy/ui/screens/24.png'
        ]
    },
    ui_elements : {
        components: '../projects/tobuy/ui/ui-elements/components.png',
        open_categories: '../projects/tobuy/ui/ui-elements/plus.png',
        product: [
            {
                id: 1,
                title: 'Regular',
                img: '../projects/tobuy/ui/ui-elements/product.png'
            },
            {
                id: 2,
                title: 'Active',
                img: '../projects/tobuy/ui/ui-elements/product-active.png'
            },
            {
                id: 3,
                title: 'Add image icons',
                img: '../projects/tobuy/ui/ui-elements/camera.png',
                img2: '../projects/tobuy/ui/ui-elements/camera-mini.png',
            }
        ],
        icons: [
            {
                id: 1,
                title: 'Delete',
                img: '../projects/tobuy/ui/ui-elements/delete.svg'
            },
            {
                id: 2,
                title: 'Buy',
                img: '../projects/tobuy/ui/ui-elements/buy.svg'
            },
            {
                id: 3,
                title: 'Add',
                img: '../projects/tobuy/ui/ui-elements/add.svg'
            },
            {
                id: 4,
                title: 'Share',
                img: '../projects/tobuy/ui/ui-elements/share.svg'
            },,
            {
                id: 5,
                title: 'Edit',
                img: '../projects/tobuy/ui/ui-elements/edit.svg'
            },
            {
                id: 6,
                title: 'Clear',
                img: '../projects/tobuy/ui/ui-elements/clear.svg'
            },
        ],
        category_item: {
            title: 'My Products',
            img: '../projects/tobuy/ui/ui-elements/my-products.png'
        },
        buttons: [
            {
                id: 1,
                title: 'Button SM: regular',
                img: '../projects/tobuy/ui/ui-elements/ok.png'
            },
            {
                id: 2,
                title: 'Button SM: active',
                img: '../projects/tobuy/ui/ui-elements/ok-active.png'
            }
        ],
        forms: [
            {
                id: 1,
                title: "Search Popup: unlimited features enabled",
                img: '../projects/tobuy/ui/ui-elements/search-popup.png'
            },
            {
                id: 2,
                title: "SM field: placeholder",
                img: '../projects/tobuy/ui/ui-elements/sm-field.png'
            },
            {
                id: 3,
                title: "SM field: filled",
                img: '../projects/tobuy/ui/ui-elements/sm-field-active.png'
            }
        ],
        popups: [
            {
                id: 1,
                title: "List actions",
                img: '../projects/tobuy/ui/ui-elements/list-actions-popup.png'
            },
            {
                id: 2,
                title: "Edit product",
                img: '../projects/tobuy/ui/ui-elements/edit-product-popup.png'
            },
            {
                id: 3,
                title: "Lists switcher",
                img: '../projects/tobuy/ui/ui-elements/multiple-lists.png'
            }
        ]
    },
    app_idea: {
        title: "Идея и мудборд",
        subtitle: 'Идея заключалась в том, чтобы создать красивое и удобное приложение для составления списка покупок. ' +
            'Я проанализировала топовые приложения в AppStore и составила мудборд. ',
        text1: <div><strong>Топовые приложения.</strong> Большинство приложений выглядят очень просто, но некоторые из них выделяются за счет сетки с большими картинками. В них удобно нажимать. Поэтому я смотрела в сторону сетки.</div>,
        img1: '../projects/tobuy/features/Competitors.png',
        text2: <div><strong>Мудборд.</strong> Настроение — разные цвета, закругленные углы, чистота и воздух.</div>,
        img2: '../projects/tobuy/features/Moodboard.png',
        text3: <div><strong>Result.</strong> I picked color for every category. Also I decided to group products in grid by color, not by title. It will help to see more products at one screen. First item and color is a hint what category this is.</div>,
        img3: '../projects/tobuy/features/Result.png',
    },
    features: [
        {
            id: 1,
            subtitle: "AБ тест",
            title: 'Годовая подписка против пожизненной покупки',
            text: <div>
                <b>Гипотеза.</b> Люди воспринимают годовую подписку как пожизненную покупку.<br/><br/>
                <b>Зачем.</b> Хочется зарабатывать на постоянной основе.
               Внедрение классической схемы выбора месячной или годовой подписки показало, что люди подписываются на дешёвую месячную подписку и быстро отписываются. Поэтому долгое время была выгодна пожизненная покупка.
               <br/><br/>
                <b>Результат.</b> Я предложила провести АБ тест. Сравнить годовую подписку и пожизненную покупку с одинаковой ценой.
                Гипотеза о том, что люди воспринимают их равноценно подтвердилась.  Годовая подписка поможет заработать вдвойне через год.
            </div>,
            screens: [
                '../projects/tobuy/features/subscription1.png',
                '../projects/tobuy/features/subscription2.png'
            ],
            emodji: [
                <div>❌</div>,
                <div>✅</div>,
            ],

            color: "#F0F4F7",
            borderTop: "1px solid #ccc",
        },
        {
            id: 5,
            subtitle: "эксперимент",
            title: <div>Увеличение количества отзывов<br/>в AppStore с помощью баннера<br/>с просьбой</div>,
            text: <div><b>Гипотеза.</b> Если людей вежливо попросить оставить отзыв, они это сделают. <br/><br/>
                <b>Зачем.</b> Количество отзывов влияет на позицию приложения в AppStore.
                Также является социальным доказательством при принятии пользователем решения об установке приложения. <br/><br/>
                <b>Результат.</b> Внедрение такого баннера увеличило количество отзывов. Сейчас приложение получает 2-3 текстовых отзыва в день. Без баннера такой результат достигался за месяц.<br/><br/>
                <b>Как работает.</b> Баннер показвается пользователям на 3-й заход в приложение. Предполагается, что пользователь уже познакомился и начал пользоваться.
            </div>,
            screens: [
                '../projects/tobuy/features/ReviewBanner1.png',
                '../projects/tobuy/features/ReviewBanner2.png'
            ],
            emodji: [
            ],

            color: "#F0F4F7",
            borderTop: "1px solid #ccc",
        },
        {
            id: 2,
            subtitle: "эксперимент",
            title: 'Увеличение трафика с помощью рецептов',
            text: <div>
                <b>Гипотеза.</b> Если в приложение добавить рецепты, увеличится трафик, вовлеченность и ретеншен. <br/><br/>
                <b>Зачем.</b> Хочется создать привычку, чтобы пользователи чаще пользовались приложением.  <br/><br/>
                <b>Результат.</b> Из аналитики видно, что люди создают рецепты и совершают подписку из таба рецепты. <br/><br/>
                <b>Как работает.</b> Люди могут создавать собственные рецепты и добавлять продукты из них в список покупок
            </div>,
            screens: [
                '../projects/tobuy/features/recipes1.png',
                '../projects/tobuy/features/recipes2.png'
            ],
            emodji: [
            ],

            color: "#F0F4F7",
            borderTop: "1px solid #ccc",
        },
        {
            id: 3,
            subtitle: "Продакшен",
            title: 'Шаблоны как итерация рецептов',
            text: <div>
                <b>Исследование.</b> Пользователи присылали сообщения, что хотели бы добавлять часто используемые продукты в список группой. <br/><br/>
                <b>Зачем.</b> Запрос от пользователей. Шаблоны могут стать итерацией рецептов, так как содержат группу продуктов. <br/><br/>
                <b>Результат.</b> Пользователи не очень актвно используют шаблоны. Тем не менее интерфейс шаблонов был использован при разработке рецептов. Это сэкономило время разработки. <br/><br/>
                <b>Как работает.</b> Пользователи могут создать шаблон из текущего списка. Или создать новый и использовать для добавления в список часто используемых продуктов. <br/><br/>
            </div>,
            screens: [
                '../projects/tobuy/features/templates2.png',
                '../projects/tobuy/features/templates1.png'
            ],
            emodji: [
            ],

            color: "#F0F4F7",
            borderTop: "1px solid #ccc",
        },
        {
            id: 3,
            subtitle: "Предстоящий эксперимент",
            title: `Шаги рецепта на основе продуктов`,
            text: <div>
                <b>Гипотеза.</b> Шаги на основе продуктов удобнее, чем шаги с цифрами <br/><br/>
                <b>Исследование.</b> Я проанализировала рецепты нескольких человек, написанные от руки. Люди записывали их как продукт и что с ним делать. <br/><br/>
                <b>Как работает.</b> Человек добавляет продукты в рецепт и может записать, что с ними делать.<br/><br/>
                <b>Результат.</b> Пока не известен. Ожидаем качественный фидбек в виде отзыва от пользователей<br/><br/>
            </div>,
            screens: [
                '../projects/tobuy/features/recipes3.png',
                '../projects/tobuy/features/recipes4.png'
            ],
            emodji: [
            ],

            color: "#F0F4F7",
            borderTop: "1px solid #ccc",
        },
        {
            id: 4,
            subtitle: "UPCOMING EXPERIMENT",
            title: `Upgrade tab expecting to increase subscription rate`,
            text: <div> I analyzed some handwritten recipes and saw that people focus on the ingredients rather than the number of steps. So I suggested to look at recipes from position of ingredients that are used during cooking, not from position of numbers "Step 1", "Step 2" etc. People also can mark as "done" every ingredient action to be sure where they stopped.<br/><br/>
                What we expect from this feature is to collect user feedback and Firebase analytics on the added steps to see if the solution works.
                {/*<img src='../projects/tobuy/features/recipes5.png' className="recipe_img"/>*/}
            </div>,
            screens: [
                '../projects/tobuy/features/Upgrade.png',
                '../projects/tobuy/features/Upgrade_Team.png'
            ],
            emodji: [
            ],

            color: "#F0F4F7",
            borderTop: "1px solid #ccc",
        },
        {
            id: 6,
            subtitle: "UPCOMING EXPERIMENT",
            title: `Bonus cards`,
            text: <div> I analyzed some handwritten recipes and saw that people focus on the ingredients rather than the number of steps. So I suggested to look at recipes from position of ingredients that are used during cooking, not from position of numbers "Step 1", "Step 2" etc. People also can mark as "done" every ingredient action to be sure where they stopped.<br/><br/>
                What we expect from this feature is to collect user feedback and Firebase analytics on the added steps to see if the solution works.
            </div>,
            video: [
                '../../projects/tobuy/features/cards.mp4'
            ],
            emodji: [
            ],

            color: "#F0F4F7",
            borderTop: "1px solid #ccc",
        }
    ],
    icon_screen: {
        title: "Иконка",
        icon: '../intro/app-icons/tobuy-icon.png',
        text: 'Идея иконки — галка чеклиста стилизованная как продукт',
        img: '../projects/tobuy/icon/icon-story3.png',
        img1: '../projects/tobuy/icon/icon_img1.png',
        img2: '../projects/tobuy/icon/icon_img2.png',
        env: '../projects/tobuy/icon/icon_env2.png'
    },
    tobuy_widgets: {
        screens: [
            '../projects/tobuy/widgets/1.png',
            '../projects/tobuy/widgets/3.png',
            '../projects/tobuy/widgets/2.png',
            '../projects/tobuy/widgets/4.png'
        ],
        large: [
            {
                title: 'Большой: светлая тема',
                img: '../projects/tobuy/widgets/large1.png'
            },
            {
                title: 'Большой пустой: светлая тема',
                img: '../projects/tobuy/widgets/large3.png'
            },
            {
                title: 'Большой: тёмная тема',
                img: '../projects/tobuy/widgets/large2.png'
            },
            {
                title: 'Большой пустой: тёмная тема',
                img: '../projects/tobuy/widgets/large4.png'
            }
        ],
        medium: [
            {
                title: 'Средний: светлая тема',
                img: '../projects/tobuy/widgets/medium1.png'
            },
            {
                title: 'Средний пусто: светлая тема',
                img: '../projects/tobuy/widgets/medium3.png'
            },
            {
                title: 'Средний: тёмная тема',
                img: '../projects/tobuy/widgets/medium2.png'
            },
            {
                title: 'Средний пустой: тёмная тема',
                img: '../projects/tobuy/widgets/medium4.png'
            }
        ],
        small: [
            {
                title: 'Маленький: светлая тема',
                img: '../projects/tobuy/widgets/small1.png'
            },
            {
                title: 'Пустой: светлая тема',
                img: '../projects/tobuy/widgets/small3.png'
            },
            {
                title: 'Маленький: тёмная тема',
                img: '../projects/tobuy/widgets/small2.png'
            },
            {
                title: 'Пустой: тёмная тема',
                img: '../projects/tobuy/widgets/small4.png'
            }
        ]
    },
    watches: {
        regular: [
            {
                title: 'Список: светлая тема',
                img: '../projects/tobuy/watches/1.png'
            },
            {
                title: 'Выбор списка: светлая тема',
                img: '../projects/tobuy/watches/3.png'
            }
        ],
        empty: [
            {
                title: 'Несколько списков: светлая тема',
                img: '../projects/tobuy/watches/3_1.png'
            },
            {
                title: 'Список: dark',
                img: '../projects/tobuy/watches/2.png'
            }
        ],
        icon: [
            {
                title: 'Выбор списка: тёмная тема',
                img: '../projects/tobuy/watches/4.png'
            },
            {
                title: 'Несколько списков: тёмная тема',
                img: '../projects/tobuy/watches/4_1.png'
            }
        ],
        icon_muted: [
            {
                title: 'Icon: clock face',
                img: '../projects/tobuy/watches/6.png'
            },
            {
                title: 'Иконка',
                img: '../projects/tobuy/watches/icon-mute.png'
            }
        ],
        movie: '../projects/tobuy/watches/movie.mp4',
        promo: [
            '../projects/tobuy/watches/watch_promo2.png',
            '../projects/tobuy/watches/watch_promo4.png',
        ]
    },
    appstore_screens: {
        screens:     [
            '../projects/tobuy/appstore_screens/1.png',
            '../projects/tobuy/appstore_screens/2.png',
            '../projects/tobuy/appstore_screens/3.png',
            '../projects/tobuy/appstore_screens/4.png',
            '../projects/tobuy/appstore_screens/5.png',
        ],
        title: "ToBuy — список покупок",
        subtitle: "Покупайте вместе с семьей"
    },
    // events: {
    //     images: [
    //         'projects/tobuy/events/1.png',
    //         'projects/tobuy/events/2.png',
    //         'projects/tobuy/events/3.jpg',
    //     ]
    // }
}

export default RuToBuyAppData