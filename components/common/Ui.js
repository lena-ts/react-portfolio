import styles from '../../styles/components/project/Ui.module.scss'
import InterfaceDescription from "./InterfaceDescription";

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

    const interface_description = projectItem.interface_description ?
            projectItem.interface_description.map(item => <InterfaceDescription projectItem={item} key={item.id}/>): null

    const interface_description_wrapper =projectItem.interface_description ? <div style={{paddingBottom: "4rem"}}>{interface_description}</div> : null

    const subtitle = projectItem.ui.subtitle ? projectItem.ui.subtitle : 'All screens, app visualization'

    const title = projectItem.ui.title ? projectItem.ui.title : "UI"
    return(
        <div className="ui-wrapper" id={`${projectItem.url}-ui`}>
            <div className={styles.ui_section}>
                <div className="container">
                    <div className={styles.title_area}>
                        <h3>{title}</h3>
                        <div className={`upper-base-text subtitle`}>{subtitle}</div>
                    </div>
                    {interface_description_wrapper}
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