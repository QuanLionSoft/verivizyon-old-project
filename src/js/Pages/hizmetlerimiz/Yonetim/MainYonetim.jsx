import React from 'react';
import Secondbanner from "../../../Components/Header/SecondBanner/secondbanner";
import MainYonetimBanner from "../../../Components/Hizmetlerimiz/Yonetim/MainYonetimBanner/MainYonetimBanner";
import MainYonetimSection from "../../../Components/Hizmetlerimiz/Yonetim/MainYonetimSection/MainYonetimSection.jsx";
import Question from "../../../Components/according/question.jsx";

import Footer from "../../../Components/Footer/footer";

const MainYonetim = () => {
    return (
        <div>
            <Secondbanner/>
            <MainYonetimBanner/>
            <MainYonetimSection/>
            <Question/>

            <Footer/>
        </div>
    );
};

export default MainYonetim;