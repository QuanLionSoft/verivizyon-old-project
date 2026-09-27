import React from 'react';
import Secondbanner from "../Components/Header/SecondBanner/secondbanner";
import RefBanner from "../Components/Ref/RefBanner/RefBanner";
import RefSection from "../Components/Ref/RefSection/RefSection";

import Footer from "../Components/Footer/footer";

const Referation = () => {
    return (
        <div>
            <Secondbanner/>
            <RefBanner/>
            <RefSection/>

            <Footer/>
        </div>
    );
};

export default Referation;