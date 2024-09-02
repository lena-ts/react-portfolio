import InterviewScript from "../../common/InterviewScript";

const MigraineQuestions = ({projectItem, ru}) =>{
    const text = projectItem.app_idea.subtitle

    const audio = ru ? null :  <audio controls>
        <source src={'../projects/migraine/ui/interview1.mp3'} type="audio/ogg" />
        Your browser does not support the audio element.
    </audio>

    const answers = projectItem.questions.map(item =>
        <div>
            <h3>{item.title}</h3>
            <div className={`upper-base-text subtitle`}>{item.text}</div>
            <img src={item.img} width={355} style={{marginTop: '1rem'}}/>
            <br/><br/><br/><br/>
        </div>
    )

    return(
        <section>
            <div className="container">
                <div className="title-area">
                    <h3>{ru ? "Идея" : "Idea"}</h3>
                    <div className={`upper-base-text subtitle`}>{text}</div>

                    <br/><br/><br/><br/>
                    {answers}
                    <h3>{ru ? "Интервью" : "Interview "}</h3>
                    <div className={`upper-base-text subtitle`}>{ru ? "Женщина страдает, от хронической мигрени" : "Woman, suffering from chronic migraine"}</div>
                    <br/>
                    {/*{audio}*/}
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