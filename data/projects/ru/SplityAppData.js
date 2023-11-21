const RuSplityAppData = {
    id: 4,
    url: 'splity-app',
    title: <div>Splity:<br></br>расходы группы</div>,
    subtitle: <span>Смотрите, кто кому должен</span>,
    icon_path: '../intro/app-icons/splity-icon.png',
    intro_screen_1_path: '../intro/intro-images/splity1.png',
    intro_screen_2_path: '../intro/intro-images/splity2.png',
    appstore_link: 'https://apps.apple.com/us/app/splity-group-expenses/id1512670632',
    // prototype_link: 'https://lena-ts.github.io/splitty_prototype/start.html',
    prototype_link: '',
    prototype_link_type: 'html',
    background_color: '#E8EBF2',
    downloads: '9.2K',
    downloads_text: "установок",
    reviews: '157',
    reviews_text: "отзывов",
    description: '',
    model: '',
    competitors: [
        {
            case: 1,
            title: "1. Splitwise App",
            pros: [
                "Общие группы, синхронизация",
                "Несколько групп",
                "Активность, параметры чата",
                "Добавить групповые фотографии, фотографии расходов"
            ],
            cons: [
                "Сложный UX",
                "Элементы пользовательского интерфейса очень плотные",
                "Пользовательский интерфейс выглядит устаревшим",
                "Слишком много мелких текстов",
                "Множество вариантов заполнения создают когнитивную нагрузку"
            ],
            images: [
                '../projects/splity/cases/case1_1.png',
                '../projects/splity/cases/case1_2.png',
            ]
        },
        {
            case: 2,
            title: "2. Finsplit App",
            pros: [
                "Отличительные значки групп",
                "Чистый пользовательский интерфейс",
                "Общие группы, синхронизация",
                "Различать информацию о долгах",
            ],
            cons: [
                "Сложный экран добавления расходов",
                "Множество вариантов заполнения создают когнитивную нагрузку",
                "Слишком много мелких текстов в общем интерфейсе",
            ],
            images: [
                '../projects/splity/cases/case2_1.png',
                '../projects/splity/cases/case2_2.png',
            ]
        },
        {
            case: 3,
            title: "3. Split App",
            pros: [
                "Минималистичный пользовательский интерфейс",
                "Очистить экран расходов",
                "Четко видеть, кто кому должен",
                "Общие группы, синхронизация",
            ],
            cons: [
                "Плохие контрасты",
                "Элементы пользовательского интерфейса очень плотные"
            ],
            images: [
                '../projects/splity/cases/case3_1.png',
                '../projects/splity/cases/case3_2.png',
            ]
        }
    ],
    ux: {
        image: '../projects/splity/ux/ux-flow.png',
        user_persona: [
            {
                id: 1,
                img:'../projects/splity/ux/user1.png',
                sex: 'Мужчина',
                age: '29',
                situation: "Путешествует с подругой и еще двумя друзьями",
                problem: 'Когда мы снимали дом в Португалии, я платил за его аренду, а ребята платили за прокат машины. Сложно все рассчитать на ходу',
                goals: 'Чтобы стало известно, кто кому в конце концов должен',
            },
            {
                id: 2,
                img:'../projects/splity/ux/user2.png',
                sex: 'Женщина',
                age: '23',
                situation: "Travel with friend",
                problem: 'Someone often pays for both and it’s a mess of payments and I can’t remember \n' +
                    '                    who pays for what',
                goals: 'Keep track of all expenses'
            },
            {
                id: 3,
                img:'../projects/splity/ux/user3.png',
                sex: 'Женщина',
                age: '27',
                situation: "Share a room in Los Angeles with friend",
                problem: 'Sometime my roommate pays bills, sometimes I do that. We fix all the payments \n' +
                    '                    on a paper sheet, but once we get lost this sheet and it was such a problem',
                goals: 'To keep track of payments'
            },
            {
                id: 4,
                img:'../projects/splity/ux/user4.png',
                sex: 'Мужчина',
                age: '28',
                situation: "Travel with group of 6 to 8 people",
                problem: 'When we got a trip to Europe by car and there were situations that the driver paid \n' +
                    '                    for toll roads. Also I paid for the villa that we rent for all the group',
                goals: 'To track expenses and see who owes whom'
            }
        ]
    },
    schema: {
        image: '../projects/splity/schema/schema.png',
    },
    visual_identification: {
        title: "Визуальный стиль",
        subtitle:"Типографика, цвета",
        typography_title: "Типографика",
        colors_title: "Цвета",
        additional_colors_title: "Дополнительные цвета",
        icons_colors: "Цвета иконок",
        font_name: "Helvetica",
        letter_fill: "#2b2b2b",
        colors: {
            primary: [
                "#2B2B2B",
                "#FFFFFF",
                "#808080"
            ],
            secondary: [
                "#FB4873",
                "#D169BE",
                "#486FFB",
                "#36ADC6",
                "#5CAC4C",
                "#97D62A",
                "#F7C92E",
                "#F2AC28"
            ],
            additional: [
                "#F04848",
                "#5CAC4C"
            ]
        }
    },
    ui : {
        image: '../projects/splity/ui/ui.png',
        elements: '../projects/splity/ui/ui_elements.png'
    },
    ui_elements: {
        button_add_group: '../projects/splity/ui/ui-elements/button_add_group.png',
        button_m_pair: '../projects/splity/ui/ui-elements/button_m_pair.png',
        button_s_pair: '../projects/splity/ui/ui-elements/button_s_pair.png',
        colors: '../projects/splity/ui/ui-elements/colors.png',
        debts_item: '../projects/splity/ui/ui-elements/debts_item.png',
        edit_sums: '../projects/splity/ui/ui-elements/edit_sums.png',
        expense_item: '../projects/splity/ui/ui-elements/expense-item.png',
        filter_item: '../projects/splity/ui/ui-elements/filter-item.png',
        group_item: '../projects/splity/ui/ui-elements/group-item.png',
        participants_checked: '../projects/splity/ui/ui-elements/participants_checked.png',
        participants_unchecked: '../projects/splity/ui/ui-elements/participants_unchecked.png',
        popup_expenses: '../projects/splity/ui/ui-elements/popup_expenses.png',
        popup_participant: '../projects/splity/ui/ui-elements/popup_participant.png',
        tabs: '../projects/splity/ui/ui-elements/tabs.png',
        user_regular: '../projects/splity/ui/ui-elements/user_regular.png',
        col1: [
            {
                id: 1,
                text: 'Фильтр',
                img: '../projects/splity/ui/ui-elements/filter-item.png',
            },
            {
                id: 2,
                text: 'Расход',
                img: '../projects/splity/ui/ui-elements/expense-item.png',
            },
            {
                id: 3,
                text: 'Долги',
                img: '../projects/splity/ui/ui-elements/debts-item.png',
            },
            {
                id: 4,
                text: 'Выбрать участника: не выбран',
                img: '../projects/splity/ui/ui-elements/participants_unchecked.png',
            },
            {
                id: 5,
                text: 'Выбрать участника: выбран',
                img: '../projects/splity/ui/ui-elements/participants_checked.png',
            }
        ],
        col2: [
            {
                id: 1,
                text: 'Попап: расходы',
                img: '../projects/splity/ui/ui-elements/popup_expenses.png',
            },
            {
                id: 2,
                text: 'Редактировать сумму',
                img: '../projects/splity/ui/ui-elements/edit_sums.png',
            }
        ],
        col3: [
            {
                id: 1,
                text: 'Попап: участник',
                img: '../projects/splity/ui/ui-elements/popup_participant.png',
            },
            {
                id: 2,
                text: 'Цвет группы: выбран',
                img: '../projects/splity/ui/ui-elements/colors.png',
            },
            {
                id: 3,
                text: 'Табы',
                img: '../projects/splity/ui/ui-elements/tabs.png',
            },
            {
                id: 4,
                text: 'Кнопка: добавить группу',
                img: '../projects/splity/ui/ui-elements/button_add_group.png',
            },
            {
                id: 5,
                text: 'Кнопка S: пара',
                img: '../projects/splity/ui/ui-elements/button_s_pair.png',
            },
            {
                id: 6,
                text: 'Кнопка M: пара',
                img: '../projects/splity/ui/ui-elements/button_m_pair.png',
            }
        ],
        icons: [
            {
                id: 1,
                text: 'Удалить',
                icon: '../projects/splity/ui/ui-elements/icon_delete.svg'
            },
            {
                id: 2,
                text: 'Готово',
                icon: '../projects/splity/ui/ui-elements/icon_done.svg',
            },
            {
                id: 3,
                text: 'Плюс',
                icon: '../projects/splity/ui/ui-elements/icon_plus.svg',
            },
            {
                id: 4,
                text: 'Контакты',
                icon: '../projects/splity/ui/ui-elements/icon_contacts.svg'
            }
        ]
    },
    appstore_screens: {
        screens:     [
            '../projects/splity/appstore_screens/1.png',
            '../projects/splity/appstore_screens/2.png',
            '../projects/splity/appstore_screens/3.png',
            '../projects/splity/appstore_screens/4.png',
            '../projects/splity/appstore_screens/5.png',
        ],
        title: "Splity — расходы группы",
        subtitle: "Кто кому должен"
    },
}

export default RuSplityAppData