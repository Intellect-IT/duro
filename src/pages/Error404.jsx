import React from "react";
import Newsletter from "../components/Newsletter";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Error404() {
    const { t } = useTranslation();
  return (
    <div className="main-content">
      {/* <!-- Brands Section Start --> */}
      <div
        id="rs-warning"
        className="rs-warning blue-bg style1 home3-sponsor-style height-ctrl pt-130 md-pb-70 md-pt-70"
      >
        <div className="container">
          <div className="row gap-lg-2 py-5">
            <div className="col-auto">
              <p className="mb-0 error-type">404</p>
            </div>
            <div className="col-auto">
              <div className="row">
                <div className="col-auto icon-warning mb-1">
                  <i className="fa fa-warning"></i>
                </div>
                <div className="col px-0"><p className="mb-1 error-text">{t('errors.404.title')}</p></div>
              </div>
              <div className="row"><p className="mb-0 error-desc">{t('errors.404.desc1')}</p></div>
              <div className="row"><p className="mb-0 error-desc">{t('errors.404.desc2a')} <Link to='/'>{t('errors.404.desc2b')}</Link>.</p></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Brands Section End -->  */}

      {/* <!-- Newsletter section start --> */}
      <div className="rs-newsletter blue-bg style1 pt-90 md-pt-60 mb--110">
        <Newsletter />
      </div>

      {/* <!-- Newsletter section end --> */}
    </div>
  );
}
