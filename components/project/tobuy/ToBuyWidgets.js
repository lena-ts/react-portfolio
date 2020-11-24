const ToBuyWidgets = ({projectItem}) => {
    return(
        <section className="auto-height">
            <div className="container">
                <div className="title_area">
                    <h3>iOS 14 Widgets</h3>
                    <div className={`upper-base-text subtitle`}>3 types of widgets available</div>
                </div>
                <div className="widgets_types">
                    <div className="large">
                        <div className="upper-base-text subtitle">Large</div>
                        <div className="widgets_wrapper">
                            {projectItem.tobuy_widgets.large.map(item =>
                                <div className="widget" key={item.title}>
                                    <div>{item.title}</div>
                                    <img src={`../${item.img}`} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="medium">
                        <div className="upper-base-text subtitle">Medium</div>
                        <div className="widgets_wrapper">
                            {projectItem.tobuy_widgets.medium.map(item =>
                                <div className="widget" key={item.title}>
                                    <div>{item.title}</div>
                                    <img src={`../${item.img}`} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="small">
                        <div className="upper-base-text subtitle">Small</div>
                        <div className="widgets_wrapper">
                            {projectItem.tobuy_widgets.small.map(item =>
                                <div className="widget" key={item.title}>
                                    <div>{item.title}</div>
                                    <img src={`../${item.img}`} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="screens">
                    <div className="upper-base-text subtitle">Screens</div>
                    <div className="screens_wrapper">
                    {projectItem.tobuy_widgets.screens.map(img =>
                        <img src={`../${img}`} key={img}/>
                    )}
                    </div>
                </div>
            </div>
            <style jsx>{`
                 section{
                    background: ${projectItem.background_color};
                    padding-bottom: 0;
                }
                .screens_wrapper {
                    display: grid;
                    grid-template-columns: auto auto auto auto;
                    grid-column-gap: 2rem;
                }
                
                .screens_wrapper img {
                    width: 100%;
                }
                
                .screens .subtitle {
                    font-weight: 500;
                     margin-bottom: 2rem;
                     margin-top: 3rem;
                }
                
                .widgets_types {
                    font-size: 15px;
                    margin-top: 2rem;
                }
                
                .widgets_types .subtitle { 
                    font-weight: 500;
                    margin-bottom: 1rem;
                }
                
                .widgets_wrapper {
                    display: grid;
                     grid-template-columns: 22.2% 22.2% 22.2% 22.2%;
                    // grid-template-columns: 22.2% 22.2% auto auto;
                    // grid-template-columns: auto auto;
                    grid-column-gap: 2rem;
                    margin-bottom: 2rem;
                }
                
                .widget img {
                    width: 100%;
                    margin-top: 1.5rem;
                    // border-radius: 20px;
                    // box-shadow: 0px 50px 100px rgba(109, 141, 146, 0.1);
                }
                
                .small img{
                    max-width: 140px;
                }
                
                .small .widgets_wrapper{
                    grid-template-columns: 13% 13% 13% 13% ;
                    align-items: end;
                }
                
                @media(max-width: 1024px) {
                    .screens_wrapper {
                        grid-template-columns: auto auto;
                    }
                    
                     .screens_wrapper img {
                        margin-bottom: 1rem;
                     }
                     
                     .widgets_wrapper {
                        grid-template-columns: auto auto;
                     }
                     
                     .widgets_wrapper .widget {
                        margin-bottom: 1rem;
                     }
                     
                     .small .widgets_wrapper{
                        grid-template-columns: auto auto auto auto;
                     }
                }
                
                @media (max-width: 768px) {
                   .widgets_wrapper {
                        grid-template-columns: auto;
                   }
                   
                   .widgets_wrapper img {
                        width: 100%;
                   }
                }
                
                @media(max-width: 480px) {
                     .small .widgets_wrapper{
                        grid-template-columns: auto auto;
                     }
                }
                
            `}</style>
        </section>
    )
}

export default ToBuyWidgets