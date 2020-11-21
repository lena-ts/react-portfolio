import styles from '../../styles/components/project/Ux.module.scss'

const Ux = ({projectItem}) => {
    return(
        <section>
            <div className={styles.ux_section}>
                <div className="container">
                    <div className={styles.title_area}>
                        <h3>UX FLow</h3>
                        {/*<div className={`upper-base-text subtitle`}>App visualization</div>*/}
                    </div>
                </div>
                <div className="container-full-width">
                    <div className={styles.image_area}>
                        <img src={`../${projectItem.ux.image}`}  />
                    </div>
                </div>
            </div>
            <style jsx>{`
                section {
                    height: auto;
                    background: ${projectItem.background_color};
                }
            `}</style>
        </section>
    )
}

export default Ux