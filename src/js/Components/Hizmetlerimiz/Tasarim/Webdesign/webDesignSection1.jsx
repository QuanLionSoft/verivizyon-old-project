import 'react';
import '../../../../../css/Components/Hizmetlerimiz/Reklam/GoogleAds/section1-ads.css';
import Buttonsection from "../../../button/Buttonsection";
const WebDesignSection1 = () => {
    return (
        <section className="hizmet_detay_section1 pb-0 pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-5 order-md-1 order-2">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/verivizyon-hizmetler/tasarim/web-tasarim-hizmeti.svg?updatedAt=1715447549104" alt="Image"
                             className="img-fluid px-md-4"/>
                    </div>
                    <div className="col-12 col-lg-7 order-md-2 order-1 px-md-4">
                        <div>
                            <h2 className="mb-4">Web Tasarım Hizmeti <span className="text-primary">VeriVizyon</span></h2>
                            <p className="lead fs-16">VeriVizyon, web tasarım hizmetini projenize uyarlanmış halde
                                titizlikle sunar. Web tasarım, projenizin alanı, hedef kitlesi ve proje sahibinin
                                istekleri üzerine yapılmalıdır. Bir web sitesi, işletmenizin dijital olarak dünyaya
                                açılması için çok önemlidir. </p>
                        </div>
                        <div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">İhtiyaçlarınıza özel kişiselleştirilmiş web tasarım
                                        projeleri</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: 'black'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">Güvenli ve sürdürülebilir web tasarım hizmeti</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">Gereksiz kod yapısından arındırılan kod yapısı sayesinde
                                        stabil ve hızlı web tasarım projeleri</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}>
    </span>
                                    </div>
                                    <p className="mb-0 fs-14">İş süreçlerinizle uyumlu, çalışma sisteminize entegre
                                        yazılÄ±mlarla desteklenmiş web projeleri</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#000000'}}>
    </span>
                                    </div>
                                    <p className="mb-0 fs-14">Güvenlik için Web Sitenizin SSL sertifikasÄ± ücretsiz
                                        sağlanmaktadÄ±r</p>
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

export default WebDesignSection1;