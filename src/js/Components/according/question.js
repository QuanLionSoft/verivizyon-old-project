import React from 'react';
import './ques.css';

const Question = () => {
    return (



    <section className="faq">

        <div className="container">
            <div className="row mb-4">
                <div className="col-12">
                    <h4 className="fs-40 font-weight-bold text-center fs-sm-28">Neler Soruluyor?</h4>
                </div>
            </div>
            <div className="accordion d-flex flex-md-row flex-column">
                <ul className="accordionUl d-flex flex-column w-100">

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="btn btn-outline-primary accordion-button accordion-header position-relative faqicon"
                                id="heading1" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1"
                                aria-expanded="false" aria-controls="collapse1">
                            Web Site Nedir?

                        </button>
                        <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">


                                <strong>Web Site nedir

                                </strong>
                                diye sorulan bir soruya vereceğimiz cevap: Kurumsal Web
                                Siteleri, Kişisel Web Siteleri, E-Ticaret Siteleri, Blog, Haber, Forum, Portal Siteleri,
                                Mobil Uygulamalar gibi birçok alanlar bir çok amacı yerine getirmek amaçlı
                                kullanılmaktadır. Web yazılımlar her türlü teknoloji alanında yaygın olarak
                                kullanılmakta ve çözümler sağlamaktadır.
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="accordion-button btn btn-outline-primary accordion-header position-relative"
                                id="heading2" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2"
                                aria-expanded="false" aria-controls="collapse2">
                            Web Site Nasıl Yapılır?
                        </button>
                        <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>
                                        Projenin Belirlenmesi.
                                    </li>
                                    <li>
                                        Kurumsal Kimlik Çalışması
                                    </li>
                                    <li>
                                        Grafik Tasarım Çalışması
                                    </li>
                                    <li>
                                        Web Sayfalarının Kodlaması
                                    </li>
                                    <li>
                                        İçerik Yönetim Sistemi Entegrasyonu.
                                    </li>
                                    <li>
                                        Web Sitesinin Test Süreci.
                                    </li>
                                    <li>
                                        Web Sitesinin Yayınlanması
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="accordion-button btn btn-outline-primary accordion-header position-relative"
                                id="heading3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3"
                                aria-expanded="false" aria-controls="collapse3">
                            Web Site Fiyatları Ne Kadar?
                        </button>
                        <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Web Site fiyatları projenizin özelliklerine göre farklılıklar gösterir. <strong>Web
                                    Site fiyatlarımız</strong>ı <a href="https://Verivizyon.com/iletisim">Bize
                                    Ulaşın</a> formunu doldurarak kolaylıkla öğrenebilirsiniz.</p>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="accordion-button btn btn-outline-primary accordion-header position-relative"
                                id="heading4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4"
                                aria-expanded="false" aria-controls="collapse4">
                            Web Site Örnekleri Nelerdir?
                        </button>
                        <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Verivizyon olarak yapmış olduğumuz projeleri <a
                                    href="https://Verivizyon.com/referanslarimiz">Referanslarımız</a> sayfamızdan ziyaret
                                    edebilir ve <strong>bilgi alabilirsiniz.</strong></p>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="accordion-button btn btn-outline-primary accordion-header position-relative"
                                id="heading5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5"
                                aria-expanded="false" aria-controls="collapse5">
                            Web Site Projelerinde Olması Gereken Özellikler Nelerdir?
                        </button>
                        <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>
                                        Responsive(Mobil Uyumlu), Özgün ve Modern Şablon Tasarımı
                                    </li>
                                    <li>
                                        En basit site için HTML5, CSS3, PHP, JS Yazılım Dili
                                    </li>
                                    <li>
                                        Dünya Standartlarında(Web 2.0) Kodlama Yapısı
                                    </li>
                                    <li>
                                        SEO Uyumlu Kodlama Altyapısı ve Site İçi SEO Entegrasyonu
                                    </li>
                                    <li>
                                        Güçlendirilmiş Güvenlik Altyapısı
                                    </li>
                                    <li>
                                        Bağımsız Sunucu/Hosting Kurulumu
                                    </li>
                                    <li>
                                        Kolay Kullanılabilir ve Geniş Kapsamlı İçerik Yönetim Paneli(CMS)
                                    </li>
                                    <li>
                                        CMS Panel ile Yönetilebilir 100% Dinamik İçerik Altyapısı
                                    </li>
                                    <li>
                                        Modern ve Dinamik İçerik Sayfaları
                                    </li>
                                    <li>
                                        Google Araçları ve Sosyal Medya Entegrasyonu
                                    </li>
                                    <li>
                                        Site İçi Metin ve Görsel İçerik Geliştirme Hizmeti
                                    </li>
                                    <li>
                                        Google ve Yandex Local Business Optimizasyonu
                                    </li>
                                    <li>
                                        Web Danışmanlık Hizmeti
                                    </li>
                                    <li>
                                        7/24 Teknik Destek
                                    </li>
                                </ul>

                                <p><strong>Verivizyon</strong> olarak diğer web site firmalarının aksine yaptığımız her web
                                    site projesinde bu özellikleri standart olarak sunuyoruz ve bu verdiğimiz hizmetler
                                    ile gurur duyuyoruz. Ayrıca bu özelliklerin her web tasarım projesinde standart
                                    olması gerektiğini şiddetle savunuyoruz.</p>
                            </div>
                        </div>
                    </li>

                </ul>

                <ul className="accordionUl d-flex flex-column w-100">

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="accordion-button btn btn-outline-primary accordion-header position-relative"
                                id="heading7" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7"
                                aria-expanded="false" aria-controls="collapse7">
                            Web Site Firması Nasıl Seçilir?
                        </button>
                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Günümüzde hemen hemen her türden işletmenin bir web sitesine <strong>sahip olması
                                    gerekiyor</strong>. Yalnızca fiziksel satış yapan şirketlerin bile kurumsal web
                                    sitelerinin bulunması <strong>büyük önem taşımaktadır</strong>. Web siteniz
                                    açıldığında, işletmenizi güzel ve doğru yansıttığından emin olabilmeniz için,
                                    profesyonel bir web tasarım firması ile çalışmanız gerekir. Web sitenizin birçok
                                    alandaki performansı, işletmenizin <strong>sanal kariyeri için</strong> büyük önem
                                    taşımaktadır. Bu yüzden yanlış web tasarım firmasını seçmek gibi bir hata yapmaktan
                                    kaçınmalısınız.</p>
                                <p>Güçlü bir sanal varlık geliştirebilmek için, güvenilir, deneyimli ve <strong>profesyonel
                                    bir şirket</strong> ile çalışmanız gerekecek. İşletmeler bu konuya bazen gerekli
                                    özeni göstermezler ve sadece büyük görünen, çok ucuz fiyatlara iş yaptığını ileri
                                    süren şirketlerle çalışırlar, bu da <strong>işlevselliğini kaybetmiş</strong> bir
                                    web sitesine neden olur.</p>

                                Bir web site firması seçerken Dikkat edilmesi gereken kriterler şunlardır:
                                <ul>
                                    <li>
                                        1. Ucuz Web Tasarım Yaptığını İddia Eden Şirketlerden Uzak Durmak
                                    </li>
                                    <li>
                                        2. Çok Fazla Ücret Ödememek
                                    </li>
                                    <li>
                                        3. Makul Fiyatlara Mobil Uyumlu Özgün Tasarım ve SEO Dostu Kodlama Altyapısı
                                        Alabiliyor Olmak
                                    </li>
                                    <li>
                                        4. Web Tasarım Firmasını Yeterince Araştırmak
                                    </li>
                                    <li>
                                        5. Kendisini Alanında Uzman Olarak Tanıtan Firmaları İyi Analiz Etmek
                                    </li>
                                    <li>
                                        6. İhtiyaçlarınızı Tam Olarak Belirlemek
                                    </li>
                                    <li>
                                        7. Bakım, Onarım ve Destek Hakkında Anlaşma Yapmak
                                    </li>
                                    <li>
                                        8. Yüksek Yıllık Barındırma ve Yenileme Ücretlerinden Kaçınmak
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="accordion-button btn btn-outline-primary accordion-header position-relative"
                                id="heading9" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9"
                                aria-expanded="false" aria-controls="collapse9">
                            Kurumsal Web Site Nedir?
                        </button>
                        <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Kurumsal web sitesi; firma, kurum, kuruluşlar hakkında bilgiler içeren, işletme ya da
                                    kurumun faaliyetlerini de görebileceğimiz web siteleri kurumsal web sitesi olarak
                                    tanımlanabilir. Günümüz iş dünyasında çok önemli bir yere sahip olan kurumsal web
                                    sitelerini kitap kapağına benzetebilirsiniz.</p>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="accordion-button btn btn-outline-primary accordion-header position-relative"
                                id="heading10" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10"
                                aria-expanded="false" aria-controls="collapse10">
                            Kurumsal Web Sitesi Fiyatları Ne Kadar?
                        </button>
                        <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Kurumsal Web Sitesi fiyatları projenizin özelliklerine göre farklılıklar gösterir.
                                    Kurumsal Web Sitesi fiyatlarımızı <a href="https://Verivizyon.com/iletisim">Bize
                                        Ulaşın</a> formunu doldurarak kolaylıkla öğrenebilirsiniz.</p>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="accordion-button btn btn-outline-primary accordion-header position-relative"
                                id="heading11" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11"
                                aria-expanded="false" aria-controls="collapse11">
                            Kişisel Web Sitesi Nedir?
                        </button>
                        <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>
                                        Kim olduğunuzu göstermek için size tam bir özgürlük sağlar. Siteniz için
                                        seçtiğiniz renkler ve görseller bile bunun bir parçasıdır.
                                    </li>
                                    <li>
                                        Kariyeriniz konusunda ciddi olduğunuzu ve yukarı doğru tırmanmak için zaman ve
                                        emek harcayabileceğinizi gösterir.
                                    </li>
                                    <li>
                                        İş geçmişiniz, eğitiminiz, başarılarınız ve hobilerinize dair güncel bir arşiv
                                        olarak hizmet eder.
                                    </li>
                                    <li>
                                        Müşteri tavsiyeleri, birçok resim, proje dokümanı ve videoyu içinde
                                        barındırabilir.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="accordion-button btn btn-outline-primary accordion-header position-relative"
                                id="heading12" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12"
                                aria-expanded="false" aria-controls="collapse12">
                            Kişisel Web Sitesi Fiyatları Ne Kadar?
                        </button>
                        <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Kişisel Web sitesi fiyatları projenizin özelliklerine göre farklılıklar gösterir. Web
                                    site fiyatlarımızı <a href="https://Verivizyon.com/iletisim">Bize Ulaşın</a> formunu
                                    doldurarak kolaylıkla öğrenebilirsiniz.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>


);
};

export default Question;