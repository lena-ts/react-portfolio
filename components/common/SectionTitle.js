const SectionTitle = ({title, subtitle}) => {
    return(
        <div className="title-area">
            <h3>{title}</h3>
            <div className={`upper-base-text subtitle`}>{subtitle}</div>
        </div>
    )
}

export default SectionTitle