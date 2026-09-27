import React from 'react';
import Secondbanner from "../../../../Components/Header/SecondBanner/secondbanner";
import WebSoftwareBanner from "../../../../Components/Hizmetlerimiz/Yazilim/WebSoftware/WebSoftwareBanner";
import WebSoftwareSection1 from "../../../../Components/Hizmetlerimiz/Yazilim/WebSoftware/WebSoftwareSection1";
import WebSoftwareSection2 from "../../../../Components/Hizmetlerimiz/Yazilim/WebSoftware/WebSoftwareSection2";
import Fikirsection from "../../../../Components/Hizmetlerimiz/fikir-section/Fikirsection";
import Neleryap from "../../../../Components/Body/neleryap/neleryap";
import Question from "../../../../Components/according/question";

import Footer from "../../../../Components/Footer/footer";

const WebSoftware = () => {
    return (
        <div>
            <Secondbanner/>
            <br/>
            <WebSoftwareBanner/>
            <WebSoftwareSection1/>
            <WebSoftwareSection2/>
            <Fikirsection/>

            <Neleryap/>
            <Question/>

            <Footer/>
        </div>
    );
};

export default WebSoftware;