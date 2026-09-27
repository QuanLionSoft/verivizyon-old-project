import  'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
const Contactsection = () => {
    return (
        <section className="pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="d-flex align-items-center bg-white p-3 shadow-sm rounded">
                            <div className="me-3">
                                <div className="f-icon-s p-3 rounded"><FaMapLocationDot style={{fontSize:40}}  />
                                </div>
                            </div>
                            <div>
                                <h5 className="mb-1">Adres</h5>
                                <span className="text-black">Samsun/İlkadım</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3 mt-lg-0">
                        <div className="d-flex align-items-center bg-white p-3 shadow-sm rounded">
                            <div className="me-3">
                                <div className="f-icon-s p-3 rounded"><MdOutlineAttachEmail style={{fontSize:40}}  />
                                </div>
                            </div>
                            <div>
                                <h5 className="mb-1">E-Mail</h5>
                                <a className="btn-link" href="mailto:info@verivizyon.com">info@verivizyon.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3 mt-lg-0">
                        <div className="d-flex align-items-center bg-white p-3 shadow-sm rounded">
                            <div className="me-3">
                                <div className="f-icon-s p-3 rounded"><SiWhatsapp style={{fontSize:40}}  />
                                </div>
                            </div>
                            <div>
                                <h5 className="mb-1">WhatsApp</h5>
                                <a className="btn-link"
                                   href="https://api.whatsapp.com/send?phone=+905058395561&amp;text=Merhaba,&nbsp;hizmetleriniz&nbsp;hakkında&nbsp;bilgi&nbsp;almak&nbsp;istiyorum."
                                   target="_blank">Mesaj Yazın</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contactsection;