import Link from "next/link";

export const CUSTOM_LINK_BUTTON_TYPES = {
    "DEFAULT": 'default',
    "INVERTED": 'inverted',
    "SPC_INVERTED_ROUNDED": 'spc_inverted_rounded',
    "SPC_INVERTED_ROUNDED_SM": 'spc_inverted_rounded_sm'
}

const CustomLinkButton = (props) => {
    const { to, type, text } = props;

    return (
            <Link href={to}>
                {
                    type === CUSTOM_LINK_BUTTON_TYPES.SPC_INVERTED_ROUNDED ? (
                        <a className="relative inline-block text-sm font-medium text-[#FF0909] active:text-red-500 group focus:outline-none focus:ring" >
                            <span className="absolute inset-0 border rounded-lg border-current"></span>
                            <span className="block px-5 py-3 bg-white border rounded-lg transition-transform border-current group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:bg-[#FF0909] group-hover:text-white">
                                {text}
                            </span>
                        </a>
                    ) : type === CUSTOM_LINK_BUTTON_TYPES.SPC_INVERTED_ROUNDED_SM ? (
                        <a className="relative inline-block text-sm font-medium text-[#FF0909] active:text-red-500 group focus:outline-none focus:ring" >
                            <span className="absolute inset-0 border rounded-lg border-current"></span>
                            <span className="block px-5 py-2.5 bg-white border rounded-lg transition-transform border-current group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:bg-[#FF0909] group-hover:text-white">
                                {text}
                            </span>
                        </a>
                    ) : type === CUSTOM_LINK_BUTTON_TYPES.INVERTED ? (
                        <a className="relative inline-block text-sm font-medium text-[#FF0909] active:text-red-500 group focus:outline-none focus:ring ml-8">
                            <span className="absolute inset-0 border rounded-lg border-current"></span>
                            <span className="block px-12 py-3 bg-white border rounded-lg transition-transform border-current group-hover:-translate-x-1 group-hover:-translate-y-1">
                            {text}
                            </span>
                        </a>
                    ) : (
                        <a className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring">
                            <span className="absolute inset-0 border rounded-lg border-[#FF0909] group-active:border-red-500"></span>
                            <span className="block px-12 py-3 bg-[#FF0909] border rounded-lg border-[#FF0909] transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                            {text}
                            </span>
                        </a>
                    )
                }



            </Link>
            

            
    );
};

export default CustomLinkButton