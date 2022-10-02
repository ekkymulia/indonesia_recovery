import { useRouter } from "next/router";
import { useState } from "react";

const ShareIcon = () => {
    const router = useRouter();

    const [alert, setAlert] = useState(0)

    return (
        <div >
            <svg width="23" height="23" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {navigator.clipboard.writeText(`https://indonesia-recovery.vercel.app${router.asPath}`); setAlert(!alert)}}>
                <path d="M0 18.5294C0 21.9347 2.77118 24.7059 6.17647 24.7059C7.81118 24.7059 9.28941 24.0574 10.395 23.0176L22.7294 30.0671C22.6924 30.3347 22.6471 30.6024 22.6471 30.8824C22.6471 34.2876 25.4182 37.0588 28.8235 37.0588C32.2288 37.0588 35 34.2876 35 30.8824C35 27.4771 32.2288 24.7059 28.8235 24.7059C27.1888 24.7059 25.7106 25.3544 24.605 26.3941L12.2706 19.3468C12.3076 19.0771 12.3529 18.8094 12.3529 18.5294C12.3529 18.2494 12.3076 17.9818 12.2706 17.7121L24.605 10.6647C25.7106 11.7044 27.1888 12.3529 28.8235 12.3529C32.2288 12.3529 35 9.58177 35 6.17647C35 2.77118 32.2288 0 28.8235 0C25.4182 0 22.6471 2.77118 22.6471 6.17647C22.6471 6.45647 22.6924 6.72412 22.7294 6.99382L10.395 14.0412C9.25648 12.9596 7.74681 12.3555 6.17647 12.3529C2.77118 12.3529 0 15.1241 0 18.5294Z" fill="#C20202" className="hover:fill-red-400 hover:cursor-pointer"/>
            </svg>
           
            {
                alert ? (
                    <aside
                    className="fixed z-50 flex items-center justify-center px-5 py-3 text-white bg-black rounded-lg bottom-4 right-4 transition-transform hover:delay-300"
                    >
                        <a
                            href="/new-thing"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium hover:opacity-75"
                        >
                        🔗Berhasil mencopy link artikel. 👋
                        </a>
        
                        <button
                            className="p-1 ml-3 rounded bg-white/20 hover:bg-white/10"
                            aria-label="Dismiss Popup" onClick={() => setAlert(!alert)}
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                            </svg>
                        </button>
                    </aside>
                ) : (
                    <></>
                )
            }

        </div>

    );
};

export default ShareIcon;