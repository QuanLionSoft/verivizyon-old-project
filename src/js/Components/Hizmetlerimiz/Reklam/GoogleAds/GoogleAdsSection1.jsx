import React from 'react';
import './section1-ads.css';
import Buttonsection from "../../../button/Buttonsection";
const GoogleAdsSection1 = () => {
    return (
        <section className="hizmet_detay_section1 pb-0 pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-5 order-md-1 order-2">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/verivizyon-hizmetler/reklam/google-reklam-hizmeti.svg?updatedAt=1715447548518" alt="Image"
                             className="img-fluid px-md-4"/>
                    </div>
                    <div className="col-12 col-lg-7 order-md-2 order-1 px-md-4">
                        <div>
                            <h2 className="mb-4">Google ADS Hizmeti <span className="text-primary">VeriVizyon</span></h2>
                            <p className="lead fs-16">VeriVizyon, Google ADS Hizmetini projenize uyarlanmış halde titizlikle
                                sunar. Google ADS Hizmeti, projenizin alanı, hedef kitlesi ve proje sahibinin istekleri
                                üzerine yapılmalıdır. Google ADS Hizmeti, işletmenizin dijital olarak dünyaya açılması
                                için çok önemlidir. </p>
                        </div>
                        <div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}>
    </span>
                                    </div>
                                    <p className="mb-0 fs-14">İhtiyaçlarınıza özel kişiselleştirilmiş Google ADS
                                        Hizmeti</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}>
    </span>
                                    </div>
                                    <p className="mb-0 fs-14">Güvenli ve sürdürülebilir Google ADS Hizmeti</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}>
    </span>
                                    </div>
                                    <p className="mb-0 fs-14">Gereksiz işlemlerden arındırılan yapımız sayesinde stabil
                                        ve hızlı Google ADS Hizmeti</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}>
    </span>
                                    </div>
                                    <p className="mb-0 fs-14">İş süreçlerinizle uyumlu, çalışma sisteminize entegre
                                        yazılımlarla desteklenmiş Google ADS Hizmeti</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}>
                                    </span>
                                    </div>
                                    <p className="mb-0 fs-14">Güvenlik için Web Sitenizin SSL sertifikası ücretsiz
                                        sağlanmaktadır</p>
                                </div>
                                <Buttonsection style={{paddingTop:50}}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default GoogleAdsSection1;