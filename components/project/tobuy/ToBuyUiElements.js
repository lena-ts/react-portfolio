import SectionTitle from "../../common/SectionTitle";

const ToBuyUiElements = ({projectItem}) => {
    return(
        <section className="auto-height">
            <div className="container">
                <SectionTitle title="UI Elements" subtitle="Block, buttons, icons"/>
                <div className="elements">
                    <div className="first-row row mobile-grid-100">
                        <div className="type open-categories">
                            <div className="title">Open categories</div>
                            <img src={`../${projectItem.ui_elements.open_categories}`}/>
                        </div>
                        <div className="type product">
                            <div className="title">Product</div>
                            <div className="items mobile-grid-100">
                            {projectItem.ui_elements.product.map( item =>
                                <div key={item.id}>
                                    <div className="subtitle">{item.title}</div>
                                    <img src={`../${item.img}`}/>
                                </div>
                            )}
                            <img src={`../${projectItem.ui_elements.product[2].img2}`} className="small-camera"/>
                            </div>
                        </div>
                        <div className="type icons">
                            <div className="title">Icons</div>
                            <div className="items mobile-grid-100">
                            {projectItem.ui_elements.icons.map( item =>
                                <div key={item.id}>
                                    <div className="subtitle">{item.title}</div>
                                    <img src={`../${item.img}`}/>
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                    <div className="second-row row mobile-grid-100">
                        <div className="type category-item">
                            <div className="title">Category Item</div>
                            <div className="category-item_wrapper">
                                <img src={`../${projectItem.ui_elements.category_item.img}`}/>
                                <div>{projectItem.ui_elements.category_item.title}</div>
                            </div>
                        </div>
                        <div className="type buttons">
                            <div className="title">Buttons</div>
                            <div className="buttons-grid">
                                {projectItem.ui_elements.buttons.map(item =>
                                    <div key={item.id}>
                                        <div className="subtitle">{item.title}</div>
                                        <img src={`../${item.img}`}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="third-row row">
                        <div className="type forms">
                            <div className="title">Forms</div>
                            <div className="forms-grid mobile-grid-100">
                                {projectItem.ui_elements.forms.map(item =>
                                    <div key={item.id} className="form">
                                        <div className="subtitle">{item.title}</div>
                                        <img src={`../${item.img}`}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="fourth-row row">
                        <div className="type popups">
                            <div className="title">Forms</div>
                            <div className="popups-grid mobile-grid-100">
                                {projectItem.ui_elements.popups.map(item =>
                                    <div key={item.id} className="popup">
                                        <div className="subtitle">{item.title}</div>
                                        <img src={`../${item.img}`}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                section {
                    background: ${projectItem.background_color};
                    padding-bottom: 0;
                }
                .title {
                    font-weight: 500;
                    margin-bottom: 0.8rem;
                }
                .subtitle {
                    font-size: 12px;
                }
                
                .row {
                    margin-top: 3rem;
                }
                
                .elements {
                    margin-top: 2rem;
                }
                
                .first-row {
                    display: grid;
                    grid-template-columns: 20.5% 37% auto;
                    grid-column-gap: 3rem;
                }
                
                .open-categories img, .product img {
                    width: 87px;
                    height: auto;
                }
                
                .open-categories img {
                    margin-top: 3.2rem;
                }
                
                .product .items{
                    display: grid;
                    grid-template-columns: auto auto auto 10%;
                }
                .small-camera {
                    width: 38px !important;
                    height: auto !important;
                    margin-top: 3.2rem;
                    margin-left: -1.2rem;
                }
                
                .icons .items {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                }
                
                .second-row {
                    display: grid;
                    grid-template-columns: 25% 24% auto;
                }
                
                .category-item_wrapper {
                   display: flex;
                   align-items: center;
                   font-weight: 500;
                   margin-top: 2rem;
                }
                
                .category-item img {
                    width: 52px;
                    height: 45px;
                    margin-right: 1rem;
                }
                
                .buttons img {
                    width: 55px;
                    height: 34px;
                }
                .buttons-grid {
                    display: grid;
                    grid-template-columns: auto auto;
                }
                
                .forms-grid {
                    display: grid;
                    grid-template-columns: 35% 22% 22% auto;
                    grid-column-gap: 1.5rem;
                }
                
                .forms-grid .form:first-child img {
                    max-width: 375px;
                    width: 100%;
                    height: auto;
                }
                
                .forms-grid .form:not(:first-child) img {
                    width: 239px;
                    height: auto;
                }
                .forms-grid .form:last-child {
                    margin-left: -15px;
                }
                
                .popups-grid {
                    display: grid;
                    grid-template-columns: 25% 25% 25% auto;
                    grid-column-gap: 2rem;
                }
                
                .popup img {
                    width: 100%;
                }
                
                 @media(max-width: 768px) {
                     .mobile-grid-100{
                        grid-template-columns: auto;
                        grid-row-gap: 2rem;
                     }
                     
                     .open-categories img {
                        margin-top: 1rem;
                     }
                     
                     .open-categories img, .product img {
                        width: 67px;
                     }
                     
                     .buttons-grid {
                        grid-template-columns: auto auto;
                     }
                     
                     .forms-grid .form:last-child {
                        margin-left: 0;
                     }
                }
            `}</style>
        </section>
    )
}

export default ToBuyUiElements