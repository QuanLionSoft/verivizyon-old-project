import React from 'react';
import '../../../../css/Components/Body/neleryap/neleryap.css';
import { LiaPenAltSolid, LiaTachometerAltSolid, LiaThumbsUpSolid } from "react-icons/lia";
import { IoPhonePortraitOutline, IoLeafSharp } from "react-icons/io5";
import { SlChart } from "react-icons/sl";
import { BiSolidBarChartAlt2 } from "react-icons/bi";

const Neleryap = () => {
    return (
        <section className="amazing_feature">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center heading-main">
                        <h2 className="heading">Neler Yapıyoruz?</h2>
                        <div className="separator"><i className="fa fa-home below-line-about-icon"></i></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single_feature">
                            <div className="feature_icon"><LiaPenAltSolid className="iconsed" /></div>
                            <h3>Özgün Tasarım</h3>
                            <p>Web sitenizi alışılmışın dışında tamamen farklı özgün tasarım ve özgün içerik ile tasarlıyoruz.</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single_feature">
                            <div className="feature_icon"><IoPhonePortraitOutline className="iconsed"/></div>
                            <h3>Tam Mobil Uyum</h3>
                            <p>Responsive kodlama ile web sitenizin tüm cihazlarda kusursuz görünmesini sağlıyoruz.</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single_feature">
                            <div className="feature_icon">
                               <IoLeafSharp className="iconsed"/>
                            </div>
                            <h3>Temiz Kodlama</h3>
                            <p>Web sitenizde bilinen karmaşık kodlamaların aksine çok sade ve web dostu kodlama yapıyoruz.</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single_feature">
                            <div className="feature_icon"><LiaTachometerAltSolid className="iconsed"/></div>
                            <h3>Maksimum Performans</h3>
                            <p>Tüm tasarım, altyapı ve kodlama aşamalarını web standartlarına uygun olarak yapıyoruz.</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single_feature">
                            <div className="feature_icon"><LiaThumbsUpSolid  className="iconsed"/></div>
                            <h3>Web Standartları</h3>
                            <p>Tüm tasarım, altyapı ve kodlama aşamalarını web standartlarına uygun olarak yapıyoruz.</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single_feature">
                            <div className="feature_icon">
                                <BiSolidBarChartAlt2  className="iconsed"/>
                            </div>
                            <h3>SEO Etkisi</h3>
                            <p>Biz SEO'ya projenin en başında kodlarken başlıyoruz ve faydalarını da anlatmakla bitiremiyoruz.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Neleryap;