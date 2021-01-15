import {MainLayout} from "../../components/MainLayout";
import ProjectIntro from "../../components/project/ProjectIntro";
import yandex_weather_data from "../../data/projects/YandexWeatherWidgetData";
import yandex_data from "../../data/projects/YandexInternshipData";

const YandexWeatherWidget = () => {
    return(
        <MainLayout>
            <ProjectIntro projectItem={yandex_weather_data }/>
            <section id="interview" className="project-section">
                <div className="container">
                    <h3>Интервью</h3>
                    <div className="subtitles">
                        <div className={`upper-base-text`}>Опрошено 4 человека, задан один вопрос:</div>
                        <div className="upper-base-text subtitle-2">Когда ты смотришь прогноз погоды, какие параметры тебя интересуют?</div>
                    </div>
                    <div className="interview-items-wrapper">
                        {yandex_weather_data.interview.map(item  => (
                            <div className="interview-item" key={item.case[0]}>
                                <div className="person">
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
            <section id="competitors" className="project-section">
                <div className="container">
                    <h3>Анализ конкурентов</h3>
                    <div>
                    {yandex_weather_data.competitors_image.map (item =>
                        <div key={item.title} className="competitor-item">
                            <div className="competitor-title">
                                {item.title}
                            </div>
                            {item.items.map(p => <div key={p.img} className={item.double ? 'double' : null}>
                                <div className="competitor-subtitle">{p.subtitle}</div>
                                <img src={`../${p.img}`} />
                            </div>)}
                        </div>
                        )}
                    </div>
                        <div className="research-result">
                            <span>Вывод </span><br></br><br></br>
                            Исходя из анализа конкурентов можно выделить интересную функцию — <span>визуализацию тенденции изменения температуры</span>.
                        </div>
                </div>
            </section>
            <section id="ui" className="project-section" style={{backgroundColor: yandex_weather_data.background_color}}>
                <div className="container">
                    <h3>Дизайн</h3>
                    <p className="result-text">{yandex_weather_data.result_text}</p>
                    <div className={`upper-base-text subtitle`} style={{fontWeight: 500}}>Варианты виджетов:</div>
                    <div className="widgets-wrapper">
                        {yandex_weather_data.design.map(item =>
                            <div className="widget">
                                <div className="widget-image"><img src={`../${item.img}`} alt={item.title} /></div>
                                <div className="widget-info">
                                    <div className="widget-title"> {item.title} </div>
                                    <div className="widget-text"> {item.text}</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="visualization">
                        <div className={`upper-base-text subtitle`} style={{fontWeight: 500}}>Визуализация в окружении:</div>
                        <div className="final-images">
                            {yandex_weather_data.final_image.map( item => <img src={`../${item}`} />)}
                        </div>

                    </div>
                </div>
            </section>
            <style jsx>{`
                  #interview .subtitles {
                    margin: 2rem 0;
                }
                #interview .subtitle-2 {
                    margin-top: 1rem;
                    font-weight: 500;
                    font-size: 22px;
                }
                
                .interview-items-wrapper {
                    width: 90%;
                }
                
                .interview-item {
                    border-radius: 15px;
                    border: 1px solid #C4C4C4;
                    margin-bottom: 1rem;
                    padding: 1.5rem;
                    display: grid;
                    grid-template-columns: 30% auto;
                    padding-left: 0;
                }
                
                .interview-item ul {
                    padding:0;
                }
                
                .interview-item ul li {                  
                    line-height: 24px;
                }
               
                
                .interview-item strong {
                font-weight: 500;
                }
                
                .person {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }
                
                .person-type {
                    font-weight: 500;
                    margin-left: -2rem;
                    
                }
                
                .person-type:after {
                    content: "";
                    display: inline-block;
                    width:1px;
                    height: 50px;
                    background: #C4C4C4;
                    position: absolute;
                    top: 2.6rem;
                    right: 2rem;
                }
                
                .interview-item:last-child .person-type:after {
                    height: 20px;
                }
                
                 #competitors{
                 padding-top: 0;
                 padding-bottom: 0;
                }
                
                #competitors, #interview, #result {
                    height: auto;
                }
                
                #competitors img {
                    width: 100%;
                    margin-top: 2rem;
                }
                
                .competitor-item {
                    margin-top: 2rem;
                    margin-bottom: 4rem;
                    border-bottom: 1px solid #ebebeb;
                    padding-bottom: 4rem;
                }
                
                .competitor-item:last-child{
                    border-bottom: 0;
                    padding-bottom: 0;
                }
                
                .competitor-item .double {
                    width: 50%;
                    display: inline-block;
                    vertical-align: top;
                }
                .competitor-item .double img {
                    width: 90% !important;
                }
                
                .competitor-title {
                    font-weight: 500;
                    font-size: 20px;
                }
                
                .competitor-subtitle {
                    margin-top: 2rem;
                    font-weight: 500;
                }
                
                .widgets-wrapper {
                    margin-top: 2rem;
                }
                
                .widget {
                    display: grid;
                    grid-template-columns: auto auto;
                    grid-column-gap: 4rem;
                    margin-bottom: 4rem;
                    // font-size: 18px;
                    // line-height: 24px;
                }
                
                .widget-image img {
                    width: 370px;
                }
                
                .widget-title {
                    font-weight: 500;
                    padding-bottom: 1rem;
                }
                
                .widget-text {
                    line-height: 22px;
                }
                
                .widget:last-child .widget-image {
                    width: 370px;
                }
                
                .widget:last-child img {
                    width: 114px;
                }
                
                .visualization {
                    margin-top: 4rem;
                }
                
                .final-images {
                    margin: 2rem 0;
                    display: grid;
                    grid-template-columns: 25% 25% 25% 25%;
                    column-gap: 1rem;
                }
                
                .visualization img {
                    display: inline-block;
                    width: 100%;
                    box-shadow: 0px 4px 32px rgba(0,0,0, 0.15); 
                    border-radius: 16px;
                }
                
                .visualization p, .result-text {
                    padding: 2rem 0;
                    line-height: 24px;
                    // font-size: 18px;
                }
                
                .research-result {
                     padding-bottom: 4rem;
                     line-height: 24px;
                }
                
                .research-result span{
                    font-weight: 600;
                }

                `}</style>
        </MainLayout>
    )
}

export default YandexWeatherWidget
