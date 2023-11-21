export const mobile_view = typeof window !== "undefined" ? window.innerWidth < 769 : null

export const menu_items = [
    {
        id: 1,
        title: 'Web, Apps development',
        ru_title: "Веб-дизайн",
        subtitle: 'React Native, ReactJs, Magento, Prestashop design, development',
        ru_subtitle: "React Native, ReactJs, Magento, Prestashop",
        link: "/web-development",
        ru_link: "../../ru/web-development",
        delay: 0,
        code: 'web-development'
    },
    {
        id: 2,
        title: 'Apps Design',
        ru_title: "Дизайн приложений",
        subtitle: 'UI/UX design, research work',
        ru_subtitle: "Кейсы, исследования",
        link: "/apps",
        ru_link:"../../ru/apps",
        delay: 0.2,
        code: 'apps'
    },
    {
        id: 3,
        title: 'Illustrations',
        ru_title: "Иллюстрации",
        subtitle: 'Illustration works',
        ru_subtitle: "Анимации, рисунки",
        link: "/illustrations",
        ru_link: "../../ru/illustrations",
        delay: 0.4,
        code: 'illustrations'
    }
]