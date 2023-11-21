import styles from '../../styles/components/project/ProjectFeature.module.scss'

const ProjectFeatureVideo = ({projectItem, featureId}) => {

    const subtitle =
        <div className="footer_uppercase_title">{projectItem.features[featureId].subtitle}</div>

    const title = <h3 style={{lineHeight: "44px"}}>{ projectItem.features[featureId].title}</h3>

    const text = <div className={`upper-base-text subtitle`}>{ projectItem.features[featureId].text}</div>

    const scr =  projectItem.features[featureId].video
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
                    <div className={styles.video}>
                        <video width="300" height="635" autoPlay={true} muted={true} loop={true}>
                            <source src="../../projects/tobuy/features/cards.mp4" type="video/mp4"></source>
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectFeatureVideo