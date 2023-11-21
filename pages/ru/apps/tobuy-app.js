import {MainLayout} from "../../../components/MainLayout";
import tobuy_data from "../../../data/projects/ru/ToBuyAppData";
import ProjectIntro from "../../../components/project/ProjectIntro";
import ProjectFooter from "../../../components/common/ProjectFooter";
import AppStoreScreens from "../../../components/common/AppStoreScreens";
import Ui from "../../../components/common/Ui";
import VisualIdentification from "../../../components/common/VisualIdentification";
import Website from "../../../components/common/Website";
import ToBuyWidgets from "../../../components/project/tobuy/ToBuyWidgets";
import ToBuyWatches from "../../../components/project/tobuy/ToBuyWatches";
import ToBuyIcon from "../../../components/project/tobuy/ToBuyIcon";
import ProjectFeature2Col from "../../../components/common/ProjectFeature2Col";
import ToBuyIdea from "../../../components/project/tobuy/ToBuyIdea";
import ProjectFeatureVideo from "../../../components/common/ProjectFeatureVideo";

const ToBuyApp = () => {
    return(
        <MainLayout ru={true}>
            <ProjectIntro projectItem={tobuy_data}/>
            <ToBuyIdea projectItem={tobuy_data}/>
            <Ui projectItem={tobuy_data}/>
            <ProjectFeature2Col projectItem={tobuy_data} featureId={0}/>
            <ProjectFeature2Col projectItem={tobuy_data} featureId={1}/>
            <ProjectFeature2Col projectItem={tobuy_data} featureId={3}/>
            <ProjectFeature2Col projectItem={tobuy_data} featureId={2}/>
            <ProjectFeature2Col projectItem={tobuy_data} featureId={4}/>
            {/*<ProjectFeatureVideo projectItem={tobuy_data} featureId={6}/>*/}
            {/*<ProjectFeature2Col projectItem={tobuy_data} featureId={4}/>*/}
            {/*<ToBuyInterview projectItem={tobuy_data}/>*/}
            {/*<Schema projectItem={tobuy_data}/>*/}
            {/*<Ux projectItem={tobuy_data}/>*/}
            <VisualIdentification projectItem={tobuy_data}/>
            {/*<ToBuyUiElements projectItem={tobuy_data}/>*/}
            <ToBuyWidgets projectItem={tobuy_data} ru={true}/>
            <ToBuyWatches projectItem={tobuy_data} ru={true}/>
            <ToBuyIcon projectItem={tobuy_data}/>
            {/*<Competitors projectItem={tobuy_data}/>*/}
            <Website projectItem={tobuy_data} ru={true}/>
            <AppStoreScreens projectItem={tobuy_data} ru={true}/>
            <ProjectFooter ru={true}/>
        </MainLayout>
    )
}

export default ToBuyApp