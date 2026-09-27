import  'react';
import MainTasarim from "../../../../Pages/hizmetlerimiz/Tasarim/MainTasarim.jsx";
import {Link} from "react-router-dom";
import Homepage from "../../../../Pages/Homepage";

const LandingBanner = () => {
    return (
        <div id="breadcrumb" className="py-5 mb-5 position-relative overflow-hidden">
            <div id="particles-bg"></div>
            <div className="container">
                <div className="row text-white text-center z-index-1">
                    <div className="col">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center bg-transparent p-0 m-0">
                                <li className="breadcrumb-item"><Link className="text-secondary"
                                                                      to="/" element={<Homepage/>}>Anasayfa</Link></li>
                                <li className="breadcrumb-item">
                                    <Link className="text-secondary" to="/tasarim" element={<MainTasarim/>}>Tasarım
                                        Hizmetleri</Link>
                                </li>
                                <li className="breadcrumb-item active text-primary" aria-current="page">Landing Tasarım Hizmetleri
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-dark pt-4">Landing Tasarım Hizmetleri</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingBanner;