import React from 'react';
import './pophiz.css';
import {Link} from "react-router-dom";
import WebDesign from "../../Pages/hizmetlerimiz/Tasarim/tasarim-down-page/WebDesign";
import ECommerce from "../../Pages/hizmetlerimiz/yazilim/yazilim-down-page/E-commerce";
import Seo from "../../Pages/hizmetlerimiz/Reklam/reklam-down-page/Seo";

const Pophiz = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center fs-sm-28">Popüler Hizmetlerimiz</h2>
                    </div>
                </div>
            </div>
            <div className="container hizmetler">
                <div className="row">
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
                                <div className="card-footer" style={{}}>
                                    <span>Detaylar<i className="las la-chevron-right ml-2"></i></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="E-commerce" element={<ECommerce/>} className="hizmet_2">
                            <div className="card hizmet_card">
                                <div className="hizmet_img">
                                    <img src="https://ik.imagekit.io/lgf1wyqnvg/veri-vizyon-hizmetlerimiz-image/e-ticaret.svg?updatedAt=1714931724542" className="img-fluid" alt=""/>
                                </div>
                                <div className="card-title">
                                    <h3>E-Ticaret Yazılımı</h3>
                                </div>
                                <div className="card-body">
                                    <p>E-Ticaret Yazılımı ile ihtiyacınız olan yazılım desteğine <span
                                        className="text-primary">VeriVizyon</span> iş ortaklığı ile sahip olabilirsiniz.</p>
                                </div>
                                <div className="card-footer">
                                    <span>Detaylar<i className="las la-chevron-right ml-2"></i></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="Seohizmet" element={<Seo/>} className="hizmet_3">
                            <div className="card hizmet_card">
                                <div className="hizmet_img">
                                    <img src="https://ik.imagekit.io/lgf1wyqnvg/veri-vizyon-hizmetlerimiz-image/seo-hizmeti.svg?updatedAt=1714930059481" className="img-fluid" alt=""/>
                                </div>
                                <div className="card-title">
                                    <h3>SEO Hizmeti</h3>
                                </div>
                                <div className="card-body">
                                    <p>SEO Hizmeti ile ihtiyacınız olan reklam desteğine <span
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

export default Pophiz;