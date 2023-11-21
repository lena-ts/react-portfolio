import splity_data from '../../../data/projects/ru/SplityAppData'
import {MainLayout} from "../../../components/MainLayout";
import Competitors from "../../../components/project/Competitors";
import ProjectIntro from "../../../components/project/ProjectIntro";
import SplityUserPersona from "../../../components/project/splity/SplityUserPersona";
import Ui from "../../../components/common/Ui";
import VisualIdentification from "../../../components/common/VisualIdentification";
import ProjectFooter from "../../../components/common/ProjectFooter";
import AppStoreScreens from "../../../components/common/AppStoreScreens";
import SplityUiElements from "../../../components/project/splity/SplityUiElements";

const SplityApp = () => {
    return(
        <MainLayout ru={true}>
            <ProjectIntro projectItem={splity_data}/>
            <Competitors projectItem={splity_data} ru={true}/>
            {/*<SplityUserPersona projectItem={splity_data}/>*/}
            {/*<Schema projectItem={splity_data}/>*/}
            {/*<Ux projectItem={splity_data}/>*/}
            <VisualIdentification projectItem={splity_data}/>
            <SplityUiElements projectItem={splity_data} ru={true}/>
            {/*<UiElements projectItem={splity_data}/>*/}
            <Ui projectItem={splity_data} ru={true}/>
            <AppStoreScreens projectItem={splity_data} ru={true}/>
            <ProjectFooter/>
        </MainLayout>
    )
}

export default SplityApp