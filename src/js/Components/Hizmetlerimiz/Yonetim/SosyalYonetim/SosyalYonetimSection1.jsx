import React from 'react';
import Buttonsection from "../../../button/Buttonsection";

const SosyalYonetimSection1 = () => {
    return (
        <section className="hizmet_detay_section1 pb-0 pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-5 order-md-1 order-2">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/verivizyon-hizmetler/yonetim/sosyal-medya-yonetimi-detay.svg?updatedAt=1715447554592" alt="Image"
                             className="img-fluid px-md-4"/>
                    </div>
                    <div className="col-12 col-lg-7 order-md-2 order-1 px-md-4">
                        <div>
                            <h2 className="mb-4">Sosyal Medya Yönetimi <span className="text-primary">VeriVizyon</span></h2>
                            <p className="lead fs-16">VeriVizyon, Sosyal Medya Yönetimini projenize uyarlanmış halde
                                titizlikle sunar. Sosyal Medya Yönetimi, projenizin alanı, hedef kitlesi ve proje
                                sahibinin istekleri üzerine yapılmalıdır. Sosyal Medya Yönetimi, işletmenizin dijital
                                olarak dünyaya açılması için çok önemlidir. </p>
                        </div>
                        <div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">İhtiyaçlarınıza özel kişiselleştirilmiş Sosyal Medya
                                        Yönetimi</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">Güvenli ve sürdürülebilir Sosyal Medya Yönetimi</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">Gereksiz işlemlerden arındırılan tasarımı sayesinde stabil
                                        ve hızlı Sosyal Medya Yönetimi</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">İş süreçlerinizle uyumlu, çalışma sisteminize entegre
                                        yazılımlarla desteklenmiş Sosyal Medya Yönetimi</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">Güvenlik için Web Sitenizin SSL sertifikası ücretsiz
                                        sağlanmaktadır</p>
                                </div>
                            </div>
                            <Buttonsection/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

);
};

export default SosyalYonetimSection1;