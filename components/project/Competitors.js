import styles from '../../styles/components/project/Competitors.module.scss'

const Competitors = ({projectItem, ru}) => {

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
                    {ru ? "Плюсы и минусы" : "Pros and cons"}
                    <div className={styles.pros}>
                        {item.pros.map(item => <div className={styles.item} key={item}>{item}</div>)}
                    </div>
                    <div className={styles.cons + ` base-text`}>
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
                    <h3>{ru ? "Исследование" : "Research"}</h3>
                    <div className={`upper-base-text subtitle`}>{ru ? "Анализ конкурентов" : "Competitors analysis"}</div>
                    <div className={styles.case_wrapper}>
                        {caseItems}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Competitors