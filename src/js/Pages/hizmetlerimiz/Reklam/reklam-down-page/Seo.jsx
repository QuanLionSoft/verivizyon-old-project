import React from 'react';
import Secondbanner from "../../../../Components/Header/SecondBanner/secondbanner";
import SeoBanner from "../../../../Components/Hizmetlerimiz/Reklam/Seohizmet/SeoBanner";
import Seosection1 from "../../../../Components/Hizmetlerimiz/Reklam/Seohizmet/seosection1";
import Seosection2 from "../../../../Components/Hizmetlerimiz/Reklam/Seohizmet/seosection2";
import Fikirsection from "../../../../Components/Hizmetlerimiz/fikir-section/Fikirsection.jsx";
import Neleryap from "../../../../Components/Body/neleryap/neleryap";
import Question from "../../../../Components/according/question.jsx";

import Footer from "../../../../Components/Footer/footer";

const Seo = () => {
    return (
        <div>
            <Secondbanner/>
            <br/>
            <SeoBanner/>
            <Seosection1/>
            <Seosection2/>
            <Fikirsection/>

            <Neleryap/>
            <Question/>

            <Footer/>
        </div>
    );
};

export default Seo;