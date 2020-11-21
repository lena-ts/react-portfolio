import styles from '../../styles/components/project/Ui.module.scss'
const UiElements = ({projectItem}) => {
    return(
        <section className="auto-height">
            <div className="container">
                <div className={styles.title_area}>
                    <h3>UI Elements</h3>
                    <div className={`upper-base-text subtitle`}>Blocks, buttons, icons</div>
                </div>
                <div className={styles.image_area}>
                    <img src={`../${projectItem.ui.elements}`}  />
                </div>
            </div>
            <style jsx>{`
                section {
                    background: ${projectItem.background_color};
                }
                
                img {
                    width: 100%;
                }
            `}</style>
        </section>
    )
}

export default UiElements