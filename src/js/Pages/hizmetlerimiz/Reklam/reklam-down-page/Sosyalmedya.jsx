import React from 'react';
import Secondbanner from "../../../../Components/Header/SecondBanner/secondbanner";
import SosyalmedyaBanner from "../../../../Components/Hizmetlerimiz/Reklam/SosyalMedya/SosyalmedyaBanner";
import Sosyalmedyasection1 from "../../../../Components/Hizmetlerimiz/Reklam/SosyalMedya/sosyalmedyasection1";
import Sosyalmedyasection2 from "../../../../Components/Hizmetlerimiz/Reklam/SosyalMedya/sosyalmedyasection2";
import Fikirsection from "../../../../Components/Hizmetlerimiz/fikir-section/Fikirsection.jsx";
import Neleryap from "../../../../Components/Body/neleryap/neleryap";
import Question from "../../../../Components/according/question.jsx";

import Footer from "../../../../Components/Footer/footer";

const Sosyalmedya = () => {
    return (
        <div>
            <Secondbanner/>
            <br/>
            <SosyalmedyaBanner/>
            <Sosyalmedyasection1/>
            <Sosyalmedyasection2/>
            <Fikirsection/>

            <Neleryap/>
            <Question/>

            <Footer/>
        </div>
    );
};

export default Sosyalmedya;