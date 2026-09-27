import  'react';
import Buttonsection from "../../../button/Buttonsection";

const Seosection1 = () => {
    return (
        <section className="hizmet_detay_section1 pb-0 pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-5 mb-6 mb-lg-0">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/verivizyon-hizmetler/reklam/seo-hizmeti-detay.svg?updatedAt=1715447549154" alt="Image" className="img-fluid px-md-4"/>
                    </div>
                    <div className="col-12 col-lg-7 px-md-4">
                        <div>
                            <h2 className="mb-4">SEO Hizmeti <span className="text-primary">VeriVizyon</span></h2>
                            <p className="lead fs-16">VeriVizyon, SEO Hizmetini projenize uyarlanmış halde titizlikle sunar.
                                SEO Hizmeti, projenizin alanı, hedef kitlesi ve proje sahibinin istekleri üzerine
                                yapılmalıdır. SEO Hizmeti, işletmenizin dijital olarak dünyaya açılması için çok
                                önemlidir. </p>
                        </div>
                        <div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">İhtiyaçlarınıza özel kişiselleştirilmiş SEO Hizmeti</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">Güvenli ve sürdürülebilir SEO Hizmeti</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">Gereksiz kod yapısından arındırılan kod yapısı sayesinde
                                        stabil ve hızlı SEO Hizmeti</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">İş süreçlerinizle uyumlu, çalışma sisteminize entegre
                                        yazılımlarla desteklenmiş SEO Hizmeti</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor:'#285daa'}}> </span>
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

export default Seosection1;