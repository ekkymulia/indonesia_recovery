import Fmita from "../../components/Fmita/fmita.component";
import Layout from "../../components/Layout/layout.component"
import NewsArticle from "../../components/NewsArticle/news-article.component";

const NewsDetails = () => {
    return (
        <Layout>
            <div className="p-8 md:p-12 lg:px-20 lg:py-24">
                <NewsArticle/>
                <Fmita/>
            </div>
        </Layout>
    );
};

export default NewsDetails;