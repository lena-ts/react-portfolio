import styles from '../../../styles/components/project/CapsReviewsInvestigation.module.scss'

const CapsReviewInvestigation = ({projectItem}) => {
    const items = projectItem.reviews.map(item =>
        <div className={styles.item}>
            <div className={styles.image}><img src={`../${item.img}`} alt={item.title}/></div>
            <div>
            <div className={styles.text_wrapper}>
                <div className={styles.title}>{item.title}</div>
                <div>{item.text}</div>
            </div>
            </div>
        </div>
    )
    return(
        <section className="white-bg caps-reviews" style={{paddingTop: '1rem'}}>
            <div className="container">
                <h3>Competitors Apps Reviews Investigation</h3>
                <div className="upper-base-text subtitle">Allows to understand what people looking for and what problems they face in other apps</div>
                <div className={styles.items_wrapper}>
                    {items}
                </div>
            </div>
            <style jsx>{`
                section {
                    height:auto;
                }
                .items_wrapper {
                    background-color: 'red
                }
                
                @media (max-width: 768px) {
                    section {
                        padding-top: 0;
                    }
                }
            `}</style>
        </section>
    )
}

export default CapsReviewInvestigation