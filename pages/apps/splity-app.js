import splity_data from '../../data/projects/SplityAppData'
import {MainLayout} from "../../components/MainLayout";
import Competitors from "../../components/project/Competitors";
import ProjectIntro from "../../components/project/ProjectIntro";
import SplityUserPersona from "../../components/project/splity/SplityUserPersona";
import Schema from "../../components/common/Schema";
import Ux from '../../components/common/Ux';
import Ui from "../../components/common/Ui";
import VisualIdentification from "../../components/common/VisualIdentification";
import ProjectFooter from "../../components/common/ProjectFooter";
import AppStoreScreens from "../../components/common/AppStoreScreens";
import UiElements from "../../components/common/UiElements";
import SplityUiElements from "../../components/project/splity/SplityUiElements";

const SplityApp = () => {
    return(
        <MainLayout>
            <ProjectIntro projectItem={splity_data}/>
            <Competitors projectItem={splity_data} />
            <SplityUserPersona projectItem={splity_data}/>
            <Schema projectItem={splity_data}/>
            {/*<Ux projectItem={splity_data}/>*/}
            <VisualIdentification projectItem={splity_data}/>
            <SplityUiElements projectItem={splity_data}/>
            {/*<UiElements projectItem={splity_data}/>*/}
            <Ui projectItem={splity_data}/>
            <AppStoreScreens projectItem={splity_data}/>
            <ProjectFooter/>
        </MainLayout>
    )
}

export default SplityApp