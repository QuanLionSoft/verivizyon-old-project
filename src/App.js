import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./js/Pages/Homepage.jsx";
import Errors from "./js/Pages/error.jsx";
import About from "./js/Pages/About.jsx";
import Contact from "./js/Pages/Contact.jsx";
import Referation from "./js/Pages/Referation.jsx";
import Gizlilik from "./js/Pages/Gizlilik.jsx";
import MainYazilim from "./js/Pages/hizmetlerimiz/yazilim/MainYazilim.js";
import MainYonetim from "./js/Pages/hizmetlerimiz/Yonetim/MainYonetim.js";
import MainReklam from "./js/Pages/hizmetlerimiz/Reklam/MainReklam.js";
import MainTasarim from "./js/Pages/hizmetlerimiz/Tasarim/MainTasarim.js";
import Googleads from "./js/Pages/hizmetlerimiz/Reklam/reklam-down-page/Googleads.jsx";
import Sosyalmedya from "./js/Pages/hizmetlerimiz/Reklam/reklam-down-page/Sosyalmedya.jsx";
import Seo from "./js/Pages/hizmetlerimiz/Reklam/reklam-down-page/Seo.jsx";
import WebDesign from "./js/Pages/hizmetlerimiz/Tasarim/tasarim-down-page/WebDesign.jsx";
import Grafic from "./js/Pages/hizmetlerimiz/Tasarim/tasarim-down-page/Grafic.jsx";
import Landing from "./js/Pages/hizmetlerimiz/Tasarim/tasarim-down-page/Landing.jsx";
import WebSoftware from "./js/Pages/hizmetlerimiz/yazilim/yazilim-down-page/WebSoftware.jsx";
import ECommerce from "./js/Pages/hizmetlerimiz/yazilim/yazilim-down-page/E-commerce.jsx";
import Crm from "./js/Pages/hizmetlerimiz/yazilim/yazilim-down-page/CRM.jsx";
import WebYonetim from "./js/Pages/hizmetlerimiz/Yonetim/yonetim-down-page/WebYonetim.jsx";
import Sosyalyonetim from "./js/Pages/hizmetlerimiz/Yonetim/yonetim-down-page/Sosyalyonetim.jsx";
import Googleyonetim from "./js/Pages/hizmetlerimiz/Yonetim/yonetim-down-page/Googleyonetim.jsx";
import Teklifalpage from "./js/Pages/teklifalpage.jsx";
import Preloader from "./js/Components/loader/Preloader.js";


function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 3.75 seconds to match the preloader animation duration

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Preloader />;
    }

    return (
        <div className="App" style={{ height: "150px" }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="hakkimizda" element={<About />} />
                    <Route path="*" element={<Errors />} />
                    <Route path="iletisim" element={<Contact />} />
                    <Route path="Referanslarimiz" element={<Referation />} />
                    <Route path="Gizlilik" element={<Gizlilik />} />
                    <Route path="yazilim" element={<MainYazilim />} />
                    <Route path="Yonetim" element={<MainYonetim />} />
                    <Route path="Reklam" element={<MainReklam />} />
                    <Route path="Tasarim" element={<MainTasarim />} />
                    <Route path="reklam/googleAds" element={<Googleads />} />
                    <Route path="reklam/Sosyalmedyareklam" element={<Sosyalmedya />} />
                    <Route path="reklam/Seohizmet" element={<Seo />} />
                    <Route path="Seohizmet" element={<Seo />} />
                    <Route path="Tasarim/Webdesign" element={<WebDesign />} />
                    <Route path="Webdesign" element={<WebDesign />} />
                    <Route path="Tasarim/graficdesign" element={<Grafic />} />
                    <Route path="Tasarim/landingdesign" element={<Landing />} />
                    <Route path="yazilim/WebSoftware" element={<WebSoftware />} />
                    <Route path="yazilim/E-commerce" element={<ECommerce />} />
                    <Route path="E-commerce" element={<ECommerce />} />
                    <Route path="yazilim/CrmErpSoftware" element={<Crm />} />
                    <Route path="Yonetim/Sosyalmedyayonetim" element={<Sosyalyonetim />} />
                    <Route path="Yonetim/Googlereklamyonetim" element={<Googleyonetim />} />
                    <Route path="Yonetim/WebSiteyonetim" element={<WebYonetim />} />
                    <Route path="teklif-al" element={<Teklifalpage />} />
                </Routes>
            </BrowserRouter>


        </div>
    );
}

export default App;
