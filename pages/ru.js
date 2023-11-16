import {MainLayout} from "../components/MainLayout";
import Intro from "../components/Intro";
import IntroProject from "../components/IntroProject";
import projects from '../data/ProjectsIntroData'
import Experience from "../components/Experience";
import Contacts from "../components/Contacts";
import MoreApps from "../components/MoreApps";

export default function HomeRU() {
    const intro_projects = projects.map(item =>
        <IntroProject
            key={item.id}
            url={item.url}
            title={item.title}
            title_RU={item.title_RU}
            subtitle={item.subtitle}
            subtitle_RU={item.subtitle_RU}
            icon={item.icon_path}
            intro_screen_1={item.intro_screen_1_path}
            intro_screen_2={item.intro_screen_2_path}
            appstore={item.appstore_link}
            preorder={item.preorder}
            playmarket={item.playmarket_link}
            prototype={item.prototype_link}
            prototype_type={item.prototype_link_type}
            background={item.background_color}
            ru={true}
        />)
    return (

        <MainLayout ru={true}>
            <Intro ru={true}/>
            {intro_projects}
            <MoreApps />
            <Experience/>
            <Contacts/>
        </MainLayout>
    )
}