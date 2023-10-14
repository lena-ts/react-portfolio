import {MainLayout} from "../components/MainLayout";
import projects from "../data/ProjectsIntroData";
import IntroProject from "../components/IntroProject";
import SectionTitle from "../components/common/SectionTitle";
import styles from '../styles/components/IntroProject.module.scss'
import {motion} from "framer-motion";

const AppsList = () => {
    const intro_projects = projects.map(item => item.id != 10 ?
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.7 }}
        >
        <IntroProject
            key={item.id}
            url={item.url}
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon_path}
            intro_screen_1={item.intro_screen_1_path}
            intro_screen_2={item.intro_screen_2_path}
            appstore={item.appstore_link}
            prototype={item.prototype_link}
            prototype_type={item.prototype_link_type}
            background={item.background_color}
        /></motion.div> : null)
    return(
        <MainLayout>
            <section className="auto-height" id="apps-intro">
            <div className="container">
                <SectionTitle title="iOS Apps" subtitle="Research, UI/UX design, product work"/>
            </div>
            </section>
            <div className={styles.apps_grid}>
            {intro_projects}
            </div>
            <style jsx>{`
                // #apps-intro{
                //     padding-bottom: 0;
                //     background: #F0F4F7;
                // }
                

            `}</style>
        </MainLayout>
    )
}

export default AppsList