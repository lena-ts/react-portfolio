import {MainLayout} from "../../components/MainLayout";
import ProjectIntro from "../../components/project/ProjectIntro";
import umka_data from "../../data/projects/UmkaAppData"
import Ui from "../../components/common/Ui";
import Idea from "../../components/common/Idea";
import AppStoreScreens from "../../components/common/AppStoreScreens";
import ProjectFooter from "../../components/common/ProjectFooter";


const UmkaEnglishApp = () => {
    return(
        <MainLayout>
            <ProjectIntro projectItem={umka_data}/>
            <Idea projectItem={umka_data}/>
            <Ui projectItem={umka_data}/>
            <AppStoreScreens projectItem={umka_data}/>
            <ProjectFooter/>
        </MainLayout>
    )
}

export default UmkaEnglishApp