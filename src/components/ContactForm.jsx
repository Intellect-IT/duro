import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_4y0j4io",
        "template_9zdv18s",
        e.target,
        "GNux7OUNqs8Gw8KjF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setError(true);
        }
      );
  }

  useEffect(() => {
    const successTimeout = setTimeout(() => {
      setSuccess(false);
    }, 3000);

    const errorTimeout = setTimeout(() => {
      setError(false);
    }, 3000);

    return () => {
      clearTimeout(successTimeout);
      clearTimeout(errorTimeout);
    };
  }, [success, error]);

  return (
    <form id="contact-form" onSubmit={sendEmail}>
      <fieldset>
        <div className="row">
          <div className="col-sm-12 mb-6">
            <input
              className="from-control"
              type="text"
              id="name"
              name="name"
              placeholder={t("home.contact.nameForm")}
              required=""
            />
          </div>
          <div className="col-sm-12 mb-6">
            <input
              className="from-control"
              type="text"
              id="email"
              name="email"
              placeholder={t("home.contact.emailForm")}
              required=""
            />
          </div>
          <div className="col-sm-12 mb-31">
            <input
              className="from-control"
              type="text"
              id="phone"
              name="phone"
              placeholder={t("home.contact.phoneForm")}
              required=""
            />
          </div>
          <div className="col-sm-12 mb-8">
            <textarea
              className="from-control"
              id="message"
              name="message"
              placeholder={t("home.contact.messageForm")}
              required=""
            ></textarea>
          </div>
        </div>
        <div className="btn-part">
          <div className="form-group mt-7">
            <div className="submit-btn">
              <input
                className="submit"
                type="submit"
                value={t("home.contact.submit")}
              />
            </div>
          </div>
        </div>
      </fieldset>
      <div style={{ fontSize: "1rem", color: "#bf994c" }}>
        {loading ? (<div className="col d-flex justify-content-start align-items-center">
          <div className="spinner-grow spinner-grow-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow spinner-grow-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow spinner-grow-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>) : success ?
        (<div className="col d-flex justify-content-start align-items-center">
          <i className="fa fa-check mr-5"></i>
          <p className="mb-0">Submitted successfully!</p>
        </div>) : error ?
        (<div className="col d-flex justify-content-start align-items-center">
          <i className="fa fa-cancel mr-5"></i>
          <p className="mb-0">Error! Please try again</p>
        </div>) : (null)}
      </div>
    </form>
  );
}
