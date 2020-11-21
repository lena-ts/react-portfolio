import {MainLayout} from "../../components/MainLayout";
import ProjectIntro from "../../components/project/ProjectIntro";
import spender_data from "../../data/projects/SpenderAppData"
import Competitors from "../../components/project/Competitors";
import SpenderUserPersona from "../../components/project/spender/SpenderUserPersona";
import ProjectFooter from "../../components/common/ProjectFooter";
import Ui from "../../components/common/Ui";
import Ux from "../../components/common/Ux";
import VisualIdentification from "../../components/common/VisualIdentification";
import SpenderOnboarding from "../../components/project/spender/SpenderOnboarding";

const SpenderApp = () => {
    return(
        <MainLayout>
            <ProjectIntro projectItem={spender_data}/>
            <Competitors projectItem={spender_data} />
            <SpenderUserPersona projectItem={spender_data}/>
            {/*<Ux projectItem={spender_data}/>*/}
            <VisualIdentification projectItem={spender_data}/>
            <Ui projectItem={spender_data}/>
            <SpenderOnboarding projectItem={spender_data}/>
            <ProjectFooter/>
        </MainLayout>
    )
}

export default SpenderApp