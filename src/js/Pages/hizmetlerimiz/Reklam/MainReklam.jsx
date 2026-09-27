import React from 'react';
import Secondbanner from "../../../Components/Header/SecondBanner/secondbanner";
import Reklambanner from "../../../Components/Hizmetlerimiz/Reklam/ReklamBanner/Reklambanner";
import ReklamSection from "../../../Components/Hizmetlerimiz/Reklam/ReklamSection/ReklamSection";
import Question from "../../../Components/according/question.jsx";

import Footer from "../../../Components/Footer/footer";

const MainReklam = () => {
    return (
        <div>
            <Secondbanner/>
            <Reklambanner/>
            <ReklamSection/>

            <Question/>

            <Footer/>
        </div>
    );
};

export default MainReklam;