import React, { useEffect } from "react";
import Loader from "../components/Loader";
import OwlCarousel from "react-owl-carousel";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Newsletter from "../components/Newsletter";
import { Link, useParams } from "react-router-dom";

export default function Brands({ setHeader }) {
  //   const { slug } = useParams();
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
          Discover our World | DURŌ Niche perfumery | Niche parfimerija
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
        <div className="rs-breadcrumbs electimuss-3">
          <div className="container">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                Electimuss
                <span className="watermark">Electimuss</span>
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
                    src="../assets/images/event/brands/017_electimuss.png"
                    alt="Electimuss"
                  />
                </div>
              </div>
              <div className="col-lg-8 pl-45 md-pl-15">
                <p className="desc margin-0 pt-40 pb-15">
                  At Electimuss London, fragrance becomes an art form. Inspired
                  by the opulence and allure of Ancient Rome, they embark on a
                  journey to craft perfumes that embody unrivaled quality,
                  creativity, and individuality.
                </p>
                <p className="desc margin-0 pb-15">
                  Collaborating with the world's most talented perfumers,
                  including Julien Rasquinet, Christian Provenzano, John
                  Stephens, Marco Genovese, and Sofia Bardelli, they harness
                  their expertise to bring their olfactory visions to life.
                  Through their perfumes, they aim to empower individuals to
                  express their unique identities and elevate everyday moments
                  into extraordinary experiences.
                </p>
              </div>
            </div>
            <div className="row y-middle pt-120 pb-40 md-pt-80 md-pb-20">
              <div className="col-lg-6 md-mb-50">
                <div className="sec-title mb-60">
                  <span className="sub-text">About brand</span>
                  <h2 className="title pb-22">
                    Electimuss London <br />
                    To choose the best
                  </h2>
                  <div className="heading-border-line left-style"></div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <p className="desc margin-0 pb-15">
                      Introducing Electimuss London, where fragrance becomes an
                      art form. Inspired by the opulence and allure of Ancient
                      Rome, they have embarked on a journey to craft perfumes
                      that embody unrivaled quality, creativity, and
                      individuality.
                    </p>
                    <p className="desc margin-0 pb-15">
                      The Romans' unwavering passion for perfume and their
                      pursuit of the finest scents resonate deeply with
                      Electimuss London. They draw inspiration from their epic
                      stories and rituals, where fragrance infused every facet
                      of life, from celebrations to seduction. These vibrant
                      tales fuel their imaginations, serving as the wellspring
                      for their captivating fragrances.
                    </p>
                    <p className="desc margin-0 pb-15">
                      Electimuss London is a connoisseur of fragrance,
                      perpetually seeking the very best. Just as the Romans
                      scoured the Empire for exquisite oils and ingredients,
                      they blend rare and precious elements with meticulous
                      care. Their commitment to quality knows no bounds, with
                      their perfumes boasting 25% or 30% Pure Parfum/Extrait
                      concentration, resulting in decadently daring blends that
                      linger with exquisite longevity.
                    </p>
                    <p className="desc margin-0 pb-15">
                      Their perfumes are an invitation to indulge in intensity.
                      Each composition is a potent elixir of scents,
                      meticulously formulated for unrivaled projection and
                      endurance. They believe that luxury should be accessible,
                      which is why they combine exceptional quality with fair
                      pricing, allowing fragrance enthusiasts of all budgets to
                      experience the allure of their creations.
                    </p>
                    <p className="desc margin-0 pb-15">
                      Discover more about Electimuss London on their{" "}
                      <a
                        href="https://www.electimuss.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        website
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pl-50 md-pl-15">
                <div className="images-part">
                  <img
                    src="../assets/images/brands/electimuss/001.png"
                    alt="Electimuss"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About Section End --> */}

        {/* <!-- Products Section Start --> */}
        <div className="rs-team style7 blue-bg height-ctrl md-pb-40 md-pt-40">
          <div className="container">
            <div className="sec-title spotlight text-center mb-60">
              <span className="sub-text">In spotlight</span>
              <h2 className="title pb-22">Featured products</h2>
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
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-right-arrow'></i>",
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
              <div className="team-item">
                <div className="team-inner-wrap">
                  <div className="images-wrap">
                    <img
                      src="../assets/images/brands/electimuss/products/trajan.jpg"
                      alt="Electimuss Trajan"
                    />
                  </div>
                  <div className="team-content">
                    <h3 className="title-name">
                      <a href="#!">Trajan (100 ml)</a>
                    </h3>
                    <div className="team-title">Electimuss </div>
                    <div className="team-price">00.000,00 RSD</div>
                  </div>
                </div>
              </div>
              <div className="team-item">
                <div className="team-inner-wrap">
                  <div className="images-wrap">
                    <img
                      src="../assets/images/brands/electimuss/products/persephones-patchouli.jpg"
                      alt="Electimuss Persephone’s Patchouli"
                    />
                  </div>
                  <div className="team-content">
                    <h3 className="title-name">
                      <a href="#!">Persephone’s Patchouli (100 ml)</a>
                    </h3>
                    <div className="team-title">Electimuss </div>
                    <div className="team-price">00.000,00 RSD</div>
                  </div>
                </div>
              </div>
              <div className="team-item">
                <div className="team-inner-wrap">
                  <div className="images-wrap">
                    <img
                      src="../assets/images/brands/electimuss/products/imperium.jpg"
                      alt="Electimuss Imperium"
                    />
                  </div>
                  <div className="team-content">
                    <h3 className="title-name">
                      <a href="#!">Imperium (100 ml)</a>
                    </h3>
                    <div className="team-title">Electimuss </div>
                    <div className="team-price">00.000,00 RSD</div>
                  </div>
                </div>
              </div>
              <div className="team-item">
                <div className="team-inner-wrap">
                  <div className="images-wrap">
                    <img
                      src="../assets/images/brands/electimuss/products/vixere.jpg"
                      alt="Electimuss Vixere/"
                    />
                  </div>
                  <div className="team-content">
                    <h3 className="title-name">
                      <a href="#!">Vixere (100 ml)</a>
                    </h3>
                    <div className="team-title">Electimuss </div>
                    <div className="team-price">00.000,00 RSD</div>
                  </div>
                </div>
              </div>
              <div className="team-item">
                <div className="team-inner-wrap">
                  <div className="images-wrap">
                    <img
                      src="../assets/images/brands/electimuss/products/amber-aquilaria.jpg"
                      alt="Electimuss Amber Aquilaria"
                    />
                  </div>
                  <div className="team-content">
                    <h3 className="title-name">
                      <a href="#!">Amber Aquilaria (100 ml)</a>
                    </h3>
                    <div className="team-title">Electimuss </div>
                    <div className="team-price">00.000,00 RSD</div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        {/* <!-- Products Section End --> */}

        {/* <!-- Quote Section Start --> */}
        <div className="rs-team style2 blue-bg pt-100 pb-50 md-pt-75">
          <div className="container">
            <div className="sec-title text-center mb-60">
              <span className="sub-text">The Quote</span>
              <h2 className="title white-color pb-35">
                "Through the mists of time, Roman legends whisper of epicurean
                pleasures and extravagance, of ambition and seduction.
                Electimuss London is a niche luxury fragrance house inspired by
                the legends of love, power and glamour of Rome."
              </h2>
              <div className="heading-border-line"></div>
            </div>
          </div>
        </div>
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
