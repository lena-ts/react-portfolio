const RuYandexSearchData  = {
    id: 10,
    url: 'yandex-search',
    title: <div>Поиск Яндекса</div>,
    subtitle: <span style={{fontSize:"18px", lineHeight: "28px"}}>Проекты для Гаража и Поиска по товарам. <br/> Продакшен, эксперименты и концепты.</span>,
    icon_path: '../intro/app-icons/ya-icon.png',
    intro_screen_1_path: '../intro/intro-images/ya3.png',
    intro_screen_2_path: '../intro/intro-images/ya4.png',
    appstore_link: '',
    playmarket_link: '',
    password: true,
    prototype_link: null,
    prototype_link_type: null,
    background_color: '#E5E8F3',
    features: [
        {
            id: 1,
            subtitle: "Концепт",
            title: 'Истории в товарах',
            text: <div>
                {/*<div style={{display: "grid", gridTemplateColumns: "50% 50%", gridColumnGap: "3rem"}}>*/}
                <b>Гипотеза.</b> Если добавить дискавери контент для категорий товаров, где картинка имеет значение, люди будут вовлекаться и возвращаться в продукт.<br/><br/>
                <b>Зачем.</b> Поиск по товарам новый продукт, хочется вырастить его популярность среди пользователей.<br/><br/>

                <b>Как работает.</b> На листинге категории или бренда предлагается провзаимодействовать с историями. Пользователи привыкли к этому формату. Из истории можно перейти на страничку товара.<br/><br/>
                <b>Результат.</b> Осталось концептом, так как у продукта сформировались другие цели.<br/><br/>
            </div>,
            singleImage: '../projects/yandex-search/features/Stories_at_Products.png',
            screens: [],
            color: "#E5E8F3"
        },
        {
            id: 2,
            subtitle: "Эксперимент",
            title: 'Квизы для Дзена',
            text: <div>
                {/*<b>Гипотеза.</b> Квизы - игровая механика, которая увеличит вовлеченность пользователей<br/><br/>*/}
                {/*<b>Зачем.</b> Хочется разнообразить взаимодействие авторов с аудиторией, увеличить время, проведенное пользователями в приложении<br/><br/>*/}
                {/*<b>Как работает.</b> Квиз внедряется в инструменты автора<br/><br/>*/}
                {/*<b>Результат.</b> Эксперимент был запущен как квизы от Яндекса. Я общалась с редакторами Дзена и менеджером. */}
                Квиз - это геймифицированная механика, предназначенная для привлечения внимания пользователей и увеличения показателей потраченного времени. Эксперимент был проведен и показал увеличение времени проведенного в приложении. В результате обсуждалась возможность внедрения квизов в инструменты автора. Я предложила идею, разработала дизайн, сотрудничала с редактором Дзена и менеджером продукта.
            </div>,
            singleImage: '../projects/yandex-search/features/Zen_Quizes.png',
            screens: [],
            color: "#E5E8F3"
        },
        {
            id: 3,
            subtitle: "Эксперимент",
            title: 'Подарки с Алисой',
            text: <div> Подарки использовали языковую модель Balaboba YaLM для создания подарков на основе описания личности.
                Эксперимент был поставлен, но показал низкую вовлеченность пользователей.
                Моя роль заключалась в разработке концепций, проведении интервью с пользователями и side-by-side исследованиях.
            </div>,
            singleImage: '../../projects/yandex-search/features/Alice_Gifts.png',
            screens: [],
            color: "#E5E8F3"
        },
        {
            id: 4,
            subtitle: "Концепт",
            title: 'Стикеры в поиске',
            text: <div>Стикеры были придуманы, чтобы помочь людям делать заметки прямо в поисковой выдаче.
                Когда пользователь возвращается к определенной поисковой выдаче, стикеры могут помочь выбрать более полезные ссылки среди всех результатов поиска.
                Я предложила идею, разработала дизайн, эксперимент не был поставлен из-за низкой уверенности.
            </div>,
            singleImage: '../projects/yandex-search/features/Stickers.png',
            screens: [],
            color: "#E5E8F3"
        },
        {
            id: 5,
            subtitle: "Продакшен",
            title: 'Алиса рекомендует',
            text: <div>
                Это инструмент рекомендаций, встроенный на главную страницу Товаров и категории продуктов.
                Он помогает пользователям сузить поиск с помощью простых вопросов.
                Вначале это был эксперимент «Гаража», а теперь он вырос в самостоятельный продукт <a href="https://recommendix.com/ru-ru/" style={{textDecoration: "underline"}}>Recommendix</a>.
                Моя роль заключалась в создании концепций и дизайна, проведении интервью и side-by-side исследованиях.
                <br/><br/>
                <b>Осознание. </b> Людям нравится, когда интерфейс говорит с ними на человоеческом языке.
            </div>,
            singleImage: '../projects/yandex-search/features/Alice_Recommend.png',
            screens: [],
            color: "#E5E8F3"
        },
        {
            id: 6,
            subtitle: "Эксперимент",
            title: 'Список покупок',
            text: <div> Список покупок был создан, чтобы помочь людям купить несколько товаров в одном магазине по лучшей цене.
                Работая над этим экспериментом, я проводила интервью, side-by-side исследования и рисовала десятки концепций.
                Эксперимент был проведен, но не выпущен в продакшен из-за низкой заинтересованности пользователей.
                <br/><br/>
                {/*<i><b>Result:</b></i> the designer’s task is to simplify and narrow the user’s focus to one important action, and this action here is a link to a shop with the best total price*/}
                {/*<br/><br/>*/}
                <b>Гипотеза. </b>Покупать несколько товаров в одном магазине удобно.<br/><br/>
                <b>Зачем. </b>Такая функциональность может удерживать в продукте пользователей, которые покупают много товаров сразу. <br/><br/>
                <b>Как работает. </b>Товар добавляется в список из листинга или странички товара.
                В самом списке показаны магазины, где можно купить все товары из списка. Магазины отсортированы по возрастанию цены.<br/><br/>
                <b>Результат. </b>Список покупок показал низкую вовлеченность пользователей <br/><br/>
                <b>Осознание. </b>Пользователи с трудом погружаются в новую функциональность и предпочитают что-то к чему привыкли. <br/><br/><br/>
                <img src={'../../projects/yandex-search/features/Shopping_List_Result.png'} width={'100%'}/>
                {/*<br/><br/><br/><i><b>References:</b></i> actually there were no relevant references, so I took a look at shopping cards and favourites lists*/}
                {/*<br/><br/>*/}
                {/*<img src={'../projects/yandex-search/features/Shopping_List_Refs.png'} width={'100%'}/>*/}
                {/*<br/><br/><br/><i><b>Process:</b></i> first drafts look overloaded with information because of different ideas that were born during team brainstorming*/}
                {/*<br/><br/>*/}
                {/*<img src={'../projects/yandex-search/features/Shopping_List_Process.png'} width={'100%'}/>*/}
                {/*<br/><br/>*/}


            </div>,
            // singleImage: 'projects/yandex-search/features/Shopping_List_Process.png',
            screens: [],
            color: "#E5E8F3"
        },
    ],

}

export default RuYandexSearchData