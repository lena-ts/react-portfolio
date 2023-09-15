const ThingsHappenAppData = {
    id: 2,
    url: 'things-happen-app',
    title: <div>ThingsHappen:<br></br>Life Tracker</div>,
    subtitle: <span>Track things and see when they happened last time</span>,
    icon_path: 'intro/app-icons/thingshappen-icon.png',
    intro_screen_1_path: 'intro/intro-images/thingshappen1.png',
    intro_screen_2_path: 'intro/intro-images/thingshappen2.png',
    appstore_link: 'https://apps.apple.com/app/things-happen-life-tracker/id1512430864',
    // prototype_link: 'https://lena-ts.github.io/react-things-happen/',
    prototype_link: '',
    prototype_link_type: 'spa',
    background_color: '#EBEBEB',
    downloads: '880',
    reviews: '3',
    description: '',
    model: '',
    competitors: [
    {
        case:1,
        title: "Case 1. Goal App",
        pros: [
            "Calendar is availble for every thing",
            "Setup notifications",
            "View things frequency"
        ],
        cons: [
            "Poor contrasts",
            "UI elements are very tight"
        ],
        images: [
            'projects/thingshappen/cases/case1_1.png',
            'projects/thingshappen/cases/case1_2.png',
        ]
    },
    {
        case:2,
        title: "Case 2. Habits App",
        pros: [
            "Things list represented with images ",
            "Setup notifications",
            "Checklist to visualize things happened",
            "Things frequency statistic",
            "Grapth show things frequency"
        ],
        cons: [
            "Complicated functionality"
        ],
        images: [
            'projects/thingshappen/cases/case2_1.png',
            'projects/thingshappen/cases/case2_2.png',
        ]
    },
    {
        case:3,
        title: "Case 3. Todoist App",
        pros: [
            "Advanced functionality, labels, descriptions",
            "Easy to add things",
            "Assign things to other people",
            "Nice check point animation"
        ],
        cons: [
            "Busy interface, too may details",
            "Many texts, hard to distinguish information",
            "Not visual things, takes tame to read"
        ],
        images: [
            'projects/thingshappen/cases/case3_1.png',
            'projects/thingshappen/cases/case3_2.png',
        ]
    }
],
    schema: {
        image: 'projects/thingshappen/schema/schema.png',
    },
    visual_identification: {
        font_name: "Poppins",
        letter_fill: "#222222",
        colors: {
            primary: [
                "#EA4F3E",
                "#222222",
                "#FFFFFF"
            ],
            secondary: [],
            additional: []
        }
    },
    ux : {
        image: 'projects/thingshappen/ux/ux-flow.png',
    },
    ui : {
        image: 'projects/thingshappen/ui/ui.png',
    },
    appstore_screens: {
        screens:     [
            'projects/thingshappen/appstore_screens/1.png',
            'projects/thingshappen/appstore_screens/2.png',
            'projects/thingshappen/appstore_screens/3.png',
            'projects/thingshappen/appstore_screens/4.png',
            'projects/thingshappen/appstore_screens/5.png',
        ],
        title: "Things Happen: Life Tracker",
        subtitle: "Calendar and reminders"
    },
    icon_screen: {
        image: 'projects/thingshappen/icon/icon-image1.png',
        text: 'The main idea of an icon is a dot meaning some event or thing happend, marked in calendar.'
    }
}

export default ThingsHappenAppData;