import FaqList from "../Elements/FaqLIst/faq-list.component";

const Faq = (props) => {
    const {ClassName} = props
    return (
        <section className={ClassName}>
            <div className="colspan-4 mb-11">
                <h1 className="text-2xl pb-3">Frequently Asked Question</h1>
                <div className=" border-b-[4px] border-red-500 w-28"/>
            </div>

            <div className="space-y-4">

                <FaqList 
                title="Lorem ipsum dolor sit amet consectetur adipisicing?"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                earum similique!"/>

                <FaqList 
                title="Lorem ipsum dolor sit amet consectetur adipisicing?"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                earum similique!"/>


            </div>

        </section>
    );
};

export default Faq;