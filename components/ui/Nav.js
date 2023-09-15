import {motion, useCycle} from "framer-motion";
import {mobile_view} from "../../constants/config";
import Link from "next/link";
import styles from "../../styles/components/MainLayout.module.scss";

const Nav = ({click, twist, twist1, dissapear}) => {

    const handleClick = () => {
        click()
    }
    return(
        <motion.nav
            initial={mobile_view ? {y: 100, opacity: 0} : {x: -100, opacity: 0} }
            animate={mobile_view ? {y: 0, opacity: 1} : { x: 0, opacity: 1}}
            transition={{ duration: 0.7 }}
        >
            <Link href={"/"}><a>Le </a></Link>
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
            <Link href={"/contacts"}><a className={styles.mail_icon}>&nbsp;</a></Link>
        </motion.nav>
    )
}

export default Nav