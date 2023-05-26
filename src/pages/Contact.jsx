import React, { useEffect } from "react";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Newsletter from "../components/Newsletter";
import ContactForm from "../components/ContactForm";

export default function Contact({ setHeader }) {
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
        <title>{t("titles.contact")} | DURŌ Niche perfumery | Niche parfimerija</title>

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
        <div className="rs-breadcrumbs img3">
          <div className="container">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                {t("home.contact.contact")}
                <span className="watermark">{t("home.contact.contact")}</span>
              </h1>
            </div>
          </div>
        </div>
        {/* <!-- Breadcrumbs End --> */}

        {/* <!-- Contact Section Start --> */}
        <div className="rs-contact contact-page gray-bg4 home-style1 home-style3 contact-home-style4 height-ctrl pt-130 md-pb-50 md-pt-40">
          <div className="container">
            <div className="sec-title text-center mb-60 md-mb-40">
              <h2 className="title title2 title3 text-middle">
                {t("home.contact.title")}
              </h2>
            </div>
            {/* <!-- Contact Section Start --> */}
            <div className="rs-contact">
              <div className="row y-middle">
                <div className="col-lg-6 pr-40 md-pr-15 md-mb-50">
                  <div className="contact-map">
                    <iframe
                      title="Location"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11323.815743977078!2d20.4463451!3d44.8021274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a71158f3b75d9%3A0x3cdfdea1cf3307be!2sDUR%C5%8C%20%7C%20Niche%20perfumery!5e0!3m2!1sen!2srs!4v1681389080409!5m2!1sen!2srs"
                    ></iframe>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-wrap">
                    <div id="form-messages"></div>
                    <ContactForm/>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Contact Section End --> */}
          </div>
        </div>
        {/* <!-- Contact Section End -->  */}
        {/* <!-- Newsletter section start --> */}
        <div className="rs-newsletter gray-bg4 style1 pt-90 md-pt-60 mb--110">
          <Newsletter />
        </div>
        {/* <!-- Newsletter section end --> */}
      </div>
      {/* <!-- Main content End --> */}
    </>
  );
}
