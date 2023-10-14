const Idea  = ({projectItem}) => {
    const title = projectItem.app_idea.title
    const text = projectItem.app_idea.subtitle
    const img = projectItem.app_idea.img ? <img src={`../${projectItem.app_idea.img}`} width={'100%'} style={{marginTop: '2rem'}} /> : null
    return(
        <section>
            <div className="container">
                <div className="title-area">
                    <h3>{title}</h3>
                    <div className={`upper-base-text subtitle`}>{text}</div>
                    {img}
                </div>
            </div>
            <style jsx>
                {`
                    section {
                    min-height: auto
                    }
                `}
            </style>
        </section>
    )
}

export default Idea