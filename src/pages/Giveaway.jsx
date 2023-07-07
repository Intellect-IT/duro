import React, { useEffect } from "react";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Newsletter from "../components/Newsletter";

export default function Giveaway ({ setHeader }) {
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
          {t("header.privacy.pageTitle")} - DURŌ Niche perfumery - Niche parfimerija
          </title>

        {/* <!-- Meta Tags--> */}
        <meta
          name="description"
          content={t("header.privacy.metaDescription")}
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
        <div className="rs-breadcrumbs img7">
          <div className="container">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                {t("giveaway.title")}
                {/*<span className="watermark">{privacy.title}</span>*/}
              </h1>
            </div>
          </div>
        </div>
        {/* <!-- Breadcrumbs End --> */}

        {/* <!-- Faq Section Start --> */}
        <div className="rs-faq gray-bg4 pt-120 md-pt-80">
          <div className="container">
            {/* <!-- Giveaway Section Start --> */}
            <div className="rs-privacy-policy pt-10 md-pt-80">
              <div className="privacy-wrap pb-130 md-pb-90">
                <div className="sec-title mb-50">
                  <h2 className="title title2">{t("giveaway.terms.title")}</h2>
                </div>
                <div className="privacy-content giveaway">
                <div className="sec-title mb-30">
                  <h4 className="title">{t("giveaway.terms.subtitle_1")}</h4>
                </div>
                  <p>{t("giveaway.terms.eligibility.count_1")} <br/> {t("giveaway.terms.eligibility.count_2")}</p>
                  <ul className="check-list">
                    <li>{t("giveaway.terms.eligibility.li1")}</li>
                    <li>{t("giveaway.terms.eligibility.li2")}</li>
                    <li>{t("giveaway.terms.eligibility.li3")}</li>
                    <li>{t("giveaway.terms.eligibility.li4")}</li>
                    <li>{t("giveaway.terms.eligibility.li5")}</li>
                  </ul>
                  <div className="sec-title mt-30 mb-30">
                    <h4 className="title">{t("giveaway.terms.subtitle_2")}</h4>
                  </div>
                  <p>{t("giveaway.terms.prize.count_1")} <br/> {t("giveaway.terms.prize.count_2")}</p>
                  <ul className="check-list">
                    <li>{t("giveaway.terms.prize.li1")}</li>
                    <li>{t("giveaway.terms.prize.li2")}</li>
                    <li>{t("giveaway.terms.prize.li3")}</li>
                  </ul>
                  <div className="sec-title mt-30 mb-30">
                    <h4 className="title">{t("giveaway.terms.subtitle_3")}</h4>
                  </div>
                  <ul className="check-list">
                    <li>{t("giveaway.terms.winner.li1")}</li>
                    <li>{t("giveaway.terms.winner.li2")}</li>
                    <li>{t("giveaway.terms.winner.li3")}</li>
                    <li>{t("giveaway.terms.winner.li4")}</li>
                  </ul>
                  <div className="sec-title mt-30 mb-30">
                    <h4 className="title">{t("giveaway.terms.subtitle_4")}</h4>
                  </div>
                  <ul className="check-list">
                    <li>{t("giveaway.terms.general.li1")}</li>
                    <li>{t("giveaway.terms.general.li2")}</li>
                    <li>{t("giveaway.terms.general.li3")}</li>
                    <li>{t("giveaway.terms.general.li4")}</li>
                    <li>{t("giveaway.terms.general.li5")}</li>
                    <li>{t("giveaway.terms.general.li6")}</li>
                    <li>{t("giveaway.terms.general.li7")}</li>
                    <li>{t("giveaway.terms.general.li8")}</li>
                    <li>{t("giveaway.terms.general.li9")}</li>
                    <p>{t("giveaway.terms.general.count_1")}{" "}
                    <a href="mailto:info@parfimerija-duro.rs">
                      info@parfimerija-duro.rs
                    </a>
                    .</p>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- Giveaway Section End -->    */}
          </div>
          {/* <!-- Newsletter section start --> */}
          <div className="rs-newsletter style1 pt-90 md-pt-60 mb--110">
            <Newsletter/>
          </div>
          {/* <!-- Newsletter section end --> */}
        </div>
        {/* <!-- Faq Section End --> */}
      </div>
      {/* <!-- Main content End --> */}
    </>
  );
}
