const ToBuyIdea = ({projectItem}) => {
    const title = projectItem.app_idea.title
    const text = projectItem.app_idea.subtitle

    const text1 = projectItem.app_idea.text1
    const img1 = projectItem.app_idea.img1 ? <img src={`../${projectItem.app_idea.img1}`} width={'100%'} style={{marginTop: '2rem'}} /> : null

    const text2 = projectItem.app_idea.text2
    const img2 = projectItem.app_idea.img2 ? <img src={`../${projectItem.app_idea.img2}`} width={'100%'} style={{marginTop: '2rem'}} /> : null

    const text3 = projectItem.app_idea.text3
    const img3 = projectItem.app_idea.img3 ? <img src={`../${projectItem.app_idea.img3}`} width={'100%'} style={{marginTop: '2rem'}} /> : null

    return(
        <section>
            <div className="container">
                <div className="title-area">
                    <h3>{title}</h3>
                    <div className={`upper-base-text subtitle`}>{text}</div>
                    <div className="block">
                        <div className={`upper-base-text subtitle`}>{text1}</div>
                        {img1}
                    </div>
                    <div className="block1">
                        <div className={`upper-base-text subtitle`}> {text2}</div>
                        {img2}
                    </div>
                    {/*<div className="block1">*/}
                    {/*    <div className={`upper-base-text subtitle`}> {text3}</div>*/}
                    {/*    {img3}*/}
                    {/*</div>*/}
                </div>
            </div>
            <style jsx>
                {`
                    section {
                    min-height: auto
                    }
                    .block{
                        margin-top: 2rem;
                    }
                    .block1 {
                        margin-top: 3rem;
                    }
                `}
            </style>
        </section>

    )
}

export default ToBuyIdea