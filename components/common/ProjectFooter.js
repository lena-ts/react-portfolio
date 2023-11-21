import styles from "../../styles/components/project/ProjectFooter.module.scss"

const ProjectFooter = (ru) => {
    return(
        <>
            <section className="auto-height white-bg">
                <div className="container">
                    {/*<div className="divider"></div>*/}
                <div className="inner">
                    {/*<div className="m-text-1">&#9829; </div>*/}
                    <div className="m-text-1">{ ru.ru ? "Спасибо за просмотр!" : "Thank you for watching!"}</div>
                    <div className={styles.footer_text}>
    {/*                    <div>Need help with mobile apps design? Reach me and I will gladly work*/}
    {/*on your project.</div>*/}
    {/*                    <div>Open to new opportunities</div>*/}
    {/*                    <div className={styles.email}>lena.tsybulenko@gmail.com</div>*/}
                    </div>
                </div>
                </div>
            </section>
            <style jsx>{`
                // .inner{
                //     display: grid;
                //    grid-template-columns: 35% 65%;
                // }
                
                .m-text-1 {
                     width: 100%;
                    text-align: center;
                    // max-width: 500px;
                    line-height: 35px;
                }
                
                @media(max-width: 768px) {
                    .inner{
                         grid-template-columns: 100%;
                    }
                    .m-text-1 {
                        margin-bottom: 1rem;
                    }
                }

            `}</style>
        </>
    )
}

export default ProjectFooter