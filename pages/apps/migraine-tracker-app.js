import {MainLayout} from "../../components/MainLayout";
import ProjectIntro from "../../components/project/ProjectIntro";
import migraine_data from "../../data/projects/MigraineAppData";
import Ui from "../../components/common/Ui";
import ProjectFooter from "../../components/common/ProjectFooter";
import MigraineQuestions from "../../components/project/migraine/MigraineQuestions";
import AppStoreScreens from "../../components/common/AppStoreScreens";

const MigraineApp = () => {
    return(
        <MainLayout>
            <ProjectIntro projectItem={migraine_data}/>
            <MigraineQuestions projectItem={migraine_data} />
            <Ui projectItem={migraine_data} />
            <AppStoreScreens projectItem={migraine_data} />
            <ProjectFooter/>
        </MainLayout>
    )
}

export default MigraineApp