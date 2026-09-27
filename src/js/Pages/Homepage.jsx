import React from 'react';
import Secondbanner from "../Components/Header/SecondBanner/secondbanner";
import Footer from "../Components/Footer/footer";
import HmpgSection from "../Components/Body/hmpgsection/Hmpgsection";
import Hmpgsection2 from "../Components/Body/hmpgsection2/hmpgsection_2";
import Question from "../Components/according/question";
import Section3 from "../Components/Body/hmpgsection3/section3";
import Hmpgsection4 from "../Components/hmpgsection4/hmpgsection4";

import Pophiz from "../Components/pophiz/pophiz";
import Neleryap from "../Components/Body/neleryap/neleryap";


const Homepage = () => {
    return (
        <div>
        <Secondbanner/>
        <br/>
<HmpgSection/>
<Hmpgsection2/>
<Section3/>
<Neleryap/>
<Question/>
<Hmpgsection4/>
<Pophiz/>

<Footer/>
        </div>
    );
};

export default Homepage;