import SectionTitle from "../../common/SectionTitle";

const ToBuyIcon = ({projectItem}) => {
    return(
        <section className="auto-height">
            <div className="container">
                <SectionTitle title="Icon" subtitle="The main idea of an icon is a check point meaning product bought in shopping list."/>
                <div className="grid-1">
                    <img src={`../${projectItem.icon_screen.img1}`}/>
                    <img src={`../${projectItem.icon_screen.img2}`}/>
                </div>
                <div className="grid-1 icon-wrapper">
                    <div className="icon">
                        <span>Icon</span>
                        <img src={`../${projectItem.icon_screen.icon}`}/>
                    </div>
                    <div className="env">
                        <span>Environment</span>
                        <img src={`../${projectItem.icon_screen.env}`}/>
                    </div>
                </div>
            </div>
            <style jsx>{`
                section {
                    background: ${projectItem.background_color};
                    padding-bottom: 0;
                }
                .grid-1{
                    margin-top: 3rem;
                    display: grid;
                    grid-template-columns: 40% auto;
                    grid-column-gap: 2rem;
                }
                .grid-1 img {
                    width: 100%;
                    border-radius: 15px;
                }
                
                .grid-1 span {
                    display: inline-block;
                    padding-bottom: 2rem;
                }
                
                .icon img {
                    border-radius: 100px;
                }
                
                .icon-wrapper {
                    margin-top: 2rem;
                }
                
            `}</style>
        </section>
    )
}

export default ToBuyIcon