const YandexWeatherWidgetData = {
    id: 7,
    url: 'yandex-weather-widget',
    title: <div>Яндекс Погода:<br></br>Виджет</div>,
    subtitle: <div><strong>Задача:</strong> Создать новый виджет для андроид и объяснить<br></br>почему он должен выглядеть так</div>,
    description: <div><strong>Описание:</strong> Тестовое задание на стажировку</div>,
    icon_path: 'intro/app-icons/ya-weather-icon.png',
    intro_screen_1_path: 'intro/intro-images/scr1.png',
    intro_screen_2_path: 'intro/intro-images/scr2.png',
    appstore_link: null,
    prototype_link: null,
    prototype_link_type: null,
    background_color: '#F2F5FC',
    competitors: null,
    competitors_image: [
        {
            title: '1. Gismeteo',
            double: true,
            items: [
                {
                    img: 'projects/yandexweather/competitors1__1.png',
                    subtitle: 'Прогноз на несколько дней'
                },
                {
                    img: 'projects/yandexweather/competitors1_2.png',
                    subtitle: 'Прогноз на сегодняшний день'
                }
            ]
    },
        {
            title: '2. Нативный виджет погоды iOS',
            double: false,
            items: [
                {
                    img: 'projects/yandexweather/competitors2.png',
                    subtitle: null
                }
            ]
        },
        {
            title: '3. Виджет погоды приложения Погода Live°',
            double: false,
            items: [
                {
                    img: 'projects/yandexweather/competitors3.png',
                    subtitle: null
                }
            ]
        }
    ],
    interview: [
        {
            case: ['tennis'],
            person: 'Девушка, 29 лет',
            answers: [
                '1. температура по часам',
                '2. вероятность дождя по часам',
                '3. количество осадков',
                '4. скорость ветра'
            ]
        },
        {
            case: ['bike'],
            person: 'Парень, 30 лет',
            answers: [
                'Прогноз на 4 часа вперед, температура, тип осадков,\n' +
                'влажность',
                'Возможность настройки на несколько дней вперед'
            ]
        },
        {
            case: ['tennis', 'snowboard'],
            person: 'Девушка, 26 лет',
            answers: [
                '1. температура по дням, я всегда открываю весь месяц',
                '2. погода на выходных',
                '3. осадки, будет ли дождь'
            ]
        },
        {
            case: ['tennis', 'snowboard'],
            person: 'Девушка, 27 лет',
            answers: [
                'Как ощущается температура и осадки'
            ]
        },
    ],
    design: [
        {
            id: '1',
            title: "1. Виджет погоды на день по часам",
            text: <span>С помощью цвета и графика внизу показываем тенеденцию — чем ниже температура, тем насыщеннее синий цвет фона. Чем ниже температура, тем ниже расположена цифра.<br></br><br></br>
                Показываем также текстовое сообщение о возможных осадках и дополнительную информацию — скорость ветра, влажность</span>,
            img: 'projects/yandexweather/w1_1.png'
        },
        {
            id: '2',
            title: "2. Виджет погоды на день, обобщенный",
            text: <span>Цветом показываем тенеденцию на ближайшие сутки, показываем текстовое сообщение о текущей температуре либо о возможных осадках</span>,
            img: 'projects/yandexweather/w2_1.png'
        },
        {
            id: '3',
            title: "3. Виджет погоды в данный момент",
            text: <span>Цветом фона показываем как меняется температура, также показываем текстовое сообщение о возможных осадках</span>,
            img: 'projects/yandexweather/w3.png'
        },
        {
            id: '4',
            title: "4. Виджет погоды на ближайшие дни",
            text: <span> Люди в интервью ответили, что им удобнее смотреть прогноз на несколько дней или на месяц, а не только прогноз на сегодняшний день.
                <br></br>Отражаем на виджете тенденцию по дням с помощью цвета фона и графика внизу</span>,
            img: 'projects/yandexweather/w4_1.png'
        },
        {
            id: '5',
            title: "5. Миниатюрный виджет",
            text: <span>Маленький виджет показывает только главную информацию на данный момент — температуру и есть ли сейчас осадки</span>,
            img: 'projects/yandexweather/w5_1.png'
        }
    ],
    final_image: ['projects/yandexweather/scr1_1.png', 'projects/yandexweather/scr2_1.png', 'projects/yandexweather/scr3.png', 'projects/yandexweather/scr4_1.png'],
    result_text: ' В результате проведения интервью получаем информацию, которую люди вероятнее всего хотели бы видеть на виджете —\n' +
        'температуру на ближайшие часы/дни, возможность осадков. Также можно предложить отображать визуальную тенденцию изменения температуры, чтобы \n' +
        'упростить восприятие информации.'
}

export default YandexWeatherWidgetData