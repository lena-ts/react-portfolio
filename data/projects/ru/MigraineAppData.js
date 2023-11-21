const RuMigraineAppData = {
    id: 8,
    url: 'migraine-tracker-app',
    title: <div>MiG: дневник головной боли</div>,
    subtitle: <span>Отмечайте боли, выясняйте триггеры  · <span style={{color: "#868686"}}>Недавно запущен</span></span>,
    icon_path: '../intro/app-icons/migraine-icon.png',
    intro_screen_1_path: '../intro/intro-images/migraine_1.png',
    intro_screen_2_path: '../intro/intro-images/migraine2.png',
    appstore_link: 'https://apps.apple.com/us/app/migraine-tracker-mig/id6446125528',
    preorder: false,
    downloads: '1.2K',
    downloads_text: "установок",
    reviews: '11',
    reviews_text: "отзывов",
    background_color: '#E8EBF2',
    work_in_progress: false,
    ui : {
        subtitle: "Экраны интерфейса отражают текущую версию приложения в AppStore",
        screens: [
            '../projects/migraine/ui/screens/1.png',
            '../projects/migraine/ui/screens/2.png',
            '../projects/migraine/ui/screens/3.png',
            '../projects/migraine/ui/screens/4.png',
            '../projects/migraine/ui/screens/5.png',
            '../projects/migraine/ui/screens/6.png',
            '../projects/migraine/ui/screens/7_7.png',
            '../projects/migraine/ui/screens/8_5.png',
            '../projects/migraine/ui/screens/9_2.png',
            '../projects/migraine/ui/screens/10.png',
            '../projects/migraine/ui/screens/11.png',
            '../projects/migraine/ui/screens/12.png',
            '../projects/migraine/ui/screens/13.png',
            '../projects/migraine/ui/screens/14.png',
            '../projects/migraine/ui/screens/15.png',
        ]
    },
    app_idea: {
        subtitle: "Миллионы людей борются с мигренью, но не могут найти помощь, которая им нужна. Большинство из них просто не получают информациио своей болезни. Именно поэтому мы запустили наш проект — чтобы обратить внимание решить проблему и помочь людям изменить свою жизнь."
    },
    questions: [
        {
            title: "Для кого это приложение",
            text: "Хронические мигрени, которые записывают приступы",
            img: "",
        },
        {
            title: "Какую проблему решает приложение",
            text: "Уменьшите частоту атак",
            img: "",
        },
        {
            title: "Как люди решают эту проблему сейчас",
            text: "Они используют бумажные дневники или приложения",
            img: "../../projects/migraine/ui/paper_diary.jpg",
        },
        {
            title: "С точки зрения срока выполнения, какую работу выполняет приложение?",
            text: "Он находит корреляцию между атаками и триггерами, обучает мигреней",
            img: "",
        },
    ],
    interview: [
        {
            id: 1,
            q: "Как долго вы страдаете от головных болей?",
            a: "Страдаю головными болями с детства, лет с 6-7."
        },
        {
            id: 2,
            q: "Как часто у вас болит голова?",
            a: "У меня болит голова примерно 3-4 раза в неделю и примерно 8-12 раз в месяц."
        },
        {
            id: 3,
            q: "Вы ведете дневник головной боли??",
            a: "На самом деле это не дневник, а скорее календарь, в котором я записываю даты, когда у меня болит голова."
        },
        {
            id: 4,
            q: "Что вы отмечаете в дневнике?",
            a: "Как я уже сказал, я записываю даты, когда у меня болит голова, а также у меня есть отдельный календарь, в котором я записываю медиации."
        },
        {
            id: 5,
            q: "Как дневник помогает вам?",
            a: "Это помогает мне видеть тенденции, знать, становится ли ситуация лучше или хуже, и я буду знать, стоит ли мне что-то делать с головными болями или нет."
        },
        {
            id: 6,
            q: "Как вы пришли к мысли, что вам нужен дневник??",
            a: "Головные боли участились, и я решила, что с этим нужно что-то делать. Мне нужно уменьшить количество головных болей, и дневник поможет мне обнаружить триггеры и посмотреть, подойдет ли мне лечение или нет."
        },
        {
            id: 7,
            q: "Знаете ли вы причины, которые приводят к головным болям??",
            a: "В настоящее время я не знаю всех своих триггеров. Вот почему мне нужен дневник, в котором я буду записывать все, что произошло в течение дня, когда у меня болела голова, и это поможет мне обнаружить мои триггеры."
        },
        {
            id: 8,
            q: "Чувствуете ли вы, что вот-вот начнется атака??",
            a: "Обычно да. У вас есть определенные симптомы, которые говорят вам, что примерно через час или два у вас начнет болеть голова."
        },
    ],
    // interface_description: [
    // {
    //     id:1,
    //     title: "Attack log",
    //     subtitle: "Steps of logging, available to skip. Simple and visual, so migrainer don’t suffer while filling it during the attack ",
    //     screens: [
    //         '../projects/migraine/ui/screens/6.png',
    //         '../projects/migraine/ui/screens/7_7.png',
    //         '../projects/migraine/ui/screens/6_6.png',
    //         '../projects/migraine/ui/screens/8_5.png',
    //         '../projects/migraine/ui/screens/9_3.png',
    //         '../projects/migraine/ui/screens/9_6.png',
    //         '../projects/migraine/ui/screens/10_1.png',
    //         '../projects/migraine/ui/screens/10.png',
    //
    //     ]
    // },
    // {
    //     id:2,
    //     title: "Dashboard",
    //     subtitle: "Actual information, status for today, week, month and educational resources",
    //     screens: [
    //         '../projects/migraine/ui/screens/3.png',
    //         '../projects/migraine/ui/screens/4_1.png',
    //         '../projects/migraine/ui/screens/5_2.png',
    //         '../projects/migraine/ui/screens/17.png',
    //     ]
    // },
    // {
    //     id:4,
    //     title: "Highlights",
    //     subtitle: "See statistics, charts of triggers, pain quantity and power ",
    //     screens: [
    //         '../projects/migraine/ui/screens/11.png',
    //         '../projects/migraine/ui/screens/12.png',
    //         '../projects/migraine/ui/screens/13.png',
    //         '../projects/migraine/ui/screens/14.png',
    //     ]
    // },
    // {
    //     id:3,
    //     title: "Calendar",
    //     subtitle: "Calendar allows to log pain quickly, add pain power and see the picture of all pains",
    //     screens: [
    //         '../projects/migraine/ui/screens/5.png',
    //         '../projects/migraine/ui/screens/18_1.png',
    //     ]
    // },
    // {
    //     id:5,
    //     title: "Intro",
    //     subtitle: "Splash screen and gender select",
    //     screens: [
    //         '../projects/migraine/ui/screens/1.png',
    //         '../projects/migraine/ui/screens/2.png',
    //         // '../projects/migraine/ui/screens/13.png',
    //         // '../projects/migraine/ui/screens/14.png',
    //     ]
    // },
    // {
    //     id:9,
    //     title: "Profile",
    //     subtitle: "User preferences about triggers, sympthoms and medication",
    //     screens: [
    //         '../projects/migraine/ui/screens/19.png',
    //         '../projects/migraine/ui/screens/20.png',
    //     ]
    // },
    // {
    //     id:8,
    //     title: "Results",
    //     subtitle: "The app has already received 51 pre-order",
    //     screens: []
    // },
    // ],
    appstore_screens: {
        screens:     [
            '../projects/migraine/appstore_screens/1.jpg',
            '../projects/migraine/appstore_screens/2.jpg',
            '../projects/migraine/appstore_screens/3.jpg',
            '../projects/migraine/appstore_screens/4.jpg',
            '../projects/migraine/appstore_screens/5.jpg',
        ],
        title: "MiG: дневник головной боли",
        subtitle: "Отмечайте боли, выясняйте триггеры"
    },
}

export default RuMigraineAppData