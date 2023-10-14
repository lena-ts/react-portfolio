import styles from '../../styles/components/project/ProjectFeature.module.scss'
const ProjectFeature  = ({projectItem, featureId}) => {
    const subtitle = <div className="footer_uppercase_title"> {projectItem.features[featureId].subtitle}</div>


    const title = <h3>{projectItem.features[featureId].title}</h3>


   const text = <div className={`upper-base-text subtitle`}>{projectItem.features[featureId].text}</div>

    const singleImage = <img style={{width: "100%", margin: "3rem auto"}} src={`../${projectItem.features[featureId].singleImage}`}/>

    return(
        <section style={{borderTop: "1px solid #c8ccdb", backgroundColor: projectItem.features[featureId].color}}>
            <div className="container">
                <div className="full-width-container">
                    <div>
                        {subtitle}
                        {title}
                        <br/>
                        {text}
                    </div>
                    <div className={styles.screens}>
                        {singleImage}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectFeature