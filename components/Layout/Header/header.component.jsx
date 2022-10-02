import Head from "next/head";
import { useRouter } from "next/router";

import Navbar2 from "../Navbar/navbar-2.component";
import Navbar from "../Navbar/navbar.component"

const Header = () => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Indonesia Recovery - Portal Berita Agregator Untuk Indonesia dan Olimpiade Vokasi Indonesia</title>

                <meta content="Indonesia Recovery" name="keywords"/>

                <meta name="description" content="Indonesia Recovery merupakan proyek web design untuk Olimpiade Vokasi Indonesia (OLIVIA) 2022 UNY, hadir dalam bentuk website agregator portal berita yang memberikan informasi tentang munculnya antusiasme baru pasca pandemi COVID-19, dengan menyebarkan berita positif dan berkaitan dengan transformasi digital di Indonesia."/>
                <link rel="shortcut icon" href="/svg/logo(Logo)(500 × 200 px)(1).svg"/>
                <link rel="icon" href="/svg/logo(Logo)(500 × 200 px)(1).svg"/>

                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
                <meta name="google-site-verification" content="eMKIdy3WT6a1SkeXzjIMXEX_5Nf7bQn1QPy4g4ipqQ4" />
            </Head>

            {
                router.pathname == '/news/[slug]' ? (
                    <Navbar2/>
                ) : 
                router.pathname == '/news/print/[slug]' ? (
                   <> </>
                ) :
                (
                    <Navbar/>
                )
            }
        </>

      
    );
};

export default Header;