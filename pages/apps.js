import {MainLayout} from "../components/MainLayout";
import projects from "../data/ProjectsIntroData";
import IntroProject from "../components/IntroProject";
import SectionTitle from "../components/common/SectionTitle";

const AppsList = () => {
    const intro_projects = projects.map(item =>
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
        />)
    return(
        <MainLayout>
            <section className="auto-height" id="apps-intro">
            <div className="container">
                <SectionTitle title="iOS Apps" subtitle="Research, UI/UX design, product work"/>
            </div>
            </section>
            <div>
            {intro_projects}
            </div>
            <style jsx>{`
                #apps-intro{
                    padding-bottom: 0;
                    background: #F0F4F7;
                }
                .apps-grid {
                    display: grid;
                    grid-template-columns: auto auto;
                }
                
                @media(max-width: 1024px) {
                    .apps-grid {
                        grid-template-columns: auto;
                    }
                }
            `}</style>
        </MainLayout>
    )
}

export default AppsList