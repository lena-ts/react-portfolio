import SectionTitle from "../../common/SectionTitle";

const ToBuyInterview = ({projectItem}) => {
    return(
        <section className="auto-height white-bg">
            <div className="container">
                <SectionTitle title="Interview" subtitle=""/>
                <div className="interview-titles">
                    <div className="gray-text">6 persons interviewed , one question asked:</div>
                    <div className="question">How do you recollect items to buy at shopping?</div>
                </div>
                <div className="answers">
                    {projectItem.interview.answers1.map(item =>
                        <div className={`answer ${item.result_class}`} key={item.id}>
                            <div className="answer-body">{item.body}</div>
                            <div className="answer-footer">
                                <div className="answer-person">{item.person}</div>
                                <div className="answer-status gray-text">{item.status}</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="answers-2">
                    {projectItem.interview.answers2.map(item =>
                        <div className={`answer ${item.result_class}`} key={item.id}>
                            <div className="answer-body">{item.body}</div>
                            <div className="answer-footer">
                                <div className="answer-person">{item.person}</div>
                                <div className="answer-status gray-text">{item.status}</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="result">
                    <div className="title">Result</div>
                    <div>Interview shows is that <span>60% </span>of respondents uses <span>Mobile App</span> or <span>paper sheet</span> to recollect items to buy, other <span>40% </span>of respondents <span>keep in mind</span>  all the stuff.</div>
                </div>
            </div>
            <style jsx>{`
                section {
                    padding: 0;
                }
                
                .interview-titles .question {
                    padding-top: 1rem;
                }
                
                .title-area {
                    padding-bottom: 0;
                }
                
                .question{
                    font-weight: 500;
                }
                
                .answers {
                    margin-top: 4rem;
                    display: grid;
                    grid-template-columns: 25% 30% auto;
                    grid-column-gap: 1.5rem;
                    grid-row-gap: 1.5rem;
                }
                
                .answers-2 {
                    margin-top: 1.5rem;
                    display: grid;
                    grid-template-columns: 35% 30% auto;
                    grid-column-gap: 1.5rem;
                    grid-row-gap: 1.5rem;
                }
                
                .answer {
                    position: relative;
                    background: #FAFAFA;
                    border: 1px solid #ebebeb;
                    padding: 1.5rem;
                    border-radius: 15px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                
                .answer-body{
                    line-height: 24px;
                }
                
                .keep-in-mind:before {
                    content: "Keep in mind";
                    background: #19B6C9;
                    border-radius: 35px;
                    padding: 5px 15px;
                    font-size: 14px;
                    color: white;
                    position: absolute;
                    top: -1rem;
                    right: 1.5rem;
                }
                .use-smth:before {
                    content: "Use something";
                    background: #9824CF;
                    border-radius: 35px;
                    padding: 5px 15px;
                    font-size: 14px;
                    color: white;
                    position: absolute;
                    top: -1rem;
                    right: 1.5rem;
                }
                
                .answer-footer {
                    margin-top: 2rem;
                }
                .answer-person{
                    font-weight: 500;
                 }
                .answer-status{
                    font-size: 14px;
                    padding-top: 0.4rem;
                }
                
                .result {
                    margin-top: 3rem;
                    line-height: 24px;
                }
                
                .result span {
                    font-weight: 500;
                }
                
                .result .title {
                    font-weight: 500;
                    padding-bottom: 1rem;
                }
                
                @media(max-width: 600px) {
                    .answers, .answers-2 {
                        grid-template-columns: auto;
                    }
                }
            `}</style>
        </section>
    )
}

export default ToBuyInterview