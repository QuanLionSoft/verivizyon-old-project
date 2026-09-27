import React from 'react';
import Secondbanner from "../../../../Components/Header/SecondBanner/secondbanner";
import GoogleAdsBanner from "../../../../Components/Hizmetlerimiz/Reklam/GoogleAds/GoogleAdsBanner";
import GoogleAdsSection1 from "../../../../Components/Hizmetlerimiz/Reklam/GoogleAds/GoogleAdsSection1";
import GoogleAdsSection2 from "../../../../Components/Hizmetlerimiz/Reklam/GoogleAds/GoogleAdsSection2";
import Fikirsection from "../../../../Components/Hizmetlerimiz/fikir-section/Fikirsection.jsx";
import Neleryap from "../../../../Components/Body/neleryap/neleryap";
import Question from "../../../../Components/according/question.jsx";

import Footer from "../../../../Components/Footer/footer";

const Googleads = () => {
    return (
        <div>
            <Secondbanner/>
            <br/>

            <GoogleAdsBanner/>
            <GoogleAdsSection1/>
            <GoogleAdsSection2/>
            <Fikirsection/>

            <Neleryap/>
            <Question/>

            <Footer/>
        </div>
    );
};

export default Googleads;