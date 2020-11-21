import styles from "../../styles/components/project/Ui.module.scss";

const Icon = ({projectItem}) => {
    return(
        <div className="icon-screen"  id={`${projectItem.url}-icon-section`}>
            <div className="container">
                <div className="title-area">
                    <h3>Icon</h3>
                    <div className={`upper-base-text subtitle`}>{projectItem.icon_screen.text}</div>
                </div>
                <img src={`../${projectItem.icon_screen.image}`}/>
            </div>
            <style jsx>{`
                img {
                    max-width: 1000px;
                    width: 100%;
                    height: auto;               
                }
                
                .icon-screen {
                    background: ${projectItem.background_color};
                }
            `}</style>
        </div>
    )
}

export default Icon