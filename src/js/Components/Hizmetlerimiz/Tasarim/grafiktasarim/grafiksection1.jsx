import  'react';
import Buttonsection from "../../../button/Buttonsection";

const Grafiksection1 = () => {
    return (
        <section className="hizmet_detay_section1 pb-0 pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-5 order-md-1 order-2">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/verivizyon-hizmetler/tasarim/grafik-tasarim-hizmeti.svg?updatedAt=1715447549724" alt="Image"
                             className="img-fluid px-md-4"/>
                    </div>
                    <div className="col-12 col-lg-7 order-md-2 order-1 px-md-4">
                        <div>
                            <h2 className="mb-4">Grafik Tasarım Hizmeti <span className="text-primary">VeriVizyon</span>
                            </h2>
                            <p className="lead fs-16">VeriVizyon, Grafik Tasarım Hizmetini işinize, isteğinize uyarlanmış
                                halde titizlikle sunar. Grafik Tasarım Hizmeti, projenizin alanı, hedef kitlesi ve proje
                                sahibinin istekleri üzerine yapılmalıdır. Grafik Tasarım, işletmenizin dijital dünyadaki
                                prestiji için çok önemlidir. </p>
                        </div>
                        <div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">İhtiyaçlarınıza özel kişiselleştirilmiş Grafik Tasarım
                                        Hizmeti</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">Güvenli ve sürdürülebilir Grafik Tasarım Hizmeti</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">Gereksiz kod yapısından arındırılan kod yapısı sayesinde
                                        stabil ve hızlı Grafik Tasarım Hizmeti</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">İş süreçlerinizle uyumlu, çalışma sisteminize entegre
                                        yazılımlarla desteklenmiş Grafik Tasarım Hizmeti</p>
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

export default Grafiksection1;