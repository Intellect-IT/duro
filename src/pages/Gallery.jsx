import React, { useEffect } from "react";
import $ from "jquery";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Newsletter from "../components/Newsletter";

export default function Gallery({ setHeader }) {
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
    $(".image-popup").magnificPopup({
      type: "image",
      callbacks: {
        beforeOpen: function () {
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure animated zoomInDown"
          );
        },
      },
      gallery: {
        enabled: true,
      },
    });
  }, []);

  return (
    <>
      <Helmet>
        {/* <!-- meta tag --> */}
        <meta charset="utf-8" />
        <title>
          Gallery :: DURŌ | Niche perfumery | Niche parfimerija :: TC "Galerija"
          :: Beograd
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
      {/* <!-- Main content Start --> */}
      <div className="main-content">
        {/* <!-- Breadcrumbs Start --> */}
        <div className="rs-breadcrumbs img6">
          <div className="container">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                {t("gallery")}
                <span className="watermark">{t("gallery")}</span>
              </h1>
            </div>
          </div>
        </div>
        {/* <!-- Breadcrumbs End --> */}

        {/* <!-- Gallery Start --> */}
        <div className="rs-gallery style1 mb--199">
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="gallery-item">
                <div className="gallery-icon">
                  <a
                    className="image-popup"
                    href="./assets/images/gallery/1.jpg"
                  >
                    <img src="./assets/images/gallery/1.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="gallery-item">
                <div className="gallery-icon">
                  <a
                    className="image-popup"
                    href="./assets/images/gallery/2.jpg"
                  >
                    <img src="./assets/images/gallery/2.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="gallery-item">
                <div className="gallery-icon">
                  <a
                    className="image-popup"
                    href="./assets/images/gallery/3.jpg"
                  >
                    <img src="./assets/images/gallery/3.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="gallery-item">
                <div className="gallery-icon">
                  <a
                    className="image-popup"
                    href="./assets/images/gallery/4.jpg"
                  >
                    <img src="./assets/images/gallery/4.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="gallery-item">
                <div className="gallery-icon">
                  <a
                    className="image-popup"
                    href="./assets/images/gallery/5.jpg"
                  >
                    <img src="./assets/images/gallery/5.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="gallery-item">
                <div className="gallery-icon">
                  <a
                    className="image-popup"
                    href="./assets/images/gallery/6.jpg"
                  >
                    <img src="./assets/images/gallery/6.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="gallery-item">
                <div className="gallery-icon">
                  <a
                    className="image-popup"
                    href="./assets/images/gallery/7.jpg"
                  >
                    <img src="./assets/images/gallery/7.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="gallery-item">
                <div className="gallery-icon">
                  <a
                    className="image-popup"
                    href="./assets/images/gallery/8.jpg"
                  >
                    <img src="./assets/images/gallery/8.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="gallery-item">
                <div className="gallery-icon">
                  <a
                    className="image-popup"
                    href="./assets/images/gallery/9.jpg"
                  >
                    <img src="./assets/images/gallery/9.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="gallery-item">
                <div className="gallery-icon">
                  <a
                    className="image-popup"
                    href="./assets/images/gallery/10.jpg"
                  >
                    <img src="./assets/images/gallery/10.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="gallery-item">
                <div className="gallery-icon">
                  <a
                    className="image-popup"
                    href="./assets/images/gallery/11.jpg"
                  >
                    <img src="./assets/images/gallery/11.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="gallery-item">
                <div className="gallery-icon">
                  <a
                    className="image-popup"
                    href="./assets/images/gallery/12.jpg"
                  >
                    <img src="./assets/images/gallery/12.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            {/*<div className="col-lg-3 col-md-6 col-sm-6">
              <div className="gallery-item">
                <div className="gallery-icon">
                  <a
                    className="image-popup"
                    href="./assets/images/gallery/13.jpg"
                  >
                    <img src="./assets/images/gallery/13.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="gallery-item">
                <div className="gallery-icon">
                  <a
                    className="image-popup"
                    href="./assets/images/gallery/14.jpg"
                  >
                    <img src="./assets/images/gallery/14.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="gallery-item">
                <div className="gallery-icon">
                  <a
                    className="image-popup"
                    href="./assets/images/gallery/15.jpg"
                  >
                    <img src="./assets/images/gallery/15.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="gallery-item">
                <div className="gallery-icon">
                  <a
                    className="image-popup"
                    href="./assets/images/gallery/16.jpg"
                  >
                    <img src="./assets/images/gallery/16.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
        {/* <!-- Gallery End --> */}

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
