import React, { useState } from "react";
import jsonp from "jsonp";
import { useTranslation } from "react-i18next";

export default function Newsletter() {
  // const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  const handleSubmit = e => {
    e.preventDefault();
    // setLoading(true);
    const url = 'https://gmail.us13.list-manage.com/subscribe/post-json?u=f5e02948469133d4eb19aa26c&amp;id=8d67ad26d9&amp;f_id=0080e6e2f0';
    jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (_, { msg }) => {
      // setLoading(false);
    });
  };

  const handleChange = e => {
    setEmail(e.target.value)
  }

  return (
    <div className="container">
      <div className="newsletter-wrap">
        <div className="row y-middle">
          <div className="col-lg-6 md-mb-30">
            <div className="content-wrap">
              <div className="icon-img">
                <img src="./assets/images/mail.png" alt="images" />
              </div>
              <h3 className="newsletter-title">{t("newsletter")}</h3>
            </div>
          </div>
          <div className="col-lg-6">
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder={t("yourEmail")}
                required=""
                value={email}
                onChange={handleChange}
              />
              <em className="paper-plane">
                <input type="submit" value="Subscribe" />
              </em>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
