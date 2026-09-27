import React, { useRef } from 'react';
import './contactsection1.css';
import emailjs from '@emailjs/browser';
const Contactsection2 = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2qnroqh',
            'template_8m5z3sf',
            form.current, 'mq82s6UlnAX84gUrO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <section className="pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div>
                            <div>
                                <h2><span className="font-w-4 d-block">Arayışta olduğunuz</span> hizmet veya destek için
                                </h2>
                                <p className="lead">Bizimle İletişime Geçin.</p>
                            </div>
                            <form  ref={form} id="contact-form" className="row" onSubmit={sendEmail} method="POST">
                                <div className="messages w-100 p-2"></div>
                                <div className="form-group col-md-6">
                                    <input id="form_name" type="text" name="User_name" className="form-control"
                                           placeholder="Ad Soyad" required="" data-error="Adınızı Doğru Giriniz"/>
                                        <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group col-md-6">
                                    <input id="form_email" type="email" name="user_email" className="form-control"
                                           placeholder="E-Mail" required="" data-error="Bu E-Mail Adresi Kullanılıyor."/>
                                        <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group col-md-6">
                                    <input id="form_phone" type="tel" name="user_phone" className="form-control"
                                           placeholder="Telefon" required="" data-error="Telefon Giriniz"/>
                                        <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group col-md-6">
                                    <input id="form_subject" type="tel" name="subject" className="form-control"
                                           placeholder="Konu" required="" data-error="Konu Giriniz"/>
                                        <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group col-md-12">
                                    <textarea id="form_message" name="message" className="form-control h-auto"
                                              placeholder="Mesajınız" rows="4" required=""
                                              data-error="Mesajınızı Giriniz"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="col mt-4">
                                    <button type="submit" value="Send" className="btn btn-primary">Formu Gönder</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                        <div className="map h-100">
                            <iframe className="w-100 h-100 border-0"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95929.60701789873!2d36.243658593724135!3d41.29145227442555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408877e97607d663%3A0xb939cc265fdeb52!2sSamsun!5e0!3m2!1str!2str!4v1663332566779!5m2!1str!2str"
                                    width="600" height="450" style={{border:0}} allowFullScreen=""
                                    loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contactsection2;