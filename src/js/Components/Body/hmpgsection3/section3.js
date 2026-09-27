import React, { useEffect } from 'react';
import './neleryap1.css';

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
                    <h2 className="text-center fs-sm-28">Neler Yapıyoruz ?</h2>
                </div>
                <div className="tabs-v" id="checkboxContainer">

                    <input type="radio" name="tabs-v" id="tab1-v" defaultChecked />
                    <label htmlFor="tab1-v">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/iconsed-verivizyon/web-design.png?updatedAt=1716503840897" />
                        <p>Web Tasarım</p>
                    </label>
                    <div className="tab-content">
                        <div>
                            <div className="txt-tab">
                                <div>
                                    <h3>Web Tasarım</h3>
                                    <p>Modern, işlevsel, mobil uyumlu, özgün, kullanıcı dostu, ekonomik, yenilikçi, profesyonel, stratejik, yüksek geri dönüş ve başarı odaklı web tasarım projeleri üretiyoruz.</p>
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
                                    <p>Projelerin geliştirilme aşamasında, temel ve modern seo kurallarını dikkate alıyor ve projenizi bu kurallara göre geliştiriyoruz.</p>
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
                                    <p>Profesyonel, Yaratıcı, özgün, hatırlanması kolay, kurumsal kimlik, logo, amblem, katalog, broşür, kurumsal evrak, afiş vb. yayınlar oluşturuyoruz.</p>
                                </div>
                            </div>
                            <div className="img-tab3"></div>
                        </div>
                    </div>

                    <input type="radio" name="tabs-v" id="tab4-v" />
                    <label htmlFor="tab4-v">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/iconsed-verivizyon/icons8-code-64.png?updatedAt=1716503840903" />
                        <p>Yazılım Geliştirme</p>
                    </label>
                    <div className="tab-content">
                        <div className="reverse-tab">
                            <div className="txt-tab">
                                <div>
                                    <h3>Yazılım Geliştirme</h3>
                                    <p>PHP, MySQL, Java, C, C++, jQuery, Javascript, Node-JS, MongoDB, .NET veya CSS yazılım dilleriyle istediğiniz yazılım projesini siz hayal edin biz gerçekleştirelim.</p>
                                </div>
                            </div>
                            <div className="img-tab4"></div>
                        </div>
                    </div>

                    <input type="radio" name="tabs-v" id="tab5-v" />
                    <label htmlFor="tab5-v">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/iconsed-verivizyon/icons8-megaphone-64.png?updatedAt=1716503840865" />
                        <p>Reklam Yönetimi</p>
                    </label>
                    <div className="tab-content">
                        <div>
                            <div className="txt-tab">
                                <div>
                                    <h3>Reklam Yönetimi</h3>
                                    <p>Adwords, Facebook, Instagram veya Twitter reklamlarınızın optimizasyon ve yönetimini işi bilen ellere bırakın. Hedef kitlenize sizi biz ulaştıralım.</p>
                                </div>
                            </div>
                            <div className="img-tab5"></div>
                        </div>
                    </div>

                    <input type="radio" name="tabs-v" id="tab6-v" />
                    <label htmlFor="tab6-v">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/iconsed-verivizyon/icons8-person-64.png?updatedAt=1716503840980" />
                        <p>Web Danışmanlık</p>
                    </label>
                    <div className="tab-content">
                        <div className="reverse-tab">
                            <div className="txt-tab">
                                <div>
                                    <h3>Web Danışmanlık</h3>
                                    <p>Bilişim alanında ki ihtiyaçlarınıza profesyonel çözümler üretirken, güvenilir iş ortağınız olarak, esas işinizi destekleyici bilişim çalışmalarını üstlenmekteyiz.</p>
                                </div>
                            </div>
                            <div className="img-tab6"></div>
                        </div>
                    </div>

                    <input type="radio" name="tabs-v" id="tab7-v" />
                    <label htmlFor="tab7-v">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/iconsed-verivizyon/icons8-toolbox-64.png?updatedAt=1716504441239" />
                        <p>Google İşletme Araçları</p>
                    </label>
                    <div className="tab-content">
                        <div>
                            <div className="txt-tab">
                                <div>
                                    <h3>Google İşletme Araçları</h3>
                                    <p>İşletmenizi Google platformlarında daha görünür kılmak ve dijital stratejinizi güçlendirmek için sunduğumuz kapsamlı hizmetlerimizle, hedef kitlenize daha etkili bir şekilde ulaşmanıza yardımcı oluyoruz. </p>
                                </div>
                            </div>
                            <div className="img-tab7"></div>
                        </div>
                    </div>

                    <input type="radio" name="tabs-v" id="tab8-v" />
                    <label htmlFor="tab8-v">
                        <img src="https://ik.imagekit.io/lgf1wyqnvg/iconsed-verivizyon/icons8-company-64.png?updatedAt=1716504441232" />
                        <p>Marka Yönetimi</p>
                    </label>
                    <div className="tab-content">
                        <div className="reverse-tab">
                            <div className="txt-tab">
                                <div>
                                    <h3>Marka Yönetimi</h3>
                                    <p>Markanızın güçlü ve sürdürülebilir bir kimlik kazanması için kapsamlı marka yönetimi çözümleri sunuyoruz. Stratejik planlamadan pazarlamaya, marka kimliğinizin her yönünü yöneterek hedef kitlenizle güçlü bir bağ kurmanızı sağlıyoruz.</p>
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
