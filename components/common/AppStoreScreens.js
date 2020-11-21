import styles from '../../styles/components/project/AppStoreScreens.module.scss'

const AppStoreScreens = ({projectItem}) => {

    const screens = projectItem.appstore_screens.screens

    const screen_items = screens.map( img => <img src={`../${img}`} key={img} />)

    return(
        <>
            <section className={`${styles.appstore_section} auto-height`}>
                <div className="container">
                    <h3>AppStore</h3>
                    <div className={`upper-base-text subtitle`}>AppStore Screens</div>
                    <div className={styles.icon_wrapper}>
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