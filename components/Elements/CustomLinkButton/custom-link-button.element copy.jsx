import Link from "next/link";

export const CUSTOM_LINK_BUTTON_TYPES = {
    "DEFAULT": {
        "conf_1": 'text-white',
        "conf_2": 'bg-red-600 border-red-600 active:border-red-500 active:bg-red-500'
    },
    "INVERTED": {
        "conf_1": 'text-red-600 active:text-red-500',
        "conf_2": 'bg-white'
    },
    "SPC_INVERTED_ROUNDED": 'text-red-600 active:text-red-500'
}

const CustomLinkButton = (props) => {
    const { to, type, text } = props;
    console.log(type['conf_1'])

    return (
            <Link href={to}>
                {
                    type === CUSTOM_LINK_BUTTON_TYPES.SPC_INVERTED_ROUNDED ? (
                        <a className={`relative inline-block text-sm font-medium ${type} group focus:outline-none focus:ring`}>
                            <span className="absolute inset-0 border rounded-lg border-current"></span>
                            <span className="block px-5 py-3 bg-white border rounded-lg transition-transform border-current group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:bg-red-600 group-hover:text-white">
                                {text}
                            </span>
                        </a>
                    ) : (
                        <a className={`relative inline-block text-sm font-medium ${type['conf_1']} group focus:outline-none focus:ring`}>
                            <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                            <span className={`block px-12 py-3 ${type['conf_2']} border transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1`}>
                                {text}
                            </span>
                        </a>
                    )
                }



            </Link>
            

            
    );
};

export default CustomLinkButton