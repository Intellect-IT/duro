import React, { useEffect } from "react";
import $ from "jquery"
import magnificPopup from "magnific-popup"
import { Swiper, SwiperSlide } from "swiper/react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Mousewheel } from "swiper";
import { useTranslation } from "react-i18next";

const SwiperDesktop = () => {
	const { t, i18n } = useTranslation();

	useEffect(() => {
		$(".popup-videos, .popup-border").magnificPopup({
			disableOn: 10,
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
		});
	}, []);
	return (
		<div className="swiper-container">
			<Swiper
				direction={"vertical"}
				pagination={{
					el: ".swiper-pagination",
					clickable: true,
					renderBullet: function (index, className) {
						return (
							'<span class="' +
							className +
							'">' +
							(index + 1) +
							"</span>"
						);
					},
				}}
				slidesPerView={1}
				spaceBetween={0}
				speed={700}
				mousewheel={true}
				modules={[Pagination, Mousewheel]}
				className="swiper-wrapper"
			>
				<SwiperSlide className="swiper-slide">
					{/* <!-- Banner Section Start --> */}
					<div className="rs-banner banner-home-style3 height-ctrl">
						<div className="container">
							<div className="content-wrap">
								<span className="sub-title">
									"Galerija" Belgrade
								</span>
								<h1 className="title">{t("home.title")}</h1>
								<h2 className="title-small">{t("home.titleSmall")}</h2>
								<ul className="banner-bottom">
									{/* <!--<li>
                                            <a className="readon btn-text ticket text-right" href="contact.html">
                                                <span>Shop now</span>
                                            </a>
                                        </li>--> */}
									<li>
										<div className="rs-videos">
											<div className="animate-border white-color-style">
												<a
													className="popup-border"
													href="https://youtu.be/XZI0CdEx4vc"
												>
													<i className="fa fa-play"></i>
												</a>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- Banner Section End --> */}
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					{/* <!-- About Section Start --> */}
					<div
						id="rs-about"
						className="rs-about style height-ctrl md-pb-80 md-pt-80"
					>
						<div className="container">
							<div className="row y-middle">
								<div className="col-lg-6 md-mb-70">
									<div className="about-img">
										<img
											src="./assets/images/about/about-2.png"
											alt="Our Story"
										/>
									</div>
								</div>
								<div className="col-lg-6 pl-50 md-pl-15">
									<div className="sec-title">
										<h2 className="title title2 title3 pb-30">
										{t("home.story.title")}
										</h2>
										<p className="desc-small pb-25">
											{t("home.story.desc1")}{" "}
										</p>
										<p className="desc-small">
										{t("home.story.desc2")}
										</p>
										<div className="btn-part mt-40">
											<a
												className="readon btn-text ticket"
												href="#"
											>
												<span>{t("home.explore")}</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- About Section End --> */}
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					{/* <!-- Boutique Section Start --> */}
					<div
						id="rs-about"
						className="rs-about style height-ctrl md-pb-80 md-pt-80"
					>
						<div className="container">
							<div className="row y-middle">
								<div className="col-lg-6 pl-50 md-pl-15">
									<div className="sec-title">
										<h2 className="title title2 title3 pb-30">
											{t("home.boutique.title")}
										</h2>
										<p className="desc-small pb-25">
										{t("home.boutique.desc1")}{" "}
										</p>
										<p className="desc-small">
										{t("home.boutique.desc2")}
										</p>
										<div className="btn-part mt-40">
											<a
												className="readon btn-text ticket"
												href="#"
											>
												<span>{t("home.read")}</span>
											</a>
										</div>
									</div>
								</div>
								<div className="col-lg-6 md-mb-70">
									<div className="about-img">
										<img
											src="./assets/images/about/about-4.png"
											alt="Our Story"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- About Section End --> */}
				</SwiperSlide>

				<SwiperSlide className="swiper-slide">
					{/* <!-- Team Section Start --> */}
					<div className="rs-team style7 height-ctrl md-pb-70 md-pt-70">
						<div className="container">
							<div className="sec-title text-center mb-60">
								<h2 className="title title2 title3 text-middle">
								{t("home.featured.title")}
								</h2>
							</div>
							<OwlCarousel
								className="rs-carousel owl-carousel"
								loop={true}
								items={3}
								margin={30}
								autoplay={true}
								autoplayHoverPause={true}
								autoplayTimeout={5000}
								smartSpeed={800}
								dots={true}
								nav={false}
								navSpeed={false}
								center={false}
								navText={[
									"<i class='flaticon-left-arrow'></i>",
									"<i class='flaticon-right-arrow'></i>",
								]}
								responsive={{
									0: {
										items: 1,
										nav: false,
										dots: true,
										center: false,
									},
									768: {
										items: 2,
										nav: false,
										dots: true,
										center: false,
									},
									992: {
										items: 2,
										nav: false,
										dots: true,
										center: false,
									},
									1200: {
										items: 3,
										nav: false,
										dots: true,
										center: false,
									},
								}}
							>
								<div className="team-item">
									<div className="team-inner-wrap">
										<div className="images-wrap">
											<img
												src="./assets/images/products/1.jpg"
												alt="Ganymede"
											/>
										</div>
										<div className="team-content">
											<h3 className="title-name">
												<a href="#">Ganymede (30 ml)</a>
											</h3>
											<div className="team-title">
												Marc-Antoine Barrois{" "}
											</div>
											<div className="team-price">
												13.000,00 RSD
											</div>
										</div>
									</div>
								</div>
								<div className="team-item">
									<div className="team-inner-wrap">
										<div className="images-wrap">
											<img
												src="./assets/images/products/2.jpg"
												alt="Chypre Palatin"
											/>
										</div>
										<div className="team-content">
											<h3 className="title-name">
												<a href="#">
													Chypre Palatin (75 ml)
												</a>
											</h3>
											<div className="team-title">
												Parfums MDCI
											</div>
											<div className="team-price">
												48.000,00 RSD
											</div>
										</div>
									</div>
								</div>
								<div className="team-item">
									<div className="team-inner-wrap">
										<div className="images-wrap">
											<img
												src="./assets/images/products/3.jpg"
												alt="Blanche Bête"
											/>
										</div>
										<div className="team-content">
											<h3 className="title-name">
												<a href="#">
													Blanche Bête (100 ml)
												</a>
											</h3>
											<div className="team-title">
												Liquides Imaginaires
											</div>
											<div className="team-price">
												33.000,00 RSD
											</div>
										</div>
									</div>
								</div>
								<div className="team-item">
									<div className="team-inner-wrap">
										<div className="images-wrap">
											<img
												src="./assets/images/products/4.jpg"
												alt="Incident Diplomatique"
											/>
										</div>
										<div className="team-content">
											<h3 className="title-name">
												<a href="#">
													Incident Diplomatique (100
													ml)
												</a>
											</h3>
											<div className="team-title">
												Jovoy
											</div>
											<div className="team-price">
												18.000,00 RSD
											</div>
										</div>
									</div>
								</div>
								<div className="team-item">
									<div className="team-inner-wrap">
										<div className="images-wrap">
											<img
												src="./assets/images/products/5.jpg"
												alt="Team"
											/>
										</div>
										<div className="team-content">
											<h3 className="title-name">
												<a href="#">Gozo (30 ml)</a>
											</h3>
											<div className="team-title">
												Jeroboam
											</div>
											<div className="team-price">
												14.000,00 RSD
											</div>
										</div>
									</div>
								</div>
							</OwlCarousel>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					{/* <!-- Our Brands Section Start --> */}
					<div
						id="rs-our-sponsor"
						className="rs-our-sponsor style1 home3-sponsor-style height-ctrl md-pb-70 md-pt-70"
					>
						<div className="container">
							<div className="sec-title text-center mb-60">
								<h2 className="title title2 title3 text-middle">
								{t("home.brands.title")}
								</h2>
							</div>
							<div className="row">
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div className="logo-img">
												<a
													title="Marc-Antoine Barrois"
													href="#"
												>
													<img
														src="./assets/images/event/brands/001_marc-antoine_barrois.png"
														alt="Marc-Antoine Barrois"
														title="Marc-Antoine Barrois"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Jovoy"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/002_jovoy.png"
														alt="Jovoy"
														title="Jovoy"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Jeroboam"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/003_jeroboam.png"
														alt="Jeroboam"
														title="Jeroboam"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Morph"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/004_morph.png"
														alt="Morph"
														title="Morph"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 md-mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="MDCI"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/005_mdci.png"
														alt="MDCI"
														title="MDCI"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 md-mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Puredistance"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/006_puredistance.png"
														alt="Puredistance"
														title="Puredistance"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="HDP"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/007_hdp.png"
														title="HDP"
														alt="HDP"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Calaj"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/008_calaj.png"
														title="Calaj"
														alt="Calaj"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Indult"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/009_indult.png"
														title="Indult"
														alt="Indult"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Thameen"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/010_thameen.png"
														alt="Thameen"
														title="Thameen"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Theodoros Kalotinis"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/011_theodoros.png"
														title="Theodoros Kalotinis"
														alt="Theodoros Kalotinis"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Fragrance du Bois"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/012_fdb.png"
														title="Fragrance du Bois"
														alt="Fragrance du Bois"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div className="Ormonde Jayne">
												<a href="#">
													<img
														src="./assets/images/event/brands/013_ormonde.png"
														title="Ormonde Jayne"
														alt="Ormonde Jayne"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Paradis des Sens"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/014_paradis.png"
														title="Paradis des Sens"
														alt="Paradis des Sens"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Wesker"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/015_wesker.png"
														title="Wesker"
														alt="Wesker"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Anima Mundi"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/016_anima_mundi.png"
														title="Anima Mundi"
														alt="Anima Mundi"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Electimuss"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/017_electimuss.png"
														title="Electimuss"
														alt="Electimuss"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Acque di Italia"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/018_aque_di_italia.png"
														title="Acque di Italia"
														alt="Acque di Italia"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Portus Cale"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/019_portus_cale.png"
														title="Portus Cale"
														alt="Portus Cale"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Veronique Gabai"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/020_veronique_gabai.png"
														title="Veronique Gabai"
														alt="Veronique Gabai"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Onyrico"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/021_onyrico.png"
														title="Onyrico"
														alt="Onyrico"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Affinessence"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/022_affinessence.png"
														title="Affinessence"
														alt="Affinessence"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Castelbel"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/023_castelbel.png"
														title="Castelbel"
														alt="Castelbel"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-2 col-md-6 col-6 mb-20">
									<div className="logo-item">
										<div className="grid-figure">
											<div
												title="Liquides Imaginaries"
												className="logo-img"
											>
												<a href="#">
													<img
														src="./assets/images/event/brands/024_liquides_imaginaries.png"
														title="Liquides Imaginaries"
														alt="Liquides Imaginaries"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Our Brands Section Start --> */}
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					{/* <!-- News Section Start --> */}
					<div
						id="rs-blog"
						className="rs-blog blog-main-home home3-blog-style height-ctrl md-pb-70 md-pt-70"
					>
						<div className="container">
							<div className="sec-title text-center mb-60 md-mb-40">
								<h2 className="title title2 title3 text-middle">
								{t("home.news.title")}
								</h2>
							</div>
							<OwlCarousel
								className="rs-carousel owl-carousel"
								loop={true}
								items={3}
								margin={30}
								autoplay={true}
								autoplayHoverPause={true}
								autoplayTimeout={5000}
								smartSpeed={800}
								dots={true}
								nav={false}
								navSpeed={false}
								center={false}
								navText={[
									"<i class='flaticon-left-arrow'></i>",
									"<i class='flaticon-right-arrow'></i>",
								]}
								responsive={{
									0: {
										items: 1,
										nav: false,
										dots: true,
										center: false,
									},
									768: {
										items: 2,
										nav: false,
										dots: true,
										center: false,
									},
									992: {
										items: 2,
										nav: false,
										dots: true,
										center: false,
									},
									1200: {
										items: 3,
										nav: false,
										dots: true,
										center: false,
									},
								}}
							>
								<div className="blog-item">
									<div className="image-wrap">
										<a href="#">
											<img
												src="./assets/images/blog/4.jpg"
												alt="Blog"
											/>
										</a>
										<div className="blog-date">
											<span className="day">13</span>
											<span className="month">Apr</span>
										</div>
									</div>
									<div className="blog-content">
										<ul className="blog-meta">
											<li className="admin">
												<i className="fa fa-user-o"></i>
												Lav Š.
											</li>
											<li className="cat-list">
												<a href="/news">
													{" "}
													<i className="fa fa-folder"></i>
													{t("home.news.news")}
												</a>
											</li>
										</ul>
										<h3 className="blog-title">
											<a href="#">
											{t("home.news.news1.title")}
											</a>
										</h3>
										<div className="blog-button">
											<a href="#">
												<span className="btn-txt">
												{t("home.read")}
												</span>
												<i className="fa fa fa-chevron-right"></i>
											</a>
										</div>
									</div>
								</div>
								<div className="blog-item">
									<div className="image-wrap">
										<a href="#">
											<img
												src="./assets/images/blog/2.jpg"
												alt="Blog"
											/>
										</a>
										<div className="blog-date">
											<span className="day">11</span>
											<span className="month">Apr</span>
										</div>
									</div>
									<div className="blog-content">
										<ul className="blog-meta">
											<li className="admin">
												<i className="fa fa-user-o"></i>
												Lav Š.
											</li>
											<li className="cat-list">
												<a href="/news">
													{" "}
													<i className="fa fa-folder"></i>
													{t("home.news.news")}
												</a>
											</li>
										</ul>
										<h3 className="blog-title">
											<a href="#">
											{t("home.news.news2.title")}
											</a>
										</h3>
										<div className="blog-button">
											<a href="#">
												<span className="btn-txt">
												{t("home.read")}
												</span>
												<i className="fa fa fa-chevron-right"></i>
											</a>
										</div>
									</div>
								</div>
								<div className="blog-item">
									<div className="image-wrap">
										<a href="#">
											<img
												src="./assets/images/blog/3.jpg"
												alt="Blog"
											/>
										</a>
										<div className="blog-date">
											<span className="day">10</span>
											<span className="month">Apr</span>
										</div>
									</div>
									<div className="blog-content">
										<ul className="blog-meta">
											<li className="admin">
												<i className="fa fa-user-o"></i>
												Lav Š.
											</li>
											<li className="cat-list">
												<a href="/news">
													{" "}
													<i className="fa fa-folder"></i>
													{t("home.news.news")}
												</a>
											</li>
										</ul>
										<h3 className="blog-title">
											<a href="#">
											{t("home.news.news3.title")}
											</a>
										</h3>
										<div className="blog-button">
											<a href="#">
												<span className="btn-txt">
												{t("home.read")}
												</span>
												<i className="fa fa fa-chevron-right"></i>
											</a>
										</div>
									</div>
								</div>
								<div className="blog-item">
									<div className="image-wrap">
										<a href="#">
											<img
												src="./assets/images/blog/1.jpg"
												alt="Blog"
											/>
										</a>
										<div className="blog-date">
											<span className="day">05</span>
											<span className="month">Apr</span>
										</div>
									</div>
									<div className="blog-content">
										<ul className="blog-meta">
											<li className="admin">
												<i className="fa fa-user-o"></i>
												Lav Š.
											</li>
											<li className="cat-list">
												<a href="/news">
													{" "}
													<i className="fa fa-folder"></i>
													{t("home.news.news")}
												</a>
											</li>
										</ul>
										<h3 className="blog-title">
											<a href="#">
											{t("home.news.news4.title")}
											</a>
										</h3>
										<div className="blog-button">
											<a href="#">
												<span className="btn-txt">
												{t("home.read")}
												</span>
												<i className="fa fa fa-chevron-right"></i>
											</a>
										</div>
									</div>
								</div>
							</OwlCarousel>
						</div>
					</div>
					{/* <!-- Blog Section End --> */}
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					{/* <!-- Contact Section Start --> */}
					<div className="rs-contact home-style1 home-style3 contact-home-style3 height-ctrl md-pb-70 md-pt-70">
						<div className="container">
							<div className="sec-title text-center mb-60 md-mb-40">
								<h2 className="title title2 title3 text-middle">
									{t("home.contact.title")}
								</h2>
							</div>
							<div className="row y-middle">
								<div className="col-lg-8 pr-130 md-pr-15">
									<div className="contact-img md-mb-50">
										<img
											src="./assets/images/contact/contact-2.png"
											alt="Get in touch with us"
										/>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="widget-item mb-20">
										<div className="address-item">
											<div className="address-icon">
												<img
													src="./assets/images/contact/icons/1.png"
													alt="Images"
												/>
											</div>
											<div className="address-text">
												<h3 className="title">
												{t("home.contact.visit")}
												</h3>
												<p className="services-txt">
													TC "Galerija" (entrance 3.)
													<br />
													Bulevar Vudroa Vilsona 14
													<br />
													11000 Belgrade
													<br />
													Serbia
												</p>
											</div>
										</div>
									</div>
									<div className="widget-item mb-20">
										<div className="address-item">
											<div className="address-icon">
												<img
													src="./assets/images/contact/icons/2.png"
													alt="Email us"
												/>
											</div>
											<div className="address-text">
												<h3 className="title">
												{t("home.contact.email")}
												</h3>
												<p className="services-txt">
													<a href="mailto:info@parfimerija-duro.rs">
														info@parfimerija-duro.rs
													</a>
													<br />
												</p>
											</div>
										</div>
									</div>
									<div className="widget-item">
										<div className="address-item">
											<div className="address-icon">
												<img
													src="./assets/images/contact/icons/3.png"
													alt="Call us"
												/>
											</div>
											<div className="address-text">
												<h3 className="title">
												{t("home.contact.call")}
												</h3>
												<p className="services-txt">
													<a href="tel:+381 60 5561303">
														+381 60 5561303
													</a>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Contact Section End -->   */}
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					{/* <!-- Contact Section Start --> */}
					<div className="rs-contact home-style1 home-style3 contact-home-style4 height-ctrl md-pb-50 md-pt-40">
						<div className="container">
							<div className="sec-title text-center mb-60 md-mb-40">
								<h2 className="title title2 title3 text-middle">
								{t("home.contact.contact")}
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

							<div className="copyright text-center pt-25">
                                    <p>{t("footer.footerHome.heartBefore")}{" "}<i className="fa fa-heart"></i>{" "}{t("footer.footerHome.heartAfter")}<a href="https://intellect.se">Intellect</a>.</p>
                                </div>
								<div className="footer-logo text-center pt-10"><img src="./assets/images/duro_sign_light.svg" alt="DURŌ"/></div>
						</div>
					</div>
					{/* <!-- Contact Section End -->  */}
				</SwiperSlide>
			</Swiper>
			<div className="swiper-pagination"></div>
		</div>
	);
};

export default SwiperDesktop;