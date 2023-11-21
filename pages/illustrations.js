import {MainLayout} from "../components/MainLayout";
import illustrations from '../data/IllutrationsData'
import styles from '../styles/components/Illustrations.module.scss'
import ProjectFooter from "../components/common/ProjectFooter";
import {motion} from "framer-motion";

const Illustrations = () => {
    const illustrations_list = illustrations.map(item => (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.7 }}
            key={item.id} className={styles.illustration_item}>
            <div>{item.title}</div>
            <img src={item.path}/>
        </motion.div>
    ))
    return(
        <MainLayout>
            <section className={styles.illustration_section}>
                <div className="container">
                    <div className="title_area">
                        <div>
                            <h3>Animations</h3>
                            <div className={`upper-base-text`}>Lottie, made in Adobe After Effects and Figma</div>
                        </div>
                        <div>
                            <a href={"https://lottiefiles.com/0qbevmr34zyvw2cs"} target="_blank" legacyBehavior className="button button_dark">{"View Lottie Profile"}</a>
                        </div>
                    </div>


                    {/*<img src={"../illustrations/lottie_categories.gif"} width={200} height={280} style={{borderRadius: "25px", border: "1px solid #ebebeb"}}/>*/}
                    <div className="lottie_grid">
                        <img src={"../illustrations/lottie_star_crop.gif"} className="lottie_img"/>
                        <img src={"../illustrations/dots.gif"} className="lottie_img"/>
                        <img src={"../illustrations/sound_crop.gif"} className="lottie_img"/>
                        <img src={"../illustrations/line.gif"} className="lottie_img"/>
                        <img src={"../illustrations/pulse2.gif"} className="lottie_img"/>
                    </div>
                    <br/><br/><br/><br/>
                    <div className="m-text">Illustrations</div>
                    <p className="upper-base-text">Made with iPad and ProCreate</p>
                    <div className={styles.illustrations_list}>
                    {illustrations_list}
                    </div>
                </div>
                <ProjectFooter/>
            </section>
            <style jsx>{`
                    section {
                        height: auto;
                    }
                     .title_area {
                    display: grid;
                    grid-template-columns: auto auto;
                    justify-content: space-between;
                    margin-bottom: 3rem;
                }
                .lottie_grid{
                display:grid;
                grid-template-columns: auto auto auto auto auto;
                grid-column-gap: 2rem;
                }
                .lottie_img{
                    width: 200px;
                    height: 200px;
                    border-radius: 25px;
                    border: 1px solid #ebebeb;
                }
                 @media(max-width: 768px){
                    .title_area{
                        grid-template-columns: 100%;
                        grid-row-gap: 1.5rem;
                        text-align: center;
                        margin-bottom: 1.5rem;
                    }
                    .lottie_grid{
                    grid-template-columns: auto auto;
                    grid-row-gap: 2rem;
                    }
                }
            `}</style>
        </MainLayout>
    )
}

export default Illustrations