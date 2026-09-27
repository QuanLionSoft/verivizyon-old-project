import React from 'react';
import Secondbanner from "../../../../Components/Header/SecondBanner/secondbanner";
import WebdesignBanner from "../../../../Components/Hizmetlerimiz/Tasarim/Webdesign/WebdesignBanner";
import WebDesignSection1 from "../../../../Components/Hizmetlerimiz/Tasarim/Webdesign/webDesignSection1";
import WebDesignSection2 from "../../../../Components/Hizmetlerimiz/Tasarim/Webdesign/WebDesignSection2";
import Fikirsection from "../../../../Components/Hizmetlerimiz/fikir-section/Fikirsection";
import Neleryap from "../../../../Components/Body/neleryap/neleryap";
import Question from "../../../../Components/according/question";

import Footer from "../../../../Components/Footer/footer";

const WebDesign = () => {
    return (
        <div>
            <Secondbanner/>
            <br/>
            <WebdesignBanner/>
            <WebDesignSection1/>
            <WebDesignSection2/>
            <Fikirsection/>

            <Neleryap/>
            <Question/>

            <Footer/>
        </div>
    );
};

export default WebDesign;