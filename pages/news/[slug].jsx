import Layout from "../../components/Layout/layout.component"
import NewsArticle from "../../components/Sections/NewsArticle/news-article.component";
import Fmita from "../../components/Sections/Fmita/fmita.component";
import Navbar2 from "../../components/Layout/Navbar/navbar-2.component";

const NewsDetails = () => {
    return (
        <Layout>
            <Navbar2/>
            <div className="p-3 md:p-8 md:p-12 lg:px-20 lg:py-24 lg:mx-14">
                <NewsArticle/>
                <Fmita/>
            </div>
        </Layout>
    );
};

export default NewsDetails;