const SpenderOnboarding = ({projectItem}) => {
    return(
        <section>
            <div className="container">
                <div className="base-text">Onboarding illustrations</div>
                <div className="images">
                    {projectItem.onboarding.map(img =>
                        <img src={`../${img}`}/>
                    )}
                </div>
            </div>
            <style jsx>{`
                section {
                    height: auto;
                }
                .images {
                    display: grid;
                    grid-template-columns: 35% 65%;
                    margin-top: 3rem;
                }
                .images img:first-child {
                    max-width: 237px;
                    width: 100%;
                }
                .images img:last-child {
                    max-width: 681px;
                    width: 100%;
                }
                
                @media(max-width: 768px) {
                    section {
                        text-align: center;
                    } 
                    .images {
                        grid-template-columns: 100%;
                    }
                    .images img:first-child{
                        margin: 0 auto 1rem;
                    }
                }
            `}</style>
        </section>
    )
}

export default SpenderOnboarding