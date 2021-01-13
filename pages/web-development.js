import {MainLayout} from "../components/MainLayout";
import SectionTitle from "../components/common/SectionTitle";
import ProjectFooter from "../components/common/ProjectFooter";
import styles from '../styles/components/WebDev.module.scss'
import dev_items from '../data/WebDevData'
import {motion} from "framer-motion";

const WebDev = () => {
    const items = dev_items.map(item =>
        <div key={item.id} className={styles.item}>
            <div className={styles.title}>
                <div className={styles.title_text}>{item.title}</div>
                <span className="gray-text">{item.stack}</span>
            </div>
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.7 }}
                className="image">
                <a href={item.url} target="_blank" className={item.url_mobile ? `link hide-on-mobile` : `link`}>
                 <img src={item.path} style={{border: item.border? '1px solid #ebebeb' : null}}/>
                </a>
                {item.url_mobile ?
                <a href={item.url_mobile} target="_blank" className="link-mobile">
                    <img src={item.path}/>
                </a> : null}
            </motion.div>
        </div>
    )
    return(
        <MainLayout>
            <div className="container">
                <section className="auto-height">
                    <SectionTitle title="Web, Apps development" subtitle="My works, design and development"/>
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