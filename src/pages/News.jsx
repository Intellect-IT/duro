import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import newsData from "../data/news.json";
import parse from "html-react-parser";
import NewsWidget from "../components/NewsWidget";

export default function News({ setHeader }) {
  const { slug } = useParams();
  const { t } = useTranslation();
  const [currentBlog, setCurrentBlog] = useState(newsData[slug]);

  useEffect(() => {
    setCurrentBlog(newsData[slug])
  }, [slug])

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
          {t(currentBlog.title)} - {t("header.press.pageTitle")} -  DURŌ Niche perfumery - Niche parfimerija
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

        {/* <!-- Template Favicon & Icons --> */}
        <link
          rel="icon"
          href="../assets/images/favicon/favicon.ico"
          sizes="any"
        />
        <link
          rel="icon"
          href="../assets/images/favicon/icon.svg"
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          href="../assets/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="manifest"
          href="../assets/images/favicon/manifest.webmanifest"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="../assets/images/fav.png"
        />

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
                  <div className="col-lg-12 md-mb-50">
                    <div className="blog-details">
                      <div className="bs-img mb-35">
                        <a href="#!">
                          <img src={currentBlog.img} alt="" />
                        </a>
                      </div>
                      <div className="blog-full">
                        <ul className="single-post-meta">
                          <li>
                            <span className="p-date">
                              <i className="fa fa-calendar-check-o"></i>{" "}
                              {currentBlog.date}{" "}
                            </span>
                          </li>
                          <li>
                            <span className="p-date">
                              {" "}
                              <i className="fa fa-user-o"></i> {t("news.admin")}{" "}
                            </span>
                          </li>
                          {/*<li className="Post-cate">
                            <div className="tag-line">
                              <i className="fa fa-book"></i>
                              <a href="#!">{t("news.strategy")}</a>
                            </div>
                          </li>
                          <li className="post-comment">
                            {" "}
                            <i className="fa fa-comments-o"></i> 1
                          </li>*/}
                        </ul>
                        {/*<p>{t("news.desc")}</p>
                        <blockquote>
                          <p className="margin-0">
                            {t("news.quote")}
                            <br />
                            <cite>Robert Calibo</cite>
                          </p>
                        </blockquote>*/}
                        <h3>{t(newsData[slug].title)}</h3>
                        <div>{parse(t(currentBlog.content))}</div>
                        {/* <div className="bs-img mb-30">
                          <a href="#!">
                            <img src="../assets/images/blog/1.jpg" alt="" />
                          </a>
                        </div>
                        <p>{t("news.tips.desc2")}</p> */}

                        {/*<div className="tag-info">
                          Tags:
                          <a href="#!">{t("news.tips.tag1")}</a>
                          <a href="#!">{t("news.tips.tag2")}</a>
                          <a href="#!">{t("news.tips.tag3")}</a>
                          <a href="#!">{t("news.tips.tag4")}</a>
                      </div>*/}
                        {/* <h3 className="comment-title">
                          {t("news.comments.title")}
                        </h3>
                        <div className="comment-body">
                          <div className="comment-author">
                            <img
                              src="../assets/images/avatar.png"
                              alt="images"
                            />
                          </div>
                          <div className="comment-text">
                            <a href="#!">{t("news.comments.comment1.title")}</a>
                            <br />
                            <a className="timedate" href="#!">
                              <time dateTime="2021-05-26T08:43:43+00:00">
                                May 26, 2021 at 8:43 am
                              </time>
                            </a>
                            <p>{t("news.comments.comment1.desc")}</p>
                            <div className="reply-btn">
                              <a href="#!">{t("news.comments.reply")}</a>
                            </div>
                          </div>
                        </div>
                        <div className="comment-body">
                          <div className="comment-author">
                            <img
                              src="../assets/images/avatar.png"
                              alt="images"
                            />
                          </div>
                          <div className="comment-text">
                            <a href="#!">{t("news.comments.comment2.title")}</a>
                            <br />
                            <a className="timedate" href="#!">
                              <time dateTime="2021-05-26T08:43:43+00:00">
                                May 26, 2021 at 8:43 am
                              </time>
                            </a>
                            <p>{t("news.comments.comment2.desc")}</p>
                            <div className="reply-btn">
                              <a href="#!">{t("news.comments.reply")}</a>
                            </div>
                          </div>
                        </div>
                        <div className="comment-body">
                          <div className="comment-author">
                            <img
                              src="../assets/images/avatar.png"
                              alt="images"
                            />
                          </div>
                          <div className="comment-text">
                            <a href="#!">{t("news.comments.comment3.title")}</a>
                            <br />
                            <a className="timedate" href="#!">
                              <time dateTime="2021-05-26T08:43:43+00:00">
                                May 26, 2021 at 8:43 am
                              </time>
                            </a>
                            <p>{t("news.comments.comment3.title")}</p>
                            <div className="reply-btn">
                              <a href="#!">{t("news.comments.reply")}</a>
                            </div>
                          </div>
                        </div> */}
                        {/*<h3 className="comment-title">
                          {t("news.comments.leaveReply")}
                        </h3>
                        <p>{t("news.comments.note")}</p>

                        <div className="comment-note">
                          <div id="form-messages"></div>
                          <form
                            id="contact-form"
                            method="post"
                            action="mailer.php"
                          >
                            <fieldset>
                              <div className="row">
                                <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                                  <input
                                    className="from-control"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name*"
                                    required=""
                                  />
                                </div>
                                <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                                  <input
                                    className="from-control"
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="E-Mail*"
                                    required=""
                                  />
                                </div>
                                <div className="col-lg-12 mb-30">
                                  <textarea
                                    className="from-control"
                                    id="message"
                                    name="message"
                                    placeholder="Your message Here"
                                    required=""
                                  ></textarea>
                                </div>
                              </div>
                              <div className="form-group mb-0">
                                <div className="post-btn">
                                  <input
                                    className="submit-post"
                                    type="submit"
                                    value="Post Comment"
                                  />
                                </div>
                              </div>
                            </fieldset>
                          </form>
                        </div>*/}
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
                  <NewsWidget />
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
            <Newsletter />
          </div>
          {/* <!-- Newsletter section end --> */}
        </div>
        {/* <!-- Blog Section End -->  */}
      </div>
      {/* <!-- Main content End --> */}
    </>
  );
}
