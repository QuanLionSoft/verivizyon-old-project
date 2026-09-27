import  {useRef} from 'react';
import '../../../../css/Components/teklif-al/TeklifalSection/teklifal.css';
import emailjs from "@emailjs/browser";
const TeklifalSection1 = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2qnroqh',
            'template_o880pp2',
            form.current, 'mq82s6UlnAX84gUrO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };









    return (
        <div className="container-form container">
            <form  ref={form} onSubmit={sendEmail} >
                <h1>Dijital Ortamda GÃ¶rÃ¼nÃ¼r Olmaya BaÅŸlayÄ±n</h1>
                
                    <p>Size Ã¶zel dijital pazarlama Ã§Ã¶zÃ¼mlerimizle ve kiÅŸiselleÅŸtirilmiÅŸ Ã¶zel fiyat tekliflerimizle iÅŸletmenizin tÃ¼m potansiyelini ortaya Ã§Ä±karmaya baÅŸlayÄ±n.</p>
                    Uzman ekibimizle markanÄ±zÄ±n Ã§evrimiÃ§i/dijital varlÄ±ÄŸÄ±nÄ± geliÅŸtirin ve bÃ¼yÃ¼meyi destekleyin.
                <div className="row"><div style={{fontSize:18,paddingTop:15,textAlign:"left"}} className="col-md-6">Ad Soyad*</div>
                    <div style={{fontSize:18,paddingTop:15,textAlign:"left"}} className="col-md-6">Firma </div>
                </div>
<div className="row">

                <div className="form-group col-md-6">
                    <input type="text" name="user_name" placeholder="Ad Soyad giriniz" required="required"/>
                    <label htmlFor="input" className="control-label"></label><i className="bar"></i>
                </div>
                <div className="form-group col-md-6">
                    <input type="text" name="company_name" placeholder="Firma AdÄ±nÄ± giriniz " required="required"/>
                    <label htmlFor="input" className="control-label"></label><i className="bar"></i>
                </div>
        </div>
                <div className="row"><div style={{fontSize:18,paddingTop:15,textAlign:"left"}} className="col-md-6">E-posta Adresi*</div>
                    <div style={{fontSize:18,paddingTop:15,textAlign:"left"}} className="col-md-6">Telefon NumarasÄ±</div>
                </div>
                <div className="row">

                    <div className="form-group col-md-6">
                        <input type="email" name="user_email" placeholder="E-Posta Adresinizi Giriniz" required="required"/>
                        <label htmlFor="input" className="control-label"> </label><i className="bar"></i>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="number" name="user_phone" placeholder="Telefon NumaranÄ±zÄ± giriniz" required="required"/>
                        <label htmlFor="input" className="control-label"></label><i className="bar"></i>
                    </div>
                </div>
                <div className="row"><div style={{fontSize:18,paddingTop:15,textAlign:"left"}} className="col-md-6">Website</div>

                </div>
                <div className="row">
                <div className="form-group col-md-12">
                    <input type="text" placeholder="URL" name="user_website" />
                    <label htmlFor="input"  className="control-label"></label><i className="bar"></i>
                </div>
                    <div className="row"><div style={{fontSize:18,paddingTop:15,textAlign:"left"}} className="col-md-6">SektÃ¶r</div>

                    </div>
                <div className="form-group col-md-12">
                    <input type="text" name="user_sector" placeholder="Hangi SektÃ¶r Ã‡alÄ±ÅŸtÄ±ÄŸÄ±nÄ±zÄ± Belirtiniz" />
                    <label htmlFor="input" className="control-label"></label><i className="bar"></i>
                </div>

            </div>

                <div className="form-container" style={{textAlign:"left"}}>
                    <h4>Ä°lgilendiÄŸiniz dijital pazarlama hizmetleri</h4>
                    <div className="checkbox-container">
                        <input type="checkbox" name="hizmet[]" value="web-yazÄ±lÄ±m" id="web-yazÄ±lÄ±m"/>
                        <label className="checkbox" htmlFor="web-yazÄ±lÄ±m">Web YazÄ±lÄ±m hizmeti</label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" name="hizmet[]" value="e-commerce-software"  id="e-commerce-software"/>
                        <label className="checkbox" htmlFor="e-commerce-software">E-Ticaret  YazÄ±lÄ±mÄ±</label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" name="hizmet[]" value="grafic-design"  id="grafic-design"/>
                        <label className="checkbox" htmlFor="grafic-design"> Grafik TasarÄ±m</label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" name="hizmet[]" value="seo" id="Seo"/>
                        <label className="checkbox" htmlFor="Seo">Arama Motoru Optimizasyonu (SEO)</label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" name="hizmet[]" value="CRM/ERP" id="Crm"/>
                        <label className="checkbox" htmlFor="Crm">CRM/ERP Sistemleri
                        </label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" name="hizmet[]"  value="google-yonetim" id="google-yonetim"/>
                        <label className="checkbox" htmlFor="google-yonetim">Google Reklam YÃ¶netimi</label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" name="hizmet[]" value="web-design"  id="web-design"/>
                        <label className="checkbox" htmlFor="web-design"> Web TasarÄ±m Hizmeti</label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" name="hizmet[]"  value="Landing-design" id="Landing-design"/>
                        <label className="checkbox" htmlFor="Landing-design">Landing TasarÄ±m Hizmeti</label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" name="hizmet[]" value="Google-Ads"  id="Google-Ads"/>
                        <label className="checkbox" htmlFor="Google-Ads">Google Ads Hizmeti</label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" name="hizmet[]" value="Sosyal-medya-reklam"  id="Sosyal-medya-reklam"/>
                        <label className="checkbox" htmlFor="Sosyal-medya-reklam">Sosyal Medya ReklamlarÄ±</label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" name="hizmet[]"  value="Web-yonetim" id="Web-yonetim"/>
                        <label className="checkbox"   htmlFor="Web-yonetim">Website YÃ¶netimi</label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" name="hizmet[]" value="Sosyal-medya-yonetim" id="Sosyal-medya-yonetim"/>
                        <label className="checkbox"   htmlFor="Sosyal-medya-yonetim">Sosyal Medya YÃ¶netimi</label>
                    </div>
                    <h4>Ä°lgilendiÄŸiniz dijital pazarlama ve satÄ±ÅŸ araÃ§larÄ±</h4>
                    <div className="checkbox-container">
                        <input type="checkbox" name="satÄ±s[]" value="Toplu-E-Posta-GÃ¶nderim" id="Toplu-E-Posta-GÃ¶nderim"/>
                        <label className="checkbox" htmlFor="Toplu-E-Posta-GÃ¶nderim">Toplu E-Posta GÃ¶nderim Platformu</label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" name="satÄ±s[]" value="B2B2C-Bayi-Paneli"  id="B2B2C-Bayi-Paneli"/>
                        <label className="checkbox" htmlFor="B2B2C-Bayi-Paneli">B2B2C-Bayi-Paneli</label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" name="satÄ±s[]" value="Teklif-Formu-Paneli"  id="Teklif-Formu-Paneli"/>
                        <label className="checkbox" htmlFor="Teklif-Formu-Paneli"> Grafik TasarÄ±m</label>
                    </div>





                </div>
                <div className="row"><div style={{fontSize:18,paddingTop:15,textAlign:"left"}} className="col-md-6">NasÄ±l yardÄ±mcÄ± olabiliriz ?</div>

                </div>
                <div className="form-group">
                    <textarea required="required" placeholder="DeÄŸinmek istediÄŸiniz konu hakkÄ±nda bilgi veriniz" name="message" style={{height:150}}></textarea>
                    <label htmlFor="textarea" className="control-label"></label><i className="bar"></i>
                </div>
                <div className="button-container">
                    <button type="submit" value="Send" className="btn btn-primary" style={{width:300,fontSize:20}}><span>GÃ¶nder</span></button>
                </div>


            </form>


        </div>
    );
};

export default TeklifalSection1;