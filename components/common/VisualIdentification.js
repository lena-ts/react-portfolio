import styles from '../../styles/components/project/VisualIdentification.module.scss'

const VisualIdentification = ({projectItem}) => {
    const secondary_colors_title = projectItem.visual_identification.colors.secondary.length ?
        <div className={`upper-base-text subtitle`}>Additional colors</div> : null

    const additional_colors_title = projectItem.visual_identification.colors.additional.length ?
        <div className={`upper-base-text subtitle`}>Icons colors</div> : null

    return(
        <>
            <div className={styles.visual_section} id={`${projectItem.url}-visual-identification`}>
                <div className="container">
                <div className={`${styles.title_area} title`}>
                    <h3>Visual Identification</h3>
                    <div className={`upper-base-text subtitle`}>Typography</div>
                </div>
                <div className={styles.info_area}>
                    <div className={`letter-fill ${styles.letters}`}>
                        Aa
                    </div>
                    <div className={styles.description}>
                        <div className={styles.font_description}>
                            <div className={`font_family ${styles.font_name}`}>
                                {projectItem.visual_identification.font_name}
                            </div>
                            <div className={`font_family ${styles.alphabet}`}>
                                A, B, C, D, E, F, G, H, I, K, L, M, N, O, P, Q,
                                R, S, T, U, V, W, X, Y, Z
                            </div>
                            <div className={`font_family ${styles.weights}`}>
                                Regular, Medium, Bold
                            </div>
                        </div>

                        <div className={styles.colors_description}>
                            <div className={`upper-base-text subtitle`}>UI colors</div>
                            <div className={styles.colors}>
                                {projectItem.visual_identification.colors.primary.map(item => (
                                    <div className={styles.color} key={item}>
                                        <div className={styles.primary} style={{
                                            background: `${item}`,
                                            border: `${item === '#FFFFFF'? "1px solid #ebebeb" : null}`
                                            }}></div>
                                        <div className={styles.color_title}>{item}</div>
                                    </div>
                                ) )}
                            </div>

                           {secondary_colors_title}
                            <div className={styles.colors}>
                                {projectItem.visual_identification.colors.secondary.map(item => (
                                    <div className={styles.color} key={item}>
                                        <div className={styles.secondary} style={{
                                            background: `${item}`,
                                            border: `${item === '#FFFFFF'? "1px solid #ebebeb" : null}`
                                        }}></div>
                                        <div className={styles.color_title}>{item}</div>
                                    </div>
                                ) )}
                            </div>

                            {additional_colors_title}
                            <div className={styles.colors}>
                                {projectItem.visual_identification.colors.additional.map(item => (
                                    <div className={styles.color} key={item}>
                                        <div className={styles.secondary} style={{
                                            background: `${item}`,
                                            border: `${item === '#FFFFFF'? "1px solid #ebebeb" : null}`
                                        }}></div>
                                        <div className={styles.color_title}>{item}</div>
                                    </div>
                                ) )}
                            </div>

                        </div>
                    </div>

                </div>
                </div>
            </div>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
                .font_family {
                    font-family: ${projectItem.visual_identification.font_name} , sans-serif;
                }
                
                .subtitle {
                    font-size: 150%;
                    font-weight: 500;
                    padding-bottom: 2rem;
                }
                
                .letter-fill {
                    color: ${projectItem.visual_identification.letter_fill}
                }
            `}
            </style>
        </>
    )
}

export default VisualIdentification