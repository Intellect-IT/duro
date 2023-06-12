import React, { useEffect } from "react";
import $ from "jquery";
import CountUp from "react-countup";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Newsletter from "../components/Newsletter";

export default function Story({ setHeader }) {
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

  useEffect(() => {
    $(".popup-videos, .popup-border").magnificPopup({
      disableOn: 10,
      type: "iframe",
      title: "popup",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }, []);

  return (
    <>
      <Helmet>
        {/* <!-- meta tag --> */}
        <meta charset="utf-8" />
        <title>
        {t("header.story.pageTitle")} - DURŌ Niche perfumery - Niche parfimerija
        </title>

        {/* <!-- Meta Tags--> */}
        <meta
          name="description"
          content="DURŌ, where the art of niche perfumery meets ultimate luxury. We represent 25 of the most sought-after artisan perfume houses and offer a one-of-a-kind immersive experience in our boutique."
        />
        <meta
          name="keywords"
          content={t("header.story.metaDescription")}
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
      {/* <!-- Main content Start --> */}
      <div className="main-content">
        {/* <!-- Breadcrumbs Start --> */}
        <div className="rs-breadcrumbs img4">
          <div className="container">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                {t("story.title")}
                <span className="watermark">{t("home.story.title")}</span>
              </h1>
            </div>
          </div>
        </div>
        {/* <!-- Breadcrumbs End --> */}

        {/* <!-- About Section Start --> */}
        <div className="rs-about style1 blue-bg pt-120 pb-120 md-pt-80 md-pb-75">
          <div className="container">
            <div className="row y-middle">
              <div className="col-lg-6 pr-15 md-pr-15 md-mb-50">
                <div className="images-part">
                  <img src="./assets/images/about/about-5.png" alt="DURŌ" />
                </div>
              </div>
              <div className="col-lg-6 pl-45 md-pl-15">
                <div className="sec-title">
                  <span className="sub-text">
                    {t("story.nicePerfumery.subText")}
                  </span>
                  <h2 className="title pb-22">{t("home.story.title")}</h2>
                  <div className="heading-border-line left-style"></div>
                  <p className="desc margin-0 pt-40 pb-15">
                    {t("story.nicePerfumery.desc1")}
                  </p>
                  <p className="desc margin-0 pb-15">
                    {t("story.nicePerfumery.desc2")}
                  </p>
                  <p className="desc margin-0 pb-15">
                    {t("story.nicePerfumery.desc3")}
                  </p>
                  <p className="desc margin-0 pb-15">
                    {t("story.nicePerfumery.desc4")}
                  </p>
                  <p className="desc margin-0 pb-15">{t("home.story.desc2")}</p>
                  <div className="rs-counter about-style">
                    <div className="row">
                      <div className="col-lg-6 md-mb-30">
                        <div className="counter-list">
                          <div className="counter-icon">
                            <img
                              src="./assets/images/counter/icons/1.png"
                              alt="Perfumes"
                            />
                          </div>
                          <div className="counter-text plus">
                            <CountUp
                              duration={2}
                              end={300}
                              enableScrollSpy={true}
                              scrollSpyOnce={true}
                              scrollSpyDelay={2}
                              className="rs-count"
                            />
                            <h4 className="title">
                              {t("story.nicePerfumery.perfumes")}
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="counter-list">
                          <div className="counter-icon">
                            <img
                              src="./assets/images/counter/icons/2.png"
                              alt="Brands"
                            />
                          </div>
                          <div className="counter-text plus">
                            <CountUp
                              delay={2}
                              duration={2}
                              end={25}
                              enableScrollSpy={true}
                              scrollSpyOnce={true}
                              scrollSpyDelay={2}
                              className="rs-count"
                            />
                            <h4 className="title">
                              {t("story.nicePerfumery.brands")}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About Section End --> */}

        {/* <!-- Services Section Start --> */}
        <div className="rs-services style4 blue-bg pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="row y-middle">
              <div className="col-lg-6 md-mb-50">
                <div className="sec-title mb-60">
                  <span className="sub-text">
                    {t("story.approach.subText")}
                  </span>
                  <h2 className="title pb-22">
                    {t("story.approach.titleBr")} <br />{" "}
                    {t("story.approach.title")}
                  </h2>
                  <div className="heading-border-line left-style"></div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <p className="desc margin-0 pb-15">
                      {t("story.approach.desc1")}
                    </p>
                    <p className="desc margin-0 pb-15">
                      {t("story.approach.desc2")}
                    </p>
                    <p className="desc margin-0 pb-15">
                      {t("story.approach.desc3")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pl-50 md-pl-15">
                <div className="rs-videos choose-video">
                  <div className="images-video">
                    <img src="./assets/images/about/about-8.png" alt="DURŌ" />
                  </div>
                  <div className="animate-border">
                    <a
                      className="popup-border"
                      href="https://www.youtube.com/watch?v=XZI0CdEx4vc"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Services Section End --> */}

        {/* <!-- Team Section Start --> */}
        <div className="rs-team style2 blue-bg pt-120 pb-50 md-pt-80">
          <div className="container">
            <div className="sec-title text-center mb-60">
              <span className="sub-text">{t("story.team.subText")}</span>
              <h2 className="title white-color pb-35">
                {t("story.team.title")}
              </h2>
              <div className="heading-border-line"></div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-20">
                <div className="team-item">
                  <div className="team-inner-wrap">
                    <div className="images-wrap">
                      <a href="#!">
                        <img
                          src="./assets/images/about/team-1.jpg"
                          alt="Miloš R."
                        />
                      </a>
                    </div>
                    <div className="team-content">
                      <div className="rs-arrow">
                        <div className="curve"></div>
                        <div className="point"></div>
                      </div>
                      <h3 className="title-name">
                        <a href="#!">Miloš R.</a>
                      </h3>
                      <div className="team-title">
                        {t("story.team.founder")}
                      </div>
                      <ul className="social-icons">
                        <li>
                          <a href="mailto:milos@duro.cologne">
                            <i className="fa fa-envelope"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/atelier_cologne_rajovic/">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-20">
                <div className="team-item">
                  <div className="team-inner-wrap">
                    <div className="images-wrap">
                      <a href="#!">
                        <img
                          src="./assets/images/about/team-2.jpg"
                          alt="Anastasija K."
                        />
                      </a>
                    </div>
                    <div className="team-content">
                      <div className="rs-arrow">
                        <div className="curve"></div>
                        <div className="point"></div>
                      </div>
                      <h3 className="title-name">
                        <a href="#!">Anastasija K.</a>
                      </h3>
                      <div className="team-title">
                        {t("story.team.coFounder")}
                      </div>
                      <ul className="social-icons">
                        <li>
                          <a href="mailto:anastasija@duro.cologne">
                            <i className="fa fa-envelope"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/anastasijaaako/">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-20">
                <div className="team-item">
                  <div className="team-inner-wrap">
                    <div className="images-wrap">
                      <a href="#!">
                        <img
                          src="./assets/images/about/team-3.jpg"
                          alt="Lav Šćelović-Pokupec"
                        />
                      </a>
                    </div>
                    <div className="team-content">
                      <div className="rs-arrow">
                        <div className="curve"></div>
                        <div className="point"></div>
                      </div>
                      <h3 className="title-name">
                        <a href="#!">Lav Šćelović-Pokupec</a>
                      </h3>
                      <div className="team-title">
                        {t("story.team.manager")}
                      </div>
                      <ul className="social-icons">
                        <li>
                          <a href="mailto:lav@duro.cologne">
                            <i className="fa fa-envelope"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/_laffinho_/">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://rs.linkedin.com/in/lav-scelovic-pokupec">
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Team Section Start --> */}

        {/* <!-- Newsletter section start --> */}
        <div className="rs-newsletter blue-bg style1 pt-90 md-pt-60 mb--110">
          <Newsletter/>
        </div>
        {/* <!-- Newsletter section end --> */}
      </div>
      {/* <!-- Main content End --> */}
    </>
  );
}
