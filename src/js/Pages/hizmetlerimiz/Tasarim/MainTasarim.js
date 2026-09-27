import React from 'react';
import Secondbanner from "../../../Components/Header/SecondBanner/secondbanner";
import MainTasarimBanner from "../../../Components/Hizmetlerimiz/Tasarim/MainTasarimBanner/MainTasarimBanner";
import MainTasarimSection from "../../../Components/Hizmetlerimiz/Tasarim/MainTasarimSection/MainTasarimSection";
import Question from "../../../Components/according/question";

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