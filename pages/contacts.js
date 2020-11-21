import {MainLayout} from "../components/MainLayout";

const Contacts = () => {
    return(
        <MainLayout>
            <section>
                <div className="container">
                    <p>Available for great new projects.</p>
                    <div className="m-text"><strong>lenatsybulenko@gmail.com</strong></div>
                    <br></br><br></br>
                    <p>Telegram</p>
                    <div className="m-text"><strong>@lenatsybulenko</strong></div>
                    {/*<br></br><br></br>*/}
                    {/*<p>Download CV</p>*/}
                    {/*<div className="m-text"><strong>CV</strong></div>*/}
                </div>
            </section>
            <style jsx>{`
                section {
                    display: flex;
                }
                @media(max-width: 768px) {
                    section{
                        text-align:center;
                    }
                    
                    .m-text{
                        font-size: 20px;
                    }
                    
                    p {
                        margin-bottom: 0;
                    }
                }
            `}</style>
        </MainLayout>
    )
}

export default Contacts