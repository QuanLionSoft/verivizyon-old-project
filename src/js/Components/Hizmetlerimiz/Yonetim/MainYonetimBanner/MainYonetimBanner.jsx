import React from 'react';
import Homepage from "../../../../Pages/Homepage";
import {Link} from "react-router-dom";

const MainYonetimBanner = () => {
    return (
        <div id="breadcrumb" className="py-5 mb-5 position-relative overflow-hidden">
            <div id="particles-bg">
                {/*<canvas className="particles-js-canvas-el" width="1087" height="333"*/}
                {/*        style="width: 100%; height: 100%;"></canvas>*/}
            </div>
            <div className="container">
                <div className="row text-white text-center z-index-1">
                    <div className="col">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center bg-transparent p-0 m-0">
                                <li className="breadcrumb-item">
                                    <Link className="text-secondary"
                                          to="/" element={<Homepage/>}>Anasayfa</Link>
                                </li>

                                <li className="breadcrumb-item active text-primary" aria-current="page">Yönetim</li>
                            </ol>
                        </nav>
                        <h1 className="text-dark pt-4">Yönetim</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainYonetimBanner;