import  {useState} from 'react';
import '../../../../css/Components/Ref/RefSection/refsectionn.css';


const images = [
    "https://ik.imagekit.io/lgf1wyqnvg/referanslar/eryildiz-logosu-1024x1024.png?updatedAt=1716206971128",
    "https://ik.imagekit.io/lgf1wyqnvg/referanslar/online-hirdavat-logo.png?updatedAt=1716206972151",
    "https://ik.imagekit.io/lgf1wyqnvg/reference-image-revized/noan.jpg?updatedAt=1716745600117",
    "https://ik.imagekit.io/lgf1wyqnvg/reference-image-revized/yorulmaz-palet.jpg?updatedAt=1716745599982",
    "https://ik.imagekit.io/lgf1wyqnvg/reference-image-revized/Untitled-1.jpg?updatedAt=1716745600140",
    "https://ik.imagekit.io/lgf1wyqnvg/reference-image-revized/koksal-kardes.jpg?updatedAt=1716745600370",
    "https://ik.imagekit.io/lgf1wyqnvg/reference-image-revized/isbul-images.jpg?updatedAt=1716745600247",
    "https://ik.imagekit.io/lgf1wyqnvg/reference-image-revized/Saat.jpg?updatedAt=1716745600197",
    "https://ik.imagekit.io/lgf1wyqnvg/reference-image-revized/global.jpg?updatedAt=1716745600065",
    "https://ik.imagekit.io/lgf1wyqnvg/reference-image-revized/dale.jpg?updatedAt=1716745600226",

];

