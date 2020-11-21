import {MainLayout} from "../../components/MainLayout";
import ProjectIntro from "../../components/project/ProjectIntro";
import things_happen_data from "../../data/projects/ThingsHappenData"
import Competitors from "../../components/project/Competitors";
import AppStoreScreens from "../../components/common/AppStoreScreens";
import ProjectFooter from "../../components/common/ProjectFooter";
import Ui from "../../components/common/Ui";
import Ux from "../../components/common/Ux";
import Schema from "../../components/common/Schema";
import VisualIdentification from "../../components/common/VisualIdentification";
import Icon from "../../components/common/Icon";

const ThingsHappenApp = () => {
    return(
        <MainLayout>
            <ProjectIntro projectItem={things_happen_data}/>
            <Competitors projectItem={things_happen_data} />
            <Schema projectItem={things_happen_data}/>
            {/*<Ux projectItem={things_happen_data}/>*/}
            <VisualIdentification projectItem={things_happen_data} />
            <Icon projectItem={things_happen_data}/>
            <Ui projectItem={things_happen_data} />
            <AppStoreScreens projectItem={things_happen_data}/>
            <ProjectFooter/>
            <style jsx>{`
                    .backto-link {
                        background: ${things_happen_data.background_color};
                    }
            `}</style>
        </MainLayout>
    )
}

export default ThingsHappenApp