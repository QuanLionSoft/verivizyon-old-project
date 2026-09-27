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
                            <h2 className="mb-4">Web TasarÄ±m Hizmeti <span className="text-primary">VeriVizyon</span></h2>
                            <p className="lead fs-16">VeriVizyon, web tasarÄ±m hizmetini projenize uyarlanmÄ±ÅŸ halde
                                titizlikle sunar. Web tasarÄ±m, projenizin alanÄ±, hedef kitlesi ve proje sahibinin
                                istekleri Ã¼zerine yapÄ±lmalÄ±dÄ±r. Bir web sitesi, iÅŸletmenizin dijital olarak dÃ¼nyaya
                                aÃ§Ä±lmasÄ± iÃ§in Ã§ok Ã¶nemlidir. </p>
                        </div>
                        <div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">Ä°htiyaÃ§larÄ±nÄ±za Ã¶zel kiÅŸiselleÅŸtirilmiÅŸ web tasarÄ±m
                                        projeleri</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: 'black'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">GÃ¼venli ve sÃ¼rdÃ¼rÃ¼lebilir web tasarÄ±m hizmeti</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}> </span>
                                    </div>
                                    <p className="mb-0 fs-14">Gereksiz kod yapÄ±sÄ±ndan arÄ±ndÄ±rÄ±lan kod yapÄ±sÄ± sayesinde
                                        stabil ve hÄ±zlÄ± web tasarÄ±m projeleri</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#285daa'}}>
    </span>
                                    </div>
                                    <p className="mb-0 fs-14">Ä°ÅŸ sÃ¼reÃ§lerinizle uyumlu, Ã§alÄ±ÅŸma sisteminize entegre
                                        yazÄ±lÄ±mlarla desteklenmiÅŸ web projeleri</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <div className="d-flex align-items-start">
                                    <div className="me-3"><span className="list-dot"
                                                                style={{backgroundColor: '#000000'}}>
    </span>
                                    </div>
                                    <p className="mb-0 fs-14">GÃ¼venlik iÃ§in Web Sitenizin SSL sertifikasÄ± Ã¼cretsiz
                                        saÄŸlanmaktadÄ±r</p>
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