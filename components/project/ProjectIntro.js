import styles from '../../styles/components/IntroProject.module.scss'
import BackToLink from "../common/BackToLink";

const ProjectIntro = (projectItem) => {

    const project = projectItem.projectItem

    console.log('PROJECT', project)

    const icon_image = project.icon_path ? <img src={`../${project.icon_path}`}  alt={project.url} className="medium-app-icon"/> : null
    const prototype_button_className = project.prototype_link_type === 'spa' ? 'button_spa' : 'button_html'
    const prototype_button_text = project.prototype_link_type === 'spa' ? "SPA" : "HTML"

    const prototype_link = project.prototype_link ?
        <a href={project.prototype_link}
           target="_blank"
           className={`button button_light ${prototype_button_className}`}>
            {prototype_button_text} Prototype
        </a>
        : null

    const appstore_link = project.appstore_link ?
        <a href={project.appstore_link} target="_blank" className="button button_light button_appstore">App Store</a>
        :null

    const description = project.description ? project.description : null
    const model = project.model ? project.model : null

    return(
        <>
            <BackToLink bg={project.background_color} url={project.url}/>
            <section className={styles.inner_intro} id={project.url}>
                <div className="container">
                    <div className={styles.inner_intro_wrapper}>
                        <div className={styles.intro_project_data}>
                            {icon_image}
                            <span className="super-l-text">{project.title}</span>
                            <span className="base-text intro_project_subtitle">{project.subtitle}</span>
                            <div className={styles.buttons_wrapper}>
                                {prototype_link}
                                {appstore_link}
                            </div>
                            <div className={`upper-base-text ${styles.description_text}`}>
                                {description}
                                {model}
                            </div>
                        </div>
                        <div className={styles.intro_project_images}>
                            <img src={`../${project.intro_screen_1_path}`} alt={project.title}/>
                            <img src={`../${project.intro_screen_2_path}`} alt={project.title}/>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                section {
                    background: ${project.background_color};
                }
            `}</style>
            </section>
        </>
    )
}

export default ProjectIntro