import Head from "next/head";
import Link from "next/link";
import styles from '../styles/components/MainLayout.module.scss'
import {useState} from 'react'
import {motion, useCycle} from "framer-motion"
import {mobile_view} from "../constants/config";
import MenuItem from "./ui/MenuItem";
import {menu_items} from "../constants/config";
import Nav from "./ui/Nav";
import {useRouter} from "next/router";

export function MainLayout({children, title="Lena Tsybulenko - Product Designer, mobile app designer, front-end developer"}){
    const [menuOpened, setMenuOpened] = useState(false)

    const [twist, cycle] = useCycle({ scale: 1, rotate: 0, y: 0 },
        { scale: 1, rotate: 45, y:6.5})
    const [twist1, cycle1] = useCycle({ scale: 1, rotate: 0, y:0, x: 0 },
        { scale: 1, rotate: -45, y:-5.5, x: 0.9 })

    const [dissapear, displayNone] = useCycle({scale: 1}, {scale: 0})

    const [opacity, opaque] = useCycle({opacity: 0}, {opacity: 1})


    const handleMenuClick = () => {
        cycle()
        displayNone()
        cycle1()
        opaque()
        if (menuOpened) {
            setMenuOpened(false)
        }
        else {
            setMenuOpened(true)
        }
    }

    const menuClassName = menuOpened ?  "show" : ""

    const router = useRouter()
    const rote = router.route.slice(1, router.route.length)

    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="posts,nextjs"/>
                <meta name="description" content="this is posts" />
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon1.png" />
            </Head>
            <Nav
                twist={twist}
                dissapear={dissapear}
                twist1={twist1}
                click={handleMenuClick}
            />
            <section className={menuClassName}>
                <div className="title">Projects</div>
                {menu_items.map(item =>
                    <MenuItem
                        key={item.id}
                        title={item.title}
                        subtitle={item.subtitle}
                        link={item.link}
                        delay={item.delay}
                        opacity={opacity}
                        code={item.code}
                        rote={rote}
                    />
                )}
            </section>
            <main>
                {children}
            </main>
            <script jsx={true}>{`
            <!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(70532680, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/70532680" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
            `}</script>
            <style jsx>{`
                nav {
                    z-index: 2;
                }
                
                section {
                    position: fixed;
                    top:0;
                    // left: -100%;
                    // transform: translateX(-100%);
                    z-index: 1;
                    background:white;
                    transition: 0.4s ease-out;
                    padding: 4rem 4rem 4rem 13rem;
                    flex-direction: column;
                    align-content: center;
                    width: 100%;
                    display: none;
                }
                
                section .m-text {
                   font-size: 35px;
                }
                
                section.show {
                    left: 84px;
                    left:0;
                    // width: 40%;
                    width: 100%;
                    display: grid;
                }
                
                section.show .m-text {
                    font-size: 35px;
                    transition-delay: 0.3s;
                }
               
                .title {
                    text-transform: uppercase;
                    font-size: 12px;
                    margin-bottom: 3rem;
                    letter-spacing: 3px;
                    font-weight: 500;
                }
                
                @media(max-width: 768px) {
                     section.show {
                        left: 0;
                        width: 100%;
                        height: 100%;
                        padding: 3rem;
                        display: flex;
                     }
                     
                     .title {
                        margin-bottom: 2rem;
                     }
                }
                
            `}
            </style>
        </>
    )
}