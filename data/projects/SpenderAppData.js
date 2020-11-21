const SpenderAppData = {
    id: 1,
    url: 'spender-app',
    title: <div>Spender:<br></br>Finance Control</div>,
    subtitle: <span><strong>Objective:</strong> Create app to control cash expenses</span>,
    icon_path: 'intro/app-icons/spender-icon.png',
    intro_screen_1_path: 'intro/intro-images/spender1.png',
    intro_screen_2_path: 'intro/intro-images/spender2.png',
    appstore_link: null,
    prototype_link: null,
    prototype_link_type: 'spa',
    background_color: '#F1F2F4',
    description: <div><strong>Description:</strong> App that helps to track expenses<br></br>and display visual
        statistic by categories</div>,
    model: <div><strong>Model:</strong> Freemium, free with Ads and In-App<br></br>purchases </div>,
    competitors: [
        {
            case: 1,
            title: "Case 1. Budget Planner App",
            pros: [
                "Good contrasts, colorful design",
                "Color coding for categoris",
                "Notible button to add expenses",
                "Colorful diagram shows the share of the total"
            ],
            cons: [
                "Narrow range of periods available",
                "Transactions and statistic are separated"
            ],
            images: [
                'projects/spender/cases/case1_1.png',
                'projects/spender/cases/case1_2.png',
            ]
        },
        {
            case: 2,
            title: "Case 2. Monefy App",
            pros: [
                "Diagram that shows the share of the total",
                "Color coding for categoris"
            ],
            cons: [
                "Outdated UI, not clean",
                "Overall impression of the UX is a mess, \n" +
                "that creates cognitive load",
                "Doubled menu icon that display list of transactions",
                "Bad UI contrasts"
            ],
            images: [
                'projects/spender/cases/case2_1.png',
                'projects/spender/cases/case2_2.png',
            ]
        },
        {
            case: 3,
            title: "Case 3. Money Management App",
            pros: [
                "Clean and minimalistic design",
                "Minimal app colors palette",
                "Large category icons"
            ],
            cons: [
                "Low UI contrasts, totals are innoticeable",
                "No visual statistic presented",
                "To add expense you need to press close cross \n" +
                "on other screens"
            ],
            images: [
                'projects/spender/cases/case3_1.png',
                'projects/spender/cases/case3_2.png',
            ]
        }
    ],
    visual_identification: {
        font_name: "Poppins",
        letter_fill: 'conic-gradient(from 180deg at 50% 50%, #EEA4C3 0deg, #A7E4EC 65.63deg, #FDD7A6 150deg, #C4E4B6 226.87deg, #E9BCB8 301.88deg, #CACFD5 360deg)',
        colors: {
            primary: [
                "#2b2b2b",
                "#CACFD5",
                "#A7E4EC",
                "#C4E4B6",
                "#EEA4C3",
                "#E9BCB8",
                "#FDD7A6"
            ],
            secondary: [],
            additional: []
        }
    },
    ux : {
        image: 'projects/spender/ux/ux-flow.png',
        user_persona: 'projects/spender/ux/user_persona.png',
        bar: 'projects/spender/ux/bar.png',
        pie: 'projects/spender/ux/pie.png',
    },
    ui : {
        image: 'projects/spender/ui/ui.png',
    },
    onboarding: [
        'projects/spender/onboarding/1.png',
        'projects/spender/onboarding/2.png'
    ]
}

export default SpenderAppData