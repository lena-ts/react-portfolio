const YandexSearchData = {
    id: 10,
    url: 'yandex-search',
    title: <div>Yandex Search</div>,
    subtitle: <span style={{fontSize:"18px", lineHeight: "28px"}}>Projects for Garage, Search and Ecom. <br/> Includes production, experiments, concepts. </span>,
    icon_path: 'intro/app-icons/ya-icon.png',
    intro_screen_1_path: 'intro/intro-images/ya3.png',
    intro_screen_2_path: 'intro/intro-images/ya4.png',
    appstore_link: '',
    playmarket_link: '',
    password: true,
    prototype_link: null,
    prototype_link_type: null,
    background_color: '#E5E8F3',
    features: [
        {
            id: 1,
            subtitle: "CONCEPT",
            title: 'Stories at Products',
            text: <div>It is not a secret that people like consuming visual content. So we decided to represent some categories where image is everything in an immersive way.
                Stories is a format people used to. I created concepts for fashion category listing and general stories at homepage.
            </div>,
            singleImage: 'projects/yandex-search/features/Stories_at_Products.png',
            screens: [],
            color: "#E5E8F3"
        },
        {
            id: 2,
            subtitle: "EXPERIMENT",
            title: 'Quizes at Zen',
            text: <div>Quiz is a gamified mechanic intended to draw users attention and increase time spend metric. Experiment was set and showed increased time spend. Could have been implemented in author's tools. The idea and design were mine.
            </div>,
            singleImage: 'projects/yandex-search/features/Zen_Quizes.png',
            screens: [],
            color: "#E5E8F3"
        },
        {
            id: 3,
            subtitle: "EXPERIMENT",
            title: 'Gifts with Alice',
            text: <div> Gifts used Balaboba YaLM language model to generate gifts based on persona description. Experiment was set but showed low user engagement. My role was to design concepts, conduct user interviews and side-by-side research.
                <br/> <br/> <i>Learning:</i> some ideas could be tested via interviews and side-by-side research.
            </div>,
            singleImage: 'projects/yandex-search/features/Alice_Gifts.png',
            screens: [],
            color: "#E5E8F3"
        },
        {
            id: 4,
            subtitle: "CONCEPT",
            title: 'Stickers at Search',
            text: <div> Stickers were invented to help people make notes right on SERP. When user comes back to particular SERP, stickers could help to choose more useful links among all search results. The idea and concepts were mine.
            </div>,
            singleImage: 'projects/yandex-search/features/Stickers.png',
            screens: [],
            color: "#E5E8F3"
        },
        {
            id: 5,
            subtitle: "PRODUCTION",
            title: 'Alice Recommends',
            text: <div> This is a recommedation tool implemented into Products homepage and categories. It helps users to narrow their search via simple questions.
                At start it was a Garage experiment and now it has grown into an independent product <a href="https://recommendix.com/ru-ru/" style={{textDecoration: "underline"}}>Recommendix</a>. My role was creating concepts and design, conduct interviews and side-by-side research.
                <br/><br/>
                <i><b>Learning:</b></i> people want machines talk to them on human language.
            </div>,
            singleImage: 'projects/yandex-search/features/Alice_Recommend.png',
            screens: [],
            color: "#E5E8F3"
        },
        {
            id: 6,
            subtitle: "EXPERIMENT",
            title: 'Shopping List',
            text: <div> Shopping List was developed to help people buy several products in one store with the best price. While working on this experiment I conduct interviews, side-by-side research and made dozen of concepts. Experiment was set and not upproved for production because of low user's engagement with functionality.
                <br/><br/>  <i><b>Learning:</b></i> users hardly dive into a new functionality and prefer something they are used to.
            </div>,
            singleImage: 'projects/yandex-search/features/Shopping_List.png',
            screens: [],
            color: "#E5E8F3"
        },
    ],
}

export default YandexSearchData