import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { t, i18n } = useTranslation();

  function sendEmail(e) {
    e.preventDefault();
    if (validateForm()) {
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
  }

  function validateForm() {
    const { name, email, phone, message } = formValues;
    const errors = {};

    // Name validation
    if (!name.trim()) {
      errors.name = t("errors.name");
    }

    // Email validation
    if (!email.trim()) {
      errors.email = t("errors.email");
    } else if (!isValidEmail(email)) {
      errors.email = t("errors.emailInvalid");
    }

    // Phone validation
    if (!phone.trim()) {
      errors.phone = t("errors.phone");
    } else if (!isValidPhone(phone)) {
      errors.phone = t("errors.phoneInvalid");
    }

    // Message validation
    if (!message.trim()) {
      errors.message = t("errors.message");
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  }

  function isValidEmail(email) {
    // Use a regular expression or any other validation logic to validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  function isValidPhone(phone) {
    // Use a regular expression or any other validation logic to validate phone number format
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phone);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  useEffect(() => {
    setFormErrors({
      name: "",
      email: "",
      phone: "",
      message: "",
    }); // Clear the form errors when the language changes
  }, [i18n.language]);

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
              value={formValues.name}
              onChange={handleInputChange}
              placeholder={t("home.contact.nameForm")}
            />
            {formErrors.name && (
              <div className="error-message">* {formErrors.name}</div>
            )}
          </div>
          <div className="col-sm-12 mb-6">
            <input
              className="from-control"
              type="text"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder={t("home.contact.emailForm")}
            />
            {formErrors.email && (
              <div className="error-message">* {formErrors.email}</div>
            )}
          </div>
          <div className="col-sm-12 mb-31">
            <input
              className="from-control"
              type="text"
              id="phone"
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              placeholder={t("home.contact.phoneForm")}
            />
            {formErrors.phone && (
              <div className="error-message">* {formErrors.phone}</div>
            )}
          </div>
          <div className="col-sm-12 mb-8">
            <textarea
              className="from-control"
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              placeholder={t("home.contact.messageForm")}
            ></textarea>
            {formErrors.message && (
              <div className="col d-flex justify-content-start align-items-center">
                <div className="error-message">* {formErrors.message}</div>
              </div>
            )}
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
        {loading ? (
          <div className="col d-flex justify-content-start align-items-center">
            <div className="spinner-grow spinner-grow-sm" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : success ? (
          <div className="col d-flex justify-content-start align-items-center">
            <i className="fa fa-check mr-5"></i>
            <p className="mb-0">Submitted successfully!</p>
          </div>
        ) : error ? (
          <div className="col d-flex justify-content-start align-items-center">
            <i className="fa fa-cancel mr-5"></i>
            <p className="mb-0">Error! Please try again</p>
          </div>
        ) : null}
      </div>
    </form>
  );
}
