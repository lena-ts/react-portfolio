import SectionTitle from "../../common/SectionTitle";

const SplityUiElements = ({projectItem}) => {
    return(
        <section className="auto-height">
            <div className="container">
                <SectionTitle title="UI Elements" subtitle="Blocks, buttons, icons"/>
                <div className="splity-grid-elements">
                    <div className="row-1">
                        <div className="group">
                            <div className="title">Group</div>
                            <img src={`../${projectItem.ui_elements.group_item}`}/>
                        </div>
                        <div className="person-wrapper">
                            <span className="title">Person</span>
                            <div className="person-grid">
                                <div className="person">
                                    <div className="subtitle">
                                        Regular
                                    </div>
                                    <div className="person-body">
                                        <img src={`../${projectItem.ui_elements.user_regular}`}/>
                                        <div className="gray-text subtitle">Alex</div>
                                        <div className="price">$2150</div>
                                    </div>
                                </div>
                                <div className="person">
                                    <div className="subtitle">
                                        Active
                                    </div>
                                    <div className="person-body">
                                        <img src={`../${projectItem.ui_elements.user_regular}`}/>
                                        <div className="gray-text subtitle">Alex</div>
                                        <div className="price">$2150</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="icons">
                            <div className="title">Icons</div>
                            <div className="icons-grid">
                                {projectItem.ui_elements.icons.map(item =>
                                    <div className="icon" key={item.id}>
                                        <div className="subtitle">{item.text}</div>
                                        <img src={`../${item.icon}`}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="row-2">
                        <div className="col-1">
                            {projectItem.ui_elements.col1.map(item =>
                                <div className="filter col-item" key={item.id}>
                                    <div className="title">{item.text}</div>
                                    <img src={`../${item.img}`}/>
                                </div>
                            )}
                        </div>
                        <div className="col-2">
                            {projectItem.ui_elements.col2.map(item =>
                                <div className="filter col-item" key={item.id}>
                                    <div className="title">{item.text}</div>
                                    <img src={`../${item.img}`}/>
                                </div>
                            )}
                        </div>
                        <div className="col-3">
                            {projectItem.ui_elements.col3.map(item =>
                                <div className="filter col-item" key={item.id}>
                                    <div className="title">{item.text}</div>
                                    <img src={`../${item.img}`}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                section {
                    background: ${projectItem.background_color};
                    padding-bottom: 0;
                }
                .row-1 {
                    display: grid;
                    grid-template-columns: 28.5% 180px auto;
                    grid-column-gap: 3rem;
                    margin-top: 2rem;
                }
                
                img {
                    box-shadow: 0px 0px 32px rgba(219, 227, 245,1);
                    border-radius: 4px;
                }
                .title {
                    margin-bottom: 1.5rem;
                    font-weight: 500;
                }
                .group img {
                    max-width: 289px;
                    width: 100%;
                }
                
                .person {
                    text-align: center;
                    width: 50px;
                }
                
                .person img {
                    border-radius: 100%;
                    width: 55px;
                    height: 55px;
                }
                
                .subtitle{
                    font-size: 12px;
                }
                
                .person .price {
                    font-weight: 600;
                }
                
                .person .gray-text {
                    line-height: 10px;
                }
                
                .person-grid {
                    display: grid;
                    grid-template-columns: auto auto;
                    max-width: 180px;
                }
                
                .person:last-child img{
                    border:1px solid #33AB4D;
                    padding: 2px;
                    width: 58px;
                    height: 58px;
                }
                
                .icons-grid {
                    display: grid;
                    grid-template-columns: auto auto auto auto;
                    grid-columns-gap: 1rem;
                    max-width: 280px;
                }
                
                .row-2 {
                    display: grid;
                    grid-template-columns: auto auto auto;
                    grid-column-gap: 1rem;
                }
                
                .col-item {
                    margin-top: 2rem;
                }
                
                .col-item img{
                    max-width: 289px;
                    width: 100%;
                }
                
                @media(max-width: 1024px) {
                 .icons-grid {
                    grid-template-columns: auto auto;
                 }
                }
                
                @media(max-width: 768px) {
                  section{
                    padding-bottom: 3rem;
                  }
                  .row-1, .row-2  {
                    grid-template-columns: 100%;
                    text-align: center;
                 }
                 
                 .person-wrapper {
                    margin: 2rem 0;
                 }
                 
                 .person-grid, .icons-grid {
                    margin: auto;
                 }
                 
                 .person-grid{
                    justify-content: center;
                    align-items: center;
                    grid-column-gap: 2rem;
                 }
                 
                 .icons-grid {
                    grid-template-columns: auto auto auto auto;
                 }
                 
                 .icons .title{
                    margin-bottom: 0;
                 }
                }
            `}</style>
        </section>
    )
}

export default SplityUiElements