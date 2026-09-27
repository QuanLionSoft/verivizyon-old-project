import React from 'react';
import Secondbanner from "../../../../Components/Header/SecondBanner/secondbanner";
import GrafikBanner from "../../../../Components/Hizmetlerimiz/Tasarim/grafiktasarim/grafikBanner";
import Grafiksection1 from "../../../../Components/Hizmetlerimiz/Tasarim/grafiktasarim/grafiksection1";
import GrafikSection2 from "../../../../Components/Hizmetlerimiz/Tasarim/grafiktasarim/grafikSection2";
import Fikirsection from "../../../../Components/Hizmetlerimiz/fikir-section/Fikirsection.jsx";
import Neleryap from "../../../../Components/Body/neleryap/neleryap";
import Question from "../../../../Components/according/question.jsx";

import Footer from "../../../../Components/Footer/footer";

const Grafic = () => {
    return (
        <div>
            <Secondbanner/>
            <br/>
            <GrafikBanner/>
            <Grafiksection1/>
            <GrafikSection2/>
            <Fikirsection/>

            <Neleryap/>
            <Question/>

            <Footer/>
        </div>
    );
};

export default Grafic;