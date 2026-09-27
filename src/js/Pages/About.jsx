import  'react';
import Secondbanner from "../Components/Header/SecondBanner/secondbanner";
import Aboutbanner from "../Components/About/aboutbanner/Aboutbanner";
import AboutSection from "../Components/About/aboutsection/AboutSection";

import Footer from "../Components/Footer/footer";

const About = () => {
    return (
        <div>
            <Secondbanner/>
            <Aboutbanner/>
            <AboutSection/>

<Footer/>
        </div>
    );
};

export default About;