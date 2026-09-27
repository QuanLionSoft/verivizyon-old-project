import React from 'react';
import Secondbanner from "../Components/Header/SecondBanner/secondbanner";
import Contactsection from "../Components/Contact/Contactsection/Contactsection";
import Contactsection2 from "../Components/Contact/ContactSection2/Contactsection2";

import Footer from "../Components/Footer/footer";
import ContactBanner from "../Components/Contact/Contactbanner/ContactBanner";

const Contact = () => {
    return (
        <div>
            <Secondbanner/>
            <ContactBanner/>
            <Contactsection/>
            <Contactsection2/>

            <Footer/>
        </div>
    );
};

export default Contact;