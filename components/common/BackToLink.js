import Link from "next/link";
import {useRouter} from "next/router";
const BackToLink = ({bg}) => {
    const router = useRouter()

    const handleClick = () => {
        router.back()
    }

    return(
        <div className="backto-link-wrapper">
            <div className="container">
                {/*<div className="backto-link"><Link href={`/`}><a>&nbsp;</a></Link></div>*/}
                <div className="backto-link" onClick={handleClick}><a>&nbsp;</a></div>
            </div>
            <style jsx>{`
                        .backto-link-wrapper {
                            background: ${bg};
                        }
                `}</style>
        </div>
    )
}

export default BackToLink