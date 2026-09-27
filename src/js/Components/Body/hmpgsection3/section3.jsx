import  { useEffect } from 'react';
import '../../../../css/Components/Body/hmpgsection3/neleryap1.css';

const Section3 = () => {

    useEffect(() => {
        const checkboxContainer = document.getElementById('checkboxContainer');

        const handleChange = (event) => {
            const checkbox1 = document.getElementById('tab1-v');

            if (event.target.id !== 'tab1-v' && event.target.checked) {
                checkbox1.checked = false;
            }
        };

        checkboxContainer.addEventListener('change', handleChange);

        // Cleanup event listener on component unmount
        return () => {
            checkboxContainer.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <section className="neler-yapiyoruz">
            <div className="container">
                <div className="col-12 mb-5">
                    <h2 className="text-center fs-sm-28">Neler YapÄ±yoruz ?</h2>
                </div>
                <div className="tabs-v" id="checkboxContainer">

                    <input type="radio" name="tabs-v" id="tab1-v" defaultChecked />
                    <label htmlFor="tab1-v">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/iconsed-verivizyon/web-design.png?updatedAt=1716503840897" />
                        <p>Web TasarÄ±m</p>
                    </label>
                    <div className="tab-content">
                        <div>
                            <div className="txt-tab">
                                <div>
                                    <h3>Web TasarÄ±m</h3>
                                    <p>Modern, iÅŸlevsel, mobil uyumlu, Ã¶zgÃ¼n, kullanÄ±cÄ± dostu, ekonomik, yenilikÃ§i, profesyonel, stratejik, yÃ¼ksek geri dÃ¶nÃ¼ÅŸ ve baÅŸarÄ± odaklÄ± web tasarÄ±m projeleri Ã¼retiyoruz.</p>
                                </div>
                            </div>
                            <div className="img-tab1"></div>
                        </div>
                    </div>

                    <input type="radio" name="tabs-v" id="tab2-v" />
                    <label htmlFor="tab2-v">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/iconsed-verivizyon/icons8-filter-64.png?updatedAt=1716503840870" />
                        <p>SEO Optimizasyonu</p>
                    </label>
                    <div className="tab-content">
                        <div className="reverse-tab">
                            <div className="txt-tab">
                                <div>
                                    <h3>SEO Optimizasyonu</h3>
                                    <p>Projelerin geliÅŸtirilme aÅŸamasÄ±nda, temel ve modern seo kurallarÄ±nÄ± dikkate alÄ±yor ve projenizi bu kurallara gÃ¶re geliÅŸtiriyoruz.</p>
                                </div>
                            </div>
                            <div className="img-tab2"></div>
                        </div>
                    </div>

                    <input type="radio" name="tabs-v" id="tab3-v" />
                    <label htmlFor="tab3-v">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/iconsed-verivizyon/icons8-pen-64.png?updatedAt=1716503840858" />
                        <p>Logo & Kurumsal Kimlik</p>
                    </label>
                    <div className="tab-content">
                        <div>
                            <div className="txt-tab">
                                <div>
                                    <h3>Logo & Kurumsal Kimlik</h3>
                                    <p>Profesyonel, YaratÄ±cÄ±, Ã¶zgÃ¼n, hatÄ±rlanmasÄ± kolay, kurumsal kimlik, logo, amblem, katalog, broÅŸÃ¼r, kurumsal evrak, afiÅŸ vb. yayÄ±nlar oluÅŸturuyoruz.</p>
                                </div>
                            </div>
                            <div className="img-tab3"></div>
                        </div>
                    </div>

                    <input type="radio" name="tabs-v" id="tab4-v" />
                    <label htmlFor="tab4-v">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/iconsed-verivizyon/icons8-code-64.png?updatedAt=1716503840903" />
                        <p>YazÄ±lÄ±m GeliÅŸtirme</p>
                    </label>
                    <div className="tab-content">
                        <div className="reverse-tab">
                            <div className="txt-tab">
                                <div>
                                    <h3>YazÄ±lÄ±m GeliÅŸtirme</h3>
                                    <p>PHP, MySQL, Java, C, C++, jQuery, Javascript, Node-JS, MongoDB, .NET veya CSS yazÄ±lÄ±m dilleriyle istediÄŸiniz yazÄ±lÄ±m projesini siz hayal edin biz gerÃ§ekleÅŸtirelim.</p>
                                </div>
                            </div>
                            <div className="img-tab4"></div>
                        </div>
                    </div>

                    <input type="radio" name="tabs-v" id="tab5-v" />
                    <label htmlFor="tab5-v">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/iconsed-verivizyon/icons8-megaphone-64.png?updatedAt=1716503840865" />
                        <p>Reklam YÃ¶netimi</p>
                    </label>
                    <div className="tab-content">
                        <div>
                            <div className="txt-tab">
                                <div>
                                    <h3>Reklam YÃ¶netimi</h3>
                                    <p>Adwords, Facebook, Instagram veya Twitter reklamlarÄ±nÄ±zÄ±n optimizasyon ve yÃ¶netimini iÅŸi bilen ellere bÄ±rakÄ±n. Hedef kitlenize sizi biz ulaÅŸtÄ±ralÄ±m.</p>
                                </div>
                            </div>
                            <div className="img-tab5"></div>
                        </div>
                    </div>

                    <input type="radio" name="tabs-v" id="tab6-v" />
                    <label htmlFor="tab6-v">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/iconsed-verivizyon/icons8-person-64.png?updatedAt=1716503840980" />
                        <p>Web DanÄ±ÅŸmanlÄ±k</p>
                    </label>
                    <div className="tab-content">
                        <div className="reverse-tab">
                            <div className="txt-tab">
                                <div>
                                    <h3>Web DanÄ±ÅŸmanlÄ±k</h3>
                                    <p>BiliÅŸim alanÄ±nda ki ihtiyaÃ§larÄ±nÄ±za profesyonel Ã§Ã¶zÃ¼mler Ã¼retirken, gÃ¼venilir iÅŸ ortaÄŸÄ±nÄ±z olarak, esas iÅŸinizi destekleyici biliÅŸim Ã§alÄ±ÅŸmalarÄ±nÄ± Ã¼stlenmekteyiz.</p>
                                </div>
                            </div>
                            <div className="img-tab6"></div>
                        </div>
                    </div>

                    <input type="radio" name="tabs-v" id="tab7-v" />
                    <label htmlFor="tab7-v">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/iconsed-verivizyon/icons8-toolbox-64.png?updatedAt=1716504441239" />
                        <p>Google Ä°ÅŸletme AraÃ§larÄ±</p>
                    </label>
                    <div className="tab-content">
                        <div>
                            <div className="txt-tab">
                                <div>
                                    <h3>Google Ä°ÅŸletme AraÃ§larÄ±</h3>
                                    <p>Ä°ÅŸletmenizi Google platformlarÄ±nda daha gÃ¶rÃ¼nÃ¼r kÄ±lmak ve dijital stratejinizi gÃ¼Ã§lendirmek iÃ§in sunduÄŸumuz kapsamlÄ± hizmetlerimizle, hedef kitlenize daha etkili bir ÅŸekilde ulaÅŸmanÄ±za yardÄ±mcÄ± oluyoruz. </p>
                                </div>
                            </div>
                            <div className="img-tab7"></div>
                        </div>
                    </div>

                    <input type="radio" name="tabs-v" id="tab8-v" />
                    <label htmlFor="tab8-v">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/iconsed-verivizyon/icons8-company-64.png?updatedAt=1716504441232" />
                        <p>Marka YÃ¶netimi</p>
                    </label>
                    <div className="tab-content">
                        <div className="reverse-tab">
                            <div className="txt-tab">
                                <div>
                                    <h3>Marka YÃ¶netimi</h3>
                                    <p>MarkanÄ±zÄ±n gÃ¼Ã§lÃ¼ ve sÃ¼rdÃ¼rÃ¼lebilir bir kimlik kazanmasÄ± iÃ§in kapsamlÄ± marka yÃ¶netimi Ã§Ã¶zÃ¼mleri sunuyoruz. Stratejik planlamadan pazarlamaya, marka kimliÄŸinizin her yÃ¶nÃ¼nÃ¼ yÃ¶neterek hedef kitlenizle gÃ¼Ã§lÃ¼ bir baÄŸ kurmanÄ±zÄ± saÄŸlÄ±yoruz.</p>
                                </div>
                            </div>
                            <div className="img-tab8"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Section3;
