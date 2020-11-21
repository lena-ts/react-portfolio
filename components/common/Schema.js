import styles from '../../styles/components/project/Schema.module.scss'

const Schema = ({projectItem}) => {
    return(
        <section className="auto-height white-bg" id={`${projectItem.url}-schema`}>
            <div className={styles.schema_section}>
                <div className="container">
                    <div className={styles.title_area}>
                        <h3>Information Architecture</h3>
                        <div className={`upper-base-text subtitle`}>Schema</div>
                    </div>
                </div>
                <div className="container-full-width">
                    <img src={`../${projectItem.schema.image}`}  />
                </div>
            </div>
        </section>
    )
}

export default Schema