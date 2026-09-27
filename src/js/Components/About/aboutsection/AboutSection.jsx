import  'react';

const AboutSection = () => {
    return (
        <section className="pt-4 position-relative overflow-hidden">
            <div className="container hakkimizda">
                <div className="row">
                    <div className="col-lg-5">
                        <h2 className="mb-4">Biz Kimiz?</h2>
                        <p>VeriVizyon, yeni başlayanlar veya yerleşik işletmeler için yeni gelir akışları yaratmaya yardımcı
                            akıllı web uygulamaları, web siteleri ve mobil uygulamalar tasarlar. Sağlık hizmeti
                            sağlayıcılarından, gayrimenkule onlarca sektördeki şirketler için yazılım çözümleri
                            sunuyoruz.</p>
                    </div>
                    <div className="col-lg-7">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/verivizyon/hakkimizda.svg?updatedAt=1714912149434" className="img-fluid" alt=""/>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-6">
                        <h3 className="mb-4">Misyonumuz</h3>
                        <p>Yürütmüş olduğumuz projelerimiz ile dijital dünyaya yeni bir bakış açısı kazandırmak için
                            çalışmalarımıza devam etmekteyiz. dijital ortamda sunduğumuz bu projelerimizde, hem
                            müşterilerimizin hem de kullanıcıların kaliteli bir hizmete erişmelerini hedefliyoruz.</p>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="mb-4">Vizyonumuz</h3>
                        <p>Çok da uzak olmayan gelecekte dijital ortamın çok daha büyük önem kazanacağına inanıyoruz.
                            Müşterilerimizin taleplerini üstün danışmanlık ve yazılım geliştirme hizmetlerimizle
                            buluşturup, dijital çağa uygun hale getiriyoruz.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;