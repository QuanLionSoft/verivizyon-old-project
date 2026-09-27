import React from 'react';
import Homepage from "../../../../Pages/Homepage";
import {Link} from "react-router-dom";
import MainYonetim from "../../../../Pages/hizmetlerimiz/Yonetim/MainYonetim";

const GoogleYonetimBanner = () => {
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
                                    <Link className="text-secondary" to="/Yonetim" element={<MainYonetim/>}>Yönetim
                                        Hizmetleri</Link>
                                </li>
                                <li className="breadcrumb-item active text-primary" aria-current="page">Google Reklam Yönetim Hizmetleri
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-dark pt-4">Google Reklam Yönetim Hizmetleri</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleYonetimBanner;