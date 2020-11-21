import {MainLayout} from "../components/MainLayout";
import { motion, useCycle } from "framer-motion";

const MotionTest = () => {
    const [twist, cycle] = useCycle({ scale: 1, rotate: 0 },
        { scale: 1.2, rotate: 90 })
    const [twist1, cycle1] = useCycle({ scale: 1, rotate: 0 },
        { scale: 1.2, rotate: -90 })

    const variants = {
        variantA: { scale: 0.75, rotate: 0 },
        variantB: { scale: 1.0, rotate: 90 },
    }

    const handleClick = () => {
        cycle()
        cycle1()
    }
    return(
        <MainLayout>
            <div className="container">
                <button onClick={handleClick}>Click me</button>
                <div className="wrapper">
                <motion.div
                    initial={{scale: 1}}
                    animate={twist }
                    onTap={() => cycle()}
                    drag
                >
                    <div id="scale" className="test-div">Scale

                    </div>
                </motion.div>
                </div>
                <div className="wrapper">
                    <motion.div
                        initial={{scale: 1}}
                        animate={twist1 }
                        onTap={() => cycle1()}
                        drag
                    >
                        <div id="scale" className="test-div">Scale

                        </div>
                    </motion.div>
                </div>
                <div className="wrapper">
                    <motion.div
                        initial={"variantA"}
                        whileHover={"variantB"}
                        variants={variants}
                    >
                        <div id="variants1" className="test-div">
                            Variants
                        </div>
                    <div id="variants" className="test-div">
                        Variants
                    </div>
                    </motion.div>
                </div>

            </div>
            <style jsx>{`
                .wrapper {
                    width: 150px;
                    height: 150px;
                }
                .test-div{
                    display: block;
                    width: 150px;
                    height: 150px;                   
                    border-radius: 35px;
                    color: white;
                    text-align: center;
                    line-height: 40px;
                    margin-top: 3rem;
                }
                .line {
                    display: block;
                    background: white;
                    width: 20px;
                    height: 3px;
                    border-radius: 10px;
                    margin: 1rem auto;
                }
                #scale{
                    background: blue;
                }
                #variants, #variants1  {
                    background: purple;
                }
            `}</style>
        </MainLayout>
    )
}

export default MotionTest