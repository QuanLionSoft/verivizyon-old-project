import React, {useState} from 'react';
import './refsectionn.css';
import './refsect.sass';


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
        text: "Veri Vizyon ekibi olarak, Onlinehirdavat.com'da SEO uzmanı olarak görev aldık. Bu görev kapsamında, Onlinehirdavat.com'un arama motoru optimizasyonunu geliştirmek için çeşitli stratejiler uyguladık. Aynı zamanda, web sitesindeki yazılım ihtiyaçlarını karşılamak için gerekli çalışmaları yaptık ve sunucu bakımı ile güncellemelerini gerçekleştirdik.\n" +
            "\n" +
            "Bu görevlerimiz, Onlinehirdavat.com'un dijital performansını artırmaya ve kullanıcı deneyimini iyileştirmeye önemli katkılarda bulundu. Ayrıca belirtmek gerekirse, Onlinehirdavat.com Eryildiz.net şirketinin ikinci şubesi olarak hizmet vermektedir.",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/online-hirdavat-logo.png?updatedAt=1716206972151"
    },
    {
        id: "item02",
        title: "Noan Teknoloji",
        text: "Noan Teknoloji Anonim Şirketi'nde, E-Ticaret ve E-İhracat Danışmanı ve E-İhracat Proje Yöneticisi olarak görev aldık. Bu süre zarfında şu görevleri üstlendik:\n" +
            "\n" +
            "Noan Teknoloji Web Sitesi Geliştirme Projesi: Şirketin web sitesinin geliştirilmesi projesinde etkin bir rol oynadık. Bu proje, şirketin çevrimiçi varlığını güçlendirerek kullanıcı deneyimini önemli ölçüde iyileştirmeyi amaçladı.\n" +
            "\n" +
            "Web Sitesi Altyapısı Oluşturma ve Pazarlama: Noan Teknoloji bünyesindeki şirketlere güçlü bir web sitesi altyapısı oluşturma ve pazarlama konularında danışmanlık sağladık.\n" +
            "\n" +
            "Veri Vizyon ekibi olarak, Konsorsiyum Projesi ve Toplantı Yönetimi: Yeni şirketlerle konsorsiyum projesi adı altında ortak bir projede toplantı yönetimi gerçekleştirdik ve toplantı sonuçlarına göre eksik web işlemlerini tamamladık.\n" +
            "\n" +
            "Stajer Yazılımcı ve Personel Eğitimi: Ayrıca, stajer yazılımcıların ve personelin eğitiminden sorumlu olduk ve konsorsiyum projesinin Teknopark'a sunumunu hazırladık.\n" +
            "\n" +
            "Bu görevler, Noan Teknoloji'nin dijital stratejisinin güçlenmesine ve şirketin başarı hedeflerine ulaşmasına önemli katkılar sağladı.\n",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/Noan-teknoloji-874x1024.png?updatedAt=1716206970854"
    },
    ,
    {
        id: "item03",
        title: "Yorulmaz Palet",
        text: "Yorulmaz Ahşap Palet Şirketi için web sitesi geliştirme rolünü üstlendik. Bu süreçte, Yorulmaz Palet için bir adet Kurumsal web sitesi geliştirdik ve kullanıma sunduk. Ayrıca, hosting ve domain hizmetlerini sağlayarak kurumsal web sitesi alt yapısını oluşturduk. İlgili web sitesine www.yorulmazltd.com adresinden erişilebilir.",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/Yorulmaz-palet-1024x1024.png?updatedAt=1716206974330",
        link: "http://yorulmazltd.com/"
    }
    ,
    {
        id: "item04",
        title: "Letra Medical",
        text: "Letramedical.com web sitesi için görsel hizmetler sağladık ve site içindeki tüm görsellerin oluşturulması ve düzenlenmesinden sorumluyduk. Bu süreçte, görsel tasarım alanında kendimizi geliştirdik.",
        image: "https://ik.imagekit.io/lgf1wyqnvg/reference-image-revized/Untitled-1.jpg?updatedAt=1716745600140",
        link: "https://letramedical.com/"
    }
    ,
    {
        id: "item05",
        title: "Köksal Kardeşler",
        text: "Köksal Kardeşler Firması ile e-ihracat ve e-ticaret konularında işbirliği gerçekleştirdik. Bu işbirliği kapsamında, firmanın dijital varlığını güçlendirmeye yönelik çalışmalar yürüttük. Ayrıca, firmanın yapısını daha görünür hale getirmek amacıyla çeşitli stratejiler geliştirdik. Bu süreçte düzenlenen toplantının editlenmiş versiyonuna şu linkten ulaşabilirsiniz: ",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/Koksal-kardesler.png?updatedAt=1716206970445",
        link: "https://www.koksal.com.tr/k/koksal.html"
    },
    {
        id: "item06",
        title: "İşbul.net",
        text: "\n" +
            "İşbul.net, dijital varlığını güçlendirmek amacıyla SEO analizi desteği almak üzere Veri Vizyon'dan danışmanlık hizmeti almıştır. Bu işbirliği, firma için özelleştirilmiş stratejilerin geliştirilmesini ve uygulanmasını kapsamıştır. Böylece İşbulnet'in çevrimiçi görünürlüğü ve etkinliği artmıştır.\n",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/Isbulnet.png?updatedAt=1716206970450",
        link: "https://isbul.net/"

    },
    {
        id: "item07",
        title: "Keskinoglu Saat",
        text: "Keskinoglu Saat, pazaryeri entegrasyonu ve satışları arttırmaya yönelik çalışmalar, SEO stratejileri ve ürün analizi konularında Veri Vizyon'dan danışmanlık hizmeti almıştır. Bu işbirliği, uzun vadeli olmasa da, belirli bir dönem için firma ile çalışarak, dijital pazarlama stratejileri konusunda destek sağladık.\n",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/keskinoglu-saat.png?updatedAt=1716206970738",
        link: "http://keskinoglusaat.com/"
    },
    {
        id: "item08",
        title: "Global Yapı Market",
        text: "Global Yapı Markette SEO uzmanı olarak görev aldık ve aynı zamanda şu görevleri üstlendik:\n" +
            "\n" +
            "SEO Çalışmaları: Web sitesinin arama motoru optimizasyonunu geliştirmek için çeşitli stratejiler uyguladık.\n" +
            "\n" +
            "Yazılım İşleri: Web sitesindeki yazılım ihtiyaçlarını karşılamak için ön yüz geliştirme, backend optimizasyonu gibi çeşitli çalışmaları gerçekleştirdik. Ayrıca, yazıcı tamiri ve bilgisayar formatlama gibi teknik konularda da destek sağladık.\n",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/Global-yapi-market-logo-Global.png?updatedAt=1716206970727",
        link: "https://www.globalyapimarket.com/"
    },
    {
        id: "item09",
        title: "DatesCollection",
        text: "\n" +
            "DatesCollection, çanta satışı yapan bir şahıs firması olarak, Veri Vizyon'dan e-ticaret, sosyal medya pazarlama, hashtag ve anahtar kelime optimizasyonu, Instagram reklam yönetimi, Facebook Business yönetimi, içerik pazarlama gibi konularda danışmanlık almıştır. İşbirliğimiz sayesinde, firmanın çanta satışları ilk aylardan itibaren önemli ölçüde artış göstermiştir. Anlaşma kapsamında, firma ile birlikte çalışırken her zaman güler yüzlü ve işbirliğine açık bir yaklaşım sergiledik.",
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