import styles from '../styles/components/MoreApps.module.scss'
import MoreAppsData from "../data/MoreAppsData";

const MoreApps = () => {

    const appslist = MoreAppsData.map(item => (
        <a href={item.link} target="_blank">
        <div className={styles.app_item}>
            <img src={item.img} className={item.border ? styles.border : styles.img}/>
            <div>
                <div className={`m-text ${styles.title}`}>{item.title}</div>
                <span className="upper-base-text">{item.subtitle}</span>
                <div className={styles.downloads}>{item.downloads} downloads</div>
            </div>
        </div>
        </a>
    ))

    console.log(appslist)
    return(
        <section>
            <div className="container">
                <div className="footer_uppercase_title">More apps</div>
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