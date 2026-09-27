import React from 'react';
import Secondbanner from "../../../../Components/Header/SecondBanner/secondbanner";
import GoogleYonetimBanner from "../../../../Components/Hizmetlerimiz/Yonetim/GoogleYonetim/GoogleYonetimBanner";
import GoogleYonetimSection1 from "../../../../Components/Hizmetlerimiz/Yonetim/GoogleYonetim/GoogleYonetimSection1";
import GoogleYonetimSection2 from "../../../../Components/Hizmetlerimiz/Yonetim/GoogleYonetim/GoogleYonetimSection2";
import Fikirsection from "../../../../Components/Hizmetlerimiz/fikir-section/Fikirsection";
import Neleryap from "../../../../Components/Body/neleryap/neleryap";
import Question from "../../../../Components/according/question";

import Footer from "../../../../Components/Footer/footer";

const Googleyonetim = () => {
    return (
        <div>
            <Secondbanner/>
            <br/>

            <GoogleYonetimBanner/>
            <GoogleYonetimSection1/>
            <GoogleYonetimSection2/>
            <Fikirsection/>

            <Neleryap/>
            <Question/>

            <Footer/>
        </div>
    );
};

export default Googleyonetim;