import  'react';
import WebSoftware from "../../../../Pages/hizmetlerimiz/yazilim/yazilim-down-page/WebSoftware";
import {Link} from "react-router-dom";
import ECommerce from "../../../../Pages/hizmetlerimiz/yazilim/yazilim-down-page/E-commerce";
import Crm from "../../../../Pages/hizmetlerimiz/yazilim/yazilim-down-page/CRM";

const MainYazilimSection = () => {
    return (
        <section className="pt-5 position-relative overflow-hidden">
            <div className="container hizmetler">
                <div className="row">
                    <div className="col-12">
                        <h2><span className="text-primary">VeriVizyon</span> iş ortaklığı ile profesyonel Yazılım Hizmetleri
                        </h2>
                    </div>
                    <div className="col-md-4">
                        <Link to="/yazilim/websoftware" element={<WebSoftware/>} className="hizmet_1">
                            <div className="card hizmet_card">
                                <div className="hizmet_img">
                                    <img src="https://ik.imagekit.io/lgf1wyqnvg/veri-vizyon-hizmetlerimiz-image/yazilim.svg?updatedAt=1714931724703" className="img-fluid" alt=""/>
                                </div>
                                <div className="card-title">
                                    <h3>Web Yazılım Hizmeti</h3>
                                </div>
                                <div className="card-body">
                                    <p>Web Yazılım Hizmeti ile ihtiyacınız olan yazılım desteğine <span
                                        className="text-primary">VeriVizyon</span> iş ortaklığı ile sahip olabilirsiniz.</p>
                                </div>
                                <div className="card-footer">
                                    <span>Detaylar<i className="las la-chevron-right ml-2"></i></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/yazilim/ecommerce"  element={<ECommerce/>} className="hizmet_2">
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
                        <Link to="/yazilim/crm" element={<Crm/>} className="hizmet_3">
                            <div className="card hizmet_card">
                                <div className="hizmet_img">
                                    <img src="https://ik.imagekit.io/lgf1wyqnvg/veri-vizyon-hizmetlerimiz-image/crm-erp.svg?updatedAt=1714931725188" className="img-fluid" alt=""/>
                                </div>
                                <div className="card-title">
                                    <h3>CRM/ERP Sistemleri</h3>
                                </div>
                                <div className="card-body">
                                    <p>CRM/ERP Sistemleri ile ihtiyacınız olan yazılım desteğine <span
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

export default MainYazilimSection;