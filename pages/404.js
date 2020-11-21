import Link from "next/link";

const ErrorPage = () => {
    return (
        <section>
            <h1>Ooops..</h1>
            <p>You are not on the right way</p>
            <div>Go to <Link  href={'/'}><a>homepage</a></Link> better</div>
            <style jsx>{`
                section{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                h1 {
                    font-size: 400%;
                }
                a {
                  text-decoration: underline;
                }
            `}</style>
        </section>
    )
}

export default ErrorPage