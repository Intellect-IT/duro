import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Footer2() {
    const { t } = useTranslation();
  return (
    <>
    {/* <!-- Footer Start --> */}
        <footer id="rs-footer" className="rs-footer style1">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 md-mb-10">
                            <div className="footer-logo mb-40">
                                <Link to="/"><img src="./assets/images/logo-footer-light.svg" title="DURŌ" alt="DURŌ"/></Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12 pl-45 md-pl-15">
                                    <h3 className="footer-title">{t("footer.footerMain.address")}</h3>
                                    <div className="textwidget">TC "Galerija" (entrance 3.)<br/>
                                    Bulevar Vudroa Vilsona 14<br/>
                                    11000 Belgrade<br/>
                                    Serbia</div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 md-mb-10 pl-70 md-pl-15">
                                    <h3 className="footer-title">{t("footer.footerMain.getInTouch")}</h3>
                                    <div className="textwidget">
                                        <a href="mailto:info@parfimerija-duro.rs">info@parfimerija-duro.rs</a><br/>
                                        <a href="tel:+381 60 5561303">+381 60 5561303</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 pl-115 md-pl-15">
                                    <h3 className="footer-title">{t("footer.footerMain.follow")}</h3>
                                    <ul className="footer-social">  
                                        <li> 
                                            <a href="https://www.facebook.com/duro.cologne"><i className="fa-brands fa-facebook"></i></a>
                                        </li>
                                        <li> 
                                            <a href="https://www.twitter.com/DuroCologne"><i className="fa-brands fa-twitter"></i></a> 
                                        </li>
                                        <li> 
                                            <a href="https://www.instagram.com/duro.cologne"><i className="fa-brands fa-instagram"></i></a>
                                        </li>
										<li>
											<a href="https://www.youtube.com/watch?v=XZI0CdEx4vc"><i className="fa-brands fa-youtube"></i></a>
										</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">                    
                    <div className="row y-middle">
                        <div className="col-lg-6 md-mb-10 text-lg-end text-center order-last">
                            <ul className="copy-right-menu">
                                <li><Link to="/">{t("footer.footerMain.home")}</Link></li>
                                <li><Link to="/privacy">{t("footer.footerMain.privacyPolicy")}</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="copyright text-lg-start text-center ">
                            <p>{t("footer.footerHome.heartBefore")}{" "}<i className="fa fa-heart"></i>{" "}{t("footer.footerHome.heartAfter")}<a href="https://intellect.se">Intellect</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- Footer End --> */}
    </>
  )
}
