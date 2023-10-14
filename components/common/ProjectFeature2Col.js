import styles from '../../styles/components/project/ProjectFeature.module.scss'
const ProjectFeature2Col  = ({projectItem, featureId}) => {
    const subtitle =
        <div className="footer_uppercase_title">{projectItem.features[featureId].subtitle}</div>

    const title = <h3>{ projectItem.features[featureId].title}</h3>

   const text = <div className={`upper-base-text subtitle`}>{ projectItem.features[featureId].text}</div>

    const scr =  projectItem.features[featureId].screens

    const screens  = scr.map(img => <img className={styles.featureImg} src={`../${img}`} key={img} />)

    const screen1 = <img className={styles.featureImg} src={`../${projectItem.features[featureId].screens[0]}`} />
    const screen2 = <img className={styles.featureImg} src={`../${projectItem.features[featureId].screens[1]}`} />
    const emodji1 = projectItem.features[featureId].emodji[0]
    const emodji2 = projectItem.features[featureId].emodji[1]

    return(
        <section style={{borderTop: projectItem.features[featureId].borderTop, backgroundColor: projectItem.features[featureId].color}}>
            <div className="container">
                <div className={styles.featureGrid}>
                    <div>
                        {subtitle}
                        {title}
                        <br/>
                        {text}
                    </div>
                    <div className={styles.screens}>
                        <div className={styles.screen}>
                            {/*<div className={styles.emodji}>*/}
                            {/*    {emodji1}*/}
                            {/*</div>*/}
                            {screen1}
                        </div>
                        <div className={styles.screen}>
                            {/*<div className={styles.emodji}>*/}
                            {/*    {emodji2}*/}
                            {/*</div>*/}
                            {screen2}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectFeature2Col