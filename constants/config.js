export const mobile_view = typeof window !== "undefined" ? window.innerWidth < 769 : null

export const menu_items = [
    {
        id: 1,
        title: 'Web development',
        subtitle: 'Magento, Prestashop website design & development',
        link: "/web-development",
        delay: 0,
        code: 'web-development'
    },
    {
        id: 2,
        title: 'iOS Apps',
        subtitle: 'UI/UX design, research work',
        link: "/apps",
        delay: 0.2,
        code: 'apps'
    },
    {
        id: 3,
        title: 'Illustrations',
        subtitle: 'Illustration works',
        link: "/illustrations",
        delay: 0.4,
        code: 'illustrations'
    }
]