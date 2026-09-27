import React from 'react';
import Secondbanner from "../../../../Components/Header/SecondBanner/secondbanner";
import SosyalYonetimBanner from "../../../../Components/Hizmetlerimiz/Yonetim/SosyalYonetim/SosyalYonetimBanner";
import SosyalYonetimSection1 from "../../../../Components/Hizmetlerimiz/Yonetim/SosyalYonetim/SosyalYonetimSection1";
import SosyalYonetimSection2 from "../../../../Components/Hizmetlerimiz/Yonetim/SosyalYonetim/SosyalYonetimSection2";
import Fikirsection from "../../../../Components/Hizmetlerimiz/fikir-section/Fikirsection.jsx";
import Neleryap from "../../../../Components/Body/neleryap/neleryap";
import Question from "../../../../Components/according/question.jsx";

import Footer from "../../../../Components/Footer/footer";

const Sosyalyonetim = () => {
    return (
        <div>
            <Secondbanner/>
            <br/>

            <SosyalYonetimBanner/>
            <SosyalYonetimSection1/>
            <SosyalYonetimSection2/>
            <Fikirsection/>

            <Neleryap/>
            <Question/>

            <Footer/>
        </div>
    );
};

export default Sosyalyonetim;