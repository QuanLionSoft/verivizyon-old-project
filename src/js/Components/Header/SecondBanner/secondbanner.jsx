import 'react';
import '../../../../css/Components/Header/SecondBanner/scndbanner.css';
import '../../../../css/Components/Header/SecondBanner/firstbanner.css';
import veriblue from  '../../../Picture/data/Verivizyon logo.png';

import { CiFacebook } from "react-icons/ci";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaWhatsapp,FaTwitter,FaLinkedinIn,FaPinterestP } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { TbBrandYoutube } from "react-icons/tb";
import {Link} from "react-router-dom";
import Homepage from "../../../Pages/Homepage";
import MainYazilim from "../../../Pages/hizmetlerimiz/yazilim/MainYazilim.jsx";
import MainTasarim from "../../../Pages/hizmetlerimiz/Tasarim/MainTasarim.jsx";
import MainReklam from "../../../Pages/hizmetlerimiz/Reklam/MainReklam.jsx";
import MainYonetim from "../../../Pages/hizmetlerimiz/Yonetim/MainYonetim.jsx";
import About from "../../../Pages/About";
import Referation from "../../../Pages/Referation";
import Contact from "../../../Pages/Contact";
import Teklifalpage from "../../../Pages/teklifalpage";


const Secondbanner = () => {


    return (

        <header className="site-header">
            <div className="header-bg"></div>
            <div id="header-wrap" className="w-100 z-index-1">
                <div className="container menu_top px-0">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                                <div className="top_mail top_div pl-0" style={{border: "none"}}>
                                    <Link to="mailto://info@verivizyon.com"><MdOutlineLocalPostOffice style={{color:"#285daa",fontSize:16}} />
                                        info@verivizyon.com</Link>
                                </div>
                                <div className="top_phone top_div mx-2" style={{borderRight:"none"}}>
                                    <Link to="https://api.whatsapp.com/send?phone=+905058395561&text=Merhaba,&nbsp;hizmetleriniz&nbsp;hakkÄ±nda&nbsp;bilgi&nbsp;almak&nbsp;istiyorum."
                                       target="_blank"><FaWhatsapp style={{color:"#285daa",fontSize:16}}  />WhatsApp</Link>
                                </div>
                            </div>
                            <div className="top_socialmedia top_div d-flex align-items-center">
                                <Link to="#" className="fb"><CiFacebook className="iconface iconara" /></Link>
                                <Link to="#" className="tw"><FaTwitter className="icontwitter iconara"/></Link>
                                <Link to="#" className="ig"><BsInstagram className="iconinsta iconara" /></Link>
                                <Link to="#" className="yt"><TbBrandYoutube  className="iconyoutube iconara"/></Link>
                                <Link to="#" className="li"><FaLinkedinIn className="iconlinkedin iconara" /></Link>
                                <Link to="#" className="pt"><FaPinterestP className="iconpinterest iconara"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">

                        <div className="col-12" >
                            <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                                <Link className="navbar-brand logo text-primary mb-0 font-w-7 py-md-3 py-0"
                                   to="/" element={<Homepage/>}>
                                    <img src={veriblue}  alt=""/>
                                </Link>
                                <div className="d-flex align-items-center">
                                    <div className="collapse navbar-collapse mr-md-5 mr-0" id="navbarNav">
                                        <ul className="navbar-nav me-auto">
                                            <li className="nav-item"><Link className="nav-link"
                                                                        to="/" element={<Homepage/>} >Anasayfa</Link></li>
                                            <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle"
                                                                                 to="#"
                                                                                 data-bs-toggle="dropdown">Hizmetlerimiz</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-submenu"><Link className="dropdown-item"
                                                                                        to="/yazilim" element={MainYazilim}>YazÄ±lÄ±m
                                                        Hizmetleri</Link></li>
                                                    <li className="dropdown-submenu"><Link className="dropdown-item"
                                                                                        to="/tasarim" element={MainTasarim}>TasarÄ±m
                                                        Hizmetleri</Link></li>
                                                    <li className="dropdown-submenu"><Link className="dropdown-item"
                                                                                        to="/reklam" element={MainReklam}>Reklam
                                                        Hizmetleri</Link></li>
                                                    <li className="dropdown-submenu"><Link className="dropdown-item"
                                                                                        to="/yonetim" element={MainYonetim} >YÃ¶netim
                                                        Hizmetleri</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item"><Link className="nav-link"
                                                                        to="/hakkimizda" element={About}>HakkÄ±mÄ±zda</Link>
                                            </li>
                                            <li className="nav-item"><Link className="nav-link"
                                                                        to="/referanslarimiz" element={Referation} >ReferanslarÄ±mÄ±z</Link>
                                            </li>
                                            <li className="nav-item"><Link className="nav-link"
                                                                        to="/iletisim" element={Contact}>Bize
                                                UlaÅŸÄ±n</Link></li>
                                            <li className="nav-item d-md-none d-block">
                                                <Link to="/teklif-al" element={<Teklifalpage/>} >
                                                <button className="btn btn-outline-primary basvuruYapBtn"
                                                        data-toggle="modal" data-target="">Teklif Al
                                                </button>
                                                </Link>
                                            </li>

                                            <li>
                                                <div className="mobil-iletisim d-md-none d-block">
                                                    <ul className="d-flex item1">
                                                        <li className="nav-item mail"><Link className="nav-link"
                                                                                         to="mailto://info@verivizyon.com">E-Mail<i
                                                            className="las la-envelope fs-28 mr-2"></i></Link></li>
                                                        <li className="nav-item whatsApp"><Link className="nav-link"
                                                                                             to="https://api.whatsapp.com/send?phone=+905058395561&text=Merhaba,&nbsp;hizmetleriniz&nbsp;hakkÄ±nda&nbsp;bilgi&nbsp;almak&nbsp;istiyorum."
                                                                                             target="_blank"><i
                                                            className="lab la-whatsapp fs-28 mr-2"></i>WhatsApp</Link></li>
                                                    </ul>
                                                    {/*<ul className="d-flex item2">*/}
                                                    {/*    <li className="nav-item"><Link className="nav-link"*/}
                                                    {/*                                to="https://www.facebook.com"><i*/}
                                                    {/*        className="lab la-facebook fs-32"></i></Link></li>*/}
                                                    {/*    <li className="nav-item"><Link className="nav-link"*/}
                                                    {/*                                to="https://www.instagram.com"><i*/}
                                                    {/*        className="lab la-instagram fs-32"></i></Link></li>*/}
                                                    {/*    <li className="nav-item"><Link className="nav-link"*/}
                                                    {/*                                to="https://www.twitter.com"><i*/}
                                                    {/*        className="lab la-twitter fs-32"></i></Link></li>*/}
                                                    {/*    <li className="nav-item"><Link className="nav-link"*/}
                                                    {/*                                to="https://www.youtube.com"><i*/}
                                                    {/*        className="lab la-youtube fs-32"></i></Link></li>*/}
                                                    {/*    <li className="nav-item"><Link className="nav-link"*/}
                                                    {/*                                to="https://www.linkedin.com"><i*/}
                                                    {/*        className="lab la-linkedin-in fs-32"></i></Link></li>*/}
                                                    {/*    <li className="nav-item"><Link className="nav-link"*/}
                                                    {/*                                to="https://tr.pinterest.com"><i*/}
                                                    {/*        className="lab la-pinterest-p fs-32"></i></Link></li>*/}
                                                    {/*</ul>*/}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="d-flex">
                                        <Link to="/teklif-al" element={<Teklifalpage/>} >
                                        <button
                                            className="btn btn-outline-primary btn-sm basvuruYapBtn d-md-block d-none"
                                            data-toggle="modal"  data-target="/teklif-al">Teklif Al
                                        </button>
                                    </Link>


                                    </div>
                                    <button className="navbar-toggler ml-3" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarNav" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                            </nav>

                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Secondbanner;