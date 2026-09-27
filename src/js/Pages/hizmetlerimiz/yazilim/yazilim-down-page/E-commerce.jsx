import React from 'react';
import Secondbanner from "../../../../Components/Header/SecondBanner/secondbanner";
import ECommerceBanner from "../../../../Components/Hizmetlerimiz/Yazilim/e-commerce/e-commerceBanner";
import ECommercesection1 from "../../../../Components/Hizmetlerimiz/Yazilim/e-commerce/E-commercesection1";
import ECommercesection2 from "../../../../Components/Hizmetlerimiz/Yazilim/e-commerce/E-commercesection2";
import Fikirsection from "../../../../Components/Hizmetlerimiz/fikir-section/Fikirsection";
import Neleryap from "../../../../Components/Body/neleryap/neleryap";
import Question from "../../../../Components/according/question";

import Footer from "../../../../Components/Footer/footer";

const ECommerce = () => {
    return (
        <div>
            <Secondbanner/>
            <br/>
            <ECommerceBanner/>
            <ECommercesection1/>
            <ECommercesection2/>
            <Fikirsection/>

            <Neleryap/>
            <Question/>

            <Footer/>
        </div>
    );
};

export default ECommerce;