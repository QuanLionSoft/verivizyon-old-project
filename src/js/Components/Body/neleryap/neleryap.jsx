import  'react';
import '../../../../css/Components/Body/neleryap/neleryap.css';
import { LiaPenAltSolid ,LiaTachometerAltSolid,LiaThumbsUpSolid } from "react-icons/lia";
import { IoPhonePortraitOutline,IoLeafSharp } from "react-icons/io5";
import { SlChart } from "react-icons/sl";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
const Neleryap = () => {
    return (
        <section className="amazing_feature">
            <div className="container">

                <div className="row">
                    <div className="col-md-12 text-center heading-main">
                        <h2 className="heading">Neler YapÄ±yoruz?</h2>
                        <div className="separator"><i className="fa fa-home below-line-about-icon"></i></div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single_feature">
                            <div className="feature_icon"><LiaPenAltSolid className="iconsed" /></div>
                            <h3>
                                Ã–zgÃ¼n TasarÄ±m</h3>
                            <p>Web sitenizi alÄ±ÅŸÄ±lmÄ±ÅŸÄ±n dÄ±ÅŸÄ±nda tamamen farklÄ± Ã¶zgÃ¼n tasarÄ±m ve Ã¶zgÃ¼n iÃ§erik ile tasarlÄ±yoruz.</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single_feature">
                            <div className="feature_icon"><IoPhonePortraitOutline className="iconsed"/></div>
                            <h3>Tam Mobil Uyum</h3>
                            <p>Responsive kodlama ile web sitenizin tÃ¼m cihazlarda kusursuz gÃ¶rÃ¼nmesini saÄŸlÄ±yoruz.</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single_feature">
                            <div className="feature_icon">
                               <IoLeafSharp className="iconsed"/>
                            </div>
                            <h3>
                                Temiz Kodlama</h3>
                            <p>
                                Temiz Kodlama
                                Web sitenizde bilinen karmaÅŸÄ±k kodlamalarÄ±n aksine Ã§ok sade ve web dostu kodlama yapÄ±yoruz.</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single_feature">
                            <div className="feature_icon"><LiaTachometerAltSolid className="iconsed"/></div>
                            <h3>Maksimum Performans</h3>
                            <p>TÃ¼m tasarÄ±m, altyapÄ± ve kodlama aÅŸamalarÄ±nÄ± web standartlarÄ±na uygun olarak yapÄ±yoruz.</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single_feature">
                            <div className="feature_icon"><LiaThumbsUpSolid  className="iconsed"/></div>
                            <h3>
                                Web StandartlarÄ±   </h3>
                            <p>TÃ¼m tasarÄ±m, altyapÄ± ve kodlama aÅŸamalarÄ±nÄ± web standartlarÄ±na uygun olarak yapÄ±yoruz.</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single_feature">
                            <div className="feature_icon">
                                <BiSolidBarChartAlt2  className="iconsed"/>
                            </div>
                            <h3>SEO Etkisi</h3>
                            <p>

                                Biz SEO'ya projenin en baÅŸÄ±nda kodlarken baÅŸlÄ±yoruz ve faydalarÄ±nÄ± da anlatmakla bitiremiyoruz.</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Neleryap;