import React, { useEffect } from "react";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Newsletter from "../components/Newsletter";

export default function Press({ setHeader }) {
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
          Press &amp; Media | DURŌ Niche perfumery | Niche parfimerija
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
        <div className="rs-breadcrumbs img3">
          <div className="container">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                {t("home.news.main")}
                <span className="watermark">{t("home.news.main")}</span>
              </h1>
            </div>
          </div>
        </div>
        {/* <!-- Breadcrumbs End --> */}

        {/* <!-- Blog Section Start --> */}
        <div className="rs-inner-blog gray-bg4 pt-120 md-pt-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 md-mb-50">
                <div className="row">
                  <div className="col-lg-12 mb-50">
                    <div className="blog-item">
                      <div className="blog-img">
                        <a href="/news/opening-hours-easter-holiday-2023">
                          <img src="./assets/images/blog/4.jpg" alt="" />
                        </a>
                        <ul className="post-categories">
                          <li>
                            <a href="/news/opening-hours-easter-holiday-2023">{t("home.news.news")}</a>
                          </li>
                        </ul>
                      </div>
                      <div className="blog-content">
                        <h3 className="blog-title">
                          <a href="/news/opening-hours-easter-holiday-2023">{t("home.news.news1.title")}</a>
                        </h3>
                        <div className="blog-meta">
                          <ul className="btm-cate">
                            <li>
                              <div className="blog-date">
                                <i className="fa fa-calendar-check-o"></i> April
                                13, 2023
                              </div>
                            </li>
                            <li>
                              <div className="author">
                                <i className="fa fa-user-o"></i>
                                Lav Š.
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="blog-desc">
                          {t("home.news.news1.desc")}
                        </div>
                        <div className="blog-button">
                          <a href="/news/opening-hours-easter-holiday-2023">
                            <span className="btn-txt">{t("home.read")}</span>
                            <i className="fa fa fa-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-50">
                    <div className="blog-item">
                      <div className="blog-img">
                        <a href="/news/milorad-batta-mihailovitch-exhibition-duro-niche-perfumery">
                          <img src="./assets/images/blog/2.jpg" alt="" />
                        </a>
                        <ul className="post-categories">
                          <li>
                            <a href="/news/milorad-batta-mihailovitch-exhibition-duro-niche-perfumery">{t("home.news.news")}</a>
                          </li>
                        </ul>
                      </div>
                      <div className="blog-content">
                        <h3 className="blog-title">
                          <a href="/news/milorad-batta-mihailovitch-exhibition-duro-niche-perfumery">{t("home.news.news2.title")}</a>
                        </h3>
                        <div className="blog-meta">
                          <ul className="btm-cate">
                            <li>
                              <div className="blog-date">
                                <i className="fa fa-calendar-check-o"></i> April
                                11, 2023
                              </div>
                            </li>
                            <li>
                              <div className="author">
                                <i className="fa fa-user-o"></i>
                                Lav Š.
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="blog-desc">
                          {t("home.news.news2.desc")}
                        </div>
                        <div className="blog-button">
                          <a href="/news/milorad-batta-mihailovitch-exhibition-duro-niche-perfumery">
                            <span className="btn-txt">{t("home.read")}</span>
                            <i className="fa fa fa-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-50">
                    <div className="blog-item">
                      <div className="blog-img">
                        <a href="/news/grand-opening-event-duro-niche-perfumery">
                          <img src="./assets/images/blog/3.jpg" alt="" />
                        </a>
                        <ul className="post-categories">
                          <li>
                            <a href="/news/grand-opening-event-duro-niche-perfumery">{t("home.news.news")}</a>
                          </li>
                        </ul>
                      </div>
                      <div className="blog-content">
                        <h3 className="blog-title">
                          <a href="/news/grand-opening-event-duro-niche-perfumery">{t("home.news.news3.title")}</a>
                        </h3>
                        <div className="blog-meta">
                          <ul className="btm-cate">
                            <li>
                              <div className="blog-date">
                                <i className="fa fa-calendar-check-o"></i> April
                                10, 2023
                              </div>
                            </li>
                            <li>
                              <div className="author">
                                <i className="fa fa-user-o"></i> Lav Š.
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="blog-desc">
                          {t("home.news.news3.desc")}
                        </div>
                        <div className="blog-button">
                          <a href="/news/grand-opening-event-duro-niche-perfumery">
                            <span className="btn-txt">{t("home.read")}</span>
                            <i className="fa fa fa-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-50">
                    <div className="blog-item">
                      <div className="blog-img">
                        <a href="/news/grand-opening-duro-niche-perfumery-press-release">
                          <img src="./assets/images/blog/1.jpg" alt="" />
                        </a>
                        <ul className="post-categories">
                          <li>
                            <a href="/news/grand-opening-duro-niche-perfumery-press-release">{t("home.news.news")}</a>
                          </li>
                        </ul>
                      </div>
                      <div className="blog-content">
                        <h3 className="blog-title">
                          <a href="/news/grand-opening-duro-niche-perfumery-press-release">{t("home.news.news4.title")}</a>
                        </h3>
                        <div className="blog-meta">
                          <ul className="btm-cate">
                            <li>
                              <div className="blog-date">
                                <i className="fa fa-calendar-check-o"></i> April
                                5, 2023
                              </div>
                            </li>
                            <li>
                              <div className="author">
                                <i className="fa fa-user-o"></i> Lav Š.
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="blog-desc">
                          {t("home.news.news4.desc")}
                        </div>
                        <div className="blog-button">
                          <a href="/news/grand-opening-duro-niche-perfumery-press-release">
                            <span className="btn-txt">{t("home.read")}</span>
                            <i className="fa fa fa-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 pl-35 md-pl-15">
                <div className="widget-area">
                  {/* <!--<div className="search-widget mb-50">
                                    <div className="search-wrap">
                                        <input type="search" placeholder="Searching..." name="s" className="search-input" value="">
                                        <button type="submit" value="Search"><i className="flaticon-search"></i></button>
                                    </div>
                                </div>--> */}
                  <div className="recent-posts mb-50">
                    <div className="widget-title">
                      <h3 className="title">{t("home.news.recent")}</h3>
                    </div>
                    <div className="recent-post-widget no-border">
                      <div className="post-img">
                        <a href="/news/opening-hours-easter-holiday-2023">
                          <img src="./assets/images/blog/1.jpg" alt="" />
                        </a>
                      </div>
                      <div className="post-desc">
                        <a href="/news/opening-hours-easter-holiday-2023">{t("home.news.news4.title")}</a>
                        <span className="date-post">
                          {" "}
                          <i className="fa fa-calendar"></i> April 13, 2023{" "}
                        </span>
                      </div>
                    </div>
                    <div className="recent-post-widget">
                      <div className="post-img">
                        <a href="/news/milorad-batta-mihailovitch-exhibition-duro-niche-perfumery">
                          <img src="./assets/images/blog/2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="post-desc">
                        <a href="/news/milorad-batta-mihailovitch-exhibition-duro-niche-perfumery"> {t("home.news.news2.title")}</a>
                        <span className="date-post">
                          {" "}
                          <i className="fa fa-calendar"></i> April 11, 2023{" "}
                        </span>
                      </div>
                    </div>
                    <div className="recent-post-widget">
                      <div className="post-img">
                        <a href="/news/milorad-bata-mihajlovic-izlozba-duro-parfimerija">
                          <img src="./assets/images/blog/3.jpg" alt="" />
                        </a>
                      </div>
                      <div className="post-desc">
                        <a href="/news/milorad-bata-mihajlovic-izlozba-duro-parfimerija">{t("home.news.news3.title")}</a>
                        <span className="date-post">
                          {" "}
                          <i className="fa fa-calendar"></i> April 10, 2023{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <!--<div className="categories mb-45">
                                    <div className="widget-title">
                                        <h3 className="title">Categories</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#!">Branding</a></li>
                                        <li><a href="#!">Digital Marketing</a></li>
                                        <li><a href="#!">E-commerce</a></li>
                                        <li><a href="#!">Graphic Design</a></li>
                                    </ul>
                                </div>--> */}
                  <div className="follow-us">
                    <div className="widget-title mb-40">
                      <h3 className="title">{t("home.news.follow")}</h3>
                    </div>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/duro.cologne">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/DuroCologne">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/duro.cologne">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/watch?v=XZI0CdEx4vc">
                          <i className="fa fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Newsletter section start --> */}
          <div className="rs-newsletter style1 pt-120 md-pt-80 mb--110">
            <Newsletter/>
          </div>
          {/* <!-- Newsletter section end --> */}
        </div>
        {/* <!-- Blog Section End -->  */}
      </div>
      {/* <!-- Main content End --> */}
    </>
  );
}
