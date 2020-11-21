import {MainLayout} from "../components/MainLayout";
import SectionTitle from "../components/common/SectionTitle";
import ProjectFooter from "../components/common/ProjectFooter";
import styles from '../styles/components/WebDev.module.scss'
import dev_items from '../data/WebDevData'

const WebDev = () => {
    const items = dev_items.map(item =>
        <div key={item.id} className={styles.item}>
            <div className={styles.title}>
                <div className={styles.title_text}>{item.title}</div>
                <span className="gray-text">{item.stack}</span>
            </div>
            <div className="image">
                <a href={item.url} target="_blank">
                 <img src={item.path}/>
                </a>
            </div>
        </div>
    )
    return(
        <MainLayout>
            <div className="container">
                <section className="auto-height">
                    <SectionTitle title="Web development" subtitle="My works, design and front-end development"/>
                </section>
                <div className={styles.web_dev_grid}>
                    {items}
                </div>
            </div>
            <ProjectFooter/>
            <style jsx>{`
                section {
                    padding-bottom: 2rem;
                }
            `}</style>
        </MainLayout>
    )
}

export default WebDev