import Layout from "../../components/Layout/layout.component"
import NewsArticle from "../../components/Sections/NewsArticle/news-article.component";
import Fmita from "../../components/Sections/Fmita/fmita.component";

const NewsDetails = () => {
    return (
        <Layout>
            <div className="pt-12 md:pt-1 lg:px-32 lg:pt-0 lg:py-12">
                <NewsArticle/>
                <Fmita ClassName="px-4 py-8 mx-4"/>
            </div>
        </Layout>
    );
};

export default NewsDetails;