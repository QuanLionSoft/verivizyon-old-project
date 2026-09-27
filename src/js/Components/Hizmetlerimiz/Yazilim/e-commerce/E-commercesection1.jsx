import  'react';
import Buttonsection from "../../../button/Buttonsection";

const ECommercesection1 = () => {
    return (
        <section className="hizmet_detay_section1 pb-0 pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-5 order-md-1 order-2">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/verivizyon-hizmetler/yazilim/e-ticaret-yazilimi.svg?updatedAt=1715447549661" alt="Image" className="img-fluid px-md-4"/>
                    </div>
                    <div className="col-12 col-lg-7 order-md-2 order-1 px-md-4">
                        <div>
                            <h2 className="mb-4">E-Ticaret Yazılımı <span className="text-primary">VeriVizyon</span></h2>
                            <p className="lead fs-16">VeriVizyon, E-Ticaret Yazılımını projenize uyarlanmış halde titizlikle
                                sunar. E-Ticaret Yazılımı, projenizin alanı, hedef kitlesi ve proje sahibinin istekleri
                                üzerine yapılmalıdır. Bir web sitesi, işletmenizin dijital olarak dünyaya açılması için
                                çok önemlidir. </p>
                        </div>
                        <div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">İhtiyaçlarınıza özel kişiselleştirilmiş e-ticaret
                                        projeleri</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">Güvenli ve sürdürülebilir E-Ticaret Yazılımı</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">Gereksiz kod yapısından arındırılan kod yapısı sayesinde
                                        stabil ve hızlı e-ticaret projeleri</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">İş süreçlerinizle uyumlu, çalışma sisteminize entegre
                                        yazılımlarla desteklenmiş e-ticaret projeleri</p>
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
                                <Buttonsection/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

);
};

export default ECommercesection1;