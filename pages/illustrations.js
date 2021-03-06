import {MainLayout} from "../components/MainLayout";
import illustrations from '../data/IllutrationsData'
import styles from '../styles/components/Illustrations.module.scss'
import ProjectFooter from "../components/common/ProjectFooter";
import {motion} from "framer-motion";

const Illustrations = () => {
    const illustrations_list = illustrations.map(item => (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.7 }}
            key={item.id} className={styles.illustration_item}>
            <div>{item.title}</div>
            <img src={item.path}/>
        </motion.div>
    ))
    return(
        <MainLayout>
            <section className={styles.illustration_section}>
                <div className="container">
                    <div className="m-text">Illustrations</div>
                    <p className="upper-base-text">Here are some of my illustration works</p>
                    <div className={styles.illustrations_list}>
                    {illustrations_list}
                    </div>
                </div>
            </section>
            <ProjectFooter/>
            <style jsx>{`
                    section {
                        height: auto;
                    }
            `}</style>
        </MainLayout>
    )
}

export default Illustrations