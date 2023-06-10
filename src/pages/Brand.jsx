import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import OwlCarousel from "react-owl-carousel";
import { Helmet } from "react-helmet";
import Newsletter from "../components/Newsletter";
import brandsData from "../data/brands.json";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Brands({ setHeader }) {
  const { slug } = useParams();
  const { t } = useTranslation();
  const [currentBrand, setCurrentBrand] = useState(brandsData[slug]);

  useEffect(() => {
    setCurrentBrand(brandsData[slug]);
  }, [slug]);

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
        {t(currentBrand.title)} - DURŌ Niche perfumery - Niche parfimerija
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
        <div
          className="rs-breadcrumbs electimuss-3"
          style={{
            backgroundImage: `url(${currentBrand.heroImg === "" ? "../assets/images/breadcrumbs/inr-2.jpg" : currentBrand.heroImg})`,
          }}
        >
          <div className="container">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                {currentBrand.title}
                <span className="watermark">{currentBrand.title}</span>
              </h1>
            </div>
          </div>
        </div>
        {/* <!-- Breadcrumbs End --> */}

        {/* <!-- About Section Start --> */}
        <div className="rs-about style1 blue-bg pt-20 pb-40 md-pt-20 md-pb-20">
          <div className="container">
            <div className="row y-middle">
              <div className="col-lg-4 pr-15 md-pr-15 md-mb-50">
                <div className="brand-logo">
                  <img
                    src={currentBrand.logo}
                    alt={currentBrand.title}
                  />
                </div>
              </div>
              <div className="col-lg-8 pl-45 md-pl-15">
                {currentBrand.lead === "" ? (<p className="desc margin-0 pb-15">Coming soon...</p>) : parse(t(currentBrand.lead))}
              </div>
            </div>
            {currentBrand.story === "" ? null : (<div className="row y-middle pt-120 pb-40 md-pt-80 md-pb-20">
              <div className="col-lg-6 md-mb-50">
                <div className="sec-title mb-60">
                  <span className="sub-text">{t("brands.pageHeadings.about")}</span>
                  <h2 className="title pb-22">
                    {currentBrand.name} <br />
                    {t(currentBrand.tagline)}
                  </h2>
                  <div className="heading-border-line left-style"></div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                  {parse(t(currentBrand.story))}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pl-50 md-pl-15">
                <div className="images-part">
                  <img
                    src={currentBrand.storyImg}
                    alt={currentBrand.name}
                  />
                </div>
              </div>
            </div>)}
          </div>
        </div>
        {/* <!-- About Section End --> */}

        {/* <!-- Products Section Start --> */}
        {currentBrand.products.length > 0 ? (<div className="rs-team style7 blue-bg height-ctrl md-pb-40 md-pt-40">
          <div className="container">
            <div className="sec-title spotlight text-center mb-60">
              <span className="sub-text">{t("brands.pageHeadings.spotlight")}</span>
              <h2 className="title pb-22">{t("brands.pageHeadings.featured")}</h2>
              <div className="heading-border-line center-style"></div>
            </div>
            <OwlCarousel
              className="rs-carousel owl-carousel"
              loop={true}
              items={3}
              margin={30}
              autoplay={true}
              autoplayHoverPause={true}
              autoplayTimeout={5000}
              smartSpeed={800}
              dots={true}
              nav={true}
              navSpeed={false}
              center={false}
              navText={[
                "<i className='flaticon-left-arrow'></i>",
                "<i className='flaticon-right-arrow'></i>",
              ]}
              responsive={{
                0: {
                  items: 1,
                  nav: false,
                  dots: true,
                  center: false,
                },
                768: {
                  items: 2,
                  nav: false,
                  dots: true,
                  center: false,
                },
                992: {
                  items: 2,
                  nav: false,
                  dots: true,
                  center: false,
                },
                1200: {
                  items: 3,
                  nav: false,
                  dots: true,
                  center: false,
                },
              }}
            >
                {currentBrand.products.map((product, i) => (
                    <div className="team-item" key={i}>
                    <div className="team-inner-wrap">
                      <div className="images-wrap">
                        <img
                          src={product.img}
                          alt={product.title}
                        />
                      </div>
                      <div className="team-content">
                        <h3 className="title-name">
                          <a href="#!">{product.title} {product.volume !== "" && `(${product.volume})`}</a>
                        </h3>
                        <div className="team-title">{product.brand}</div>
                        <div className="team-price">{product.price === "" ? "00.000,00" : product.price} RSD</div>
                      </div>
                    </div>
                    </div>
                ))}
            </OwlCarousel>
          </div>
        </div>) : null}
        {/* <!-- Products Section End --> */}

        {/* <!-- Quote Section Start --> */}
        {currentBrand.quote === "" ? null : (<div className="rs-team style2 blue-bg pt-100 pb-50 md-pt-75">
          <div className="container">
            <div className="sec-title text-center mb-60">
              <span className="sub-text">{t("brands.pageHeadings.quote")}</span>
              <h2 className="title white-color pb-35">
                "{t(currentBrand.quote)}"
              </h2>
              <div className="heading-border-line"></div>
            </div>
          </div>
        </div>)}
        {/* <!-- Quote Section End --> */}

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
