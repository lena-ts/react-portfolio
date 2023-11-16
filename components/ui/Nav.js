import {motion, useCycle} from "framer-motion";
import {mobile_view} from "../../constants/config";
import Link from "next/link";
import styles from "../../styles/components/MainLayout.module.scss";

const Nav = ({click, twist, twist1, dissapear, ru}) => {

    const mainLink = ru ? "/ru" : "/"
    const contactLink = ru ? "/ru/contacts" : "/contacts"

    const handleClick = () => {
        click()
    }
    return(
        <motion.nav
            initial={mobile_view ? {y: 100, opacity: 0} : {x: -100, opacity: 0} }
            animate={mobile_view ? {y: 0, opacity: 1} : { x: 0, opacity: 1}}
            transition={{ duration: 0.7 }}
        >
            <Link legacyBehavior href={mainLink}>Le</Link>
            <div className={styles.menu_icon} onClick={handleClick}>
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
            {/*<div style={{*/}
            {/*    display: "grid",*/}
            {/*    gridRowTemplate: "100% 100%",*/}
            {/*    background: "#ccc",*/}
            {/*    borderRadius: "15px",*/}
            {/*    padding: "10px",*/}
            {/*    fontSize: "12px",*/}
            {/*    position: "absolute"*/}
            {/*}}>*/}
            {/*    <Link legacyBehavior href={"/"}>EN</Link>*/}
            {/*    <Link legacyBehavior href={"/ru"}>РУ</Link>*/}
            {/*</div>*/}
            <Link href={contactLink} legacyBehavior><a className={styles.mail_icon}>&nbsp;</a></Link>
        </motion.nav>
    )
}

export default Nav