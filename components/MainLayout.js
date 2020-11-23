import Head from "next/head";
import Link from "next/link";
import styles from '../styles/components/MainLayout.module.scss'
import {useState} from 'react'
import {motion, useCycle} from "framer-motion"

export function MainLayout({children, title="UI/UX designer, front-end developer"}){
    const [menuOpened, setMenuOpened] = useState(false)

    const [twist, cycle] = useCycle({ scale: 1, rotate: 0, y: 0 },
        { scale: 1, rotate: 45, y:6.5})
    const [twist1, cycle1] = useCycle({ scale: 1, rotate: 0, y:0, x: 0 },
        { scale: 1, rotate: -45, y:-5.5, x: 0.9 })

    const [dissapear, displayNone] = useCycle({scale: 1}, {scale: 0})

    const [opacity, opaque] = useCycle({opacity: 0}, {opacity: 1})

    const [scale, useScale]= useCycle({opacity:0}, {opacity: 1})

    const handleMenuClick = () => {
        cycle()
        displayNone()
        cycle1()
        opaque()
        // useScale()
        if (menuOpened) {
            setMenuOpened(false)
        }
        else {
            setMenuOpened(true)
        }
    }

    const menuClassName = menuOpened ?  "show" : ""
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="posts,nextjs"/>
                <meta name="description" content="this is posts" />
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.7 }}
            >
            <nav>
                <Link href={"/"}><a>LT</a></Link>
                <div className={styles.menu_icon} onClick={handleMenuClick}>
                    <motion.div
                        animate={twist}
                    >
                        <div className={styles.menu_line}></div>
                    </motion.div>
                    <motion.div
                        animate={dissapear}>
                        <div className={styles.menu_line}></div>
                    </motion.div>
                    <motion.div
                        animate={twist1}>
                        <div className={styles.menu_line}></div>
                    </motion.div>
                </div>
                <Link href={"/contacts"}><a className={styles.mail_icon}>&nbsp;</a></Link>
            </nav>
            </motion.div>
            <motion.div
                // initial={{scale:0}}
                // animate={scale}
            >
            <section className={menuClassName}>
                <div className="title">Projects</div>
                {/*<div className="m-text menu-item">*/}
                {/*    <div className="menu-item-title"> <Link href={"/"}><a>Home</a></Link></div>*/}
                {/*</div>*/}
                <div className="m-text menu-item">
                    <motion.div
                        animate={opacity}
                        transition={{ duration: 0.7 }}
                    >
                    <div className="menu-item-title"> <Link href={"/web-development"}><a>Web development</a></Link></div>
                    <span>Magento, Prestashop website design & development</span>
                    </motion.div>
                </div>
                <div className="m-text menu-item">
                    <motion.div
                        animate={opacity}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        exit={{ opacity: 0 }}
                    >
                    <div className="menu-item-title"> <Link href={"/apps"}><a>iOS Apps</a></Link></div>
                    <span>UI/UX design, research work</span>
                    </motion.div>
                </div>
                <div className="m-text menu-item">
                    <motion.div
                        animate={opacity}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                    <div className="menu-item-title">
                        <Link href={"/illustrations"}><a>Illustrations</a></Link>
                    </div>
                    <span>Illustration works</span>
                    </motion.div>
                </div>
            </section>
            </motion.div>
            <main>
                {children}
            </main>
            <style jsx>{`
                nav {
                    z-index: 2;
                }
                
                section {
                    position: fixed;
                    top:0;
                    // left: -100%;
                    // transform: translateX(-100%);
                    z-index: 1;
                    background:white;
                    transition: 0.4s ease-out;
                    padding: 4rem 4rem 4rem 13rem;
                    flex-direction: column;
                    align-content: center;
                    width: 100%;
                    display: none;
                }
                
                section .m-text {
                   font-size: 35px;
                }
                
                section.show {
                    left: 84px;
                    left:0;
                    // width: 40%;
                    width: 100%;
                    display: grid;
                }
                
                section.show .m-text {
                    font-size: 35px;
                    transition-delay: 0.3s;
                }
               
                .title {
                    text-transform: uppercase;
                    font-size: 12px;
                    margin-bottom: 3rem;
                    letter-spacing: 3px;
                    font-weight: 500;
                }
                
                @media(max-width: 768px) {
                     section.show {
                        left: 0;
                        width: 100%;
                        height: 100%;
                        padding: 3rem;
                        display: flex;
                     }
                     
                     .title {
                        margin-bottom: 2rem;
                     }
                }
                
            `}
            </style>
        </>
    )
}