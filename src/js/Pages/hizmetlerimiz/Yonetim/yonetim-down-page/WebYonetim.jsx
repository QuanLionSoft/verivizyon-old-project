import React from 'react';
import Secondbanner from "../../../../Components/Header/SecondBanner/secondbanner";
import WebYonetimBanner from "../../../../Components/Hizmetlerimiz/Yonetim/WebYonetim/WebYonetimBanner";
import WebYonetimSection1 from "../../../../Components/Hizmetlerimiz/Yonetim/WebYonetim/WebYonetimSection1";
import WebYonetimSection2 from "../../../../Components/Hizmetlerimiz/Yonetim/WebYonetim/WebYonetimSection2";
import Fikirsection from "../../../../Components/Hizmetlerimiz/fikir-section/Fikirsection";
import Neleryap from "../../../../Components/Body/neleryap/neleryap";
import Question from "../../../../Components/according/question";

import Footer from "../../../../Components/Footer/footer";

const WebYonetim = () => {
    return (
        <div>
            <Secondbanner/>
            <br/>
            <WebYonetimBanner/>
            <WebYonetimSection1/>
            <WebYonetimSection2/>

            <Fikirsection/>

            <Neleryap/>
            <Question/>

            <Footer/>
        </div>
    );
};

export default WebYonetim;