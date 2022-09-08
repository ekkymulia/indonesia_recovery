import Header from "../Header/header.component";
import Footer from "../Footer/footer.component";

const Layout = (props) => {
    const {children} = props
    return (
        <div className="bg-white text-black">
            <Header/>
                <main>{children}</main>
            <Footer/>
        </div>
    );
};

export default Layout;