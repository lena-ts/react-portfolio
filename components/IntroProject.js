import styles from '../styles/components/IntroProject.module.scss'
import Link from "next/link";

const IntroProject = ({
                          url,
                          title,
                          subtitle,
                          icon,
                          intro_screen_1,
                          intro_screen_2,
                          appstore,
                          playmarket,
                          prototype,
                          prototype_type,
                          background
}) => {
    const icon_image = icon ? <img src={icon} alt={title} className="small-app-icon"/> : null

    const prototype_button_className = prototype_type === 'spa' ? 'button_spa' : 'button_html'
    const prototype_button_text = prototype_type === 'spa' ? "SPA" : "HTML"

    const prototype_link = prototype ?
        <a href={prototype}
           target="_blank"
           className={`button button_light ${prototype_button_className}`}>
            {prototype_button_text} Prototype
        </a>
        : null

    const appstore_link = appstore ?
        <a href={appstore} target="_blank" className="button button_light button_appstore">App Store</a>
        :null

    const playmarket_link = playmarket ? <a href={playmarket} target="_blank" className="button button_light button_common button_playmarket">PlayMarket</a> : null

    return(
        <section className={styles.intro_project} id={url}>
            <div className="container">
                <div className={styles.intro_project_content_wrapper}>
                <div className={styles.intro_project_data}>
                    {icon_image}
                    <span className={styles.title + ` m-text`}>{title}</span>
                    <span className={`upper-base-text ${styles.intro_project_subtitle}`}>{subtitle}</span>
                    <div className={styles.intro_project_case_button}>
                    {/*<Link href={"/apps/[id]"} as={`/apps/${url}`} ><a className="button button_dark">View Case</a></Link>*/}
                        <div className={styles.intro_project_links}>
                            {appstore_link}
                            {/*{playmarket_link}*/}
                            {/*{prototype_link}*/}
                        </div>
                        <div> <Link legacyBehavior href={`/apps/${url}`}  ><a className="button button_dark">View Case</a></Link></div>
                    </div>
                </div>
                <div className={styles.intro_project_images}>
                    <img src={intro_screen_1} alt={title}/>
                    <img src={intro_screen_2} alt={title}/>
                </div>
                </div>
            </div>
            <style jsx>{`
                section {
                    background: ${background};
                }              
            `}</style>
        </section>
    )
}

export default IntroProject