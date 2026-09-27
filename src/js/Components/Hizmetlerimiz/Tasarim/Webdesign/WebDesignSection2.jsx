import  'react';
import {IoIosStar} from "react-icons/io";

const WebDesignSection2 = () => {
    return (
        <section className="section-bg my-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center">
                            <h3><span className="text-primary">VeriVizyon</span> ile profesyonel iş ortaklığını <span
                                className="text-primary">Google ADS Hizmeti</span> ile keşfedebilirsiniz.</h3>
                        </div>
                        <div className="text-left mt-5">
                            <div className="row align-items-center">
                                <div className="col-md-4 col-12 order-1 mb-md-0 mb-4">
                                    <div
                                        className="p-4 bg-white rounded shadow d-flex justify-content-between align-items-center">
                                        <div className="bg-primary p-2 d-inline-block rounded">
                                            <div className="f-icon-m text-white"><IoIosStar style={{width:60,fontSize:52}} />
                                            </div>
                                        </div>
                                        <h5 className="mt-4 mb-3 w-100 text-center">Kullanıcı Deneyimi</h5>
                                    </div>
                                </div>
                                <div className="col-md-8 col-12 order-2">
                                    <p>Kendi zevklerinizden ziyade ziyaretçilerinizin sizin sitenizden beklentisi ne
                                        olabilir? Girdikleri zaman neler yapmak isteyeceklerdir? Nelerle zaman
                                        geçireceklerdir? Bunların analizini iyi yapmalı ve bunlara odaklanmalısınız.
                                        Unutulmamalıdır ki buradaki web sitesi sizin için değil ziyaretçiler için
                                        tasarlanmaktadır. Bu noktada kullanıcı deneyimi en üst seviyede
                                        tutulmalıdır.</p>
                                </div>
                            </div>
                            <div className="row mt-md-5" style={{alignItems: 'center'}}>
                                <div className="col-md-8 col-12 order-md-1 order-2">
                                    <p>Web sitenizdeki SEO çalışmalarını planlamalı ve tasarımları, içerik girişlerini
                                        bu yönde yapmalısınız. Siteniz arama motorları tarafından sevilmediği takdirde
                                        hedeflediğiniz kitlelere ulaşamazsınız.</p>
                                </div>
                                <div className="col-md-4 col-12 order-md-2 order-1 mb-md-0 mb-4">
                                    <div
                                        className="p-4 bg-white rounded shadow d-flex justify-content-between align-items-center">
                                        <div className="bg-primary p-2 d-inline-block rounded">
                                            <div className="f-icon-m text-white"><IoIosStar style={{width:60,fontSize:52}} />
                                            </div>
                                        </div>
                                        <h5 className="mt-4 mb-3 fs-16 w-100 text-center">Arama Motoru
                                            Optimizasyonu</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebDesignSection2;