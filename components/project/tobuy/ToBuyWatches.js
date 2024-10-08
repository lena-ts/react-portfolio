const ToBuyWatches = ({projectItem, ru}) => {
    return(
        <section className="auto-height">
            <div className="container">
                <div className="title_area">
                    <h3>Apple Watch</h3>
                    <div className={`upper-base-text subtitle`}>{ru ? "Адаптация WatchOS" : "WatchOS adaptation"}</div>
                </div>
                <div className="watches_wrapper">
                    <div className="regular watches_item">
                    {projectItem.watches.regular.map( item =>
                        <div className="item" key={item.title}>
                            <div className="title">{item.title}</div>
                            <img src={`../${item.img}`}/>
                        </div>
                    )}
                    </div>
                    <div className="empty watches_item">
                        {projectItem.watches.empty.map( item =>
                            <div className="item" key={item.title}>
                                <div className="title">{item.title}</div>
                                <img src={`../${item.img}`}/>
                            </div>
                        )}
                    </div>
                    <div className="icon watches_item">
                        {projectItem.watches.icon.map( item =>
                            <div className="item" key={item.title}>
                                <div className="title">{item.title}</div>
                                <img src={`../${item.img}`}/>
                            </div>
                        )}
                    </div>
                    {/*<div className="icon_muted watches_item">*/}
                    {/*    {projectItem.watches.icon_muted.map( item =>*/}
                    {/*        <div className="item" key={item.title}>*/}
                    {/*            <div className="title">{item.title}</div>*/}
                    {/*            <img src={`../${item.img}`}/>*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*</div>*/}
                </div>
                {/*<div className="promo-grid">*/}
                {/*    {projectItem.watches.promo.map( item =>*/}
                {/*     <img src={`../${item}`} key={item} className="promo"/>)}*/}
                {/*</div>*/}
            </div>
            <style jsx>{`
                section{
                    background: ${projectItem.background_color};
                }
                .watches_wrapper {
                    display: grid;
                    grid-template-columns: auto auto auto;
                    grid-column-gap: 2rem;
                }
                .watches_wrapper img {
                    max-width: 150px;
                    width: 150px;
                }
                .watches_item {
                    display: grid;
                    grid-template-columns: auto auto;
                    grid-column-gap: 2rem;
                }
                
                .title {
                    margin: 3rem 0 1rem;
                }
                
                .promo-grid{
                    display: grid;
                    grid-template-columns: auto auto;
                    grid-column-gap: 2rem;
                }
                
                .promo{
                    margin-top: 4rem;
                    width: 100%;
                    height: auto;
                    border-radius: 20px;
                }
                
                @media(max-width: 768px) {
                    .watches_wrapper {
                        grid-template-columns: auto;
                    }
                }
            `}</style>
        </section>
    )
}

export default ToBuyWatches