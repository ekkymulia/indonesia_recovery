import Head from "next/head";
import { useRouter } from "next/router";

import Navbar2 from "../Navbar/navbar-2.component";
import Navbar from "../Navbar/navbar.component"

const Header = () => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Indonesia Recovery</title>
                <meta name="description" content="Indonesia Recovery sebuah portal"></meta>
                <link rel="shortcut icon" href="/svg/logo(Logo)(500 × 200 px)(1).svg"/>
                <link rel="icon" href="/svg/logo(Logo)(500 × 200 px)(1).svg"/>

                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
    
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