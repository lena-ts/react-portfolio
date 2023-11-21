import styles from '../../styles/components/project/AppStoreScreens.module.scss'

const AppStoreScreens = ({projectItem, ru}) => {

    const screens = projectItem.appstore_screens.screens
    const events = projectItem.events ? projectItem.events.images : null

    const screen_items = screens.map( img => <img src={`../${img}`} key={img} />)
    const event_items = events ? events.map( img => <img src={`../${img}`} key={img} />) : null

    const events_content = events ?
        <>
            <div className={`upper-base-text subtitle`} style={{'marginBottom': 25, 'margin-top': 30}}>Events</div>
            <div className={styles.events}>{event_items}</div>
        </>
        : null


    return(
        <>
            <section className={`${styles.appstore_section} auto-height`} id={`app-screens-${projectItem.url}`}>
                <div className="container">
                    <h3>AppStore</h3>
                    <div className={`upper-base-text subtitle`}>{ru ? "Экраны" : "Screens"}</div>
                    <div className={`${styles.icon_wrapper} icon-wrapper`}>
                        <img src={`../${projectItem.icon_path}`} />
                        <div className={styles.titles}>
                            <div className={styles.title}>
                                {projectItem.appstore_screens.title}
                            </div>
                            <div className={`base-text ${styles.subtitle}`}>
                                {projectItem.appstore_screens.subtitle}
                            </div>
                        </div>
                    </div>
                    <div className={styles.screens}>
                        {screen_items}
                    </div>
                    {events_content}
                </div>
            </section>
            <style jsx>{`
                section{
                    background: white;
                }
            `}</style>
        </>
    )
}

export default AppStoreScreens