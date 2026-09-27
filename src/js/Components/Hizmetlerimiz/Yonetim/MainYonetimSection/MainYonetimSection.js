import React from 'react';
import Sosyalyonetim from "../../../../Pages/hizmetlerimiz/Yonetim/yonetim-down-page/Sosyalyonetim";
import {Link} from "react-router-dom";
import Googleyonetim from "../../../../Pages/hizmetlerimiz/Yonetim/yonetim-down-page/Googleyonetim";
import WebYonetim from "../../../../Pages/hizmetlerimiz/Yonetim/yonetim-down-page/WebYonetim";

const MainYonetimSection = () => {
    return (
        <section className="pt-4 position-relative overflow-hidden">
            <div className="container hizmetler">
                <div className="row">
                    <div className="col-12">
                        <h2><span className="text-primary">VeriVizyon</span> iş ortaklığı ile profesyonel Yönetim Hizmetleri
                        </h2>
                    </div>
                    <div className="col-md-4">
                        <Link to="Sosyalmedyayonetim" element={<Sosyalyonetim/>} className="hizmet_1">
                            <div className="card hizmet_card">
                                <div className="hizmet_img">
                                    <img src="https://ik.imagekit.io/lgf1wyqnvg/veri-vizyon-hizmetlerimiz-image/sosyal-medya-yonetimi.svg?updatedAt=1714930058411" className="img-fluid" alt=""/>
                                </div>
                                <div className="card-title">
                                    <h3>Sosyal Medya Yönetimi</h3>
                                </div>
                                <div className="card-body">
                                    <p>Sosyal Medya Yönetimi ile ihtiyacınız olan yönetim desteğine <span
                                        className="text-primary">VeriVizyon</span> iş ortaklığı ile sahip olabilirsiniz.</p>
                                </div>
                                <div className="card-footer">
                                    <span>Detaylar<i className="las la-chevron-right ml-2"></i></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="Googlereklamyonetim" element={<Googleyonetim/>} className="hizmet_2">
                            <div className="card hizmet_card">
                                <div className="hizmet_img">
                                    <img src="https://ik.imagekit.io/lgf1wyqnvg/veri-vizyon-hizmetlerimiz-image/google-reklam-yonetimi.svg?updatedAt=1714930059355" className="img-fluid"
                                         alt=""/>
                                </div>
                                <div className="card-title">
                                    <h3>Google Reklam Yönetimi</h3>
                                </div>
                                <div className="card-body">
                                    <p>Google Reklam Yönetimi ile ihtiyacınız olan yönetim desteğine <span
                                        className="text-primary">VeriVizyon</span> iş ortaklığı ile sahip olabilirsiniz.</p>
                                </div>
                                <div className="card-footer">
                                    <span>Detaylar<i className="las la-chevron-right ml-2"></i></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="WebSiteyonetim" element={<WebYonetim/>} className="hizmet_3">
                            <div className="card hizmet_card">
                                <div className="hizmet_img">
                                    <img src="https://ik.imagekit.io/lgf1wyqnvg/veri-vizyon-hizmetlerimiz-image/web-site-yonetimi.svg?updatedAt=1714930062355" className="img-fluid" alt=""/>
                                </div>
                                <div className="card-title">
                                    <h3>Web Site Yönetimi</h3>
                                </div>
                                <div className="card-body">
                                    <p>Web Site Yönetimi ile ihtiyacınız olan yönetim desteğine <span
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

export default MainYonetimSection;