import { motion} from "framer-motion"
import {mobile_view} from "../constants/config";

const Intro = () => {
    return(
        <section id="author-intro">
            <div className="container">
            {/*<strong>LENA TSYBULENKO</strong>*/}
            <div className="intro-description">
                <motion.div
                    initial={ mobile_view ? {y: 50, opacity: 0} : { x: -50, opacity: 0 }}
                    animate={mobile_view ? {y: 0, opacity: 1} : { x: 0, opacity: 1}}
                    transition={{ duration: 0.7 }}
                >
                <img src="avatar1.jpg" />
                </motion.div>
                <motion.div
                    initial={mobile_view ? {y: 100, opacity: 0} : { x: 100, opacity: 0}}
                    animate={mobile_view ? {y: 0, opacity: 1} : { x: 0, opacity: 1}}
                    transition={{ duration: 0.7 }}
                >
                <div>
                    <div className="l-text">
                        {/*Привет. Я Лена,<br></br>дизайнер и фронтенд<br></br>разработчик из Минска, Беларусь.*/}
                        Hi! I'm Lena,<br></br>UI/UX designer & front-end<br></br>developer.<br></br>
                        Minsk, Belarus.
                    </div>
                    <p className="upper-base-text">My specialization is <strong>iOS App design</strong>, <strong>ReactJs SPA</strong> development, Magento, Prestashop design and front-end development
                        {/*<br></br><strong>React.js</strong>, <strong>Next.js</strong> apps development*/}
                        </p>
                 </div>
                </motion.div>
            </div>
            </div>
            <style jsx>{`
                section {
                    background-size: cover;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    min-height: auto;
                    padding: 7rem 0;
                }
                
                p {
                    line-height: 28px;
                }
                
                img {
                    border-radius: 100%;
                    width: 110px;
                    height: auto;
                    padding: 5px;
                    border: 1px solid #ebebeb;
                    margin-right: 6%;
                }
                
                .intro-description {
                    display: grid;
                    grid-template-columns: 170px auto;
                    align-items: flex-start;
                }
                
                @media(max-width: 768px){
                    section {
                        padding: 3rem 0;
                    }
                    
                    .intro-description{
                        grid-template-columns: auto;
                        text-align: center;
                    }
                    
                    .intro-description img {
                        margin: 0 auto 2rem;
                        width: 150px;
                    }
                    
                    .intro-description p{
                        padding-top: 1rem;
                    }
                }
            `}
            </style>
        </section>
    )
}

export default Intro