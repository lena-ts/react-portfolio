import styles from '../styles/components/Contacts.module.scss'

const Contacts = (ru) => {
    const title = ru.ru ? "Контакты" : "Contacts"
    return(
        <section>
            <div className="container">
                <div className={styles.uppercase_title}>{title}</div>
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