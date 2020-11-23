import styles from "../../styles/components/project/ProjectFooter.module.scss"

const ProjectFooter = () => {
    return(
        <>
            <section className="auto-height white-bg">
                <div className="container">
                <div className="inner">
                    <div className="m-text-1">Thank you for watching!</div>
                    <div className={styles.footer_text}>
                        <div>Need help with mobile apps design? Reach me and I will gladly work
    on your project.</div>
                        <div>Available for great new projects.</div>
                        <div className={styles.email}>lenatsybulenko@gmail.com</div>
                    </div>
                </div>
                </div>
            </section>
            <style jsx>{`
                .inner{
                    display: grid;
                   grid-template-columns: 35% 65%;
                }
                
                .m-text-1 {
                    max-width: 200px;
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