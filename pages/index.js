import {MainLayout} from "../components/MainLayout";
import Intro from "../components/Intro";
import IntroProject from "../components/IntroProject";
import projects from '../data/ProjectsIntroData'
import Experience from "../components/Experience";
import Contacts from "../components/Contacts";

export default function Home() {
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
  return (
      <MainLayout>
             <Intro/>
             {intro_projects}
             <Experience/>
             <Contacts/>
      </MainLayout>
  )
}
