import React, { useState } from 'react';
import '../../../../css/Components/Header/SecondBanner/scndbanner.css';
import '../../../../css/Components/Header/SecondBanner/firstbanner.css';
import veriblue from '../../../Picture/data/Verivizyon logo.png';

import { CiFacebook } from "react-icons/ci";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaWhatsapp, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { TbBrandYoutube } from "react-icons/tb";
import { Link } from "react-router-dom";

const Secondbanner = () => {
    // 1. Hizmetlerimiz açılır menüsü (dropdown) için State
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // 2. Mobil görünümde (telefonlarda) menüyü açıp kapatmak için State
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="header-bg"></div>
            <div id="header-wrap" className="w-100 z-index-1">
                <div className="container menu_top px-0">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                                <div className="top_mail top_div pl-0" style={{ border: "none" }}>
                                    <Link to="mailto:info@verivizyon.com">
                                        <MdOutlineLocalPostOffice style={{ color: "#285daa", fontSize: 16 }} />
                                        info@verivizyon.com
                                    </Link>
                                </div>
                                <div className="top_phone top_div mx-2" style={{ borderRight: "none" }}>
                                    <Link to="https://api.whatsapp.com/send?phone=+905058395561&text=Merhaba,&nbsp;hizmetleriniz&nbsp;hakkında&nbsp;bilgi&nbsp;almak&nbsp;istiyorum." target="_blank">
                                        <FaWhatsapp style={{ color: "#285daa", fontSize: 16 }} />WhatsApp
                                    </Link>
                                </div>
                            </div>
                            <div className="top_socialmedia top_div d-flex align-items-center">
                                <Link to="#" className="fb"><CiFacebook className="iconface iconara" /></Link>
                                <Link to="#" className="tw"><FaTwitter className="icontwitter iconara" /></Link>
                                <Link to="#" className="ig"><BsInstagram className="iconinsta iconara" /></Link>
                                <Link to="#" className="yt"><TbBrandYoutube className="iconyoutube iconara" /></Link>
                                <Link to="#" className="li"><FaLinkedinIn className="iconlinkedin iconara" /></Link>
                                <Link to="#" className="pt"><FaPinterestP className="iconpinterest iconara" /></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                                <Link className="navbar-brand logo text-primary mb-0 font-w-7 py-md-3 py-0" to="/">
                                    <img src={veriblue} alt="Verivizyon Logo" />
                                </Link>

                                <div className="d-flex align-items-center">
                                    {/* Mobil menü açıldığında 'show' class'ı eklenir */}
                                    <div className={`collapse navbar-collapse mr-md-5 mr-0 ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
                                        <ul className="navbar-nav me-auto">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/">Anasayfa</Link>
                                            </li>

                                            {/* DROPDOWN (HİZMETLERİMİZ) KISMI */}
                                            <li
                                                className="nav-item dropdown"
                                                onMouseEnter={() => setIsDropdownOpen(true)}
                                                onMouseLeave={() => setIsDropdownOpen(false)}
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            >
                                                <Link className="nav-link dropdown-toggle" to="#">Hizmetlerimiz</Link>
                                                {/* isDropdownOpen true ise Bootstrap'in 'show' class'ı eklenerek menü görünür olur */}
                                                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                                    <li className="dropdown-submenu">
                                                        <Link className="dropdown-item" to="/yazilim">Yazılım Hizmetleri</Link>
                                                    </li>
                                                    <li className="dropdown-submenu">
                                                        <Link className="dropdown-item" to="/tasarim">Tasarım Hizmetleri</Link>
                                                    </li>
                                                    <li className="dropdown-submenu">
                                                        <Link className="dropdown-item" to="/reklam">Reklam Hizmetleri</Link>
                                                    </li>
                                                    <li className="dropdown-submenu">
                                                        <Link className="dropdown-item" to="/yonetim">Yönetim Hizmetleri</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item"><Link className="nav-link" to="/hakkimizda">Hakkımızda</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/referanslarimiz">Referanslarımız</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/iletisim">Bize Ulaşın</Link></li>

                                            <li className="nav-item d-md-none d-block">
                                                <Link to="/teklif-al">
                                                    <button className="btn btn-outline-primary basvuruYapBtn">Teklif Al</button>
                                                </Link>
                                            </li>

                                            <li>
                                                <div className="mobil-iletisim d-md-none d-block">
                                                    <ul className="d-flex item1">
                                                        <li className="nav-item mail">
                                                            <Link className="nav-link" to="mailto:info@verivizyon.com">
                                                                E-Mail<i className="las la-envelope fs-28 mr-2"></i>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item whatsApp">
                                                            <Link className="nav-link" to="https://api.whatsapp.com/send?phone=+905058395561" target="_blank">
                                                                <i className="lab la-whatsapp fs-28 mr-2"></i>WhatsApp
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="d-flex">
                                        <Link to="/teklif-al">
                                            <button className="btn btn-outline-primary btn-sm basvuruYapBtn d-md-block d-none">Teklif Al</button>
                                        </Link>
                                    </div>

                                    {/* MOBİL (HAMBURGER) MENÜ BUTONU */}
                                    <button
                                        className="navbar-toggler ml-3"
                                        type="button"
                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    >
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