const descriptions = [
    {
        id: "item00",
        title: "Eryıldız.net",
        text: "Veri Vizyon ekibi olarak, Eryildiz.net için SEO uzmanı olarak görev aldık ve ayrıca aşağıdaki görevleri üstlendik:\n" +
            "\n" +
            "SEO Stratejileri: Web sitesinin arama motoru optimizasyonunu geliştirmek için çeşitli stratejiler uyguladık.\n" +
            "\n" +
            "Yazılım İşleri: Web sitesindeki yazılım ihtiyaçlarını karşılamak için gerekli çalışmaları yaptık.\n" +
            "\n" +
            "Sunucu Bakımı: Web sitesinin sorunsuz çalışması için sunucu bakımı ve güncellemelerini gerçekleştirdik.\n" +
            "\n" +
            "Bu görevler, Eryildiz.net'in dijital performansını artırmak ve kullanıcı deneyimini iyileştirmek için önemli katkılarda bulundu.",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/eryildiz-logosu-1024x1024.png?updatedAt=1716206971128"
    },
    {
        id: "item01",
        title: "Online Hırdavat",
        text: "Veri Vizyon ekibi olarak, Onlinehirdavat.com'da SEO uzmanı olarak görev aldık. Bu görev kapsamında, Onlinehirdavat.com'un arama motoru optimizasyonunu geliştirmek için çeşitli stratejiler uyguladık. Aynı zamanda, web sitesindeki yazılım ihtiyaçlarını karşılamak için gerekli çalışmaları yaptık ve sunucu bakÄ±mÄ± ile güncellemelerini gerçekleştirdik.\n" +
            "\n" +
            "Bu görevlerimiz, Onlinehirdavat.com'un dijital performansÄ±nÄ± artÄ±rmaya ve kullanÄ±cÄ± deneyimini iyileştirmeye önemli katkÄ±larda bulundu. AyrÄ±ca belirtmek gerekirse, Onlinehirdavat.com Eryildiz.net şirketinin ikinci şubesi olarak hizmet vermektedir.",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/online-hirdavat-logo.png?updatedAt=1716206972151"
    },
    {
        id: "item02",
        title: "Noan Teknoloji",
        text: "Noan Teknoloji Anonim Åirketi'nde, E-Ticaret ve E-İhracat DanÄ±şmanÄ± ve E-İhracat Proje Yöneticisi olarak görev aldÄ±k. Bu süre zarfÄ±nda şu görevleri üstlendik:\n" +
            "\n" +
            "Noan Teknoloji Web Sitesi Geliştirme Projesi: Åirketin web sitesinin geliştirilmesi projesinde etkin bir rol oynadÄ±k. Bu proje, şirketin çevrimiçi varlÄ±ğÄ±nÄ± güçlendirerek kullanÄ±cÄ± deneyimini önemli ölçüde iyileştirmeyi amaçladÄ±.\n" +
            "\n" +
            "Web Sitesi AltyapÄ±sÄ± Oluşturma ve Pazarlama: Noan Teknoloji bünyesindeki şirketlere güçlü bir web sitesi altyapÄ±sÄ± oluşturma ve pazarlama konularÄ±nda danÄ±şmanlÄ±k sağladÄ±k.\n" +
            "\n" +
            "Veri Vizyon ekibi olarak, Konsorsiyum Projesi ve ToplantÄ± Yönetimi: Yeni şirketlerle konsorsiyum projesi adÄ± altÄ±nda ortak bir projede toplantÄ± yönetimi gerçekleştirdik ve toplantÄ± sonuçlarÄ±na göre eksik web işlemlerini tamamladÄ±k.\n" +
            "\n" +
            "Stajer YazÄ±lÄ±mcÄ± ve Personel Eğitimi: AyrÄ±ca, stajer yazÄ±lÄ±mcÄ±larÄ±n ve personelin eğitiminden sorumlu olduk ve konsorsiyum projesinin Teknopark'a sunumunu hazÄ±rladÄ±k.\n" +
            "\n" +
            "Bu görevler, Noan Teknoloji'nin dijital stratejisinin güçlenmesine ve şirketin başarÄ± hedeflerine ulaşmasÄ±na önemli katkÄ±lar sağladÄ±.\n",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/Noan-teknoloji-874x1024.png?updatedAt=1716206970854"
    },
    ,
    {
        id: "item03",
        title: "Yorulmaz Palet",
        text: "Yorulmaz Ahşap Palet Åirketi için web sitesi geliştirme rolünü üstlendik. Bu süreçte, Yorulmaz Palet için bir adet Kurumsal web sitesi geliştirdik ve kullanÄ±ma sunduk. AyrÄ±ca, hosting ve domain hizmetlerini sağlayarak kurumsal web sitesi alt yapÄ±sÄ±nÄ± oluşturduk. İlgili web sitesine www.yorulmazltd.com adresinden erişilebilir.",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/Yorulmaz-palet-1024x1024.png?updatedAt=1716206974330",
        link: "http://yorulmazltd.com/"
    }
    ,
    {
        id: "item04",
        title: "Letra Medical",
        text: "Letramedical.com web sitesi için görsel hizmetler sağladÄ±k ve site içindeki tüm görsellerin oluşturulmasÄ± ve düzenlenmesinden sorumluyduk. Bu süreçte, görsel tasarÄ±m alanÄ±nda kendimizi geliştirdik.",
        image: "https://ik.imagekit.io/lgf1wyqnvg/reference-image-revized/Untitled-1.jpg?updatedAt=1716745600140",
        link: "https://letramedical.com/"
    }
    ,
    {
        id: "item05",
        title: "Köksal Kardeşler",
        text: "Köksal Kardeşler FirmasÄ± ile e-ihracat ve e-ticaret konularÄ±nda işbirliği gerçekleştirdik. Bu işbirliği kapsamÄ±nda, firmanÄ±n dijital varlÄ±ğÄ±nÄ± güçlendirmeye yönelik çalÄ±şmalar yürüttük. AyrÄ±ca, firmanÄ±n yapÄ±sÄ±nÄ± daha görünür hale getirmek amacÄ±yla çeşitli stratejiler geliştirdik. Bu süreçte düzenlenen toplantÄ±nÄ±n editlenmiÅŸ versiyonuna ÅŸu linkten ulaÅŸabilirsiniz: ",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/Koksal-kardesler.png?updatedAt=1716206970445",
        link: "https://www.koksal.com.tr/k/koksal.html"
    },
    {
        id: "item06",
        title: "İÅŸbul.net",
        text: "\n" +
            "İÅŸbul.net, dijital varlÄ±ğÄ±nÄ± güçlendirmek amacÄ±yla SEO analizi desteği almak üzere Veri Vizyon'dan danÄ±ÅŸmanlÄ±k hizmeti almÄ±ÅŸtÄ±r. Bu iÅŸbirliği, firma için özelleÅŸtirilmiÅŸ stratejilerin geliÅŸtirilmesini ve uygulanmasÄ±nÄ± kapsamÄ±ÅŸtÄ±r. Böylece İÅŸbulnet'in çevrimiçi görünürlüğü ve etkinliği artmÄ±ÅŸtÄ±r.\n",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/Isbulnet.png?updatedAt=1716206970450",
        link: "https://isbul.net/"

    },
    {
        id: "item07",
        title: "Keskinoglu Saat",
        text: "Keskinoglu Saat, pazaryeri entegrasyonu ve satÄ±ÅŸlarÄ± arttÄ±rmaya yönelik çalÄ±ÅŸmalar, SEO stratejileri ve ürün analizi konularÄ±nda Veri Vizyon'dan danÄ±ÅŸmanlÄ±k hizmeti almÄ±ÅŸtÄ±r. Bu iÅŸbirliği, uzun vadeli olmasa da, belirli bir dönem için firma ile çalÄ±ÅŸarak, dijital pazarlama stratejileri konusunda destek sağladÄ±k.\n",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/keskinoglu-saat.png?updatedAt=1716206970738",
        link: "http://keskinoglusaat.com/"
    },
    {
        id: "item08",
        title: "Global YapÄ± Market",
        text: "Global YapÄ± Markette SEO uzmanÄ± olarak görev aldÄ±k ve aynÄ± zamanda ÅŸu görevleri üstlendik:\n" +
            "\n" +
            "SEO ÇalÄ±ÅŸmalarÄ±: Web sitesinin arama motoru optimizasyonunu geliÅŸtirmek için çeÅŸitli stratejiler uyguladÄ±k.\n" +
            "\n" +
            "YazÄ±lÄ±m İÅŸleri: Web sitesindeki yazÄ±lÄ±m ihtiyaçlarÄ±nÄ± karÅŸÄ±lamak için ön yüz geliÅŸtirme, backend optimizasyonu gibi çeÅŸitli çalÄ±ÅŸmalarÄ± gerçekleÅŸtirdik. AyrÄ±ca, yazÄ±cÄ± tamiri ve bilgisayar formatlama gibi teknik konularda da destek sağladÄ±k.\n",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/Global-yapi-market-logo-Global.png?updatedAt=1716206970727",
        link: "https://www.globalyapimarket.com/"
    },
    {
        id: "item09",
        title: "DatesCollection",
        text: "\n" +
            "DatesCollection, çanta satÄ±ÅŸÄ± yapan bir ÅŸahÄ±s firmasÄ± olarak, Veri Vizyon'dan e-ticaret, sosyal medya pazarlama, hashtag ve anahtar kelime optimizasyonu, Instagram reklam yönetimi, Facebook Business yönetimi, içerik pazarlama gibi konularda danÄ±ÅŸmanlÄ±k almÄ±ÅŸtÄ±r. İÅŸbirliğimiz sayesinde, firmanÄ±n çanta satÄ±ÅŸlarÄ± ilk aylardan itibaren önemli ölçüde artÄ±ÅŸ göstermiÅŸtir. AnlaÅŸma kapsamÄ±nda, firma ile birlikte çalÄ±ÅŸÄ±rken her zaman güler yüzlü ve iÅŸbirliğine açÄ±k bir yaklaÅŸÄ±m sergiledik.",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/Dates-collection-1.png?updatedAt=1716206970435",
link: "https://www.instagram.com/datescollection/"
    },
    {
        id: "item010",
        title: "Item 10",
        text: "Lorem ipsum dolor sit amdsfdset, consectetur adipiscing elit. Vivamus quis libero erat. Integer ac purus est. Proin erat mi, pulvinar ut magna eget, consectetur auctor turpis.dsfsd",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/Teknopark-samsun-1024x406.png?updatedAt=1716206973418",
        link: "https://www.samsunteknopark.com/"
    },




];




const RefSection = () => {
    const [openItem, setOpenItem] = useState(null);

    const handleItemClick = (id) => {
        setOpenItem(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCloseClick = () => {
        setOpenItem(null);
    };
    return (
    <div>

        <div>
            <div id="top"></div>
            <section className="gallery">
                <div className="rowdsd">
                    <ul className={openItem ? "item_open" : ""}>
                        <a href="#" className="close" onClick={handleCloseClick}></a>
                        {images.map((src, index) => (
                            <li key={index}>
                                <a href={`#item0${index }`} onClick={() => handleItemClick(`item0${index }`)}>
                                    <img src={src} id="imea" alt="" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {descriptions.map((desc, index) => (
                    <div id={desc.id} className={`port ${openItem === desc.id ? "item_open" : ""}`} key={index}>
                        <div className="rowdsd">
                            <div className="description">
                                <h1>{desc.title}</h1>
                                <p>{desc.text}</p>
                                <a href={desc.link}>   <button className="btn btn-primary">Sayfaya gidin</button> </a>
                            </div>
                            <img  src={desc.image} className="imeas" alt="" />
                        </div>
                    </div>
                ))}
            </section>
        </div>



</div>
    );
};

export default RefSection;