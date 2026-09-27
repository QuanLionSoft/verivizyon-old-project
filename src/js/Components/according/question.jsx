import 'react';
import { Link } from 'react-router-dom';
import '../../../css/Components/according/ques.css';

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
                                diye sorulan bir soruya vereceÄŸimiz cevap: Kurumsal Web
                                Siteleri, KiÅŸisel Web Siteleri, E-Ticaret Siteleri, Blog, Haber, Forum, Portal Siteleri,
                                Mobil Uygulamalar gibi birÃ§ok alanlar bir Ã§ok amacÄ± yerine getirmek amaÃ§lÄ±
                                kullanÄ±lmaktadÄ±r. Web yazÄ±lÄ±mlar her tÃ¼rlÃ¼ teknoloji alanÄ±nda yaygÄ±n olarak
                                kullanÄ±lmakta ve Ã§Ã¶zÃ¼mler saÄŸlamaktadÄ±r.
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="accordion-button btn btn-outline-primary accordion-header position-relative"
                                id="heading2" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2"
                                aria-expanded="false" aria-controls="collapse2">
                            Web Site NasÄ±l YapÄ±lÄ±r?
                        </button>
                        <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>
                                        Projenin Belirlenmesi.
                                    </li>
                                    <li>
                                        Kurumsal Kimlik Ã‡alÄ±ÅŸmasÄ±
                                    </li>
                                    <li>
                                        Grafik TasarÄ±m Ã‡alÄ±ÅŸmasÄ±
                                    </li>
                                    <li>
                                        Web SayfalarÄ±nÄ±n KodlamasÄ±
                                    </li>
                                    <li>
                                        Ä°Ã§erik YÃ¶netim Sistemi Entegrasyonu.
                                    </li>
                                    <li>
                                        Web Sitesinin Test SÃ¼reci.
                                    </li>
                                    <li>
                                        Web Sitesinin YayÄ±nlanmasÄ±
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="accordion-button btn btn-outline-primary accordion-header position-relative"
                                id="heading3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3"
                                aria-expanded="false" aria-controls="collapse3">
                            Web Site FiyatlarÄ± Ne Kadar?
                        </button>
                        <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Web Site fiyatlarÄ± projenizin Ã¶zelliklerine gÃ¶re farklÄ±lÄ±klar gÃ¶sterir. <strong>Web
                                    Site fiyatlarÄ±mÄ±z</strong>Ä± <Link to="/iletisim">Bize
                                    UlaÅŸÄ±n</Link> formunu doldurarak kolaylÄ±kla Ã¶ÄŸrenebilirsiniz.</p>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="accordion-button btn btn-outline-primary accordion-header position-relative"
                                id="heading4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4"
                                aria-expanded="false" aria-controls="collapse4">
                            Web Site Ã–rnekleri Nelerdir?
                        </button>
                        <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Verivizyon olarak yapmÄ±ÅŸ olduÄŸumuz projeleri <Link
                                    to="/referanslarimiz">ReferanslarÄ±mÄ±z</Link> sayfamÄ±zdan ziyaret
                                    edebilir ve <strong>bilgi alabilirsiniz.</strong></p>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="accordion-button btn btn-outline-primary accordion-header position-relative"
                                id="heading5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5"
                                aria-expanded="false" aria-controls="collapse5">
                            Web Site Projelerinde OlmasÄ± Gereken Ã–zellikler Nelerdir?
                        </button>
                        <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>
                                        Responsive(Mobil Uyumlu), Ã–zgÃ¼n ve Modern Åablon TasarÄ±mÄ±
                                    </li>
                                    <li>
                                        En basit site iÃ§in HTML5, CSS3, PHP, JS YazÄ±lÄ±m Dili
                                    </li>
                                    <li>
                                        DÃ¼nya StandartlarÄ±nda(Web 2.0) Kodlama YapÄ±sÄ±
                                    </li>
                                    <li>
                                        SEO Uyumlu Kodlama AltyapÄ±sÄ± ve Site Ä°Ã§i SEO Entegrasyonu
                                    </li>
                                    <li>
                                        GÃ¼Ã§lendirilmiÅŸ GÃ¼venlik AltyapÄ±sÄ±
                                    </li>
                                    <li>
                                        BaÄŸÄ±msÄ±z Sunucu/Hosting Kurulumu
                                    </li>
                                    <li>
                                        Kolay KullanÄ±labilir ve GeniÅŸ KapsamlÄ± Ä°Ã§erik YÃ¶netim Paneli(CMS)
                                    </li>
                                    <li>
                                        CMS Panel ile YÃ¶netilebilir 100% Dinamik Ä°Ã§erik AltyapÄ±sÄ±
                                    </li>
                                    <li>
                                        Modern ve Dinamik Ä°Ã§erik SayfalarÄ±
                                    </li>
                                    <li>
                                        Google AraÃ§larÄ± ve Sosyal Medya Entegrasyonu
                                    </li>
                                    <li>
                                        Site Ä°Ã§i Metin ve GÃ¶rsel Ä°Ã§erik GeliÅŸtirme Hizmeti
                                    </li>
                                    <li>
                                        Google ve Yandex Local Business Optimizasyonu
                                    </li>
                                    <li>
                                        Web DanÄ±ÅŸmanlÄ±k Hizmeti
                                    </li>
                                    <li>
                                        7/24 Teknik Destek
                                    </li>
                                </ul>

                                <p><strong>Verivizyon</strong> olarak diÄŸer web site firmalarÄ±nÄ±n aksine yaptÄ±ÄŸÄ±mÄ±z her web
                                    site projesinde bu Ã¶zellikleri standart olarak sunuyoruz ve bu verdiÄŸimiz hizmetler
                                    ile gurur duyuyoruz. AyrÄ±ca bu Ã¶zelliklerin her web tasarÄ±m projesinde standart
                                    olmasÄ± gerektiÄŸini ÅŸiddetle savunuyoruz.</p>
                            </div>
                        </div>
                    </li>

                </ul>

                <ul className="accordionUl d-flex flex-column w-100">

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="accordion-button btn btn-outline-primary accordion-header position-relative"
                                id="heading7" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7"
                                aria-expanded="false" aria-controls="collapse7">
                            Web Site FirmasÄ± NasÄ±l SeÃ§ilir?
                        </button>
                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>GÃ¼nÃ¼mÃ¼zde hemen hemen her tÃ¼rden iÅŸletmenin bir web sitesine <strong>sahip olmasÄ±
                                    gerekiyor</strong>. YalnÄ±zca fiziksel satÄ±ÅŸ yapan ÅŸirketlerin bile kurumsal web
                                    sitelerinin bulunmasÄ± <strong>bÃ¼yÃ¼k Ã¶nem taÅŸÄ±maktadÄ±r</strong>. Web siteniz
                                    aÃ§Ä±ldÄ±ÄŸÄ±nda, iÅŸletmenizi gÃ¼zel ve doÄŸru yansÄ±ttÄ±ÄŸÄ±ndan emin olabilmeniz iÃ§in,
                                    profesyonel bir web tasarÄ±m firmasÄ± ile Ã§alÄ±ÅŸmanÄ±z gerekir. Web sitenizin birÃ§ok
                                    alandaki performansÄ±, iÅŸletmenizin <strong>sanal kariyeri iÃ§in</strong> bÃ¼yÃ¼k Ã¶nem
                                    taÅŸÄ±maktadÄ±r. Bu yÃ¼zden yanlÄ±ÅŸ web tasarÄ±m firmasÄ±nÄ± seÃ§mek gibi bir hata yapmaktan
                                    kaÃ§Ä±nmalÄ±sÄ±nÄ±z.</p>
                                <p>GÃ¼Ã§lÃ¼ bir sanal varlÄ±k geliÅŸtirebilmek iÃ§in, gÃ¼venilir, deneyimli ve <strong>profesyonel
                                    bir ÅŸirket</strong> ile Ã§alÄ±ÅŸmanÄ±z gerekecek. Ä°ÅŸletmeler bu konuya bazen gerekli
                                    Ã¶zeni gÃ¶stermezler ve sadece bÃ¼yÃ¼k gÃ¶rÃ¼nen, Ã§ok ucuz fiyatlara iÅŸ yaptÄ±ÄŸÄ±nÄ± ileri
                                    sÃ¼ren ÅŸirketlerle Ã§alÄ±ÅŸÄ±rlar, bu da <strong>iÅŸlevselliÄŸini kaybetmiÅŸ</strong> bir
                                    web sitesine neden olur.</p>

                                Bir web site firmasÄ± seÃ§erken Dikkat edilmesi gereken kriterler ÅŸunlardÄ±r:
                                <ul>
                                    <li>
                                        1. Ucuz Web TasarÄ±m YaptÄ±ÄŸÄ±nÄ± Ä°ddia Eden Åirketlerden Uzak Durmak
                                    </li>
                                    <li>
                                        2. Ã‡ok Fazla Ãœcret Ã–dememek
                                    </li>
                                    <li>
                                        3. Makul Fiyatlara Mobil Uyumlu Ã–zgÃ¼n TasarÄ±m ve SEO Dostu Kodlama AltyapÄ±sÄ±
                                        Alabiliyor Olmak
                                    </li>
                                    <li>
                                        4. Web TasarÄ±m FirmasÄ±nÄ± Yeterince AraÅŸtÄ±rmak
                                    </li>
                                    <li>
                                        5. Kendisini AlanÄ±nda Uzman Olarak TanÄ±tan FirmalarÄ± Ä°yi Analiz Etmek
                                    </li>
                                    <li>
                                        6. Ä°htiyaÃ§larÄ±nÄ±zÄ± Tam Olarak Belirlemek
                                    </li>
                                    <li>
                                        7. BakÄ±m, OnarÄ±m ve Destek HakkÄ±nda AnlaÅŸma Yapmak
                                    </li>
                                    <li>
                                        8. YÃ¼ksek YÄ±llÄ±k BarÄ±ndÄ±rma ve Yenileme Ãœcretlerinden KaÃ§Ä±nmak
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
                                <p>Kurumsal web sitesi; firma, kurum, kuruluÅŸlar hakkÄ±nda bilgiler iÃ§eren, iÅŸletme ya da
                                    kurumun faaliyetlerini de gÃ¶rebileceÄŸimiz web siteleri kurumsal web sitesi olarak
                                    tanÄ±mlanabilir. GÃ¼nÃ¼mÃ¼z iÅŸ dÃ¼nyasÄ±nda Ã§ok Ã¶nemli bir yere sahip olan kurumsal web
                                    sitelerini kitap kapaÄŸÄ±na benzetebilirsiniz.</p>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="accordion-button btn btn-outline-primary accordion-header position-relative"
                                id="heading10" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10"
                                aria-expanded="false" aria-controls="collapse10">
                            Kurumsal Web Sitesi FiyatlarÄ± Ne Kadar?
                        </button>
                        <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Kurumsal Web Sitesi fiyatlarÄ± projenizin Ã¶zelliklerine gÃ¶re farklÄ±lÄ±klar gÃ¶sterir.
                                    Kurumsal Web Sitesi fiyatlarÄ±mÄ±zÄ± <Link to="/iletisim">Bize
                                        UlaÅŸÄ±n</Link> formunu doldurarak kolaylÄ±kla Ã¶ÄŸrenebilirsiniz.</p>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="accordion-button btn btn-outline-primary accordion-header position-relative"
                                id="heading11" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11"
                                aria-expanded="false" aria-controls="collapse11">
                            KiÅŸisel Web Sitesi Nedir?
                        </button>
                        <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>
                                        Kim olduÄŸunuzu gÃ¶stermek iÃ§in size tam bir Ã¶zgÃ¼rlÃ¼k saÄŸlar. Siteniz iÃ§in
                                        seÃ§tiÄŸiniz renkler ve gÃ¶rseller bile bunun bir parÃ§asÄ±dÄ±r.
                                    </li>
                                    <li>
                                        Kariyeriniz konusunda ciddi olduÄŸunuzu ve yukarÄ± doÄŸru tÄ±rmanmak iÃ§in zaman ve
                                        emek harcayabileceÄŸinizi gÃ¶sterir.
                                    </li>
                                    <li>
                                        Ä°ÅŸ geÃ§miÅŸiniz, eÄŸitiminiz, baÅŸarÄ±larÄ±nÄ±z ve hobilerinize dair gÃ¼ncel bir arÅŸiv
                                        olarak hizmet eder.
                                    </li>
                                    <li>
                                        MÃ¼ÅŸteri tavsiyeleri, birÃ§ok resim, proje dokÃ¼manÄ± ve videoyu iÃ§inde
                                        barÄ±ndÄ±rabilir.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="accordion-item w-100 px-2 my-2">
                        <button className="accordion-button btn btn-outline-primary accordion-header position-relative"
                                id="heading12" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12"
                                aria-expanded="false" aria-controls="collapse12">
                            KiÅŸisel Web Sitesi FiyatlarÄ± Ne Kadar?
                        </button>
                        <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>KiÅŸisel Web sitesi fiyatlarÄ± projenizin Ã¶zelliklerine gÃ¶re farklÄ±lÄ±klar gÃ¶sterir. Web
                                    site fiyatlarÄ±mÄ±zÄ± <Link to="/iletisim">Bize UlaÅŸÄ±n</Link> formunu
                                    doldurarak kolaylÄ±kla Ã¶ÄŸrenebilirsiniz.</p>
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