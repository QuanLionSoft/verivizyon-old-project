import React from 'react';
import Secondbanner from "../../../../Components/Header/SecondBanner/secondbanner";
import CrmBanner from "../../../../Components/Hizmetlerimiz/Yazilim/CRM/CRMBanner";
import CrmSection1 from "../../../../Components/Hizmetlerimiz/Yazilim/CRM/CRMSection1";
import CrmSection2 from "../../../../Components/Hizmetlerimiz/Yazilim/CRM/CRMSection2";
import Fikirsection from "../../../../Components/Hizmetlerimiz/fikir-section/Fikirsection";
import Neleryap from "../../../../Components/Body/neleryap/neleryap";
import Question from "../../../../Components/according/question";

import Footer from "../../../../Components/Footer/footer";

const Crm = () => {
    return (
        <div>
            <Secondbanner/>
            <br/>
            <CrmBanner/>
            <CrmSection1/>
            <CrmSection2/>
            <Fikirsection/>

            <Neleryap/>
            <Question/>

            <Footer/>
        </div>
    );
};

export default Crm;