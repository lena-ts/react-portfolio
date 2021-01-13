import {MainLayout} from "../../components/MainLayout";
import ProjectIntro from "../../components/project/ProjectIntro";
import caps_data from "../../data/projects/CapsAppData";
import Competitors from "../../components/project/Competitors";
import ProjectFooter from "../../components/common/ProjectFooter";
import CapsReviewInvestigation from "../../components/project/caps/CapsReviewInvestigation";
import Schema from "../../components/common/Schema";
import VisualIdentification from "../../components/common/VisualIdentification";
import Ui from "../../components/common/Ui";
import AppStoreScreens from "../../components/common/AppStoreScreens";

const CapsApp = () => {
    return(
        <MainLayout>
            <ProjectIntro projectItem={caps_data}/>
            <Competitors projectItem={caps_data} />
            <CapsReviewInvestigation projectItem={caps_data}/>
            <Schema projectItem={caps_data}/>
            <VisualIdentification projectItem={caps_data}/>
            <Ui projectItem={caps_data} />
            <AppStoreScreens projectItem={caps_data} />
            <ProjectFooter/>
        </MainLayout>
    )
}

export default CapsApp