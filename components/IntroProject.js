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
                          nda,
                          prototype,
                          prototype_type,
                          background,
                          ru
}) => {
    const lang = ru
    const projectTitle = lang ? title_RU : title
    const projectSubtitle = lang ? subtitle_RU : subtitle
    const viewBtnText = nda ? <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="18" viewBox="0 0 14 19" fill="white">
        <path d="M2.7373 18.1182H11.2627C12.4404 18.1182 13.0205 17.5381 13.0205 16.2549V9.67188C13.0205 8.51172 12.5459 7.92285 11.5615 7.82617V5.65527C11.5615 2.31543 9.33789 0.707031 7 0.707031C4.66211 0.707031 2.43848 2.31543 2.43848 5.65527V7.85254C1.52441 7.99316 0.979492 8.57324 0.979492 9.67188V16.2549C0.979492 17.5381 1.55957 18.1182 2.7373 18.1182ZM4.12598 5.49707C4.12598 3.44922 5.42676 2.32422 7 2.32422C8.56445 2.32422 9.87402 3.44922 9.87402 5.49707V7.80859L4.12598 7.81738V5.49707Z" fill="#fff"/>
    </svg>&nbsp;&nbsp;NDA</span> : "View case"
    // const caseLink = lang ? `/ru/apps/${url}` : `/apps/${url}`
    const caseLink = nda ? "" : `/apps/${url}`

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