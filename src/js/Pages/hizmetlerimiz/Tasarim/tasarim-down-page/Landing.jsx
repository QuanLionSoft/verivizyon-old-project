import React from 'react';
import Secondbanner from "../../../../Components/Header/SecondBanner/secondbanner";
import LandingBanner from "../../../../Components/Hizmetlerimiz/Tasarim/LandingDesign/LandingBanner";
import Landingsection1 from "../../../../Components/Hizmetlerimiz/Tasarim/LandingDesign/Landingsection1";
import LandingSection2 from "../../../../Components/Hizmetlerimiz/Tasarim/LandingDesign/LandingSection2";
import Fikirsection from "../../../../Components/Hizmetlerimiz/fikir-section/Fikirsection";
import Neleryap from "../../../../Components/Body/neleryap/neleryap";
import Question from "../../../../Components/according/question";

import Footer from "../../../../Components/Footer/footer";

const Landing = () => {
    return (
        <div>
            <Secondbanner/>
            <br/>
            <LandingBanner/>
            <Landingsection1/>
            <LandingSection2/>
            <Fikirsection/>

            <Neleryap/>
            <Question/>

            <Footer/>
        </div>
    );
};

export default Landing;