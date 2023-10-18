import {MainLayout} from "../../components/MainLayout";
import PassCode from "../../components/common/PassCode";
import {useState} from "react";
import ProjectIntro from "../../components/project/ProjectIntro";
import yandex_data from "../../data/projects/YandexSearchData";
import ProjectFeature from "../../components/common/ProjectFeature";

const YandexSearch = () => {
    const [password, setPassword] = useState(null);
    const updateData = (value) => {
        setPassword(value )
    }

    const data =  <>
    <ProjectIntro projectItem={yandex_data}/>
    <ProjectFeature projectItem={yandex_data} featureId={0} />
    <ProjectFeature projectItem={yandex_data} featureId={1} />
    <ProjectFeature projectItem={yandex_data} featureId={5} />
    <ProjectFeature projectItem={yandex_data} featureId={4}/>
    <ProjectFeature projectItem={yandex_data} featureId={2} />
    <ProjectFeature projectItem={yandex_data} featureId={3} />
    </>

    const psd = password == 321 ? data : <PassCode updateData={updateData} projectItem={yandex_data}/>
    return(
        <MainLayout>
            {data}
        </MainLayout>
    )
}

export default YandexSearch