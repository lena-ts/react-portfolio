import styles from '../styles/components/MoreApps.module.scss'
import MoreAppsData from "../data/MoreAppsData";

const MoreApps = (ru) => {

    const MainTitle = ru.ru ? "Другие приложения" : "More apps"

    const appslist = MoreAppsData.map(item => (
        <a href={item.link} target="_blank">
        <div className={styles.app_item}>
            <img src={item.img} className={item.border ? styles.border : styles.img}/>
            <div>
                <div className={`m-text ${styles.title}`}>{item.title}</div>
                <span className="upper-base-text">{ru.ru ? item.ru_subtitle : item.subtitle}</span>
                <div className={styles.downloads}>{ru.ru ? item.ru_downloads : item.downloads}</div>
            </div>
        </div>
        </a>
    ))

    console.log(appslist)
    return(
        <section>
            <div className="container">
                <div className="footer_uppercase_title">{MainTitle}</div>
                <div className={styles.apps_list}>
                {appslist}
                </div>
            </div>
            <style jsx>{`
                section {
                    min-height: auto;
                    height: auto;
                }
                .with_border {
                    border: 1px solid #ebebeb;
                }
            `}</style>
        </section>
    )
}

export default MoreApps