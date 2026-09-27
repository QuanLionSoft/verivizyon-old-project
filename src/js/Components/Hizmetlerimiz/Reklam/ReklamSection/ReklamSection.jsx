import  'react';
import Googleads from "../../../../Pages/hizmetlerimiz/Reklam/reklam-down-page/Googleads";
import {Link} from "react-router-dom";
import Sosyalmedya from "../../../../Pages/hizmetlerimiz/Reklam/reklam-down-page/Sosyalmedya";
import Seo from "../../../../Pages/hizmetlerimiz/Reklam/reklam-down-page/Seo";

const ReklamSection = () => {
    return (
        <section className="pt-4 position-relative overflow-hidden">
            <div className="container hizmetler">
                <div className="row">
                    <div className="col-12">
                        <h2><span className="text-primary">VeriVizyon</span> iş ortaklığı ile profesyonel Reklam Hizmetleri
                        </h2>
                    </div>
                    <div className="col-md-4">
                        <Link to="/reklam/googleads" className="hizmet_1" element={Googleads}>
                            <div className="card hizmet_card">
                                <div className="hizmet_img">
                                    <img src="https://ik.imagekit.io/lgf1wyqnvg/veri-vizyon-hizmetlerimiz-image/google-reklam.svg?updatedAt=1714930059067" className="img-fluid" alt=""/>
                                </div>
                                <div className="card-title">
                                    <h3>Google ADS</h3>
                                </div>
                                <div className="card-body">
                                    <p>Google ADS Hizmeti ile ihtiyacınız olan reklam desteğine <span
                                        className="text-primary">VeriVizyon</span> iş ortaklığı ile sahip olabilirsiniz.</p>
                                </div>
                                <div className="card-footer">
                                    <span>Detaylar<i className="las la-chevron-right ml-2"></i></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/reklam/sosyalmedya" element={<Sosyalmedya/>} className="hizmet_2">
                            <div className="card hizmet_card">
                                <div className="hizmet_img">
                                    <img src="https://ik.imagekit.io/lgf1wyqnvg/veri-vizyon-hizmetlerimiz-image/sosyal-medya-reklamlari.svg?updatedAt=1714930059130" className="img-fluid"
                                         alt=""/>
                                </div>
                                <div className="card-title">
                                    <h3>Sosyal Medya Reklamları</h3>
                                </div>
                                <div className="card-body">
                                    <p>Sosyal Medya Reklamları ile ihtiyacınız olan reklam desteğine <span
                                        className="text-primary">VeriVizyon</span> iş ortaklığı ile sahip olabilirsiniz.</p>
                                </div>
                                <div className="card-footer">
                                    <span>Detaylar<i className="las la-chevron-right ml-2"></i></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/reklam/seohizmet"  element={<Seo/>} className="hizmet_3">
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

export default ReklamSection;