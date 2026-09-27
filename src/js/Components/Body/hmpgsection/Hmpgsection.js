import React, {useState,useEffect} from 'react';
import './hmpgsection1.css';
import picturese from '../../../Picture/Telefon (2)_upscayl_1x_ultrasharp.png';
import Referation from "../../../Pages/Referation";
import {Link} from "react-router-dom";
import Teklifalpage from "../../../Pages/teklifalpage";

const HmpgSection = () => {

    const [offsetX, setOffsetX] = useState("");
    const [offsetY, setOffsetY] = useState("");
    const [friction, setFriction] = useState(1 / 32);

    useEffect(() => {
        document.addEventListener("mousemove", _mouseMove);
    }, []);

    let offset = {
        transform: `translate(-50%, -50%) perspective(600px)
                rotateY(${offsetX}deg) rotateX(${offsetY}deg)`
    };

    function _mouseMove(e) {
        let followX = window.innerWidth / 2 - e.clientX;
        let followY = window.innerHeight / 2 - e.clientY;

        let x = 0,
            y = 0;
        x += (-followX - x) * friction;
        y += (followY - y) * friction;
        setOffsetX(x);
        setOffsetY(y);
    }


    return (
        <section className="position-relative hero-shape3 overflow-hidden pt-md-8">
            <div id="particles-bg" className="bg-white d-md-none d-block"></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-7 col-xl-6 py-md-0 py-4">
                        <h1 className="mb-3 fs-40 fs-sm-34 text-md-left text-center "><span
                            className="text-primary ">VeriVizyon</span> ile Aklınızdaki Projeyi Hayata Geçirin</h1><br/>

                        <p className="lead  mb-4 " style={{fontSize:18}} >Verivizyon, dijital dünyada etkileyici bir varlık oluşturmak için tasarlanmış tam kapsamlı bir dijital pazarlama ajansıdır.</p>
                        <p className="lead  mb-4 " style={{fontSize:18}} >Web geliştirme, grafik tasarım, SEO ve Google Ads gibi alanlarda uzmanlaşmış bir ekip tarafından yönetilen Verivizyon, işletmenizin çevrimiçi varlığını güçlendirmek ve hedef kitlenize ulaşmak için yenilikçi çözümler sunar.</p>


                        <Link to="/Referanslarimiz" element={<Referation/>}
                           className="btn btn-outline-primary mobile-w-100 mb-md-0 mb-2">Referanslarımız</Link>

                       <Link to="/teklif-al" element={<Teklifalpage/>}>
                        <button className="btn btn-dark text-start mobile-w-100 basvuruYapBtn ml-md-2"
                                data-toggle="modal" data-target="" style={{margin:40}}>Teklif Al
                        </button></Link>
                    </div>
                    <div className="col-12 col-lg-5 col-xl-6 position-relative d-md-block d-none">
                        <div className="tile js-tilt d-flex justify-content-center" data-tilt>
                            <div className="wrapper" style={offset}>
                                <div className="shape"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>





        )

}

export default HmpgSection;