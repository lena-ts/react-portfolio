import styles from '../../styles/components/InterviewScript.module.scss'

const InterviewScript = ({projectItem}) => {

    const qa = projectItem.interview
    const interview_script = qa.map( item => <div className={styles.qrow} key={item.id}>
        <div className={styles.q}>{item.q}</div>
        <div className={styles.a}>{item.a}</div>
    </div>)

    return(
        <div className={styles.interview}>
            {interview_script}
        </div>
    )
}

export default InterviewScript