import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";

export default function Header2({ header }) {
  const [language, setLanguage] = useState("sr");
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();

  const handleMenu = () => {
    setIsMenuOpen((prevMenu) => !prevMenu);
  };

  const handleMobileMenu = () => {
    window.document
      .getElementsByClassName("full-width-header")[0]
      .classList.toggle("nav-expanded");
  };

  useEffect(() => {
    const handleNavbar = () => {
      if (location.pathname.includes("story")) {
        setActive("story");
      } else if (location.pathname.includes("brands")) {
        setActive("brands");
      } else if (location.pathname.includes("news")) {
        setActive("news");
      } else if (location.pathname.includes("contact")) {
        setActive("contact");
      }
    };

    handleNavbar();
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    Cookie.set('language', language);
  }, [language]);

  return (
    <>
      {/* <!--Full width header Start--> */}
      <div className="full-width-header">
        {/* <!--Header Start--> */}
        <div className="offwrap" onClick={handleMobileMenu}></div>

        <header
          id="rs-header"
          className="rs-header header-style3 header-transparent"
        >
          {/* <!-- Menu Start --> */}
          <div
            className={
              header ? "menu-area menu-sticky sticky" : "menu-area menu-sticky"
            }
          >
            <div className="container">
              <div className="row-table">
                <div className="col-cell header-logo">
                  <div className="logo-area">
                    <Link to="/">
                      <img
                        className="normal-logo"
                        src="../assets/images/logo-light.svg"
                        alt="logo"
                      />
                      <img
                        className="sticky-logo"
                        src="../assets/images/logo-dark.svg"
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className={
                    isMenuOpen
                      ? "col-cell menu-responsive"
                      : "col-cell menu-responsive active__main__menu"
                  }
                >
                  <div className="rs-menu-area">
                    <div className="main-menu">
                      <nav className="rs-menu hidden-md">
                        <ul className="nav-menu">
                          <li>
                            <Link to="/">{t("header.home")}</Link>
                          </li>
                          <li
                            className={
                              active === "story" ? "current-menu-item" : ""
                            }
                          >
                            <Link to="/our-story">{t("header.story")}</Link>
                          </li>
                          <li
                            className={
                              active === "brands" ? "current-menu-item" : ""
                            }
                          >
                            <Link to="/brands">{t("header.brands")}</Link>
                          </li>
                          <li
                            className={
                              active === "news" ? "current-menu-item" : ""
                            }
                          >
                            <Link to="/news">{t("header.press")}</Link>
                          </li>
                          <li
                            className={
                              active === "contact" ? "current-menu-item" : ""
                            }
                          >
                            <Link to="/contact">{t("header.contact")}</Link>
                          </li>
                        </ul>
                        {/* <!-- //.nav-menu --> */}
                      </nav>
                    </div>
                    {/* <!-- //.main-menu --> */}
                  </div>
                </div>
                <div className="col-cell">
                  <div className="expand-btn-inner">
                    <div
                      id="rs_click__id"
                      className={
                        isMenuOpen
                          ? "rs_click_menu rs__open_hum"
                          : "rs_click_menu"
                      }
                      onClick={handleMenu}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="main-menu">
                      <nav className="rs-menu hidden-md">
                        <ul className="nav-menu language-menu">
                          <li
                            onClick={() => {
                              const newLanguage =
                                language === "sr" ? "en" : "sr";
                              setLanguage(newLanguage);
                              i18n.changeLanguage(newLanguage);
                            }}
                          >
                            <Link to="#" className="language-btn">
                              {t("header.language")}
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <ul>
                      <li className="humburger">
                        <a
                          id="nav-expander"
                          className="nav-expander bar"
                          href="#!"
                          onClick={handleMobileMenu}
                        >
                          <div className="bar">
                            <span className="dot1"></span>
                            <span className="dot2"></span>
                            <span className="dot3"></span>
                            <span className="dot4"></span>
                            <span className="dot5"></span>
                            <span className="dot6"></span>
                            <span className="dot7"></span>
                            <span className="dot8"></span>
                            <span className="dot9"></span>
                          </div>
                        </a>
                      </li>

                      <div className="language-menu-mobile">
                        <div
                          onClick={() => {
                            const newLanguage = language === "sr" ? "en" : "sr";
                            setLanguage(newLanguage);
                            i18n.changeLanguage(newLanguage);
                          }}
                        >
                          <Link to="#" className="language-btn-mobile">
                            {t("header.language")}
                          </Link>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Menu End --> */}

          {/* <!-- Canvas Mobile Menu start --> */}
          <nav
            className="right_menu_togle mobile-navbar-menu"
            id="mobile-navbar-menu"
          >
            <div className="close-btn">
              <a
                id="nav-close2"
                className="nav-close"
                href="#!"
                onClick={handleMobileMenu}
              >
                <div className="line">
                  <span className="line1"></span>
                  <span className="line2"></span>
                </div>
              </a>
            </div>
            <div className="canvas-logo">
              <Link to="/">
                <img src="../assets/images/logo-footer-light.svg" alt="DURŌ" />
              </Link>
            </div>
            <ul className="nav-menu">
              <li onClick={handleMobileMenu}>
                <Link to="/">{t("header.home")}</Link>
              </li>
              <li onClick={handleMobileMenu}>
                <Link to="/our-story">{t("header.story")}</Link>
              </li>
              <li onClick={handleMobileMenu}>
                <Link to="/brands">{t("header.brands")}</Link>
              </li>
              <li onClick={handleMobileMenu}>
                <Link to="/news">{t("header.press")}</Link>
              </li>
              <li onClick={handleMobileMenu}>
                <Link to="/contact">{t("header.contact")}</Link>
              </li>
            </ul>
            {/* <!-- //.nav-menu -->  */}
            <div className="canvas-contact">
              <div className="address-area">
                <div className="address-list">
                  <div className="info-icon">
                    <i className="flaticon-location"></i>
                  </div>
                  <div className="info-content">
                    <h4 className="title">{t("header.address")}</h4>
                    <em>
                      TC "Galerija" (entrance 3.)
                      <br />
                      Bulevar Vudroa Vilsona 14
                      <br />
                      11000 Belgrade
                      <br />
                      Serbia
                    </em>
                  </div>
                </div>
                <div className="address-list">
                  <div className="info-icon">
                    <i className="flaticon-email"></i>
                  </div>
                  <div className="info-content">
                    <h4 className="title">{t("header.email")}</h4>
                    <em>
                      <a href="mailto:info@parfimerija-duro.rs">
                        info@parfimerija-duro.rs
                      </a>
                    </em>
                  </div>
                </div>
                <div className="address-list">
                  <div className="info-icon">
                    <i className="flaticon-call"></i>
                  </div>
                  <div className="info-content">
                    <h4 className="title">{t("header.phone")}</h4>
                    <em>
                      <a href="tel:+381 60 5561303">+381 60 5561303</a>
                    </em>
                  </div>
                </div>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/duro.cologne">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/DuroCologne">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/duro.cologne">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* <!-- Canvas Menu end -->    */}
        </header>
        {/* <!--Header End--> */}
      </div>
      {/* <!--Full width header End--> */}
    </>
  );
}
