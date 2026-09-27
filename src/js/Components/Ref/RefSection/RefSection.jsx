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
        title: "EryÄ±ldÄ±z.net",
        text: "Veri Vizyon ekibi olarak, Eryildiz.net iÃ§in SEO uzmanÄ± olarak gÃ¶rev aldÄ±k ve ayrÄ±ca aÅŸaÄŸÄ±daki gÃ¶revleri Ã¼stlendik:\n" +
            "\n" +
            "SEO Stratejileri: Web sitesinin arama motoru optimizasyonunu geliÅŸtirmek iÃ§in Ã§eÅŸitli stratejiler uyguladÄ±k.\n" +
            "\n" +
            "YazÄ±lÄ±m Ä°ÅŸleri: Web sitesindeki yazÄ±lÄ±m ihtiyaÃ§larÄ±nÄ± karÅŸÄ±lamak iÃ§in gerekli Ã§alÄ±ÅŸmalarÄ± yaptÄ±k.\n" +
            "\n" +
            "Sunucu BakÄ±mÄ±: Web sitesinin sorunsuz Ã§alÄ±ÅŸmasÄ± iÃ§in sunucu bakÄ±mÄ± ve gÃ¼ncellemelerini gerÃ§ekleÅŸtirdik.\n" +
            "\n" +
            "Bu gÃ¶revler, Eryildiz.net'in dijital performansÄ±nÄ± artÄ±rmak ve kullanÄ±cÄ± deneyimini iyileÅŸtirmek iÃ§in Ã¶nemli katkÄ±larda bulundu.",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/eryildiz-logosu-1024x1024.png?updatedAt=1716206971128"
    },
    {
        id: "item01",
        title: "Online HÄ±rdavat",
        text: "Veri Vizyon ekibi olarak, Onlinehirdavat.com'da SEO uzmanÄ± olarak gÃ¶rev aldÄ±k. Bu gÃ¶rev kapsamÄ±nda, Onlinehirdavat.com'un arama motoru optimizasyonunu geliÅŸtirmek iÃ§in Ã§eÅŸitli stratejiler uyguladÄ±k. AynÄ± zamanda, web sitesindeki yazÄ±lÄ±m ihtiyaÃ§larÄ±nÄ± karÅŸÄ±lamak iÃ§in gerekli Ã§alÄ±ÅŸmalarÄ± yaptÄ±k ve sunucu bakÄ±mÄ± ile gÃ¼ncellemelerini gerÃ§ekleÅŸtirdik.\n" +
            "\n" +
            "Bu gÃ¶revlerimiz, Onlinehirdavat.com'un dijital performansÄ±nÄ± artÄ±rmaya ve kullanÄ±cÄ± deneyimini iyileÅŸtirmeye Ã¶nemli katkÄ±larda bulundu. AyrÄ±ca belirtmek gerekirse, Onlinehirdavat.com Eryildiz.net ÅŸirketinin ikinci ÅŸubesi olarak hizmet vermektedir.",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/online-hirdavat-logo.png?updatedAt=1716206972151"
    },
    {
        id: "item02",
        title: "Noan Teknoloji",
        text: "Noan Teknoloji Anonim Åirketi'nde, E-Ticaret ve E-Ä°hracat DanÄ±ÅŸmanÄ± ve E-Ä°hracat Proje YÃ¶neticisi olarak gÃ¶rev aldÄ±k. Bu sÃ¼re zarfÄ±nda ÅŸu gÃ¶revleri Ã¼stlendik:\n" +
            "\n" +
            "Noan Teknoloji Web Sitesi GeliÅŸtirme Projesi: Åirketin web sitesinin geliÅŸtirilmesi projesinde etkin bir rol oynadÄ±k. Bu proje, ÅŸirketin Ã§evrimiÃ§i varlÄ±ÄŸÄ±nÄ± gÃ¼Ã§lendirerek kullanÄ±cÄ± deneyimini Ã¶nemli Ã¶lÃ§Ã¼de iyileÅŸtirmeyi amaÃ§ladÄ±.\n" +
            "\n" +
            "Web Sitesi AltyapÄ±sÄ± OluÅŸturma ve Pazarlama: Noan Teknoloji bÃ¼nyesindeki ÅŸirketlere gÃ¼Ã§lÃ¼ bir web sitesi altyapÄ±sÄ± oluÅŸturma ve pazarlama konularÄ±nda danÄ±ÅŸmanlÄ±k saÄŸladÄ±k.\n" +
            "\n" +
            "Veri Vizyon ekibi olarak, Konsorsiyum Projesi ve ToplantÄ± YÃ¶netimi: Yeni ÅŸirketlerle konsorsiyum projesi adÄ± altÄ±nda ortak bir projede toplantÄ± yÃ¶netimi gerÃ§ekleÅŸtirdik ve toplantÄ± sonuÃ§larÄ±na gÃ¶re eksik web iÅŸlemlerini tamamladÄ±k.\n" +
            "\n" +
            "Stajer YazÄ±lÄ±mcÄ± ve Personel EÄŸitimi: AyrÄ±ca, stajer yazÄ±lÄ±mcÄ±larÄ±n ve personelin eÄŸitiminden sorumlu olduk ve konsorsiyum projesinin Teknopark'a sunumunu hazÄ±rladÄ±k.\n" +
            "\n" +
            "Bu gÃ¶revler, Noan Teknoloji'nin dijital stratejisinin gÃ¼Ã§lenmesine ve ÅŸirketin baÅŸarÄ± hedeflerine ulaÅŸmasÄ±na Ã¶nemli katkÄ±lar saÄŸladÄ±.\n",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/Noan-teknoloji-874x1024.png?updatedAt=1716206970854"
    },
    ,
    {
        id: "item03",
        title: "Yorulmaz Palet",
        text: "Yorulmaz AhÅŸap Palet Åirketi iÃ§in web sitesi geliÅŸtirme rolÃ¼nÃ¼ Ã¼stlendik. Bu sÃ¼reÃ§te, Yorulmaz Palet iÃ§in bir adet Kurumsal web sitesi geliÅŸtirdik ve kullanÄ±ma sunduk. AyrÄ±ca, hosting ve domain hizmetlerini saÄŸlayarak kurumsal web sitesi alt yapÄ±sÄ±nÄ± oluÅŸturduk. Ä°lgili web sitesine www.yorulmazltd.com adresinden eriÅŸilebilir.",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/Yorulmaz-palet-1024x1024.png?updatedAt=1716206974330",
        link: "http://yorulmazltd.com/"
    }
    ,
    {
        id: "item04",
        title: "Letra Medical",
        text: "Letramedical.com web sitesi iÃ§in gÃ¶rsel hizmetler saÄŸladÄ±k ve site iÃ§indeki tÃ¼m gÃ¶rsellerin oluÅŸturulmasÄ± ve dÃ¼zenlenmesinden sorumluyduk. Bu sÃ¼reÃ§te, gÃ¶rsel tasarÄ±m alanÄ±nda kendimizi geliÅŸtirdik.",
        image: "https://ik.imagekit.io/lgf1wyqnvg/reference-image-revized/Untitled-1.jpg?updatedAt=1716745600140",
        link: "https://letramedical.com/"
    }
    ,
    {
        id: "item05",
        title: "KÃ¶ksal KardeÅŸler",
        text: "KÃ¶ksal KardeÅŸler FirmasÄ± ile e-ihracat ve e-ticaret konularÄ±nda iÅŸbirliÄŸi gerÃ§ekleÅŸtirdik. Bu iÅŸbirliÄŸi kapsamÄ±nda, firmanÄ±n dijital varlÄ±ÄŸÄ±nÄ± gÃ¼Ã§lendirmeye yÃ¶nelik Ã§alÄ±ÅŸmalar yÃ¼rÃ¼ttÃ¼k. AyrÄ±ca, firmanÄ±n yapÄ±sÄ±nÄ± daha gÃ¶rÃ¼nÃ¼r hale getirmek amacÄ±yla Ã§eÅŸitli stratejiler geliÅŸtirdik. Bu sÃ¼reÃ§te dÃ¼zenlenen toplantÄ±nÄ±n editlenmiÅŸ versiyonuna ÅŸu linkten ulaÅŸabilirsiniz: ",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/Koksal-kardesler.png?updatedAt=1716206970445",
        link: "https://www.koksal.com.tr/k/koksal.html"
    },
    {
        id: "item06",
        title: "Ä°ÅŸbul.net",
        text: "\n" +
            "Ä°ÅŸbul.net, dijital varlÄ±ÄŸÄ±nÄ± gÃ¼Ã§lendirmek amacÄ±yla SEO analizi desteÄŸi almak Ã¼zere Veri Vizyon'dan danÄ±ÅŸmanlÄ±k hizmeti almÄ±ÅŸtÄ±r. Bu iÅŸbirliÄŸi, firma iÃ§in Ã¶zelleÅŸtirilmiÅŸ stratejilerin geliÅŸtirilmesini ve uygulanmasÄ±nÄ± kapsamÄ±ÅŸtÄ±r. BÃ¶ylece Ä°ÅŸbulnet'in Ã§evrimiÃ§i gÃ¶rÃ¼nÃ¼rlÃ¼ÄŸÃ¼ ve etkinliÄŸi artmÄ±ÅŸtÄ±r.\n",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/Isbulnet.png?updatedAt=1716206970450",
        link: "https://isbul.net/"

    },
    {
        id: "item07",
        title: "Keskinoglu Saat",
        text: "Keskinoglu Saat, pazaryeri entegrasyonu ve satÄ±ÅŸlarÄ± arttÄ±rmaya yÃ¶nelik Ã§alÄ±ÅŸmalar, SEO stratejileri ve Ã¼rÃ¼n analizi konularÄ±nda Veri Vizyon'dan danÄ±ÅŸmanlÄ±k hizmeti almÄ±ÅŸtÄ±r. Bu iÅŸbirliÄŸi, uzun vadeli olmasa da, belirli bir dÃ¶nem iÃ§in firma ile Ã§alÄ±ÅŸarak, dijital pazarlama stratejileri konusunda destek saÄŸladÄ±k.\n",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/keskinoglu-saat.png?updatedAt=1716206970738",
        link: "http://keskinoglusaat.com/"
    },
    {
        id: "item08",
        title: "Global YapÄ± Market",
        text: "Global YapÄ± Markette SEO uzmanÄ± olarak gÃ¶rev aldÄ±k ve aynÄ± zamanda ÅŸu gÃ¶revleri Ã¼stlendik:\n" +
            "\n" +
            "SEO Ã‡alÄ±ÅŸmalarÄ±: Web sitesinin arama motoru optimizasyonunu geliÅŸtirmek iÃ§in Ã§eÅŸitli stratejiler uyguladÄ±k.\n" +
            "\n" +
            "YazÄ±lÄ±m Ä°ÅŸleri: Web sitesindeki yazÄ±lÄ±m ihtiyaÃ§larÄ±nÄ± karÅŸÄ±lamak iÃ§in Ã¶n yÃ¼z geliÅŸtirme, backend optimizasyonu gibi Ã§eÅŸitli Ã§alÄ±ÅŸmalarÄ± gerÃ§ekleÅŸtirdik. AyrÄ±ca, yazÄ±cÄ± tamiri ve bilgisayar formatlama gibi teknik konularda da destek saÄŸladÄ±k.\n",
        image: "https://ik.imagekit.io/lgf1wyqnvg/referanslar/Global-yapi-market-logo-Global.png?updatedAt=1716206970727",
        link: "https://www.globalyapimarket.com/"
    },
    {
        id: "item09",
        title: "DatesCollection",
        text: "\n" +
            "DatesCollection, Ã§anta satÄ±ÅŸÄ± yapan bir ÅŸahÄ±s firmasÄ± olarak, Veri Vizyon'dan e-ticaret, sosyal medya pazarlama, hashtag ve anahtar kelime optimizasyonu, Instagram reklam yÃ¶netimi, Facebook Business yÃ¶netimi, iÃ§erik pazarlama gibi konularda danÄ±ÅŸmanlÄ±k almÄ±ÅŸtÄ±r. Ä°ÅŸbirliÄŸimiz sayesinde, firmanÄ±n Ã§anta satÄ±ÅŸlarÄ± ilk aylardan itibaren Ã¶nemli Ã¶lÃ§Ã¼de artÄ±ÅŸ gÃ¶stermiÅŸtir. AnlaÅŸma kapsamÄ±nda, firma ile birlikte Ã§alÄ±ÅŸÄ±rken her zaman gÃ¼ler yÃ¼zlÃ¼ ve iÅŸbirliÄŸine aÃ§Ä±k bir yaklaÅŸÄ±m sergiledik.",
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