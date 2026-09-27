import { useState, useEffect } from "react";
import './css/App.css'; // css/App.css yolunuz projeye göre DOĞRU
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ---- SAYFALAR ----
import Homepage from "./js/Pages/Homepage.jsx"; // Dosya adı büyük harf olmalı
import Errors from "./js/Pages/error.jsx";
import About from "./js/Pages/About.jsx";
import Contact from "./js/Pages/Contact.jsx";
import Referation from "./js/Pages/Referation.jsx";
import Gizlilik from "./js/Pages/Gizlilik.jsx"; // Dosya adı büyük harf olmalı
import Teklifalpage from "./js/Pages/teklifalpage.jsx"; // Dosya adı küçükse import da öyle kalabilir ama büyük yapmanız tavsiye edilir.

// ---- HİZMETLERİMİZ (ANA SAYFALAR) ----
import MainYazilim from "./js/Pages/hizmetlerimiz/yazilim/MainYazilim.jsx";
import MainYonetim from "./js/Pages/hizmetlerimiz/Yonetim/MainYonetim.jsx";
import MainReklam from "./js/Pages/hizmetlerimiz/Reklam/MainReklam.jsx";
import MainTasarim from "./js/Pages/hizmetlerimiz/Tasarim/MainTasarim.jsx";

// ---- REKLAM ALT SAYFALARI ----
import Googleads from "./js/Pages/hizmetlerimiz/Reklam/reklam-down-page/Googleads.jsx";
import Sosyalmedya from "./js/Pages/hizmetlerimiz/Reklam/reklam-down-page/Sosyalmedya.jsx";
import Seo from "./js/Pages/hizmetlerimiz/Reklam/reklam-down-page/Seo.jsx";

// ---- TASARIM ALT SAYFALARI ----
import WebDesign from "./js/Pages/hizmetlerimiz/Tasarim/tasarim-down-page/WebDesign.jsx";
import Grafic from "./js/Pages/hizmetlerimiz/Tasarim/tasarim-down-page/Grafic.jsx";
import Landing from "./js/Pages/hizmetlerimiz/Tasarim/tasarim-down-page/Landing.jsx";

// ---- YAZILIM ALT SAYFALARI ----
import WebSoftware from "./js/Pages/hizmetlerimiz/yazilim/yazilim-down-page/WebSoftware.jsx";
import ECommerce from "./js/Pages/hizmetlerimiz/yazilim/yazilim-down-page/E-commerce.jsx";
import Crm from "./js/Pages/hizmetlerimiz/yazilim/yazilim-down-page/CRM.jsx";

// ---- YÖNETİM ALT SAYFALARI ----
import WebYonetim from "./js/Pages/hizmetlerimiz/Yonetim/yonetim-down-page/WebYonetim.jsx";
import Sosyalyonetim from "./js/Pages/hizmetlerimiz/Yonetim/yonetim-down-page/Sosyalyonetim.jsx";
import Googleyonetim from "./js/Pages/hizmetlerimiz/Yonetim/yonetim-down-page/Googleyonetim.jsx";

import Preloader from "./js/Components/loader/Preloader.jsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

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
                    <Route path="/hakkimizda" element={<About />} />
                    <Route path="/iletisim" element={<Contact />} />
                    <Route path="/referanslarimiz" element={<Referation />} />
                    <Route path="/gizlilik" element={<Gizlilik />} />
                    <Route path="/teklif-al" element={<Teklifalpage />} />

                    <Route path="/yazilim" element={<MainYazilim />} />
                    <Route path="/yonetim" element={<MainYonetim />} />
                    <Route path="/reklam" element={<MainReklam />} />
                    <Route path="/tasarim" element={<MainTasarim />} />

                    <Route path="/reklam/googleads" element={<Googleads />} />
                    <Route path="/reklam/sosyalmedya" element={<Sosyalmedya />} />
                    <Route path="/reklam/seohizmet" element={<Seo />} />

                    <Route path="/tasarim/webdesign" element={<WebDesign />} />
                    <Route path="/tasarim/graficdesign" element={<Grafic />} />
                    <Route path="/tasarim/landingdesign" element={<Landing />} />

                    <Route path="/yazilim/websoftware" element={<WebSoftware />} />
                    <Route path="/yazilim/ecommerce" element={<ECommerce />} />
                    <Route path="/yazilim/crm" element={<Crm />} />

                    <Route path="/yonetim/sosyalmedya" element={<Sosyalyonetim />} />
                    <Route path="/yonetim/googlereklam" element={<Googleyonetim />} />
                    <Route path="/yonetim/websitesyonetim" element={<WebYonetim />} />

                    <Route path="*" element={<Errors />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;