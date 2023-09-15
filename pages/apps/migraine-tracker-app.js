import {MainLayout} from "../../components/MainLayout";
import ProjectIntro from "../../components/project/ProjectIntro";
import migraine_data from "../../data/projects/MigraineAppData";
import Ui from "../../components/common/Ui";
import ProjectFooter from "../../components/common/ProjectFooter";
import Idea from "../../components/common/Idea";

const MigraineApp = () => {
    return(
        <MainLayout>
            <ProjectIntro projectItem={migraine_data}/>
            {/*<Idea projectItem={migraine_data} />*/}
            <Ui projectItem={migraine_data} />
            <ProjectFooter/>
        </MainLayout>
    )
}

export default MigraineApp