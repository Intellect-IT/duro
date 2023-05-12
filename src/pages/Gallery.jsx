import React, { useEffect } from "react";
import $ from "jquery";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";

export default function Gallery({ setHeader }) {
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

	useEffect(() => {
		$(".image-popup").magnificPopup({
			type: "image",
			callbacks: {
				beforeOpen: function () {
					this.st.image.markup = this.st.image.markup.replace(
						"mfp-figure",
						"mfp-figure animated zoomInDown"
					);
				},
			},
			gallery: {
				enabled: true,
			},
		});
	}, []);

	return (
		<>
			<Loader />
			{/* <!-- Main content Start --> */}
			<div className="main-content">
				{/* <!-- Breadcrumbs Start --> */}
				<div className="rs-breadcrumbs img1">
					<div className="container">
						<div className="breadcrumbs-inner">
							<h1 className="page-title">
							{t("gallery")}
								<span className="watermark">{t("gallery")}</span>
							</h1>
						</div>
					</div>
				</div>
				{/* <!-- Breadcrumbs End --> */}

				{/* <!-- Gallery Start --> */}
				<div className="rs-gallery style1 mb--160">
					<div className="row no-gutters">
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="gallery-item">
								<div className="gallery-icon">
									<a
										className="image-popup"
										href="./assets/images/gallery/1.jpg"
									>
										<img
											src="./assets/images/gallery/1.jpg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="gallery-item">
								<div className="gallery-icon">
									<a
										className="image-popup"
										href="./assets/images/gallery/2.jpg"
									>
										<img
											src="./assets/images/gallery/2.jpg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="gallery-item">
								<div className="gallery-icon">
									<a
										className="image-popup"
										href="./assets/images/gallery/3.jpg"
									>
										<img
											src="./assets/images/gallery/3.jpg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="gallery-item">
								<div className="gallery-icon">
									<a
										className="image-popup"
										href="./assets/images/gallery/4.jpg"
									>
										<img
											src="./assets/images/gallery/4.jpg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="gallery-item">
								<div className="gallery-icon">
									<a
										className="image-popup"
										href="./assets/images/gallery/5.jpg"
									>
										<img
											src="./assets/images/gallery/5.jpg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="gallery-item">
								<div className="gallery-icon">
									<a
										className="image-popup"
										href="./assets/images/gallery/6.jpg"
									>
										<img
											src="./assets/images/gallery/6.jpg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="gallery-item">
								<div className="gallery-icon">
									<a
										className="image-popup"
										href="./assets/images/gallery/7.jpg"
									>
										<img
											src="./assets/images/gallery/7.jpg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="gallery-item">
								<div className="gallery-icon">
									<a
										className="image-popup"
										href="./assets/images/gallery/8.jpg"
									>
										<img
											src="./assets/images/gallery/8.jpg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="gallery-item">
								<div className="gallery-icon">
									<a
										className="image-popup"
										href="./assets/images/gallery/9.jpg"
									>
										<img
											src="./assets/images/gallery/9.jpg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="gallery-item">
								<div className="gallery-icon">
									<a
										className="image-popup"
										href="./assets/images/gallery/10.jpg"
									>
										<img
											src="./assets/images/gallery/10.jpg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="gallery-item">
								<div className="gallery-icon">
									<a
										className="image-popup"
										href="./assets/images/gallery/11.jpg"
									>
										<img
											src="./assets/images/gallery/11.jpg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="gallery-item">
								<div className="gallery-icon">
									<a
										className="image-popup"
										href="./assets/images/gallery/12.jpg"
									>
										<img
											src="./assets/images/gallery/12.jpg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="gallery-item">
								<div className="gallery-icon">
									<a
										className="image-popup"
										href="./assets/images/gallery/13.jpg"
									>
										<img
											src="./assets/images/gallery/13.jpg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="gallery-item">
								<div className="gallery-icon">
									<a
										className="image-popup"
										href="./assets/images/gallery/14.jpg"
									>
										<img
											src="./assets/images/gallery/14.jpg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="gallery-item">
								<div className="gallery-icon">
									<a
										className="image-popup"
										href="./assets/images/gallery/15.jpg"
									>
										<img
											src="./assets/images/gallery/15.jpg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="gallery-item">
								<div className="gallery-icon">
									<a
										className="image-popup"
										href="./assets/images/gallery/16.jpg"
									>
										<img
											src="./assets/images/gallery/16.jpg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Gallery End --> */}

				{/* <!-- Newsletter section start --> */}
				<div className="rs-newsletter blue-bg style1 pt-90 md-pt-60 mb--110">
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
