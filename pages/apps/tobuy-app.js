import {MainLayout} from "../../components/MainLayout";
import tobuy_data from "../../data/projects/ToBuyAppData";
import ProjectIntro from "../../components/project/ProjectIntro";
import Competitors from "../../components/project/Competitors";
import ProjectFooter from "../../components/common/ProjectFooter";
import AppStoreScreens from "../../components/common/AppStoreScreens";
import Ui from "../../components/common/Ui";
import Ux from "../../components/common/Ux";
import VisualIdentification from "../../components/common/VisualIdentification";
import Website from "../../components/common/Website";
import Icon from "../../components/common/Icon";
import ToBuyWidgets from "../../components/project/tobuy/ToBuyWidgets";
import ToBuyWatches from "../../components/project/tobuy/ToBuyWatches";
import Schema from "../../components/common/Schema";
import ToBuyInterview from "../../components/project/tobuy/ToBuyInterview";
import ToBuyUiElements from "../../components/project/tobuy/ToBuyUiElements";
import ToBuyIcon from "../../components/project/tobuy/ToBuyIcon";
import {motion} from "framer-motion";
import ProjectFeature2Col from "../../components/common/ProjectFeature2Col";
import ToBuyIdea from "../../components/project/tobuy/ToBuyIdea";
import ProjectFeatureVideo from "../../components/common/ProjectFeatureVideo";
import Animations from "../../components/common/Animations";

const ToBuyApp = () => {
    return(
        <MainLayout>
            <ProjectIntro projectItem={tobuy_data}/>
            <ToBuyIdea projectItem={tobuy_data}/>
            <Ui projectItem={tobuy_data}/>
            <ProjectFeature2Col projectItem={tobuy_data} featureId={0}/>
            <ProjectFeature2Col projectItem={tobuy_data} featureId={1}/>
            <ProjectFeature2Col projectItem={tobuy_data} featureId={2}/>
            <ProjectFeature2Col projectItem={tobuy_data} featureId={3}/>
            <ProjectFeature2Col projectItem={tobuy_data} featureId={4}/>
            {/*<Animations projectItem={tobuy_data}/>*/}
            {/*<ProjectFeature2Col projectItem={tobuy_data} featureId={4}/>*/}
            {/*<ToBuyInterview projectItem={tobuy_data}/>*/}
            {/*<Schema projectItem={tobuy_data}/>*/}
            {/*<Ux projectItem={tobuy_data}/>*/}
            <VisualIdentification projectItem={tobuy_data}/>
            {/*<ToBuyUiElements projectItem={tobuy_data}/>*/}
            <ToBuyWidgets projectItem={tobuy_data}/>
            <ToBuyWatches projectItem={tobuy_data}/>
            <ToBuyIcon projectItem={tobuy_data}/>
            {/*<Competitors projectItem={tobuy_data}/>*/}
            <Website projectItem={tobuy_data}/>
            <AppStoreScreens projectItem={tobuy_data}/>
            <ProjectFooter/>
        </MainLayout>
    )
}

export default ToBuyApp