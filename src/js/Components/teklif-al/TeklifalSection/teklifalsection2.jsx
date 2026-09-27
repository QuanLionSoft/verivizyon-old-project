import  { useRef, useState } from 'react';
import '../../../../css/Components/teklif-al/TeklifalSection/teklifx.css';
import '../../../../css/Components/teklif-al/TeklifalSection/teklifal.css';
import emailjs from "@emailjs/browser";

const Teklifalsection2 = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2qnroqh', 'template_o880pp2', form.current, 'mq82s6UlnAX84gUrO')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
            }, (error) => {
                console.error('Email sending error:', error.text);
            });
    };

    const [formNumber, setFormNumber] = useState(0);
    const [username, setUsername] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userWebsite, setUserWebsite] = useState('');
    const [userSector, setUserSector] = useState('');
    const [message, setMessage] = useState('');
    const [shownName, setShownName] = useState('');

    const steps = [
        "Personal Information",
        "Education",
        "Work Experience",
        "User Photo"
    ];

    const stepDescriptions = [
        "Enter your personal information to get closer to companies.",
        "Get to know better by adding your diploma, certificate, and education life.",
        "Help companies get to know you better by telling them about your past experiences.",
        "Add your profile picture and let companies find you fast."
    ];

    const validateForm = () => {
        const activeInputs = document.querySelectorAll(".main.active input");
        let valid = true;
        activeInputs.forEach(input => {
            if (!input.value) {
                input.classList.add('warning');
                valid = false;
            } else {
                input.classList.remove('warning');
            }
        });
        return valid;
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setFormNumber(prevFormNumber => prevFormNumber + 1);
        }
    };

    const handleBack = (e) => {
        e.preventDefault();
        setFormNumber(prevFormNumber => prevFormNumber - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShownName(username);
        setFormNumber(prevFormNumber => prevFormNumber + 1);
        sendEmail(e);
    };

    return (
        <div className="container">
            <div className="card">
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <div className="left-side">
                        <div className="left-heading">
                            <h3 style={{fontSize: 30, color: "white"}}>VeriVizyon</h3>
                        </div>
                        <div className="steps-content">
                            <h3 style={{color: "white"}}>Adım <span className="step-number">{formNumber + 1}</span></h3>
                            {stepDescriptions.map((desc, index) => (
                                <p key={index} className={`step-number-content ${index === formNumber ? 'active' : 'd-none'}`}>{desc}</p>
                            ))}
                        </div>
                        <ul className="progress-bar">
                            {steps.map((step, index) => (
                                <li key={index} className={index <= formNumber ? 'active' : ''}>{step}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="right-side">
                        <div className={`main ${formNumber === 0 ? 'active' : ''}`}>
                            <div className="text">
                                <h2>Your Personal Information</h2>
                                <p>Enter your personal information to get closer to companies.</p>
                            </div>
                            <div className="input-text">
                                <div className="input-div">
                                    <input type="text" name="user_name" required value={username} onChange={(e) => setUsername(e.target.value)} />
                                    <span>{!username && "Ad Soyad giriniz"}</span>
                                </div>
                                <div className="input-div">
                                    <input type="text" name="company_name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                                    <span>{!companyName && "Firma Adını giriniz"}</span>
                                </div>
                            </div>
                            <div className="input-text">
                                <div className="input-div">
                                    <input type="email" name="user_email" required value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                                    <span>{!userEmail && "E-Posta Adresinizi Giriniz"}</span>
                                </div>
                                <div className="input-div">
                                    <input type="number" name="user_phone" required value={userPhone} onChange={(e) => setUserPhone(e.target.value)} />
                                    <span>{!userPhone && "Telefon Numaranızı giriniz"}</span>
                                </div>
                            </div>
                            <div className="input-text">
                                <div className="input-div">
                                    <input type="text" name="user_website" value={userWebsite} onChange={(e) => setUserWebsite(e.target.value)} />
                                    <span>{!userWebsite && "sitenin url yazınız."}</span>
                                </div>
                                <div className="input-div">
                                    <input type="text" name="user_sector" value={userSector} onChange={(e) => setUserSector(e.target.value)} />
                                    <span style={{fontSize: 12}}>{!userSector && "Hangi Sektör Çalıştığınızı Belirtiniz"}</span>
                                </div>
                            </div>
                            <div className="buttons" style={{margin: 30}}>
                                <button className="next_button btn btn-primary" onClick={handleNext}>Next Step</button>
                            </div>
                        </div>


                        <div className={`main ${formNumber === 1 ? 'active' : ''}`}>
                            <h4 className="text">İlgilendiğiniz dijital pazarlama hizmetleri</h4>
                            <div className="form-container" style={{textAlign: "left"}}>
                                <div className="checkbox-container">
                                    <input type="checkbox" name="hizmet[]" value="web-yazılım" id="web-yazılım" />
                                    <label className="checkbox" htmlFor="web-yazılım">Web Yazılım hizmeti</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" name="hizmet[]" value="e-commerce-software" id="e-commerce-software" />
                                    <label className="checkbox" htmlFor="e-commerce-software">E-Ticaret Yazılımı</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" name="hizmet[]" value="grafic-design" id="grafic-design" />
                                    <label className="checkbox" htmlFor="grafic-design">Grafik Tasarım</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" name="hizmet[]" value="seo" id="Seo" />
                                    <label className="checkbox" htmlFor="Seo">Arama Motoru Optimizasyonu (SEO)</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" name="hizmet[]" value="CRM/ERP" id="Crm" />
                                    <label className="checkbox" htmlFor="Crm">CRM/ERP Sistemleri</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" name="hizmet[]" value="google-yonetim" id="google-yonetim" />
                                    <label className="checkbox" htmlFor="google-yonetim">Google Reklam Yönetimi</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" name="hizmet[]" value="web-design" id="web-design" />
                                    <label className="checkbox" htmlFor="web-design">Web Tasarım Hizmeti</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" name="hizmet[]" value="Landing-design" id="Landing-design" />
                                    <label className="checkbox" htmlFor="Landing-design">Landing Tasarım Hizmeti</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" name="hizmet[]" value="Google-Ads" id="Google-Ads" />
                                    <label className="checkbox" htmlFor="Google-Ads">Google Ads Hizmeti</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" name="hizmet[]" value="Sosyal-medya-reklam" id="Sosyal-medya-reklam" />
                                    <label className="checkbox" htmlFor="Sosyal-medya-reklam">Sosyal Medya Reklamları</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" name="hizmet[]" value="Web-yonetim" id="Web-yonetim" />
                                    <label className="checkbox" htmlFor="Web-yonetim">Website Yönetimi</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" name="hizmet[]" value="Sosyal-medya-yonetim" id="Sosyal-medya-yonetim" />
                                    <label className="checkbox" htmlFor="Sosyal-medya-yonetim">Sosyal Medya Yönetimi</label>
                                </div>
                            </div>
                            <div className="buttons button_space" style={{margin: 30}}>
                                <button className="btn btn-primary" onClick={handleBack}>Back</button>
                                <button className="btn btn-primary" onClick={handleNext}>Next Step</button>
                            </div>
                        </div>
                        <div className={`main ${formNumber === 2 ? 'active' : ''}`}>
                            <h4 className="text">İlgilendiğiniz dijital pazarlama ve satış araçları</h4>
                            <div className="form-container" style={{textAlign: "left"}}>
                                <div className="checkbox-container">
                                    <input type="checkbox" name="satÄ±s[]" value="Toplu-E-Posta-Gönderim" id="Toplu-E-Posta-Gönderim" />
                                    <label className="checkbox" htmlFor="Toplu-E-Posta-Gönderim">Toplu E-Posta Gönderim Platformu</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" name="satÄ±s[]" value="B2B2C-Bayi-Paneli" id="B2B2C-Bayi-Paneli" />
                                    <label className="checkbox" htmlFor="B2B2C-Bayi-Paneli">B2B2C-Bayi-Paneli</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" name="satÄ±s[]" value="Teklif-Formu-Paneli" id="Teklif-Formu-Paneli" />
                                    <label className="checkbox" htmlFor="Teklif-Formu-Paneli">teklif al formu paneli</label>
                                </div>
                            </div>
                            <div className="buttons button_space" style={{margin: 30}}>
                                <button className="btn btn-primary" onClick={handleBack}>Back</button>
                                <button className="btn btn-primary" onClick={handleNext}>Next Step</button>
                            </div>
                        </div>
                        <div className={`main ${formNumber === 3 ? 'active' : ''}`}>
                            <div className="form-group">
                                <textarea required placeholder="Değinmek istediğiniz konu hakkÄ±nda bilgi veriniz" name="message" style={{height: 150}}></textarea>
                                <label htmlFor="textarea" className="control-label"></label><i className="bar"></i>
                            </div>
                            <div className="buttons button_space" style={{margin: 30}}>
                                <button className="btn btn-primary" onClick={handleBack}>Back</button>
                                <button type="submit" value="Send" onClick={handleSubmit} className="btn btn-primary" style={{width: 300, fontSize: 20}}><span>Gönder</span></button>
                            </div>
                        </div>
                        <div className={`main ${formNumber === 4 ? 'active' : ''}`}>
                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                            <div className="text congrats">
                                <h2>Tebrikler!</h2>
                                <p>Thanks Mr./Mrs. <span className="shown_name">{shownName}</span> your information has been submitted successfully. We will contact you soon.</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Teklifalsection2;
