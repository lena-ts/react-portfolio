import styles from '../styles/components/Experience.module.scss'

const Experience = () => {
    return(
        <>
            <div className={styles.small_section}>
                <div className="container">
                <div className="uppercase-title">My Experience</div>
                    <ul>
                        <li>
                            <div className="m-text">Product Designer at Yandex</div>
                            <div className={styles.periods_text}>March 2021 — June 2023 <span className={styles.gray_text}> · 2 years</span></div>
                        </li>
                        <li>
                            <div className="m-text">Mobile Apps Designer</div>
                            <div className={styles.periods_text}>November 2019 — Present <span className={styles.gray_text}> · 4 years</span></div>
                        </li>
                        <li>
                            <div className="m-text">Web Designer,<br></br>front-end developer at BelVG</div>
                            <div className={styles.periods_text}>August 2011 — November 2019 <span className={styles.gray_text}> · 8 years</span></div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Experience