const SplityAppData = {
    id: 4,
    url: 'splity-app',
    title: <div>Splity:<br></br>Group Expenses</div>,
    subtitle: <span>Track and share roommate & travel expenses with others</span>,
    icon_path: 'intro/app-icons/splity-icon.png',
    intro_screen_1_path: 'intro/intro-images/splity1.png',
    intro_screen_2_path: 'intro/intro-images/splity2.png',
    appstore_link: 'https://apps.apple.com/us/app/splity-group-expenses/id1512670632',
    // prototype_link: 'https://lena-ts.github.io/splitty_prototype/start.html',
    prototype_link: '',
    prototype_link_type: 'html',
    background_color: '#E8EBF2',
    downloads: '9.2K',
    reviews: '157',
    description: '',
    model: '',
    competitors: [
        {
        case: 1,
        title: "Case 1. Splitwise App",
        pros: [
            "Shared groups, syncronization",
            "Multiple groups",
            "Activity, chat options",
            "Add group photos, expense photos"
        ],
        cons: [
            "Complicated UX",
            "UI elements are very tight",
            "UI looks outdated",
            "Too much small texts",
            "Many options to fill create cognitive load"
        ],
        images: [
            'projects/splity/cases/case1_1.png',
            'projects/splity/cases/case1_2.png',
        ]
    },
        {
            case: 2,
            title: "Case 2. Finsplit App",
            pros: [
                "Distinguished group icons",
                "Clean UI",
                "Shared groups, syncronization",
                "Distinguish debts info"
            ],
            cons: [
                "Complicated add expense screen",
                "Many options to fill create cognitive load",
                "Too much small texts over all interface"
            ],
            images: [
                'projects/splity/cases/case2_1.png',
                'projects/splity/cases/case2_2.png',
            ]
        },
        {
            case: 3,
            title: "Case 3. Split App",
            pros: [
                "Minimalistic UI",
                "Clear expenses screen",
                "See who owes whom clearly",
                "Shared groups, syncronization"
            ],
            cons: [
                "Poor contrasts",
                "UI elements are very tight"
            ],
            images: [
                'projects/splity/cases/case3_1.png',
                'projects/splity/cases/case3_2.png',
            ]
        }
        ],
    ux: {
        image: 'projects/splity/ux/ux-flow.png',
        user_persona: [
            {
                id: 1,
                img:'projects/splity/ux/user1.png',
                sex: 'Male',
                age: '29',
                situation: "Travels with girlfriend and two more friends",
                problem: 'When we rent a house in Portugal I’ve paid for its rental and guys paid for car \n' +
                    '                    rental. It’s tough to calculate everything on the go',
                goals: 'To get known of who finally owes whom'
            },
            {
                id: 2,
                img:'projects/splity/ux/user2.png',
                sex: 'Female',
                age: '23',
                situation: "Travel with friend",
                problem: 'Someone often pays for both and it’s a mess of payments and I can’t remember \n' +
                    '                    who pays for what',
                goals: 'Keep track of all expenses'
            },
            {
                id: 3,
                img:'projects/splity/ux/user3.png',
                sex: 'Female',
                age: '27',
                situation: "Share a room in Los Angeles with friend",
                problem: 'Sometime my roommate pays bills, sometimes I do that. We fix all the payments \n' +
                    '                    on a paper sheet, but once we get lost this sheet and it was such a problem',
                goals: 'To keep track of payments'
            },
            {
                id: 4,
                img:'projects/splity/ux/user4.png',
                sex: 'Male',
                age: '28',
                situation: "Travel with group of 6 to 8 people",
                problem: 'When we got a trip to Europe by car and there were situations that the driver paid \n' +
                    '                    for toll roads. Also I paid for the villa that we rent for all the group',
                goals: 'To track expenses and see who owes whom'
            }
        ]
    },
    schema: {
        image: 'projects/splity/schema/schema.png',
    },
    visual_identification: {
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
        image: 'projects/splity/ui/ui.png',
        elements: 'projects/splity/ui/ui_elements.png'
    },
    ui_elements: {
        button_add_group: 'projects/splity/ui/ui-elements/button_add_group.png',
        button_m_pair: 'projects/splity/ui/ui-elements/button_m_pair.png',
        button_s_pair: 'projects/splity/ui/ui-elements/button_s_pair.png',
        colors: 'projects/splity/ui/ui-elements/colors.png',
        debts_item: 'projects/splity/ui/ui-elements/debts_item.png',
        edit_sums: 'projects/splity/ui/ui-elements/edit_sums.png',
        expense_item: 'projects/splity/ui/ui-elements/expense-item.png',
        filter_item: 'projects/splity/ui/ui-elements/filter-item.png',
        group_item: 'projects/splity/ui/ui-elements/group-item.png',
        participants_checked: 'projects/splity/ui/ui-elements/participants_checked.png',
        participants_unchecked: 'projects/splity/ui/ui-elements/participants_unchecked.png',
        popup_expenses: 'projects/splity/ui/ui-elements/popup_expenses.png',
        popup_participant: 'projects/splity/ui/ui-elements/popup_participant.png',
        tabs: 'projects/splity/ui/ui-elements/tabs.png',
        user_regular: 'projects/splity/ui/ui-elements/user_regular.png',
        col1: [
            {
                id: 1,
                text: 'Filter',
                img: 'projects/splity/ui/ui-elements/filter-item.png',
            },
            {
                id: 2,
                text: 'Expense',
                img: 'projects/splity/ui/ui-elements/expense-item.png',
            },
            {
                id: 3,
                text: 'Debts',
                img: 'projects/splity/ui/ui-elements/debts-item.png',
            },
            {
                id: 4,
                text: 'Check participants: unchecked',
                img: 'projects/splity/ui/ui-elements/participants_unchecked.png',
            },
            {
                id: 5,
                text: 'Check participants: checked',
                img: 'projects/splity/ui/ui-elements/participants_checked.png',
            }
        ],
        col2: [
            {
                id: 1,
                text: 'Popup: expenses',
                img: 'projects/splity/ui/ui-elements/popup_expenses.png',
            },
            {
                id: 2,
                text: 'Edit sums',
                img: 'projects/splity/ui/ui-elements/edit_sums.png',
            }
        ],
        col3: [
            {
                id: 1,
                text: 'Popup: participnt',
                img: 'projects/splity/ui/ui-elements/popup_participant.png',
            },
            {
                id: 2,
                text: 'Group color: checked',
                img: 'projects/splity/ui/ui-elements/colors.png',
            },
            {
                id: 3,
                text: 'Tabs',
                img: 'projects/splity/ui/ui-elements/tabs.png',
            },
            {
                id: 4,
                text: 'Button: add group',
                img: 'projects/splity/ui/ui-elements/button_add_group.png',
            },
            {
                id: 5,
                text: 'Button S: pair',
                img: 'projects/splity/ui/ui-elements/button_s_pair.png',
            },
            {
                id: 6,
                text: 'Button M: pair',
                img: 'projects/splity/ui/ui-elements/button_m_pair.png',
            }
        ],
        icons: [
            {
                id: 1,
                text: 'Delete',
                icon: 'projects/splity/ui/ui-elements/icon_delete.svg'
            },
            {
                id: 2,
                text: 'Done',
                icon: 'projects/splity/ui/ui-elements/icon_done.svg',
            },
            {
                id: 3,
                text: 'Plus',
                icon: 'projects/splity/ui/ui-elements/icon_plus.svg',
            },
            {
                id: 4,
                text: 'Contacts',
                icon: 'projects/splity/ui/ui-elements/icon_contacts.svg'
            }
        ]
    },
    appstore_screens: {
        screens:     [
            'projects/splity/appstore_screens/1.png',
            'projects/splity/appstore_screens/2.png',
            'projects/splity/appstore_screens/3.png',
            'projects/splity/appstore_screens/4.png',
            'projects/splity/appstore_screens/5.png',
        ],
        title: "Splity — Group Expenses",
        subtitle: "Split bills and costs"
    },
}

export default SplityAppData