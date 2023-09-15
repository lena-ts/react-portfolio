import {motion} from "framer-motion";
import Link from "next/link";

const MenuItem = ({delay, link, title, subtitle, opacity, code, rote}) => {

    const activeMenuClass = rote === code ? 'active' : ''

    console.log('current menu item', code)

    return(
        <div className={`m-text menu-item ${activeMenuClass}`}>
            <motion.div
                animate={opacity}
                transition={{ duration: 0.7, delay: delay }}
            >
                <div className="menu-item-title"> <Link legacyBehavior href={link}><a>{title}</a></Link></div>
                <span>{subtitle}</span>
            </motion.div>
        </div>
    )
}

export default MenuItem