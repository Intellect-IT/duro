import React, { useEffect, useState } from "react";
import $ from "jquery";
import Loader from "../components/Loader";
import SwiperDesktop from "../components/SwiperDesktop";
import SwiperMobile from "../components/SwiperMobile";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Modal from "react-bootstrap/Modal";
import jsonp from "jsonp";
import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [viewScrollUp, setViewScrollUp] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [loading, setLoading] = useState(false);
  const [sub, setSub] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    Cookies.set("modalClosed", true, { expires: 10 });
  };

  useEffect(() => {
    const cookieExists = Cookies.get("modalClosed");
    if (cookieExists) {
      setShow(false);
    } else {
      const modalTimeout = setTimeout(() => {
        setShow(true);
      }, 4000);
      return () => clearTimeout(modalTimeout);
    }
  }, []);

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

  function isValidEmail(email) {
    // Use a regular expression or any other validation logic to validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate email
    if (!email.trim()) {
      setLoading(false);
      setEmailError(t("errors.email"));
    } else if (!isValidEmail(email)) {
      setLoading(false);
      setEmailError(t("errors.emailInvalid"));
    } else {
      const url =
        "https://gmail.us13.list-manage.com/subscribe/post-json?u=f5e02948469133d4eb19aa26c&amp;id=8d67ad26d9&amp;f_id=0080e6e2f0";
      jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, { msg }) => {
        setLoading(false);
        setSub(true);
      });
    }
  };

  useEffect(() => {
    setEmailError(""); // Clear the error message when the language changes
  }, [i18n.language]);

  useEffect(() => {
    if (sub) {
      const timeoutId = setTimeout(() => {
        setSub(false);
        setShow(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [sub]);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Clear the error message when the email is modified
  };

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
        {/* <div className="modal fade search-modal" id="searchModal" tabIndex="-1">
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
        </div> */}
        {/* <!-- Search Modal End --> */}

        <Modal
          show={show}
          onHide={handleClose}
          centered
          className="subscribe-modal"
        >
          <Modal.Body className="p-0">
            <div className="p-0 modal__content">
              <div className="col-5 px-0 d-none d-md-block">
                <img
                  src="./assets/images/modal/main.jpg"
                  alt="niche perfumery"
                  className="modal__img"
                />
              </div>
              <div className="col-md-7 modal__text-content py-4 px-md-5 px-4">
                <div className="modal__close-btn" onClick={handleClose}>
                <div className="close-container">
                  <div className="leftright"></div>
                  <div className="rightleft"></div>
                  {/* <label className="close-label">close</label> */}
                </div>
                </div>
                <h3 className="modal__heading mt-4">
                  {t("modal.subscribe.title")}
                </h3>
                <div className="modal__description">
                  {t("modal.subscribe.desc")}
                </div>
                <div className="modal_form">
                  <div className="newsletter-wrap">
                    <form
                      className="newsletter-form"
                      onSubmit={handleSubmit}
                      noValidate
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder={t("yourEmail")}
                        required=""
                        value={email}
                        onChange={handleChange}
                      />
                      {emailError && (
                        <div className="error-message">* {emailError}</div>
                      )}
                      <em className="paper-plane">
                        <input type="submit" value="Subscribe" />
                      </em>
                    </form>
                    <div className="col-6"></div>
                    {loading ? (
                      <div className="col-6 d-flex justify-content-center align-items-center">
                        <div
                          className="spinner-grow spinner-grow-sm"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                        <p className="mb-0">{t("errors.submitting")}</p>
                      </div>
                    ) : sub ? (
                      <div className="col-6 d-flex justify-content-center align-items-center">
                        <i className="fa fa-check"></i>
                        <p className="mb-0">{t("errors.thanks")}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="modal__privacy">
                  {t("modal.subscribe.notice")}{" "}
                  <a href="/privacy">{t("modal.subscribe.policy")} »</a>
                </div>
                <div className="modal__cancel mt-4">
                  <a href="#!" onClick={handleClose}>
                    {t("modal.subscribe.decline")}
                  </a>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <CookieConsent
        // debug
        buttonText={t("modal.cookies.accept")}
        buttonClasses="accept-cookies-btn"
        containerClasses="cookie-consent-container"
        style={{ background: "#bf994c", alignItems: "center", gap: "1em"}}
      >
        <p className="m-0">
        {t("modal.cookies.consent")}
        </p>
        <p className="m-0">
        {t("modal.cookies.notice")} <a href="/privacy" className="cookie-policy-btn">{t("modal.cookies.policy")} »</a>
        </p>
      </CookieConsent>
    </>
  );
}
