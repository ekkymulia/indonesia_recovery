import Layout from "../../../components/Layout/layout.component";
import NewsArticlePrint from "../../../components/Sections/NewsArticle/news-article-print.component";

const NewsPrint = () => {
    return (
        <div>
        <Layout>
            <div className="pt-12 md:pt-1 lg:px-32 lg:pt-0 lg:py-12">
                <NewsArticlePrint/>
            </div>
        </Layout>
        </div>
    );
};

export default NewsPrint;