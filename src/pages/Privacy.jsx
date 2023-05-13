import React, { useEffect } from "react";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";

export default function Privacy({ setHeader }) {
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
	}, [setHeader]);

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
							{t("privacy.title")}
								<span className="watermark">
								{t("privacy.title")}
								</span>
							</h1>
						</div>
					</div>
				</div>
				{/* <!-- Breadcrumbs End --> */}

				{/* <!-- Faq Section Start --> */}
				<div className="rs-faq gray-bg4 pt-120 md-pt-80">
					<div className="container">
						{/* <!-- Privacy policy Section Start --> */}
						<div className="rs-privacy-policy pt-10 md-pt-80">
							<div className="privacy-wrap pb-130 md-pb-90">
								<div className="sec-title mb-50">
									<h2 className="title title2">
									{t("privacy.terms.title")}
									</h2>
								</div>
								<div className="privacy-content">
									<p>
									{t("privacy.terms.list.main")}
									</p>
									<ul className="check-list">
										<li>
										{t("privacy.terms.list.li1")}
										</li>
										<li>
										{t("privacy.terms.list.li2")}
										</li>
										<li>
										{t("privacy.terms.list.li3")}
										</li>
										<li>
										{t("privacy.terms.list.li4")}
										</li>
									</ul>
								</div>
							</div>
							<div className="privacy-wrap pb-100 md-pb-90">
								<div className="sec-title mb-50">
									<h2 className="title title2">
									{t("privacy.policy.privacyPolicy.title")}
									</h2>
								</div>
								<div className="privacy-content">
									<p>
									{t("privacy.policy.privacyPolicy.li1")}
									</p>
									<p>
									{t("privacy.policy.privacyPolicy.contact")}{" "}
										<a href="mailto:info@parfimerija-duro.rs">
											info@parfimerija-duro.rs
										</a>
										.
									</p>
								</div>
							</div>
							<div className="privacy-wrap pb-50 md-pb-50">
								<div className="sec-title mb-50">
									<h2 className="title title2">
									{t("privacy.policy.cookiePolicy.title")}
									</h2>
								</div>
								<div className="privacy-content">
									<p>
									{t("privacy.policy.cookiePolicy.p1")}
									</p>
									<p>
									{t("privacy.policy.cookiePolicy.p2")}
									</p>
									<p>
									{t("privacy.policy.cookiePolicy.p3.main")}
									</p>
									<ul className="check-list">
										<li>
										{t("privacy.policy.cookiePolicy.p3.li1")}
										</li>
										<li>
										{t("privacy.policy.cookiePolicy.p3.li2")}
										</li>
										<li>
										{t("privacy.policy.cookiePolicy.p3.li3")}
										</li>
									</ul>
									<p>
									{t("privacy.policy.cookiePolicy.contact")}{" "}
										<a href="mailto:info@parfimerija-duro.rs">
											info@parfimerija-duro.rs
										</a>
										.
									</p>
								</div>
							</div>
						</div>
						{/* <!-- Privacy policy Section End -->    */}
					</div>
					{/* <!-- Newsletter section start --> */}
					<div className="rs-newsletter style1 pt-90 md-pt-60 mb--110">
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
				{/* <!-- Faq Section End --> */}
			</div>
			{/* <!-- Main content End --> */}
		</>
	);
}
