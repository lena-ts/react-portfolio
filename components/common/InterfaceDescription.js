import styles from "../../styles/components/project/Ui.module.scss";

const InterfaceDescription = ({projectItem}) => {
    const screens = projectItem.screens.map(item =>
        <img src={`../${item}`} key={item}  style={{borderRadius: 15, overflow: 'hidden', boxShadow: "0px 10px 100px rgba(0, 0, 0, 0.15)", background: "white"}}/>)
    return(
        <>
            <div className={styles.title_area}>
                <h3>{projectItem.title}</h3>
                <div className={`upper-base-text subtitle`}>{projectItem.subtitle}</div>
            </div>
             <div style={{display: "grid", gridTemplateColumns: "22% 22% 22% 22%", gridColumnGap: '2rem', gridRowGap: "2rem", marginTop: "2.5rem"}}>
                {screens}
             </div>
        </>
    )
}

export default InterfaceDescription