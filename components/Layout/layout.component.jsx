import Header from "./Header/header.component";
import Footer from "./Footer/footer.component";
import SubscribeHero from "../Subscribe/subscribe-hero.component";

const Layout = (props) => {
    const {children} = props
    return (
        <div className="bg-white text-black ">
            <Header/>
                <main className="mx-auto max-w-screen-2xl ">{children}</main>
            <SubscribeHero ClassName="bg-gray-100 grid grid-cols-5 gap-4 place-items-center p-8 md:p-12 lg:px-20 lg:py-24 md:grid-flow-col"/>
            <Footer/>
        </div>
    );
};

export default Layout;