import  'react';
import Secondbanner from "../../../Components/Header/SecondBanner/secondbanner";
import MainYazilimBanner from "../../../Components/Hizmetlerimiz/Yazilim/MainYazilimBanner/MainYazilimBanner";
import MainYazilimSection from "../../../Components/Hizmetlerimiz/Yazilim/MainYazilimSection/MainYazilimSection";
import Question from "../../../Components/according/question.jsx";

import Footer from "../../../Components/Footer/footer";

const MainYazilim = () => {
    return (
        <div>
            <Secondbanner/>
            <MainYazilimBanner/>
            <MainYazilimSection/>
            <Question/>

            <Footer/>
        </div>
    );
};

export default MainYazilim;