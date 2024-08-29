import styles from '../styles/components/Experience.module.scss'
import ExperienceData from "../data/ExpericenceData";

const Experience = (ru) => {
    const MainTitle = ru.ru ? ExperienceData.ru_maintitle : ExperienceData.maintitle

    const titleYandex = ru.ru ? ExperienceData.ru_title_yandex : ExperienceData.title_yandex
    const dateYandex = ru.ru ? ExperienceData.ru_date_yandex : ExperienceData.date_yandex
    const yearsYandex = ru.ru ? ExperienceData.ru_years_yandex : ExperienceData.years_yandex

    const titleApps = ru.ru ? ExperienceData.ru_title_apps : ExperienceData.title_apps
    const dateApps = ru.ru ? ExperienceData.ru_date_apps : ExperienceData.date_apps
    const yearsApps = ru.ru ? ExperienceData.ru_years_apps : ExperienceData.years_apps

    const titleBelvg = ru.ru ? ExperienceData.ru_title_belvg : ExperienceData.title_belvg
    const dateBelvg = ru.ru ? ExperienceData.ru_date_belvg : ExperienceData.date_belvg
    const yearsBelvg = ru.ru ? ExperienceData.ru_years_belvg : ExperienceData.years_belvg

    const titleOrganic = ExperienceData.title_organic
    const dateOrganic = ExperienceData.date_organic
    const yearsOrganic = ExperienceData.years_organic

    return(
        <>
            <div className={styles.small_section}>
                <div className="container">
                <div className="uppercase-title">{MainTitle}</div>
                    <ul>
                        <li>
                            <div className="m-text">{titleOrganic}</div>
                            <div className={styles.periods_text}>{dateOrganic} <span className={styles.gray_text}> · {yearsOrganic}</span></div>
                        </li>
                        <li>
                            <div className="m-text">{titleYandex}</div>
                            <div className={styles.periods_text}>{dateYandex} <span className={styles.gray_text}> · {yearsYandex}</span></div>
                        </li>
                        <li>
                            <div className="m-text">{titleApps}</div>
                            <div className={styles.periods_text}>{dateApps} <span className={styles.gray_text}> · {yearsApps}</span></div>
                        </li>
                        <li>
                            <div className="m-text">{titleBelvg}</div>
                            <div className={styles.periods_text}>{dateBelvg} <span className={styles.gray_text}> · {yearsBelvg}</span></div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Experience