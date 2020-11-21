import styles from '../../../styles/components/project/SpenderUserPersona.module.scss'

const SpenderUserPersona = ({projectItem}) => {
    return(
        <section className="white-bg">
            <div className="container">
                <h3>User Persona Assymption</h3>
                <div className={`upper-base-text subtitle`}>I’ve made an assumption of a user persona, base on some quick interviews </div>
                <div className={styles.qa}>
                    <div className={styles.questions}>
                        <div className="base-text normal-weight">Interview questions:</div>
                        <ul>
                            <li>1. Do you recording or keep track your spendings?</li>
                            <li>2. Why do you record your spendings?</li>
                            <li>3. Do you use any app to record your spendings?
                                <ul>
                                    <li>3.1 What is that app?</li>
                                    <li>3.2 What features of this app do you find useful?</li>
                                </ul>
                            </li>
                            <li>4. Do you record only spendings or incomes or both?</li>
                            <li>5. Do you prefer bar or pie chart to view statistic?</li>
                            <li>6. How often do you record your spending?</li>
                            <li>7. Do you make some decisions base on spendings
                                statistic you see?</li>
                        </ul>
                    </div>
                    <div className={styles.answers}>
                        <div className="base-text normal-weight">Answers:</div>
                        <ul>
                            <li>1. Yes</li>
                            <li>2. To see the whole sum and statistics by categories</li>
                            <li>3. Yes?
                                <ul>
                                    <li>3.1 Monefy</li>
                                    <li>3.2 Fast add by tap on icons. Statistics on main screen</li>
                                </ul>
                            </li>
                            <li>4. Only spendings</li>
                            <li>5. Bar</li>
                            <li>6. Every record. Sometimes immediately, sometimes next day</li>
                            <li>7. If expenses sum is high, I can postpone some not very
                                necessary purchase</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.user_persona}>
                    <div className="base-text normal-weight">User persona:</div>
                    <div className={styles.user_persona_content}>
                        <img src={`../${projectItem.ux.user_persona}`}/>
                        <div className={styles.text}>
                            <div className={styles.title_wrapper}>
                                <div className={`upper-base-text ${styles.user_name}`}>Kate, 32</div>
                                <div class="base-text italic">
                                    IT Engineer, has medium income
                                </div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.item}>
                                    <strong>Needs:</strong> to keep track all expenses by categories and view visual statistic
                                </div>
                                <div className={styles.item}>
                                    <strong>Problem:</strong> my bank app does not provide any visual statistic of my expenses/transactions
                                </div>
                                <div className={styles.item}>
                                    <strong>Motivation:</strong> get rid of unnecessery expenses
                                </div>
                                <div className={styles.item}>
                                    <strong>Behaviour:</strong> record expenses every
                                    day
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bar_chart}>
                    <h3>Bar or Pie chart</h3>
                    <div className={`upper-base-text subtitle`}>
                        I’ve conduct an AB testing among group of people to clarify what is more visual — bar of pie chart.<br></br>
                        Most respondents asked they prefer bar.
                    </div>
                    <div className={styles.bar_chart_items}>
                        <div className={styles.bar_chart_items_item}>
                            <img src={`../${projectItem.ux.bar}`}/>
                            <strong>A</strong>
                        </div>
                        <div className={styles.bar_chart_items_item}>
                            <img src={`../${projectItem.ux.pie}`}/>
                            <strong>B</strong>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                section {
                    height:auto;
                }
            `}</style>
        </section>
    )
}

export default SpenderUserPersona