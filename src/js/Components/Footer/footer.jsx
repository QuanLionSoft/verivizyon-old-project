import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

import footlogo from "../../Picture/data/Verivizyonlogo-01.png";
import iyizcologo from "../../Picture/iyzicologos.png";
import Homepage from "../../Pages/Homepage";
import About from "../../Pages/About";
import Referation from "../../Pages/Referation";
import Contact from "../../Pages/Contact";
import MainYazilim from "../../Pages/hizmetlerimiz/yazilim/MainYazilim";
import MainTasarim from "../../Pages/hizmetlerimiz/Tasarim/MainTasarim";
import MainReklam from "../../Pages/hizmetlerimiz/Reklam/MainReklam";
import MainYonetim from "../../Pages/hizmetlerimiz/Yonetim/MainYonetim";
import Gizlilik from "../../Pages/Gizlilik";
import Teklifalpage from "../../Pages/teklifalpage";
// import ScrollTopButton from "../scrolltop/scroolsad";

const Footer = () => {
    return (

        <footer className="bg-dark pt-5 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5 col-xl-4 me-auto mb-5 mb-lg-0">
                        <Link className="footer-logo h2 text-primary mb-0 font-w-7" to="/" element={Homepage}>
                            <img src={footlogo}className="w-75" alt="" />
                        </Link>
                        <p className="my-3 text-light">Düşüncelerinizde tasarladığınız Web site yapısını Hızlı ve Akıcı
                            bir serüvene dönüştürüyoruz.</p>
                        <ul className="list-inline">
                            <li className="list-inline-item"><Link className="px-2 py-1 text-light fs-24" to="#"><i
                                className="la la-facebook"></i></Link>
                            </li>
                            <li className="list-inline-item"><Link className="px-2 py-1 text-light fs-24" to="#"><i
                                className="la la-twitter"></i></Link>
                            </li>
                            <li className="list-inline-item"><Link className="px-2 py-1 text-light fs-24" to="#"><i
                                className="la la-instagram"></i></Link>
                            </li>
                            <li className="list-inline-item"><Link className="px-2 py-1 text-light fs-24" to="#"><i
                                className="la la-youtube"></i></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-7">
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <h5 className="mb-4 text-white">Hızlı Erişim</h5>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-3"><Link className="list-group-item-action text-light"
                                                            to="/hakkimizda" element={About}>Hakkımızda</Link>
                                    </li>
                                    <li className="mb-3"><Link className="list-group-item-action text-light"
                                                            to="/referanslarimiz" element={Referation}>Projelerimiz</Link>
                                    </li>
                                    <li className="mb-3"><Link className="list-group-item-action text-light"
                                                            to="/iletisim" element={Contact}>Bize Ulaşın</Link>
                                    </li>
                                    <li>
                                        <Link to="/teklif-al" element={<Teklifalpage/>}>
                                        <button
                                            className="list-group-item-action text-light border-0 p-0 bg-transparent basvuruYapBtn">
                                            Teklif Al
                                        </button></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-4 mt-6 mt-sm-0">
                                <h5 className="mb-4 text-white">Hizmetlerimiz</h5>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-3"><Link className="list-group-item-action text-light"
                                                            to="/yazilim" element={MainYazilim}>Yazılım Hizmetleri</Link>
                                    </li>
                                    <li className="mb-3"><Link className="list-group-item-action text-light"
                                                            to="/tasarim" element={MainTasarim}>Tasarım Hizmetleri</Link>
                                    </li>
                                    <li className="mb-3"><Link className="list-group-item-action text-light"
                                                            to="/reklam" element={MainReklam}>Reklam Hizmetleri</Link>
                                    </li>
                                    <li><Link className="list-group-item-action text-light"
                                           to="/yonetim" element={MainYonetim}>Yönetim Hizmetleri</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-4 mt-6 mt-sm-0">
                                <h5 className="mb-4 text-white">İletişim</h5>
                                <div className="mb-3">
                                    <p className="mb-0 text-light">İlkadım/Samsun</p>
                                </div>
                                <div className="mb-3">
                                    <Link className="btn-link text-light"
                                       to="mailto://info@verivizyon.com"> info@verivizyon.com</Link>
                                </div>
                                <div>
                                    <Link className="btn-link text-light"
                                       to="https://api.whatsapp.com/send?phone=+905058395561&text=Merhaba,&nbsp;hizmetleriniz&nbsp;hakkında&nbsp;bilgi&nbsp;almak&nbsp;istiyorum.">WhatsApp'dan
                                        Ulaşın</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <hr className="m-0"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col iyzicoimg">
                        <img src={iyizcologo} className="img-fluid mx-auto d-block mb-4" alt=""/>
                    </div>
                </div>
                <div
                    className="d-flex justify-content-md-between justify-content-center flex-md-row flex-column align-items-center">
                    <div className="text-light">
                        &copy; 2024 Tüm Haklar Saklıdır | Tasarlayan ve Geliştiren <Link
                                                                                      to="#" style={{color:"white",fontWeight:"bold" }}>VeriVizyon</Link>
                    </div>
                    <div className="text-md-end text-center mt-3 mt-md-0">
                        <ul className="list-inline mb-0">
                            <li className="me-3 list-inline-item">
                                <Link className="list-group-item-action text-light"
                                   to="/gizlilik" element={Gizlilik}>
                                    Gizlilik Sözleşmesi
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        {/*<ScrollTopButton/>*/}
        </footer>
    );
};

export default Footer;