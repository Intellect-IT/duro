import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";

export default function Contact({ setHeader }) {
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
	}, []);

	return (
		<>
			<Loader />
			{/* <!-- Main content Start --> */}
			<div className="main-content">
				{/* <!-- Breadcrumbs Start --> */}
				<div className="rs-breadcrumbs img3">
					<div className="container">
						<div className="breadcrumbs-inner">
							<h1 className="page-title">
							{t("home.contact.contact")}
								<span className="watermark">{t("home.contact.contact")}</span>
							</h1>
						</div>
					</div>
				</div>
				{/* <!-- Breadcrumbs End --> */}

				{/* <!-- Contact Section Start --> */}
				<div className="rs-contact contact-page gray-bg4 home-style1 home-style3 contact-home-style4 height-ctrl pt-130 md-pb-50 md-pt-40">
					<div className="container">
						<div className="sec-title text-center mb-60 md-mb-40">
							<h2 className="title title2 title3 text-middle">
							{t("home.contact.title")}
							</h2>
						</div>
						{/* <!-- Contact Section Start --> */}
						<div className="rs-contact">
							<div className="row y-middle">
								<div className="col-lg-6 pr-40 md-pr-15 md-mb-50">
									<div className="contact-map">
										<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11323.815743977078!2d20.4463451!3d44.8021274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a71158f3b75d9%3A0x3cdfdea1cf3307be!2sDUR%C5%8C%20%7C%20Niche%20perfumery!5e0!3m2!1sen!2srs!4v1681389080409!5m2!1sen!2srs"></iframe>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="contact-wrap">
										<div id="form-messages"></div>
										<form
											id="contact-form"
											method="post"
											action="mailer.php"
										>
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
										</form>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- Contact Section End --> */}
					</div>
				</div>
				{/* <!-- Contact Section End -->  */}
				{/* <!-- Newsletter section start --> */}
				<div className="rs-newsletter gray-bg4 style1 pt-90 md-pt-60 mb--110">
					<div className="container">
						<div className="newsletter-wrap">
							<div className="row y-middle">
								<div className="col-lg-6 md-mb-30">
									<div className="content-wrap">
										<div className="icon-img">
											<img
												src="./assets/images/mail.png"
												alt="images"
											/>
										</div>
										<h3 className="newsletter-title">
										{t("newsletter")}
										</h3>
									</div>
								</div>
								<div className="col-lg-6">
									<form className="newsletter-form">
										<input
											type="email"
											name="email"
											placeholder={t("yourEmail")}
											required=""
										/>
										<em className="paper-plane">
											<input
												type="submit"
												value="Subscribe"
											/>
										</em>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Newsletter section end --> */}
			</div>
			{/* <!-- Main content End --> */}
		</>
	);
}
