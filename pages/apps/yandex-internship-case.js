import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";
import yandex_data from "../../data/projects/YandexInternshipData"
import ProjectIntro from "../../components/project/ProjectIntro";

const YandexCase = () => {
    return(
        <MainLayout>
            <ProjectIntro projectItem={yandex_data}/>
            <section id="competitors" className="project-section">
                <div className="container">
                    <h3>Research</h3>
                     <div className={`upper-base-text subtitle`}>Competitors analysis</div>
                    {yandex_data.competitors_image.map (item => <img src={`../${item}`} />)}
                </div>
            </section>
            <section id="interview" className="project-section">
                <div className="container">
                    <h3>Interview</h3>
                    <div className="subtitles">
                        <div className={`upper-base-text gray-text`}>5 people interviewed, one question asked:</div>
                        <div className="upper-base-text subtitle-2">Name 5 points of information that you are interested in about athletes</div>
                    </div>
                    <div className="interview-items-wrapper">
                    {yandex_data.interview.map(item  => (
                        <div className="interview-item" key={item.case[0]}>
                            <div className="person">
                                <div className="sport-types">
                                    {item.case.map( sport =>
                                        <div className={`sport-icon ${sport}`} key={sport[0]}></div>
                                    )}
                                </div>
                                <div className="person-type">
                                    {item.person}
                                </div>
                            </div>
                            <div className="answers">
                                <strong>Ответ</strong>
                                <ul>
                                {item.answers.map( ans => <li>{ans}</li>)}
                                </ul>
                            </div>

                        </div>
                    ))}
                    </div>
                </div>
            </section>
            <section id="moodboard" className="auto-height">
                <div className="container">
                    <h3>Moodboard</h3>
                </div>
                <div className="container-full-width">
                    <img src={`../${yandex_data.moodboard_image}`} />
                </div>
            </section>
            <section id="result">
                <div className="container">
                <h3>Results</h3>
                    <div className="final-images">
                    {yandex_data.final_image.map( item => <img src={`../${item}`} />)}
                    </div>
                     <p>{yandex_data.result_text}</p>
                </div>
            </section>
            <style jsx>{`
                section {
                    background: white;
                }
                .backto-link {
                     background: ${yandex_data.background_color};
                }
                
                #competitors{
                 padding-bottom: 0;
                }
                
                #competitors, #interview, #moodboard, #result {
                    height: auto;
                }
                
                #competitors img {
                    width: 100%;
                }
                #interview .subtitles {
                    margin: 2rem 0;
                }
                #interview .subtitle-2 {
                    margin-top: 1rem;
                }
                
                .interview-items-wrapper {
                    width: 90%;
                }
                
                .interview-item {
                    border-radius: 15px;
                    border: 1px solid #C4C4C4;
                    margin-bottom: 1rem;
                    padding: 2rem;
                    display: grid;
                    grid-template-columns: 50% 50%;
                }
                
                .interview-item ul {
                    padding:0;
                }
                
                .interview-item ul li {                  
                    line-height: 24px;
                }
                
                .interview-item:nth-child(3) ul li {
                    padding: 0.3rem 0;
                }
                
                .interview-item strong {
                font-weight: 500;
                }
                
                .person {
                    display: flex;
                    flex-direction: row;
                }
                .person-type {
                    font-weight: 500;
                    padding: 0 2rem;
                    line-height: 24px;
                    width: 78%;
                    position: relative;
                }
                
                .person-type:after {
                    content: "";
                    display: inline-block;
                    width:1px;
                    height: 50px;
                    background: #C4C4C4;
                    position: absolute;
                    top: 0;
                    right: 0;
                }
                
                #moodboard {
                    padding: 0 0 3rem 0;
                }
                
                #moodboard img {
                    display: block;
                    width: 100%;
                    padding: 0 2rem;
                    margin: 3rem auto;
                }
                
                #moodboard h3 {
                    
                }
                
                #result{
                    background: ${yandex_data.background_color};
                    line-height: 24px;
                }
                
                .final-images {
                    margin: 3rem 0;
                    display: grid;
                    grid-template-columns: 25% 25% 25% 25%;
                    column-gap: 1rem;
                }
                
                #result img {
                    display: inline-block;
                    width: 100%;
                    box-shadow: 0px 4px 32px rgba(0,0,0, 0.15); 
                }
                
                @media(max-width: 768px){
                    .interview-items-wrapper {
                        width: 100%;
                    }
                    
                    .interview-item {
                        grid-template-columns: auto;
                    }
                    
                    .person-type:after{
                        display: none;
                    }
                    
                    .final-images{
                      grid-template-columns: auto auto;
                      grid-row-gap: 1rem;
                    }
                }
            `}</style>
        </MainLayout>
    )
}

export default YandexCase