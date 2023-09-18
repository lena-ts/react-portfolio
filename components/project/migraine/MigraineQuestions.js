import InterviewScript from "../../common/InterviewScript";

const MigraineQuestions = ({projectItem}) =>{
    const text = projectItem.app_idea.subtitle
    return(
        <section>
            <div className="container">
                <div className="title-area">
                    <h3>Idea</h3>
                    <div className={`upper-base-text subtitle`}>{text}</div>

                    <br/><br/><br/><br/>
                    <h3>Who are this app for</h3>
                    <div className={`upper-base-text subtitle`}>Chronic migrainers that taking notes of the attacks</div>
                    <br/><br/><br/><br/>

                    <h3>What problem does app solve</h3>
                    <div className={`upper-base-text subtitle`}>Reduce attacks frequency</div>
                    <br/><br/><br/><br/>
                    <h3>How people solve this problem now</h3>
                    <div className={`upper-base-text subtitle`}>They use paper diaries or apps</div>
                    <img src={'../projects/migraine/ui/paper_diary.jpg'} width={355} style={{marginTop: '1rem'}}/>

                    <br/><br/><br/><br/>
                    <h3>In terms of JTBD what job does app do </h3>
                    <div className={`upper-base-text subtitle`}>It finds correlation between attacks and triggers, educate migrainers</div>
                    <br/><br/><br/><br/>
                    <h3>Interview </h3>
                    <div className={`upper-base-text subtitle`}>Woman, suffering from chronic migraine</div>
                    <br/>
                    <audio controls>
                        <source src={'../projects/migraine/ui/interview1.mp3'} type="audio/ogg" />
                                Your browser does not support the audio element.
                    </audio>
                    <InterviewScript projectItem={projectItem}/>
                </div>
            </div>
            <style jsx>
                {`
                    section {
                    min-height: auto
                    }
                `}
            </style>
        </section>
    )
}

export default MigraineQuestions