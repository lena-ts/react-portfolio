import styles from '../styles/components/Contacts.module.scss'

const Contacts = () => {
    return(
        <section>
            <div className="container">
                <div className={styles.uppercase_title}>contact</div>
                <div className={styles.small_title}>lena.tsybulenko@gmail.com</div>
            </div>
            <style jsx>{`
                section {
                    min-height: auto;
                    height: auto;
                }
            `}</style>
        </section>
    )
}

export default Contacts