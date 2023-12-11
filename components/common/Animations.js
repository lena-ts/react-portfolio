import styles from "../../styles/components/project/Animations.module.scss";

const Animations = ({projectItem}) => {
    const animationsList = projectItem.animations.map(item =>
        <div key={item.id} className={styles.animation_video}>
            <div>{item.title}</div>
            <video width="270" height="585" autoPlay={true} muted={true} loop={true}>
                <source src={item.video} type="video/mp4"></source>
            </video>
        </div>
    )
    return(
        <section style={{backgroundColor: projectItem.background_color, borderTop: "1px solid #ccc"}}>
            <div className="container">
                <h3 style={{lineHeight: "44px"}}>Animations</h3>
                <div className={`upper-base-text subtitle`}>Features preview and icons micro animations</div>
                <div className={styles.animations_grid}>
                    {animationsList}
                </div>
            </div>
        </section>
    )
}

export default Animations