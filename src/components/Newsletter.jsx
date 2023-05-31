import React, { useState, useEffect } from "react";
import jsonp from "jsonp";
import { useTranslation } from "react-i18next";

export default function Newsletter() {
  const [loading, setLoading] = useState(false);
  const [sub, setSub] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const { t, i18n } = useTranslation();

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
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [sub]);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Clear the error message when the email is modified
  };

  return (
    <div className="container">
      <div className="newsletter-wrap">
        <div className="row y-middle">
          <div className="col-lg-6 md-mb-30">
            <div className="content-wrap">
              <div className="icon-img">
                <img src="../assets/images/mail.png" alt="images" />
              </div>
              <h3 className="newsletter-title">{t("newsletter")}</h3>
            </div>
          </div>
          <div className="col-lg-6">
            <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                name="email"
                placeholder={t("yourEmail")}
                required=""
                value={email}
                onChange={handleChange}
              />
              {emailError && <div className="error-message">* {emailError}</div>}
              <em className="paper-plane">
                <input type="submit" value="Subscribe" />
              </em>
            </form>
          </div>
          <div className="col-6"></div>
          {loading ? (<div className="col-6 d-flex justify-content-center align-items-center">
            <div className="spinner-grow spinner-grow-sm" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <p className="mb-0">{t("errors.submitting")}</p>
          </div>) : sub ? (
            <div className="col-6 d-flex justify-content-center align-items-center">
              <i className="fa fa-check"></i>
              <p className="mb-0">{t("errors.thanks")}</p>
            </div>
          ) : (null)}
        </div>
      </div>
    </div>
  );
}
