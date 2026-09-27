import React from 'react';
import Secondbanner from "../../../Components/Header/SecondBanner/secondbanner";
import MainTasarimBanner from "../../../Components/Hizmetlerimiz/Tasarim/MainTasarimBanner/MainTasarimBanner.jsx";
import MainTasarimSection from "../../../Components/Hizmetlerimiz/Tasarim/MainTasarimSection/MainTasarimSection.jsx";
import Question from "../../../Components/according/question.jsx";

import Footer from "../../../Components/Footer/footer";

const MainTasarim = () => {
    return (
        <div>
            <Secondbanner/>
            <MainTasarimBanner/>
            <MainTasarimSection/>

            <Question/>

            <Footer/>
        </div>
    );
};

export default MainTasarim;