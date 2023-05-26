import React, { useEffect, useState } from "react";
import $ from "jquery";
import Loader from "../components/Loader";
import SwiperDesktop from "../components/SwiperDesktop";
import SwiperMobile from "../components/SwiperMobile";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const [viewScrollUp, setViewScrollUp] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 150) {
        setViewScrollUp(true);
      } else {
        setViewScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        {/* <!-- meta tag --> */}
        <meta charset="utf-8" />
        <title>{t("titles.home")} | Niche parfimerija</title>

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
      <div className="home-blue">
        {/* <!-- Main content Start --> */}
        <div className="main-content">
          {screenSize.width > 991 ? (
            // desktop swiper
            <SwiperDesktop />
          ) : (
            // mobile swiper
            <SwiperMobile />
          )}
        </div>
        {/* <!-- Main content End --> */}

        {/* <!-- start scrollUp  --> */}
        <div
          id="scrollUp"
          className={viewScrollUp ? "orange-color show" : "orange-color"}
          onClick={() =>
            $("html,body").animate(
              {
                scrollTop: 0,
              },
              500
            )
          }
        >
          <i className="fa fa-angle-up"></i>
        </div>
        {/* <!-- End scrollUp  --> */}

        {/* <!-- Search Modal Start --> */}
        <div className="modal fade search-modal" id="searchModal" tabIndex="-1">
          <button type="button" className="close" data-bs-dismiss="modal">
            <span className="flaticon-cross"></span>
          </button>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="search-block clearfix">
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Search Here..."
                      type="text"
                    />
                    <button type="submit" value="Search">
                      <i className="flaticon-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Search Modal End --> */}
      </div>
    </>
  );
}
