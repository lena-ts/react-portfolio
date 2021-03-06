const ToBuyAppData = {
    id: 3,
    url: 'tobuy-app',
    title: <div>ToBuy:<br></br>Shopping List</div>,
    subtitle: <span><strong>Objective:</strong> Create app to help recollect items to buy</span>,
    icon_path: 'intro/app-icons/tobuy-icon.png',
    intro_screen_1_path: 'intro/intro-images/tobuy1.png',
    intro_screen_2_path: 'intro/intro-images/tobuy2.png',
    appstore_link: 'https://apps.apple.com/us/app/tobuy-shopping-list/id1489580128',
    prototype_link: 'https://lena-ts.github.io/tobuy-test/start.html',
    prototype_link_type: 'html',
    background_color: '#F0F4F7',
    description: <div><strong>Description:</strong> App that helps to track expenses<br></br>and display visual statistic by categories</div>,
    model: <div><strong>Model:</strong> Freemium, free with Ads and In-App<br></br>purchases </div>,
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
        font_name: "Poppins",
        letter_fill: 'conic-gradient(from 180deg at 50% 50%, #EEA4C3 0deg, #A7E4EC 65.63deg, #FDD7A6 150deg, #C4E4B6 226.87deg, #E9BCB8 301.88deg, #CACFD5 360deg)',
        colors: {
            primary: [
                "#2B2B2B",
                "#CACFD5",
                "#3CBB6E",
                "#26DD6E"
            ],
            secondary: [],
            additional: []
        }
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
        image: 'projects/tobuy/schema/schema.png'
    },
    ux : {
        image: 'projects/tobuy/ux/ux-flow.png'
    },
    ui : {
        image: 'projects/tobuy/ui/ui.png',
        website_img: 'projects/tobuy/ui/website.png',
        website_link: "https://justcode-apps.github.io/tobuy-app/",
        website_title: "ToBuy App landing Page",
        // screens: [
        //     'projects/tobuy/ui/screens/1.png',
        //     'projects/tobuy/ui/screens/2.png',
        //     'projects/tobuy/ui/screens/3.png',
        //     'projects/tobuy/ui/screens/4.png',
        //     'projects/tobuy/ui/screens/5.png',
        //     'projects/tobuy/ui/screens/6.png',
        //     'projects/tobuy/ui/screens/7.png',
        //     'projects/tobuy/ui/screens/8.png',
        //     'projects/tobuy/ui/screens/9.png',
        //     'projects/tobuy/ui/screens/10.png',
        //     'projects/tobuy/ui/screens/11.png',
        //     'projects/tobuy/ui/screens/12.png',
        //     'projects/tobuy/ui/screens/13.png',
        //     'projects/tobuy/ui/screens/14.png',
        //     'projects/tobuy/ui/screens/15.png',
        //     'projects/tobuy/ui/screens/16.png',
        //     'projects/tobuy/ui/screens/17.png',
        //     'projects/tobuy/ui/screens/18.png',
        //     'projects/tobuy/ui/screens/19.png',
        //     'projects/tobuy/ui/screens/20.png',
        //     'projects/tobuy/ui/screens/21.png',
        //     'projects/tobuy/ui/screens/22.png',
        //     'projects/tobuy/ui/screens/23.png',
        //     'projects/tobuy/ui/screens/24.png'
        // ]
    },
    ui_elements : {
        open_categories: 'projects/tobuy/ui/ui-elements/plus.png',
        product: [
            {
                id: 1,
                title: 'Regular',
                img: 'projects/tobuy/ui/ui-elements/product.png'
            },
            {
                id: 2,
                title: 'Active',
                img: 'projects/tobuy/ui/ui-elements/product-active.png'
            },
            {
                id: 3,
                title: 'Add image icons',
                img: 'projects/tobuy/ui/ui-elements/camera.png',
                img2: 'projects/tobuy/ui/ui-elements/camera-mini.png',
            }
        ],
        icons: [
            {
                id: 1,
                title: 'Delete',
                img: 'projects/tobuy/ui/ui-elements/delete.svg'
            },
            {
                id: 2,
                title: 'Buy',
                img: 'projects/tobuy/ui/ui-elements/buy.svg'
            },
            {
                id: 3,
                title: 'Add',
                img: 'projects/tobuy/ui/ui-elements/add.svg'
            },
            {
                id: 4,
                title: 'Share',
                img: 'projects/tobuy/ui/ui-elements/share.svg'
            },,
            {
                id: 5,
                title: 'Edit',
                img: 'projects/tobuy/ui/ui-elements/edit.svg'
            },
            {
                id: 6,
                title: 'Clear',
                img: 'projects/tobuy/ui/ui-elements/clear.svg'
            },
        ],
        category_item: {
            title: 'My Products',
            img: 'projects/tobuy/ui/ui-elements/my-products.png'
        },
        buttons: [
            {
                id: 1,
                title: 'Button SM: regular',
                img: 'projects/tobuy/ui/ui-elements/ok.png'
            },
            {
                id: 2,
                title: 'Button SM: active',
                img: 'projects/tobuy/ui/ui-elements/ok-active.png'
            }
        ],
        forms: [
            {
                id: 1,
                title: "Search Popup: unlimited features enabled",
                img: 'projects/tobuy/ui/ui-elements/search-popup.png'
            },
            {
                id: 2,
                title: "SM field: placeholder",
                img: 'projects/tobuy/ui/ui-elements/sm-field.png'
            },
            {
                id: 3,
                title: "SM field: filled",
                img: 'projects/tobuy/ui/ui-elements/sm-field-active.png'
            }
        ],
        popups: [
            {
                id: 1,
                title: "List actions",
                img: 'projects/tobuy/ui/ui-elements/list-actions-popup.png'
            },
            {
                id: 2,
                title: "Edit product",
                img: 'projects/tobuy/ui/ui-elements/edit-product-popup.png'
            },
            {
                id: 3,
                title: "Lists switcher",
                img: 'projects/tobuy/ui/ui-elements/multiple-lists.png'
            }
        ]
    },
    icon_screen: {
        icon: 'intro/app-icons/tobuy-icon.png',
        text: 'The main idea of an icon is a check point meaning product bought in shopping list.',
        img1: 'projects/tobuy/icon/icon_img1.png',
        img2: 'projects/tobuy/icon/icon_img2.png',
        env: 'projects/tobuy/icon/icon_env2.png'
    },
    tobuy_widgets: {
        screens: [
            'projects/tobuy/widgets/1.png',
            'projects/tobuy/widgets/2.png',
            'projects/tobuy/widgets/3.png',
            'projects/tobuy/widgets/4.png'
        ],
        large: [
            {
                title: 'Large: day mode',
                img: 'projects/tobuy/widgets/large1.png'
            },
            {
                title: 'Large empty: day mode',
                img: 'projects/tobuy/widgets/large3.png'
            },
            {
                title: 'Large: night mode',
                img: 'projects/tobuy/widgets/large2.png'
            },
            {
                title: 'Large empty: night mode',
                img: 'projects/tobuy/widgets/large4.png'
            }
        ],
        medium: [
            {
                title: 'Medium: day mode',
                img: 'projects/tobuy/widgets/medium1.png'
            },
            {
                title: 'Medium empty: day mode',
                img: 'projects/tobuy/widgets/medium3.png'
            },
            {
                title: 'Medium: night mode',
                img: 'projects/tobuy/widgets/medium2.png'
            },
            {
                title: 'Medium empty: night mode',
                img: 'projects/tobuy/widgets/medium4.png'
            }
        ],
        small: [
            {
                title: 'Small: day mode',
                img: 'projects/tobuy/widgets/small1.png'
            },
            {
                title: 'Empty: day mode',
                img: 'projects/tobuy/widgets/small3.png'
            },
            {
                title: 'Small: night mode',
                img: 'projects/tobuy/widgets/small2.png'
            },
            {
                title: 'Empty: night mode',
                img: 'projects/tobuy/widgets/small4.png'
            }
        ]
    },
    watches: {
        regular: [
            {
                title: 'List: day mode',
                img: 'projects/tobuy/watches/1.png'
            },
            {
                title: 'List: night mode',
                img: 'projects/tobuy/watches/2.png'
            }
        ],
        empty: [
            {
                title: 'Empty: day mode',
                img: 'projects/tobuy/watches/3.png'
            },
            {
                title: 'Empty: night mode',
                img: 'projects/tobuy/watches/4.png'
            }
        ],
        icon: [
            {
                title: 'Icon: home screen',
                img: 'projects/tobuy/watches/5.png'
            },
            {
                title: 'Icon',
                img: 'projects/tobuy/watches/icon.png'
            }
        ],
        icon_muted: [
            {
                title: 'Icon: clock face',
                img: 'projects/tobuy/watches/6.png'
            },
            {
                title: 'Icon',
                img: 'projects/tobuy/watches/icon-mute.png'
            }
        ],
        movie: 'projects/tobuy/watches/movie.mp4',
        promo: 'projects/tobuy/watches/watch_promo.png'
    },
    appstore_screens: {
        screens:     [
            'projects/tobuy/appstore_screens/1.png',
            'projects/tobuy/appstore_screens/2.png',
            'projects/tobuy/appstore_screens/3.png',
            'projects/tobuy/appstore_screens/4.png',
            'projects/tobuy/appstore_screens/5.png',
        ],
        title: "ToBuy — Shopping List",
        subtitle: "Simple grocery list"
    },
}

export default ToBuyAppData