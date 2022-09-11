import Link from "next/link";

export const CUSTOM_LINK_BUTTON_TYPES = {
    "DEFAULT": 'default',
    "INVERTED": 'inverted',
    "SPC_INVERTED_ROUNDED": 'spc_inverted_rounded'
}

const CustomLinkButton = (props) => {
    const { to, type, text } = props;

    return (
            <Link href={to}>
                {
                    type === CUSTOM_LINK_BUTTON_TYPES.SPC_INVERTED_ROUNDED ? (
                        <a className="relative inline-block text-sm font-medium text-red-600 active:text-red-500 group focus:outline-none focus:ring" href="/download">
                            <span className="absolute inset-0 border rounded-lg border-current"></span>
                            <span className="block px-5 py-3 bg-white border rounded-lg transition-transform border-current group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:bg-red-600 group-hover:text-white">
                                {text}
                            </span>
                        </a>
                    ) : type === CUSTOM_LINK_BUTTON_TYPES.INVERTED ? (
                        <a className="relative inline-block text-sm font-medium text-red-600 active:text-red-500 group focus:outline-none focus:ring ml-8" href="/news">
                            <span className="absolute inset-0 border border-current"></span>
                            <span className="block px-12 py-3 bg-white border transition-transform border-current group-hover:-translate-x-1 group-hover:-translate-y-1">
                            Read News
                            </span>
                        </a>
                    ) : (
                        <a className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring" href="/download">
                            <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                            <span className="block px-12 py-3 bg-red-600 border border-red-600 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                            Reach Us
                            </span>
                        </a>
                    )
                }



            </Link>
            

            
    );
};

export default CustomLinkButton