import  'react';
import Secondbanner from "../Components/Header/SecondBanner/secondbanner";
import GizliBanner from "../Components/gizlilik/GizlilikBanner/GizlilikBanner.jsx";
import GizlilikSection from "../Components/gizlilik/GizlilikSection/GizlilikSection";

import Footer from "../Components/Footer/footer";

const Gizlilik = () => {
    return (
        <div>
            <Secondbanner/>
            <GizliBanner/>
            <GizlilikSection/>

            <Footer/>
        </div>
    );
};

export default Gizlilik;