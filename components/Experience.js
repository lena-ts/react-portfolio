import styles from '../styles/components/Experience.module.scss'

const Experience = () => {
    return(
        <>
            <div className={styles.small_section}>
                <div className="container">
                <div className="uppercase-title">My Experience</div>
                    <ul>
                        <li>
                            <div className="m-text">Freelance Mobile App Designer</div>
                            <div className={styles.periods_text}>November 2019 — Present</div>
                        </li>
                        <li>
                            <div className="m-text">Web Designer,<br></br>front-end developer at BelVG</div>
                            <div className={styles.periods_text}>August 2011 — November 2019</div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Experience