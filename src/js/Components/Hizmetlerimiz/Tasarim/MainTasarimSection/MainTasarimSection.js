import React from 'react';
import WebDesign from "../../../../Pages/hizmetlerimiz/Tasarim/tasarim-down-page/WebDesign";
import {Link} from "react-router-dom";
import Grafic from "../../../../Pages/hizmetlerimiz/Tasarim/tasarim-down-page/Grafic";
import Landing from "../../../../Pages/hizmetlerimiz/Tasarim/tasarim-down-page/Landing";

const MainTasarimSection = () => {
    return (
        <section className="pt-4 position-relative overflow-hidden">
            <div className="container hizmetler">
                <div className="row">
                    <div className="col-12">
                        <h2><span className="text-primary">VeriVizyon</span> iş ortaklığı ile profesyonel Reklam Hizmetleri
                        </h2>
                    </div>
                    <div className="col-md-4">
                        <Link to="Webdesign" element={<WebDesign/>} className="hizmet_1">
                            <div className="card hizmet_card">
                                <div className="hizmet_img">
                                    <img src="https://ik.imagekit.io/lgf1wyqnvg/veri-vizyon-hizmetlerimiz-image/web-tasarim.svg?updatedAt=1714930062437" className="img-fluid" alt=""/>
                                </div>
                                <div className="card-title">
                                    <h3>Web Tasarım Hizmeti</h3>
                                </div>
                                <div className="card-body">
                                    <p>Web Tasarım Hizmeti ile ihtiyacınız olan tasarım desteğine <span
                                        className="text-primary">VeriVizyon</span> iş ortaklığı ile sahip olabilirsiniz.</p>
                                </div>
                                <div className="card-footer">
                                    <span>Detaylar<i className="las la-chevron-right ml-2"></i></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="graficdesign" element={<Grafic/>} className="hizmet_2">
                            <div className="card hizmet_card">
                                <div className="hizmet_img">
                                    <img src="https://ik.imagekit.io/lgf1wyqnvg/veri-vizyon-hizmetlerimiz-image/grafik-tasarim.svg?updatedAt=1714930058309" className="img-fluid"
                                         alt=""/>
                                </div>
                                <div className="card-title">
                                    <h3>Grafik Tasarım Hizmeti</h3>
                                </div>
                                <div className="card-body">
                                    <p>Grafik Tasarım Hizmeti ile ihtiyacınız olan tasarım desteğine <span
                                        className="text-primary">VeriVizyon</span> iş ortaklığı ile sahip olabilirsiniz.</p>
                                </div>
                                <div className="card-footer">
                                    <span>Detaylar<i className="las la-chevron-right ml-2"></i></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="landingdesign" element={<Landing/>} className="hizmet_3">
                            <div className="card hizmet_card">
                                <div className="hizmet_img">
                                    <img src="https://ik.imagekit.io/lgf1wyqnvg/veri-vizyon-hizmetlerimiz-image/landing-tasarim.svg?updatedAt=1714930059837" className="img-fluid" alt=""/>
                                </div>
                                <div className="card-title">
                                    <h3>Landing Tasarım Hizmeti</h3>
                                </div>
                                <div className="card-body">
                                    <p>Landing Tasarım Hizmeti ile ihtiyacınız olan tasarım desteğine <span
                                        className="text-primary">VeriVizyon</span> iş ortaklığı ile sahip olabilirsiniz.</p>
                                </div>
                                <div className="card-footer">
                                    <span>Detaylar<i className="las la-chevron-right ml-2"></i></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainTasarimSection;