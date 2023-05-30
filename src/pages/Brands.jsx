import React, { useEffect } from "react";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Newsletter from "../components/Newsletter";
import { Link } from "react-router-dom";

export default function Brands({ setHeader }) {
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setHeader]);

  return (
    <>
      <Helmet>
        {/* <!-- meta tag --> */}
        <meta charset="utf-8" />
        <title>
          {t("titles.brands")} | DURŌ Niche perfumery | Niche parfimerija
        </title>

        {/* <!-- Meta Tags--> */}
        <meta
          name="description"
          content="DURŌ, where the art of niche perfumery meets ultimate luxury. We represent 25 of the most sought-after artisan perfume houses and offer a one-of-a-kind immersive experience in our boutique."
        />
        <meta
          name="keywords"
          content="durō, duro, niche perfumery, niche parfimerija, beograd, parfimerija, galerija"
        />
        <meta name="author" content="intellect.se" />

        {/* <!-- responsive tag --> */}
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* <!-- Facebook Metadata --> */}
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:title" content="DURŌ | Niche perfumery" />
        <meta
          property="og:description"
          content="DURŌ, where the art of niche perfumery meets ultimate luxury. We represent 25 of the most sought-after artisan perfume houses and offer a one-of-a-kind immersive experience in our boutique."
        />
        <meta property="og:url" content="https://www.parfimerija-duro.rs" />
        <meta
          property="og:image"
          content="https://www.parfimerija-duro.rs/assets/images/favicon/og-image.jpg"
        />
      </Helmet>
      <Loader />
      {/* // <!-- Main content Start --> */}
      <div className="main-content">
        {/* <!-- Breadcrumbs Start --> */}
        <div className="rs-breadcrumbs img2">
          <div className="container">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                {t("home.brands.title")}
                <span className="watermark">{t("home.brands.title")}</span>
              </h1>
            </div>
          </div>
        </div>
        {/* <!-- Breadcrumbs End --> */}

        {/* <!-- Brands Section Start --> */}
        <div
          id="rs-our-sponsor"
          className="rs-our-sponsor blue-bg style1 home3-sponsor-style height-ctrl pt-130 md-pb-70 md-pt-70"
        >
          <div className="container">
            <div className="sec-title text-center mb-60">
              <h2 className="title title2 title3 text-middle">
                {t("home.brands.title")}
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div className="logo-img">
                      <Link
                        title="Marc-Antoine Barrois"
                        to="/brands/marc-antoine_barrois"
                      >
                        <img
                          src="./assets/images/event/brands/001_marc-antoine_barrois.png"
                          alt="Marc-Antoine Barrois"
                          title="Marc-Antoine Barrois"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Jovoy" className="logo-img">
                      <Link to="/brands/jovoy">
                        <img
                          src="./assets/images/event/brands/002_jovoy.png"
                          alt="Jovoy"
                          title="Jovoy"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Jeroboam" className="logo-img">
                      <Link to="/brands/jeroboam">
                        <img
                          src="./assets/images/event/brands/003_jeroboam.png"
                          alt="Jeroboam"
                          title="Jeroboam"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Morph" className="logo-img">
                      <Link to="/brands/morph">
                        <img
                          src="./assets/images/event/brands/004_morph.png"
                          alt="Morph"
                          title="Morph"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 md-mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="MDCI" className="logo-img">
                      <Link to="/brands/mdci">
                        <img
                          src="./assets/images/event/brands/005_mdci.png"
                          alt="MDCI"
                          title="MDCI"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 md-mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Puredistance" className="logo-img">
                      <Link to="/brands/puredistance">
                        <img
                          src="./assets/images/event/brands/006_puredistance.png"
                          alt="Puredistance"
                          title="Puredistance"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="HDP" className="logo-img">
                      <Link to="/brands/hdp">
                        <img
                          src="./assets/images/event/brands/007_hdp.png"
                          title="HDP"
                          alt="HDP"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Calaj" className="logo-img">
                      <Link to="/brands/calaj">
                        <img
                          src="./assets/images/event/brands/008_calaj.png"
                          title="Calaj"
                          alt="Calaj"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Indult" className="logo-img">
                      <Link to="/brands/indult">
                        <img
                          src="./assets/images/event/brands/009_indult.png"
                          title="Indult"
                          alt="Indult"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Thameen" className="logo-img">
                      <Link to="/brands/thameen">
                        <img
                          src="./assets/images/event/brands/010_thameen.png"
                          alt="Thameen"
                          title="Thameen"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Theodoros Kalotinis" className="logo-img">
                      <Link to="/brands/theodoros-kalotinis">
                        <img
                          src="./assets/images/event/brands/011_theodoros.png"
                          title="Theodoros Kalotinis"
                          alt="Theodoros Kalotinis"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Fragrance du Bois" className="logo-img">
                      <Link to="/brands/fdb">
                        <img
                          src="./assets/images/event/brands/012_fdb.png"
                          title="Fragrance du Bois"
                          alt="Fragrance du Bois"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div className="Ormonde Jayne">
                      <Link to="/brands/ormonde-jayne">
                        <img
                          src="./assets/images/event/brands/013_ormonde.png"
                          title="Ormonde Jayne"
                          alt="Ormonde Jayne"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Paradis des Sens" className="logo-img">
                      <Link to="/brands/paradis">
                        <img
                          src="./assets/images/event/brands/014_paradis.png"
                          title="Paradis des Sens"
                          alt="Paradis des Sens"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Wesker" className="logo-img">
                      <Link to="/brands/wesker">
                        <img
                          src="./assets/images/event/brands/015_wesker.png"
                          title="Wesker"
                          alt="Wesker"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Anima Mundi" className="logo-img">
                      <Link to="/brands/anima-mundi">
                        <img
                          src="./assets/images/event/brands/016_anima_mundi.png"
                          title="Anima Mundi"
                          alt="Anima Mundi"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Electimuss" className="logo-img">
                      <Link to="/brands/electimuss">
                        <img
                          src="./assets/images/event/brands/017_electimuss.png"
                          title="Electimuss"
                          alt="Electimuss"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Acque di Italia" className="logo-img">
                      <Link to="/brands/acque-di-italia">
                        <img
                          src="./assets/images/event/brands/018_aque_di_italia.png"
                          title="Acque di Italia"
                          alt="Acque di Italia"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Portus Cale" className="logo-img">
                      <Link to="/brands/portus-cale">
                        <img
                          src="./assets/images/event/brands/019_portus_cale.png"
                          title="Portus Cale"
                          alt="Portus Cale"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Veronique Gabai" className="logo-img">
                      <Link to="/brands/veronique-gabai">
                        <img
                          src="./assets/images/event/brands/020_veronique_gabai.png"
                          title="Veronique Gabai"
                          alt="Veronique Gabai"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Onyrico" className="logo-img">
                      <Link to="/brands/onyrico">
                        <img
                          src="./assets/images/event/brands/021_onyrico.png"
                          title="Onyrico"
                          alt="Onyrico"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Affinessence" className="logo-img">
                      <Link to="/brands/affinessence">
                        <img
                          src="./assets/images/event/brands/022_affinessence.png"
                          title="Affinessence"
                          alt="Affinessence"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Castelbel" className="logo-img">
                      <Link to="/brands/castelbel">
                        <img
                          src="./assets/images/event/brands/023_castelbel.png"
                          title="Castelbel"
                          alt="Castelbel"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 mb-20">
                <div className="logo-item">
                  <div className="grid-figure">
                    <div title="Liquides Imaginaries" className="logo-img">
                      <Link to="/brands/liquides-imaginaries">
                        <img
                          src="./assets/images/event/brands/024_liquides_imaginaries.png"
                          title="Liquides Imaginaries"
                          alt="Liquides Imaginaries"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Brands Section End -->  */}

        {/* <!-- Newsletter section start --> */}
        <div className="rs-newsletter blue-bg style1 pt-90 md-pt-60 mb--110">
          <Newsletter />
        </div>

        {/* <!-- Newsletter section end --> */}
      </div>
      {/* // <!-- Main content End --> */}
    </>
  );
}
