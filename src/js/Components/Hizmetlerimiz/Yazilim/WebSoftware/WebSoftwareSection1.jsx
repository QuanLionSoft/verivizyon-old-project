import  'react';
import Buttonsection from "../../../button/Buttonsection";

const WebSoftwareSection1 = () => {
    return (

        <section className="hizmet_detay_section1 pb-0 pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-5 order-md-1 order-2">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/verivizyon-hizmetler/yazilim/web-yazilim-hizmeti.svg?updatedAt=1715447549047" alt="Image" className="img-fluid px-md-4"/>
                    </div>
                    <div className="col-12 col-lg-7 order-md-2 order-1 px-md-4">
                        <div>
                            <h2 className="mb-4">Web Yazılım Hizmeti <span className="text-primary">VeriVizyon</span></h2>
                            <p className="lead fs-16">Kullanıcıların gözle görülür bir şekilde fark edemediği ancak arka
                                planda ilgili sistemin beyni konumundaki alan, web yazılımdır. Bu nedenle web yazılımın
                                tanımını yaparken web üzerinde yer alan ve belirli bir amaca hizmet eden yazılımsal
                                bütün içeriklere ‘web yazılım’ başlığı altında toplayabiliriz.</p>
                        </div>
                        <div>

                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">İhtiyaçlarınıza özel kişiselleştirilmiş web yazılım
                                        projeleri</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">Güvenli ve sürdürülebilir projeler</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">Gereksiz kod yapısından arındırılan kod yapısı sayesinde
                                        stabil ve hızlı web yazılım projeleri</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">İş süreçlerinizle uyumlu, çalışma sisteminize entegre
                                        yazılımlar</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">Güvenlik için SSL sertifikası ücretsiz sağlanmaktadır</p>
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

export default WebSoftwareSection1;