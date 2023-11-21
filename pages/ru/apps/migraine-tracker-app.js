import {MainLayout} from "../../../components/MainLayout";
import ProjectIntro from "../../../components/project/ProjectIntro";
import migraine_data from "../../../data/projects/ru/MigraineAppData";
import Ui from "../../../components/common/Ui";
import ProjectFooter from "../../../components/common/ProjectFooter";
import MigraineQuestions from "../../../components/project/migraine/MigraineQuestions";
import AppStoreScreens from "../../../components/common/AppStoreScreens";

const MigraineApp = () => {
    return(
        <MainLayout ru={true}>
            <ProjectIntro projectItem={migraine_data}/>
            <MigraineQuestions projectItem={migraine_data} ru={true}/>
            <Ui projectItem={migraine_data} />
            <AppStoreScreens projectItem={migraine_data} ru={true}/>
            <ProjectFooter ru={true}/>
        </MainLayout>
    )
}

export default MigraineApp