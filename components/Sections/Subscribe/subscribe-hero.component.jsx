import Popup from "../../Popup/popup.jsx";
import { useState } from 'react';

const SubscribeHero = (props) => {
    const [ buttonPopup, setButtonPopup ] = useState(false);
    const {ClassName} = props
    return (
        <section className={ClassName}>
            <div className="md:col-span-3 col-span-5">
                <h3 className="lg:text-2xl text-center lg:text-start"><span className="font-bold">Join our pathway</span> to be part of Indonesia’s growth journey by keep updated with the latest news!</h3>
            </div>
            <div className="md-col-span-2 col-span-5 grid place-items-center grid-flow-col">
                <a className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring" onClick={() => setButtonPopup(true)}>
                    <span className="absolute inset-0 border rounded-lg border-[#FF0909] group-active:border-red-500"></span>
                    <span className="block px-12 py-3 bg-[#FF0909] border rounded-lg border-[#FF0909] transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                    Subscribe
                    </span>
                </a>
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            </Popup>
            </section>
            
            
            
        
    );
};


export default SubscribeHero;