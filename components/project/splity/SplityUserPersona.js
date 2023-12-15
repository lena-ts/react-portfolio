const SplityUserPersona = ({projectItem}) => {
    return(
        <section className="white-bg auto-height">
            <div className="container">
                <h3>User Persona</h3>
                <div className={`upper-base-text subtitle`}>Here are some potentional users profiles </div>
                <div className="personas">
                    {projectItem.ux.user_persona.map( persona =>
                        <div className="persona" key={persona.id}>
                            <img src={`../${persona.img}`}/>
                            <ul>
                                <li>
                                    <div className="key">Sex:</div>
                                    <div className="value">{persona.sex}</div>
                                </li>
                                <li>
                                    <div className="key">Age:</div>
                                    <div className="value">{persona.age}</div>
                                </li>
                                <li>
                                    <div className="key">Situation:</div>
                                    <div className="value">{persona.situation}</div>
                                </li>
                                <li>
                                    <div className="key">Problem:</div>
                                    <div className="value">{persona.problem}</div>
                                </li>
                                <li>
                                    <div className="key">Goals:</div>
                                    <div className="value">{persona.goals}</div>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="resume">
                    <div className="upper-base-text">Resume</div>
                    <div>Average user persona is young human who travel with friends or collegues and need to split expenses and see who owes whom.</div>
                </div>
            </div>
            <style jsx>{`
                .persona {
                    display: grid;
                    grid-template-columns: 14% auto;
                    align-items: top;
                    border-bottom: 1px solid #ebebeb;
                    padding: 2rem 0;
                }
                
                .persona:last-child {
                    border-bottom: 0;
                }
                
                ul {
                    padding:0;
                    margin: 0;
                }
                
                ul li {
                    display: grid;
                    grid-template-columns: 12% auto;
                    line-height: 24px;
                }
                
                .key {
                    font-weight: 500;
                }
                
                img {
                    width: 100%;
                    max-width: 100px;
                }
                
                .resume {
                    padding: 1.5rem 0 0 0;
                }
                
                .resume .upper-base-text {
                    line-height: 55px;
                    font-weight: 500;
                }
                
                @media(max-width: 768px){
                    section{
                        padding: 0 0 1rem;
                    }
                    
                    .persona {
                        grid-template-columns: auto;
                    }
                    
                    .persona img {
                        margin-bottom: 1.5rem;
                        max-width: 60px;
                    }
                    
                    .persona ul li{
                        grid-template-columns: 30% auto;
                    }
                    
                    .resume{
                        padding: 0;
                        line-height: 24px;
                    }
                }
            `}</style>
        </section>
    )
}

export default SplityUserPersona