import styles from '../../styles/components/project/Competitors.module.scss'

const Competitors = ({projectItem}) => {

    const competitors = projectItem.competitors


    const caseItems = competitors.map(item => (
        <div className={styles.case} key={item.case}>
            <div className={styles.images}>
                {item.images.map(img => <img src={`../${img}`} key={img}/>)}
            </div>
            <div className={styles.data}>
                <div className={styles.title}>
                    {item.title}
                </div>
                <div className={styles.subtitle}>
                    Pros and cons
                    <div className={styles.pros}>
                        {item.pros.map(item => <div className={styles.item} key={item}>{item}</div>)}
                    </div>
                    <div className={styles.cons}>
                        {item.cons.map(item => <div className={styles.item} key={item}>{item}</div>)}
                    </div>
                </div>
            </div>
        </div>
    ))
    return(
        <>
            <section className={`project-section ${styles.competitors}`}>
                <div className="container">
                    <h3>Research</h3>
                    <div className={`upper-base-text subtitle`}>Competitors analysis</div>
                    <div className={styles.case_wrapper}>
                        {caseItems}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Competitors