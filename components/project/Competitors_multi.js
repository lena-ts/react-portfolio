import styles from '../../styles/components/project/Competitors.module.scss'
import competitorsData from '../../data/CompetitorsData'

const Competitors = ({projectItem}) => {
    const competitors = competitorsData.filter(item => item.url === projectItem.url)[0].competitors

    console.log('competitors', competitors)


    const caseItems = competitors.map(item => (
        <div className={styles.case} key={item.case}>
            <div className={styles.images}>
                {item.images.map(img => <img src={`../${img}`}/>)}
            </div>
            <div className={styles.data}>
                <div className={styles.title}>
                    {item.title}
                </div>
                <div className={styles.subtitle}>
                    Pros and cons
                    <div className={styles.pros}>
                        {item.pros.map(item => <div className={styles.item}>{item}</div>)}
                    </div>
                    <div className={styles.cons}>
                        {item.cons.map(item => <div className={styles.item}>{item}</div>)}
                    </div>
                </div>
            </div>

        </div>
    ))
    return(
        <>
            <section className={`project-section ${styles.competitors}`}>
                <div>
                    <h3>Research</h3>
                    <div className={`upper-base-text ${styles.subtitle}`}>Competitors analysis</div>
                    <div className={styles.case}>
                        {caseItems}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Competitors