const CapsAppData = {
    id: 6,
    url: 'caps-app',
    title: <div>CAPS:<br></br>Digital Wardrobe</div>,
    subtitle:  <span>Organize clothing into categories</span>,
    icon_path: 'intro/app-icons/caps-icon.png',
    intro_screen_1_path: 'intro/intro-images/caps1.png',
    intro_screen_2_path: 'intro/intro-images/caps2.png',
    appstore_link: 'https://apps.apple.com/app/caps-digital-wardrobe/id1559085124?platform=iphone',
    prototype_link: null,
    prototype_link_type: null,
    background_color: '#E8EBF2',
    downloads: '3.6K',
    reviews: '7',
    description:  '',
    model: '',
    competitors: [
        {
            case: 1,
            title: "Case 1. GetWardrobe App",
            pros: [
                "Extended functionality, weather, shopping",
                "Ability to create sets",
                "Social Network functions, likes, comments",
                "Planner"
            ],
            cons: [
                "Small fonts",
                "Huge empty spaces",
                "Complicated functionality",
                "Design elements aren't consistent"
            ],
            images: [
                'projects/caps/cases/case1_1.png',
                'projects/caps/cases/case1_2.png',
            ]
        },
        {
            case: 2,
            title: "Case 2. StyleMate App",
            pros: [
                "Categorized wardrobe",
                "Ability to create sets",
                "Filter by weather",
                "Integrated store"
            ],
            cons: [
                "Empty spaces in UI",
                "Long vertical scrolling when many categories added",
                "Long horizontal scrolling inside category"
            ],
            images: [
                'projects/caps/cases/case2_1.png',
                'projects/caps/cases/case2_2.png',
            ]
        },
        {
            case: 3,
            title: "Case 3. SmartCloset App",
            pros: [
                "Clean and minimalistic design",
                "Ability to crate sets",
                "Multiple items upload",
                "Integrated store",
                "Social network functions, likes, following"
            ],
            cons: [
                "Empty spaces",
                "Complicated functionality"
            ],
            images: [
                'projects/caps/cases/case3_1.png',
                'projects/caps/cases/case3_2.png',
            ]
        }
    ],
    reviews_app: [
        {
            img: 'projects/caps/reviews/1.png',
            title: 'Looking for:',
            text: <ul><li>- Wardrobe digital storage</li>
                <li>- Ability to create sets</li></ul>
        },
        {
            img: 'projects/caps/reviews/2.png',
            title: 'Problems:',
            text: <ul><li>- No ability to clone items</li>
                <li>- Limited colors set</li></ul>
        },
        {
            img: 'projects/caps/reviews/3.png',
            title: 'Problems:',
            text: <ul><li>- No ability to clone items</li>
                <li>- Gestures problems</li></ul>
        },
        {
            img: 'projects/caps/reviews/4.png',
            title: 'Looking for:',
            text: <ul><li>- Shuffle feature</li>
                <li>- Date of wearing look</li></ul>
        },
        {
            img: 'projects/caps/reviews/5.png',
            title: 'Looking for:',
            text: <ul><li>- Subcategories;</li>
                <li>- Filtering options</li></ul>
        },
        {
            img: 'projects/caps/reviews/6.png',
            title: 'Looking for:',
            text: <ul><li>- Ability to add multiple items;</li>
                <li>- Recognition of an item type</li></ul>
        }
    ],
    schema: {
        image: 'projects/caps/schema/schema.png',
    },
    visual_identification: {
        font_name: "San Francisco Pro",
        letter_fill: "#2b2b2b",
        colors: {
            primary: [
                "#2B2B2B",
                "#FFFFFF",
                "#FF1531"
            ],
            secondary: [],
            additional: []
        }
    },
    ui: {
        image: 'projects/caps/ui/ui1.png'
    },
    appstore_screens: {
        screens:     [
            'projects/caps/appstore_screens/1.png',
            'projects/caps/appstore_screens/2.png',
            'projects/caps/appstore_screens/3.png',
            'projects/caps/appstore_screens/4.png',
            'projects/caps/appstore_screens/5.png',
        ],
        title: "CAPS — Digital Wardrobe",
        subtitle: "Organize wardrobe and play the looks"
    },
}

export default CapsAppData