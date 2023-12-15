import styles from '../styles/components/IntroProject.module.scss'
import Link from "next/link";

const IntroProject = ({
                          url,
                          title,
                          title_RU,
                          subtitle,
                          subtitle_RU,
                          icon,
                          intro_video,
                          intro_screen_1,
                          intro_screen_2,
                          appstore,
                          playmarket,
                          preorder,
                          prototype,
                          prototype_type,
                          background,
                          ru
}) => {
    const lang = ru
    const projectTitle = lang ? title_RU : title
    const projectSubtitle = lang ? subtitle_RU : subtitle
    const viewBtnText = lang ? "Посмотреть кейс" : "View case"
    const caseLink = lang ? `/ru/apps/${url}` : `/apps/${url}`

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

    const preorder_link = preorder ? <a href={appstore} target="_blank"
                                                className={`button button_light button_appstore button_preorder`}>
            <span>Pre-order</span>App Store</a>
        :null

    const store_link = preorder ? preorder_link : appstore_link

    const first_image = intro_video ?
        <div className={styles.intro_video_wrapper}>
            <img src={'intro/intro-images/video_hover.png'} />
        <video width="237" height="512" autoPlay={true} muted={true} loop={true}>
            <source src={intro_video} type="video/mp4"></source>
        </video>
        </div>
        : <img src={intro_screen_1} alt={title}/>

    return(
        <section className={styles.intro_project} id={url}>
            <div className="container">
                <div className={styles.intro_project_content_wrapper}>
                <div className={styles.intro_project_data}>
                    {icon_image}
                    <span className={styles.title + ` m-text`}>{projectTitle}</span>
                    <span className={`upper-base-text ${styles.intro_project_subtitle}`}>{projectSubtitle}</span>
                    <div className={styles.intro_project_case_button}>
                    {/*<Link href={"/apps/[id]"} as={`/apps/${url}`} ><a className="button button_dark">View Case</a></Link>*/}
                        <div className={styles.intro_project_links}>
                            {store_link}
                            {/*{store_link}*/}
                            {/*{playmarket_link}*/}
                            {/*{prototype_link}*/}
                        </div>
                        <div> <Link legacyBehavior href={caseLink}  ><a className="button button_dark">{viewBtnText}</a></Link></div>
                    </div>
                </div>
                <div className={styles.intro_project_images}>
                    {/*<img src={intro_screen_1} alt={title}/>*/}
                    {first_image}
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