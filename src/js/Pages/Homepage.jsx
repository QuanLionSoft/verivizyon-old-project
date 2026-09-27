import  'react';
import Secondbanner from "../Components/Header/SecondBanner/secondbanner";
import Footer from "../Components/Footer/footer";
import Hmpgsection from "../Components/Body/hmpgsection/Hmpgsection.jsx";
import Hmpgsection2 from "../Components/Body/hmpgsection2/hmpgsection_2";
import Question from "../Components/according/question.jsx";
import Section3 from "../Components/Body/hmpgsection3/section3.jsx";
import Hmpgsection4 from "../Components/hmpgsection4/hmpgsection4";

import Pophiz from "../Components/pophiz/pophiz";
import Neleryap from "../Components/Body/neleryap/neleryap";


const Homepage = () => {
    return (
        <div>
        <Secondbanner/>
        <br/>
<Hmpgsection/>
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