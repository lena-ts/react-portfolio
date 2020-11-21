import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";
import projects from '../../data/ProjectsIntroData'
import Link from "next/link";
import ProjectIntro from "../../components/project/ProjectIntro";
import Competitors from "../../components/project/Competitors_multi";
import ProjectFooter from "../../components/common/ProjectFooter";

const ProjectView = (project) => {
    const router = useRouter()

    const projectItem = projects.filter(item => item.url === router.query.id)[0]

    console.log('router', router)
    console.log('project', projectItem)

    const competitors = projectItem.competitors ? <Competitors projectItem={projectItem}/> : null

    return(
        <MainLayout>
            <aside>
                <div className="backto-link"><Link href={`/#${projectItem.url}`}><a>&nbsp;</a></Link></div>
                {/*<h1> {projectItem.title}</h1>*/}
                <ProjectIntro projectItem={projectItem}/>
                {competitors}
                <ProjectFooter/>
            </aside>
            <style jsx>{`
                aside {
                    background: ${projectItem.background_color};
                }
            `}</style>
        </MainLayout>
    )
}

export default ProjectView

export function getServerSideProps(query, req) {

    // const project = projects.filter(item => item.url === query.id)[0]

    console.log('router1', query)
    // console.log('project', project)
    return {
        props: {}
    }
}