import styles from '../../styles/components/project/Ui.module.scss'

const Ui = ({projectItem}) => {

    const screens = projectItem.ui.screens ?
        <div className={styles.screens_wrapper}>
            <div className={styles.screens}>
                {projectItem.ui.screens.map( img =>
                    <img src={`../${img}`}  key={img} />
                )}
            </div>
        </div> : null

    const ui_image = projectItem.ui.image ?
        <div className={styles.image_area}>
            <img src={`../${projectItem.ui.image}`}  />
        </div> : null

    const subtitle = projectItem.ui.subtitle ? projectItem.ui.subtitle : 'All screens, app visualization'
    return(
        <div className="ui-wrapper" id={`${projectItem.url}-ui`}>
            <div className={styles.ui_section}>
                <div className="container">
                    <div className={styles.title_area}>
                        <h3>UI</h3>
                        <div className={`upper-base-text subtitle`}>{subtitle}</div>
                    </div>
                </div>
                <div className="container-full-width">
                    {ui_image}
                    {screens}
                </div>
            </div>
            <style jsx>{`
                .ui-wrapper {
                    background: ${projectItem.background_color};               
                }
            `}</style>
        </div>
    )
}

export default Ui