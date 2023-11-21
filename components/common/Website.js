const Website = ({projectItem, ru}) => {
    return(
        <section className="auto-height">
            <div className='container'>
                <div className="title_area">
                    <div>
                        <h3>{ru ? "Сайт" : "Website"}</h3>
                        <div className={`upper-base-text`}>{projectItem.ui.website_title}</div>
                    </div>
                    <div>
                    <a href={projectItem.ui.website_link} target="_blank" className="button button_dark">{ru ? "Посетить" : "Visit Website"}</a>
                    </div>
                </div>
                <div className="image">
                    <img src={`../${projectItem.ui.website_img}`}/>
                </div>
            </div>

            <style jsx>{`
                .title_area {
                    display: grid;
                    grid-template-columns: auto auto;
                    justify-content: space-between;
                    margin-bottom: 3rem;
                }
                img {
                    width: 100%;
                    border-radius: 35px;
                }
                
                @media(max-width: 768px){
                    .title_area{
                        grid-template-columns: 100%;
                        grid-row-gap: 1.5rem;
                        text-align: center;
                        margin-bottom: 1.5rem;
                    }
                    
                    img {
                        border-radius: 10px;
                    }
                }
            `}</style>
        </section>
    )
}

export default Website